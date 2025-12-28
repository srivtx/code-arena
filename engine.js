/**
 * Relay Station Engine v2
 * NOW WITH ACTUAL CHALLENGE: Packets arrive shuffled!
 * User must figure out how to restore correct order.
 */

class RelayEngine {
    constructor() {
        this.state = this.getInitialState();
        this.userCode = null;
        this.isRunning = false;
        this.intervalId = null;
        this.speed = 3;
        this.successStreak = 0;
        this.hasShownHint = false;

        this.initDOM();
        this.initEventListeners();
        this.updateLineNumbers();
        this.updateTimeDisplay();
        this.loadTheme();

        setInterval(() => this.updateTimeDisplay(), 1000);
    }

    getInitialState() {
        return {
            tick: 0,
            inbox: [],
            pendingPackets: [], // Packets waiting to enter inbox (in random order!)
            forwardedPackets: [],
            expectedOrder: [],  // How packets SHOULD have been forwarded
            nextPacketId: 1,
            correctCount: 0,
            wrongCount: 0,
            lastExpectedId: 0,
            totalGenerated: 0
        };
    }

    initDOM() {
        this.elements = {
            codeEditor: document.getElementById('codeEditor'),
            lineNumbers: document.querySelector('.line-numbers'),
            incomingTrack: document.getElementById('incomingTrack'),
            inbox: document.getElementById('inbox'),
            inboxCount: document.getElementById('inboxCount'),
            outputSlot: document.getElementById('outputSlot'),
            outgoingTrack: document.getElementById('outgoingTrack'),
            expectedTrack: document.getElementById('expectedTrack'),
            tickCount: document.getElementById('tickCount'),
            correctCount: document.getElementById('correctCount'),
            wrongCount: document.getElementById('wrongCount'),
            accuracy: document.getElementById('accuracy'),
            runBtn: document.getElementById('runBtn'),
            stepBtn: document.getElementById('stepBtn'),
            resetBtn: document.getElementById('resetBtn'),
            resetCode: document.getElementById('resetCode'),
            speedSlider: document.getElementById('speedSlider'),
            themeToggle: document.getElementById('themeToggle'),
            statusBadge: document.querySelector('.status-badge'),
            statusText: document.querySelector('.status-text'),
            timeDisplay: document.querySelector('.time-display'),
            successModal: document.getElementById('successModal'),
            revealSection: document.getElementById('revealSection'),
            closeModal: document.getElementById('closeModal'),
            errorToast: document.getElementById('errorToast')
        };
    }

    initEventListeners() {
        this.elements.runBtn.addEventListener('click', () => this.toggleRun());
        this.elements.stepBtn.addEventListener('click', () => this.step());
        this.elements.resetBtn.addEventListener('click', () => this.reset());
        this.elements.resetCode.addEventListener('click', () => this.resetCode());
        this.elements.speedSlider.addEventListener('input', (e) => {
            this.speed = parseInt(e.target.value);
            if (this.isRunning) {
                this.stopInterval();
                this.startInterval();
            }
        });
        this.elements.themeToggle.addEventListener('click', () => this.toggleTheme());
        this.elements.closeModal.addEventListener('click', () => this.closeModal());
        this.elements.codeEditor.addEventListener('input', () => this.updateLineNumbers());
        this.elements.codeEditor.addEventListener('keydown', (e) => this.handleTab(e));
    }

    handleTab(e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = e.target.selectionStart;
            const end = e.target.selectionEnd;
            e.target.value = e.target.value.substring(0, start) + '  ' + e.target.value.substring(end);
            e.target.selectionStart = e.target.selectionEnd = start + 2;
            this.updateLineNumbers();
        }
    }

    updateLineNumbers() {
        const lines = this.elements.codeEditor.value.split('\n').length;
        this.elements.lineNumbers.innerHTML = Array.from(
            { length: lines },
            (_, i) => `<div>${i + 1}</div>`
        ).join('');
    }

    updateTimeDisplay() {
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        this.elements.timeDisplay.textContent = `Local time ${time}`;
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('relay-theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('relay-theme', next);
    }

    compileUserCode() {
        const code = this.elements.codeEditor.value;
        try {
            const wrapped = `
                ${code}
                return decide;
            `;
            const fn = new Function(wrapped)();
            if (typeof fn !== 'function') {
                throw new Error('decide must be a function');
            }
            this.userCode = fn;
            return true;
        } catch (error) {
            this.showError(`Code error: ${error.message}`);
            return false;
        }
    }

    toggleRun() {
        if (this.isRunning) {
            this.pause();
        } else {
            this.run();
        }
    }

    run() {
        if (!this.compileUserCode()) return;

        this.isRunning = true;
        this.updateStatus('running', 'Running');
        this.elements.runBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
            Pause
        `;
        this.startInterval();
    }

    pause() {
        this.isRunning = false;
        this.updateStatus('idle', 'Paused');
        this.elements.runBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Run
        `;
        this.stopInterval();
    }

    startInterval() {
        const speeds = [2000, 1200, 800, 500, 300];
        const interval = speeds[this.speed - 1];
        this.intervalId = setInterval(() => this.step(), interval);
    }

    stopInterval() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    step() {
        if (!this.userCode && !this.compileUserCode()) return;

        this.state.tick++;

        // Generate batches of packets (they'll arrive SHUFFLED!)
        if (this.state.tick % 2 === 1 && this.state.totalGenerated < 20) {
            this.generatePacketBatch();
        }

        // Move some pending packets to inbox (SHUFFLED order creates the challenge)
        this.processPending();

        // Call user's decide function
        if (this.state.inbox.length > 0) {
            try {
                const inboxCopy = this.state.inbox.map(p => ({ ...p }));
                const decision = this.userCode(inboxCopy);

                if (decision) {
                    this.processDecision(decision);
                }
            } catch (error) {
                this.showError(`Runtime error: ${error.message}`);
                this.pause();
                return;
            }
        }

        // Update visuals
        this.render();

        // Check for completion or hint
        this.checkProgress();
    }

    generatePacketBatch() {
        // Generate 2-3 packets at once
        const batchSize = 2 + Math.floor(Math.random() * 2);
        const batch = [];

        for (let i = 0; i < batchSize; i++) {
            batch.push({
                id: this.state.nextPacketId++,
                timestamp: this.state.tick,
                label: this.state.nextPacketId - 1  // Visual label
            });
            this.state.totalGenerated++;
        }

        // SHUFFLE the batch - this is the KEY challenge!
        // Packets arrive OUT OF ORDER
        this.shuffleArray(batch);

        this.state.pendingPackets.push(...batch);
    }

    shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    processPending() {
        // Move 1-2 packets from pending to inbox each tick
        const toMove = Math.min(1 + Math.floor(Math.random() * 2), this.state.pendingPackets.length);

        for (let i = 0; i < toMove; i++) {
            if (this.state.pendingPackets.length > 0) {
                const packet = this.state.pendingPackets.shift();
                this.state.inbox.push(packet);
            }
        }
    }

    processDecision(decision) {
        // Find the packet in inbox
        const index = this.state.inbox.findIndex(p => p.id === decision.id);

        if (index === -1) {
            this.showError('That packet is not in the inbox!');
            return;
        }

        // Remove from inbox
        const [packet] = this.state.inbox.splice(index, 1);

        // THE KEY CHECK: Are we forwarding packets in ascending ID order?
        // Packet 1 should go before Packet 2, etc.
        const expectedNextId = this.state.lastExpectedId + 1;
        const isCorrect = packet.id === expectedNextId;

        if (isCorrect) {
            this.state.correctCount++;
            this.state.lastExpectedId = packet.id;
            packet.status = 'correct';
            this.successStreak++;
        } else {
            this.state.wrongCount++;
            packet.status = 'wrong';
            this.successStreak = 0;

            // Show hint after a few failures
            if (this.state.wrongCount >= 3 && !this.hasShownHint) {
                this.showHint();
            }
        }

        // Track expected order
        if (!this.state.expectedOrder.includes(expectedNextId) && expectedNextId <= this.state.nextPacketId) {
            this.state.expectedOrder.push(expectedNextId);
        }

        this.state.forwardedPackets.push(packet);

        // Limit display
        if (this.state.forwardedPackets.length > 10) {
            this.state.forwardedPackets.shift();
        }
        if (this.state.expectedOrder.length > 10) {
            this.state.expectedOrder.shift();
        }

        this.showOutputPacket(packet);
    }

    showOutputPacket(packet) {
        const slot = this.elements.outputSlot;
        slot.innerHTML = this.createPacketHTML(packet, 'output ' + packet.status);
        slot.classList.add('active');

        if (packet.status === 'wrong') {
            slot.classList.add('error');
        }

        setTimeout(() => {
            slot.classList.remove('active', 'error');
            slot.innerHTML = '';
        }, 600);
    }

    showHint() {
        this.hasShownHint = true;
        this.showError('Hint: Look carefully at packet IDs... which one SHOULD go first?');
    }

    render() {
        this.elements.tickCount.textContent = this.state.tick;

        // Render pending packets (incoming)
        this.elements.incomingTrack.innerHTML = this.state.pendingPackets
            .slice(0, 8)
            .map(p => this.createPacketHTML(p, 'incoming'))
            .join('');

        // Render inbox - SHOW THE IDs CLEARLY so user can see they're out of order
        this.elements.inbox.innerHTML = this.state.inbox
            .map(p => this.createPacketHTML(p))
            .join('');
        this.elements.inboxCount.textContent = this.state.inbox.length;

        // Render forwarded
        this.elements.outgoingTrack.innerHTML = this.state.forwardedPackets
            .map(p => this.createPacketHTML(p, `forwarded ${p.status}`))
            .join('');

        // Render expected order (1, 2, 3, 4...)
        const expectedDisplay = [];
        for (let i = 1; i <= Math.min(this.state.lastExpectedId + 5, this.state.nextPacketId - 1); i++) {
            const wasForwarded = this.state.forwardedPackets.some(p => p.id === i && p.status === 'correct');
            expectedDisplay.push({ id: i, matched: wasForwarded });
        }
        this.elements.expectedTrack.innerHTML = expectedDisplay
            .slice(-10)
            .map(p => `<div class="packet ${p.matched ? 'matched' : 'expected'}">${p.id}</div>`)
            .join('');

        // Update stats
        this.elements.correctCount.textContent = this.state.correctCount;
        this.elements.wrongCount.textContent = this.state.wrongCount;

        const total = this.state.correctCount + this.state.wrongCount;
        if (total > 0) {
            const accuracy = Math.round((this.state.correctCount / total) * 100);
            this.elements.accuracy.textContent = `${accuracy}%`;

            // Update status based on performance
            if (this.state.wrongCount > this.state.correctCount) {
                this.updateStatus('error', 'Wrong order!');
            } else if (this.successStreak >= 5) {
                this.updateStatus('success', 'Looking good!');
            }
        }
    }

    createPacketHTML(packet, extraClass = '') {
        return `<div class="packet ${extraClass}" title="ID: ${packet.id}">${packet.id}</div>`;
    }

    checkProgress() {
        // Win condition: 10+ correct in a row with no recent errors
        if (this.successStreak >= 10 && this.state.correctCount >= 12) {
            this.showSuccess();
        }
    }

    showSuccess() {
        this.pause();

        const reveal = this.elements.revealSection;
        const revealText = reveal.querySelector('.reveal-text');
        revealText.textContent = 'You discovered that to process shuffled items in the right order, you need to always pick the SMALLEST id first. This is the core idea behind a "Priority Queue" or simple sorting. Nice work!';
        reveal.style.display = 'block';

        this.elements.successModal.classList.add('active');
    }

    closeModal() {
        this.elements.successModal.classList.remove('active');
        this.reset();
    }

    updateStatus(type, text) {
        const badge = this.elements.statusBadge;
        badge.className = 'status-badge';
        if (type) badge.classList.add(type);
        this.elements.statusText.textContent = text;
    }

    showError(message) {
        const toast = this.elements.errorToast;
        toast.querySelector('.toast-message').textContent = message;
        toast.classList.add('active');

        setTimeout(() => {
            toast.classList.remove('active');
        }, 4000);
    }

    reset() {
        this.pause();
        this.state = this.getInitialState();
        this.successStreak = 0;
        this.hasShownHint = false;
        this.updateStatus('idle', 'Idle');

        this.elements.incomingTrack.innerHTML = '';
        this.elements.inbox.innerHTML = '';
        this.elements.outgoingTrack.innerHTML = '';
        this.elements.expectedTrack.innerHTML = '';
        this.elements.outputSlot.innerHTML = '';
        this.elements.tickCount.textContent = '0';
        this.elements.inboxCount.textContent = '0';
        this.elements.correctCount.textContent = '0';
        this.elements.wrongCount.textContent = '0';
        this.elements.accuracy.textContent = '--';
    }

    resetCode() {
        this.elements.codeEditor.value = `// Packets arrive SHUFFLED in the inbox.
// Your job: forward them in the CORRECT order.
// 
// Each packet has:
//   .id  - unique number (1, 2, 3, ...)
// 
// Return the packet to forward next, or null.

function decide(inbox) {
  if (inbox.length === 0) return null;
  
  // This grabs the first one... but is it the RIGHT one?
  return inbox[0];
}`;
        this.updateLineNumbers();
        this.reset();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.relayEngine = new RelayEngine();
    // Reset code to the new challenge version
    window.relayEngine.resetCode();
});
