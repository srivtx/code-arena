// System Design Judge - Core Engine with Drag-Drop & Moveable Nodes
// React Flow-style graph with predefined slots

class SystemDesignJudge {
    constructor() {
        this.currentProblem = null;
        this.filledSlots = new Map(); // slotId -> componentId
        this.nodePositions = new Map(); // nodeId -> {x, y}
        this.timer = null;
        this.timeRemaining = 0;
        this.isPlaying = false;
        this.draggingNode = null;
        this.dragOffset = { x: 0, y: 0 };

        // Audio
        this.audioContext = null;

        this.init();
    }

    init() {
        this.setupAudio();
        this.populateProblemSelector();
        this.setupEventListeners();
        this.loadProblem(PROBLEMS[0].id);
    }

    // ==========================================
    // AUDIO SYSTEM
    // ==========================================
    setupAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('Web Audio not supported');
        }
    }

    playSound(type) {
        if (!this.audioContext) return;
        if (this.audioContext.state === 'suspended') this.audioContext.resume();

        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.connect(gain);
        gain.connect(this.audioContext.destination);

        if (type === 'success') {
            osc.frequency.setValueAtTime(523, this.audioContext.currentTime);
            osc.frequency.setValueAtTime(659, this.audioContext.currentTime + 0.1);
            osc.frequency.setValueAtTime(784, this.audioContext.currentTime + 0.2);
            gain.gain.setValueAtTime(0.3, this.audioContext.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.4);
            osc.start(); osc.stop(this.audioContext.currentTime + 0.4);
        } else if (type === 'error') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(200, this.audioContext.currentTime);
            osc.frequency.setValueAtTime(150, this.audioContext.currentTime + 0.1);
            gain.gain.setValueAtTime(0.2, this.audioContext.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
            osc.start(); osc.stop(this.audioContext.currentTime + 0.2);
        } else if (type === 'win') {
            [523, 659, 784, 1047].forEach((freq, i) => {
                const o = this.audioContext.createOscillator();
                const g = this.audioContext.createGain();
                o.connect(g); g.connect(this.audioContext.destination);
                o.frequency.setValueAtTime(freq, this.audioContext.currentTime + i * 0.15);
                g.gain.setValueAtTime(0.3, this.audioContext.currentTime + i * 0.15);
                g.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + i * 0.15 + 0.3);
                o.start(this.audioContext.currentTime + i * 0.15);
                o.stop(this.audioContext.currentTime + i * 0.15 + 0.3);
            });
        }
    }

    // ==========================================
    // EVENT LISTENERS
    // ==========================================
    setupEventListeners() {
        // Problem selector
        document.getElementById('problemSelect').addEventListener('change', e => {
            this.loadProblem(e.target.value);
        });

        // Buttons
        document.getElementById('resetBtn').addEventListener('click', () => this.resetProblem());
        document.getElementById('checkBtn').addEventListener('click', () => this.checkDesign());
        document.getElementById('startBtn')?.addEventListener('click', () => this.startDesigning());

        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });

        // Canvas mouse events for node dragging
        const canvas = document.getElementById('pathCanvas');
        canvas.addEventListener('mousemove', e => this.onCanvasMouseMove(e));
        canvas.addEventListener('mouseup', () => this.onCanvasMouseUp());
        canvas.addEventListener('mouseleave', () => this.onCanvasMouseUp());

        // Drag over for drop zones
        canvas.addEventListener('dragover', e => e.preventDefault());
        canvas.addEventListener('drop', e => this.onCanvasDrop(e));
    }

    // ==========================================
    // DRAG HELPERS
    // ==========================================
    // (Note: dragging logic is primarily handled by startNodeDrag/onCanvasMouseMove/onCanvasMouseUp)
    // We don't need top-level handleMouseMove/Up unless for panning which is being removed.
    // So we can just remove these methods or leave empty helpers if strict mode requires them, 
    // but better to just remove the infinite canvas methods.

    // ==========================================
    // PROBLEM MANAGEMENT
    // ==========================================
    populateProblemSelector() {
        const select = document.getElementById('problemSelect');
        select.innerHTML = '';

        const grouped = {};
        PROBLEMS.forEach(p => {
            if (!grouped[p.category]) grouped[p.category] = [];
            grouped[p.category].push(p);
        });

        Object.entries(grouped).forEach(([catId, problems]) => {
            const cat = CATEGORIES.find(c => c.id === catId);
            const optgroup = document.createElement('optgroup');
            optgroup.label = `${cat?.icon || ''} ${cat?.name || catId}`;
            problems.forEach(p => {
                const opt = document.createElement('option');
                opt.value = p.id;
                opt.textContent = `${p.isFree ? '🆓 ' : ''}${p.title}`;
                optgroup.appendChild(opt);
            });
            select.appendChild(optgroup);
        });
    }

    loadProblem(problemId) {
        this.currentProblem = PROBLEMS.find(p => p.id === problemId);
        if (!this.currentProblem) return;

        this.filledSlots.clear();
        this.nodePositions.clear();
        this.timeRemaining = this.currentProblem.timeLimit;
        this.isPlaying = false;

        if (this.timer) { clearInterval(this.timer); this.timer = null; }

        // Initialize node positions from problem data
        this.currentProblem.path.nodes.forEach(n => {
            this.nodePositions.set(n.id, { x: n.x, y: n.y });
        });

        this.renderProblemInfo();
        this.renderCanvas();
        this.renderToolbox();
        this.updateTimer();
        this.showIntro();
    }

    renderProblemInfo() {
        document.getElementById('problemTitle').textContent = this.currentProblem.title;
        document.getElementById('problemDescription').textContent = this.currentProblem.description;

        const list = document.getElementById('requirementsList');
        list.innerHTML = this.currentProblem.requirements.map(r => `
            <div class="requirement" data-req="${r.id}">
                <div class="requirement-icon">○</div>
                <div class="requirement-text">${r.text}</div>
            </div>
        `).join('');
    }

    // ==========================================
    // CANVAS RENDERING
    // ==========================================
    renderCanvas() {
        const canvas = document.getElementById('pathCanvas');
        const svg = document.getElementById('connectionsSvg');

        // Clear
        canvas.querySelectorAll('.graph-node').forEach(n => n.remove());
        svg.innerHTML = `<defs>
            <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.6)"/>
            </marker>
        </defs>`;

        // Render edges first (behind nodes)
        this.renderEdges(svg);

        // Render nodes
        this.currentProblem.path.nodes.forEach(node => {
            this.renderNode(canvas, node);
        });
    }

    renderEdges(svg) {
        const path = this.currentProblem.path;

        path.edges.forEach(edge => {
            const fromPos = this.nodePositions.get(edge.from);
            const toPos = this.nodePositions.get(edge.to);
            if (!fromPos || !toPos) return;

            // Node dimensions (match CSS: 120x90)
            const nodeW = 120, nodeH = 90;

            // Enforce Right-to-Left flow for smoother tree-like look
            // Source (Right Center) -> Target (Left Center)
            // Offset +/- 0px to align flush with the node edge since ports are removed
            const x1 = fromPos.x + nodeW;
            const y1 = fromPos.y + nodeH / 2;
            const x2 = toPos.x;
            const y2 = toPos.y + nodeH / 2;

            // Smooth Bezier curve (S-shape)
            // Control points at 70% of the horizontal distance for "Ultra Smooth" look
            const dx = Math.abs(x2 - x1);
            // Dynamic curvature: keep 0.7 ratio but reduce min clamp for very close nodes
            const curvature = Math.max(dx * 0.7, dx < 100 ? 40 : 80);

            const cx1 = x1 + curvature;
            const cy1 = y1;
            const cx2 = x2 - curvature;
            const cy2 = y2;

            const d = `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;

            // Note: Connector circles removed to avoid "double dots" visual artifact
            // as the nodes themselves have CSS-based ports.

            const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathEl.setAttribute('d', d);
            pathEl.setAttribute('class', 'edge-line');
            svg.appendChild(pathEl);

            // ANIMATED PACKET (Data Flow)
            const particle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            particle.setAttribute('r', '3');
            particle.setAttribute('class', 'flow-particle');

            const anim = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
            anim.setAttribute('dur', '2s');
            anim.setAttribute('repeatCount', 'indefinite');
            anim.setAttribute('path', d);
            anim.setAttribute('rotate', 'auto');
            anim.setAttribute('keyPoints', '0;1');
            anim.setAttribute('keyTimes', '0;1');
            // Adding a small calcMode linear to ensure constant speed feel if segments were uneven, 
            // but for bezier it's fine. 
            anim.setAttribute('calcMode', 'linear');

            particle.appendChild(anim);
            svg.appendChild(particle);

            // Label positioned at curve midpoint
            if (edge.label) {
                // Calculate midpoint of bezier curve
                const t = 0.5;
                const mt = 1 - t;
                const labelX = mt * mt * mt * x1 + 3 * mt * mt * t * cx1 + 3 * mt * t * t * cx2 + t * t * t * x2;
                const labelY = mt * mt * mt * y1 + 3 * mt * mt * t * cy1 + 3 * mt * t * t * cy2 + t * t * t * y2;

                const textWidth = edge.label.length * 5 + 14;
                const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                rect.setAttribute('x', labelX - textWidth / 2);
                rect.setAttribute('y', labelY - 9);
                rect.setAttribute('width', textWidth);
                rect.setAttribute('height', 16);
                rect.setAttribute('rx', 8);
                rect.setAttribute('class', 'edge-label-bg green');
                svg.appendChild(rect);

                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                text.setAttribute('x', labelX);
                text.setAttribute('y', labelY + 3);
                text.setAttribute('class', 'edge-label');
                text.textContent = edge.label;
                svg.appendChild(text);
            }
        });
    }

    renderNode(container, node) {
        const pos = this.nodePositions.get(node.id);
        const el = document.createElement('div');
        el.className = 'graph-node';
        el.dataset.nodeId = node.id;
        el.style.left = `${pos.x}px`;
        el.style.top = `${pos.y}px`;

        if (node.type === 'filled') {
            const comp = COMPONENTS[node.component];
            el.classList.add('filled');
            el.dataset.comp = node.component; // For CSS color styling
            el.innerHTML = `
                <div class="node-icon">${comp?.icon || '?'}</div>
                <div class="node-name">${node.label || comp?.name || 'Unknown'}</div>
            `;
        } else if (node.type === 'slot') {
            const filled = this.filledSlots.get(node.id);
            if (filled) {
                const comp = COMPONENTS[filled];
                el.classList.add('filled', 'slot-filled');
                el.dataset.comp = filled; // For CSS color styling
                el.innerHTML = `
                    <div class="node-icon">${comp?.icon || '?'}</div>
                    <div class="node-name">${comp?.name || 'Unknown'}</div>
                    <div class="check-badge">✓</div>
                    <button class="remove-btn" onmousedown="event.stopPropagation()" onclick="judge.removeFromSlot('${node.id}')">✕</button>
                `;
            } else {
                el.classList.add('empty-slot');
                el.innerHTML = `
                    <div class="slot-plus">+</div>
                    <div class="slot-label">${node.label || 'CLICK TO ADD'}</div>
                `;
                // Drop zone (for receiving components from toolbox)
                el.addEventListener('dragover', e => {
                    e.preventDefault(); // Allow drop
                    el.classList.add('drop-hover');
                });
                el.addEventListener('dragleave', () => el.classList.remove('drop-hover'));
                el.addEventListener('drop', e => this.onSlotDrop(e, node.id));
            }
        }

        // Make ALL nodes draggable (repositioning)
        // We use a small delay or check to ensure we don't conflict with button clicks
        el.addEventListener('mousedown', e => {
            // Don't drag if clicking remove button
            if (e.target.closest('.remove-btn')) return;
            this.startNodeDrag(e, node.id);
        });

        container.appendChild(el);
    }

    // ==========================================
    // NODE DRAGGING (repositioning on canvas)
    // ==========================================
    startNodeDrag(e, nodeId) {
        if (!this.isPlaying) return;
        e.preventDefault();

        const nodeEl = e.target.closest('.graph-node');
        const rect = nodeEl.getBoundingClientRect();

        this.draggingNode = nodeId;
        this.dragOffset = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };

        nodeEl.classList.add('dragging');
    }

    onCanvasMouseMove(e) {
        if (!this.draggingNode) return;

        const canvas = document.getElementById('pathCanvas');
        const rect = canvas.getBoundingClientRect();

        const newX = e.clientX - rect.left - this.dragOffset.x;
        const newY = e.clientY - rect.top - this.dragOffset.y;

        // Clamp to canvas bounds
        const clampedX = Math.max(0, Math.min(newX, rect.width - 120));
        const clampedY = Math.max(0, Math.min(newY, rect.height - 80));

        this.nodePositions.set(this.draggingNode, { x: clampedX, y: clampedY });

        // Update node position
        const nodeEl = document.querySelector(`[data-node-id="${this.draggingNode}"]`);
        if (nodeEl) {
            nodeEl.style.left = `${clampedX}px`;
            nodeEl.style.top = `${clampedY}px`;
        }

        // Re-render edges
        const svg = document.getElementById('connectionsSvg');
        svg.innerHTML = `<defs>
            <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.6)"/>
            </marker>
        </defs>`;
        this.renderEdges(svg);
    }

    onCanvasMouseUp() {
        if (this.draggingNode) {
            const nodeEl = document.querySelector(`[data-node-id="${this.draggingNode}"]`);
            if (nodeEl) nodeEl.classList.remove('dragging');
            this.draggingNode = null;
        }
    }

    // ==========================================
    // DROP HANDLING
    // ==========================================
    onSlotDrop(e, slotId) {
        e.preventDefault();
        e.stopPropagation();

        const componentId = e.dataTransfer.getData('componentId');
        if (!componentId) return;

        const slot = e.target.closest('.empty-slot');
        if (slot) slot.classList.remove('drop-hover');

        this.tryPlaceComponent(slotId, componentId);
    }

    onCanvasDrop(e) {
        // Drop anywhere on canvas - check if near a slot
        e.preventDefault();
    }

    tryPlaceComponent(slotId, componentId) {
        const node = this.currentProblem.path.nodes.find(n => n.id === slotId);
        if (!node || node.type !== 'slot') return;

        const isCorrect = node.correctAnswers.includes(componentId);

        if (isCorrect) {
            this.filledSlots.set(slotId, componentId);
            this.playSound('success');
            this.showFeedback(slotId, true);
            this.renderCanvas();
            this.updateRequirements();
            this.checkCompletion();
        } else {
            this.playSound('error');
            this.showFeedback(slotId, false);
            this.shakeNode(slotId);
        }
    }

    removeFromSlot(slotId) {
        this.filledSlots.delete(slotId);
        this.renderCanvas();
        this.updateRequirements();
    }

    showFeedback(slotId, isCorrect) {
        const node = document.querySelector(`[data-node-id="${slotId}"]`);
        if (!node) return;
        node.classList.add(isCorrect ? 'flash-success' : 'flash-error');
        setTimeout(() => node.classList.remove('flash-success', 'flash-error'), 500);
    }

    shakeNode(slotId) {
        const node = document.querySelector(`[data-node-id="${slotId}"]`);
        if (!node) return;
        node.classList.add('shake');
        setTimeout(() => node.classList.remove('shake'), 500);
    }

    // ==========================================
    // REQUIREMENTS
    // ==========================================
    updateRequirements() {
        this.currentProblem.requirements.forEach(req => {
            const done = req.targetSlots.every(s => this.filledSlots.has(s));
            const el = document.querySelector(`[data-req="${req.id}"]`);
            if (el) {
                el.classList.toggle('completed', done);
                el.querySelector('.requirement-icon').textContent = done ? '✓' : '○';
            }
        });
    }

    checkCompletion() {
        const slots = this.currentProblem.path.nodes.filter(n => n.type === 'slot');
        if (this.filledSlots.size === slots.length) {
            this.handleWin();
        }
    }

    handleWin() {
        this.isPlaying = false;
        if (this.timer) { clearInterval(this.timer); this.timer = null; }
        this.playSound('win');
        this.showWinModal();
    }

    checkDesign() {
        const slots = this.currentProblem.path.nodes.filter(n => n.type === 'slot');
        const pct = Math.round((this.filledSlots.size / slots.length) * 100);
        this.showToast(`${this.filledSlots.size}/${slots.length} slots filled (${pct}%)`,
            this.filledSlots.size === slots.length ? 'success' : 'info');
    }

    // ==========================================
    // TOOLBOX
    // ==========================================
    renderToolbox() {
        const content = document.getElementById('toolboxContent');
        if (!content) return;

        const cats = {};
        Object.values(COMPONENTS).forEach(c => {
            if (!cats[c.category]) cats[c.category] = [];
            cats[c.category].push(c);
        });

        content.innerHTML = Object.entries(cats).map(([cat, comps]) =>
            comps.map(c => `
                <div class="toolbox-item" 
                     draggable="true" 
                     data-component="${c.id}"
                     data-cat="${c.category}">
                    <div class="item-icon">${c.icon}</div>
                    <div class="item-name">${c.name}</div>
                </div>
            `).join('')
        ).join('');

        // Add drag handlers
        content.querySelectorAll('.toolbox-item').forEach(item => {
            item.addEventListener('dragstart', e => {
                if (!this.isPlaying) {
                    e.preventDefault();
                    this.showToast('Click "Start" to begin!', 'warning');
                    return;
                }
                e.dataTransfer.setData('componentId', item.dataset.component);
                item.classList.add('dragging');
            });
            item.addEventListener('dragend', () => item.classList.remove('dragging'));
        });
    }

    // ==========================================
    // TIMER
    // ==========================================
    startTimer() {
        if (this.timer) return;
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimer();
            if (this.timeRemaining <= 0) this.handleTimeUp();
        }, 1000);
    }

    updateTimer() {
        const m = Math.floor(this.timeRemaining / 60);
        const s = this.timeRemaining % 60;
        document.getElementById('timerDisplay').textContent = `${m}:${s.toString().padStart(2, '0')}`;

        const el = document.getElementById('timer');
        el.classList.remove('warning', 'danger');
        if (this.timeRemaining <= 60) el.classList.add('danger');
        else if (this.timeRemaining <= 180) el.classList.add('warning');
    }

    handleTimeUp() {
        this.isPlaying = false;
        if (this.timer) { clearInterval(this.timer); this.timer = null; }
        this.playSound('error');
        this.showToast("Time's up!", 'error');
    }

    // ==========================================
    // UI
    // ==========================================
    showIntro() {
        document.getElementById('introOverlay')?.classList.remove('hidden');
    }

    startDesigning() {
        this.isPlaying = true;
        document.getElementById('introOverlay')?.classList.add('hidden');
        this.startTimer();
    }

    resetProblem() {
        this.loadProblem(this.currentProblem.id);
    }

    switchTab(tab) {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.toggle('active', c.id === `${tab}Tab`));
    }

    showToast(msg, type = 'info') {
        const old = document.querySelector('.toast');
        if (old) old.remove();

        const t = document.createElement('div');
        t.className = `toast toast-${type}`;
        t.textContent = msg;
        document.body.appendChild(t);

        setTimeout(() => t.classList.add('show'), 10);
        setTimeout(() => {
            t.classList.remove('show');
            setTimeout(() => t.remove(), 300);
        }, 3000);
    }

    showWinModal() {
        const used = this.currentProblem.timeLimit - this.timeRemaining;
        const m = Math.floor(used / 60);
        const s = used % 60;
        document.getElementById('completionTime').textContent = `${m}:${s.toString().padStart(2, '0')}`;
        document.getElementById('successModal').classList.add('active');
    }

    hideWinModal() {
        document.getElementById('successModal').classList.remove('active');
    }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    window.judge = new SystemDesignJudge();

    document.getElementById('nextProblemBtn')?.addEventListener('click', () => {
        window.judge.hideWinModal();
        const idx = PROBLEMS.findIndex(p => p.id === window.judge.currentProblem.id);
        const next = PROBLEMS[(idx + 1) % PROBLEMS.length];
        document.getElementById('problemSelect').value = next.id;
        window.judge.loadProblem(next.id);
    });

    document.getElementById('retryBtn')?.addEventListener('click', () => {
        window.judge.hideWinModal();
        window.judge.resetProblem();
    });
});
