/**
 * CODE ARENA - Game Engine with p5.js Visualizations
 * User code drives the animations!
 */

class CodeArena {
    constructor() {
        this.currentWorld = null;
        this.currentLevel = null;
        this.gameState = null;
        this.userFn = null;
        this.p5Instance = null;
        this.speed = 3;

        // Animation state
        this.animState = {
            elements: [],
            steps: [],
            currentStep: 0,
            animating: false,
            particles: [],
            result: null,
            passed: false
        };

        // Player progress
        this.progress = this.loadProgress();

        this.initDOM();
        this.initEventListeners();
        this.showWorldSelect();
    }

    // ==================== INITIALIZATION ====================
    initDOM() {
        this.els = {
            worldSelectScreen: document.getElementById('worldSelectScreen'),
            levelSelectScreen: document.getElementById('levelSelectScreen'),
            gameScreen: document.getElementById('gameScreen'),
            worldGrid: document.getElementById('worldGrid'),
            totalXP: document.getElementById('totalXP'),
            completedCount: document.getElementById('completedCount'),
            backToWorlds: document.getElementById('backToWorlds'),
            worldTitle: document.getElementById('worldTitle'),
            worldProgress: document.getElementById('worldProgress'),
            levelGrid: document.getElementById('levelGrid'),
            backToLevels: document.getElementById('backToLevels'),
            levelBadge: document.getElementById('levelBadge'),
            levelTitle: document.getElementById('levelTitle'),
            gameScore: document.getElementById('gameScore'),
            gameBest: document.getElementById('gameBest'),
            gameCanvas: document.getElementById('gameCanvas'),
            missionText: document.getElementById('missionText'),
            codeEditor: document.getElementById('codeEditor'),
            lineNumbers: document.getElementById('lineNumbers'),
            runBtn: document.getElementById('runBtn'),
            stepBtn: document.getElementById('stepBtn'),
            resetCodeBtn: document.getElementById('resetCodeBtn'),
            speedSlider: document.getElementById('speedSlider'),
            successOverlay: document.getElementById('successOverlay'),
            starsDisplay: document.getElementById('starsDisplay'),
            xpEarned: document.getElementById('xpEarned'),
            revealText: document.getElementById('revealText'),
            retryBtn: document.getElementById('retryBtn'),
            nextLevelBtn: document.getElementById('nextLevelBtn'),
            failOverlay: document.getElementById('failOverlay'),
            failReason: document.getElementById('failReason'),
            hintText: document.getElementById('hintText'),
            tryAgainBtn: document.getElementById('tryAgainBtn'),
            toast: document.getElementById('toast'),
            toastMessage: document.getElementById('toastMessage')
        };
    }

    initEventListeners() {
        this.els.backToWorlds.addEventListener('click', () => this.showWorldSelect());
        this.els.backToLevels.addEventListener('click', () => this.showLevelSelect(this.currentWorld));
        this.els.runBtn.addEventListener('click', () => this.runCode());
        this.els.stepBtn.addEventListener('click', () => this.stepAnimation());
        this.els.resetCodeBtn.addEventListener('click', () => this.resetCode());
        this.els.speedSlider.addEventListener('input', (e) => this.speed = parseInt(e.target.value));

        this.els.codeEditor.addEventListener('input', () => this.updateLineNumbers());
        this.els.codeEditor.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const s = e.target.selectionStart;
                e.target.value = e.target.value.substring(0, s) + '  ' + e.target.value.substring(e.target.selectionEnd);
                e.target.selectionStart = e.target.selectionEnd = s + 2;
                this.updateLineNumbers();
            }
        });

        this.els.retryBtn.addEventListener('click', () => this.hideOverlays());
        this.els.nextLevelBtn.addEventListener('click', () => this.goToNextLevel());
        this.els.tryAgainBtn.addEventListener('click', () => this.hideOverlays());
    }

    // ==================== PROGRESS ====================
    loadProgress() {
        try {
            const data = JSON.parse(localStorage.getItem('codeArenaProgress'));
            return data || { completed: {}, xp: 0, bestScores: {} };
        } catch {
            return { completed: {}, xp: 0, bestScores: {} };
        }
    }

    saveProgress() {
        localStorage.setItem('codeArenaProgress', JSON.stringify(this.progress));
    }

    isLevelCompleted(levelId) {
        return !!this.progress.completed[levelId];
    }

    isLevelUnlocked(level) {
        const worldLevels = LEVELS.filter(l => l.world === level.world);
        const levelIdx = worldLevels.findIndex(l => l.id === level.id);
        if (levelIdx === 0) return true;
        return this.isLevelCompleted(worldLevels[levelIdx - 1].id);
    }

    getWorldProgress(worldId) {
        const worldLevels = LEVELS.filter(l => l.world === worldId);
        const completed = worldLevels.filter(l => this.isLevelCompleted(l.id)).length;
        return { completed, total: worldLevels.length };
    }

    getTotalCompleted() {
        return Object.keys(this.progress.completed).length;
    }

    // ==================== SCREENS ====================
    showWorldSelect() {
        this.destroyP5();
        this.els.worldSelectScreen.classList.remove('hidden');
        this.els.levelSelectScreen.classList.add('hidden');
        this.els.gameScreen.classList.add('hidden');
        this.els.totalXP.textContent = this.progress.xp;
        this.els.completedCount.textContent = this.getTotalCompleted();
        this.renderWorlds();
    }

    renderWorlds() {
        this.els.worldGrid.innerHTML = WORLDS.map((world) => {
            const prog = this.getWorldProgress(world.id);
            let isUnlocked = world.id === 1;
            if (world.id > 1) {
                const prevWorldProgress = this.getWorldProgress(world.id - 1);
                isUnlocked = prevWorldProgress.completed >= 4;
            }

            return `
                <div class="world-card ${isUnlocked ? '' : 'locked'}" data-world="${world.id}">
                    <div class="world-header">
                        <div class="world-icon">${world.icon}</div>
                        <div class="world-meta">
                            <div class="world-number">World ${world.id}</div>
                            <div class="world-name">${world.name}</div>
                        </div>
                    </div>
                    <p class="world-desc">${world.desc}</p>
                    <div class="world-progress-bar">
                        <div class="world-progress-fill" style="width: ${(prog.completed / prog.total) * 100}%"></div>
                    </div>
                    <div class="world-stats">
                        <span>${prog.completed}/${prog.total} completed</span>
                        <span>${world.concept}</span>
                    </div>
                    ${!isUnlocked ? '<div class="world-lock-overlay">🔒</div>' : ''}
                </div>
            `;
        }).join('');

        this.els.worldGrid.querySelectorAll('.world-card:not(.locked)').forEach(card => {
            card.addEventListener('click', () => {
                this.showLevelSelect(parseInt(card.dataset.world));
            });
        });
    }

    showLevelSelect(worldId) {
        this.destroyP5();
        this.currentWorld = worldId;
        const world = WORLDS.find(w => w.id === worldId);
        this.els.worldSelectScreen.classList.add('hidden');
        this.els.levelSelectScreen.classList.remove('hidden');
        this.els.gameScreen.classList.add('hidden');
        this.els.worldTitle.textContent = `${world.icon} ${world.name}`;
        const prog = this.getWorldProgress(worldId);
        this.els.worldProgress.textContent = `${prog.completed}/${prog.total}`;
        this.renderLevels(worldId);
    }

    renderLevels(worldId) {
        const worldLevels = LEVELS.filter(l => l.world === worldId);
        this.els.levelGrid.innerHTML = worldLevels.map(level => {
            const completed = this.isLevelCompleted(level.id);
            const unlocked = this.isLevelUnlocked(level);
            const stars = this.progress.bestScores[level.id] || 0;

            return `
                <div class="level-card ${completed ? 'completed' : ''} ${unlocked ? '' : 'locked'}" data-level="${level.id}">
                    <div class="level-header">
                        <span class="level-number">Level ${level.id}</span>
                        <div class="level-stars">
                            ${[1, 2, 3].map(s => `<span class="star ${s <= stars ? 'earned' : ''}">⭐</span>`).join('')}
                        </div>
                    </div>
                    <div class="level-name">${level.name}</div>
                    <p class="level-desc">${level.desc}</p>
                    ${!unlocked ? '<span class="level-lock">🔒</span>' : ''}
                </div>
            `;
        }).join('');

        this.els.levelGrid.querySelectorAll('.level-card:not(.locked)').forEach(card => {
            card.addEventListener('click', () => this.startLevel(card.dataset.level));
        });
    }

    // ==================== GAME ====================
    startLevel(levelId) {
        this.currentLevel = LEVELS.find(l => l.id === levelId);
        if (!this.currentLevel) return;

        this.destroyP5();
        this.els.worldSelectScreen.classList.add('hidden');
        this.els.levelSelectScreen.classList.add('hidden');
        this.els.gameScreen.classList.remove('hidden');

        this.els.levelBadge.textContent = this.currentLevel.id;
        this.els.levelTitle.textContent = this.currentLevel.name;
        this.els.missionText.textContent = this.currentLevel.mission;
        this.els.codeEditor.value = this.currentLevel.starterCode;
        this.els.gameScore.textContent = '0';
        this.els.gameBest.textContent = this.progress.bestScores[levelId] || '-';

        this.updateLineNumbers();
        this.hideOverlays();
        this.initGameState();

        // Initialize p5.js
        setTimeout(() => this.initP5(), 100);
    }

    initGameState() {
        const level = this.currentLevel;
        const testCase = level.testCases[0];

        this.animState = {
            elements: this.createElements(testCase.input),
            steps: [],
            currentStep: 0,
            animating: false,
            particles: [],
            result: null,
            passed: false
        };

        this.gameState = {
            input: JSON.parse(JSON.stringify(testCase.input)),
            expected: testCase.expected,
            output: null
        };
    }

    createElements(input) {
        const elements = [];
        const data = Array.isArray(input[0]) ? input[0] : (Array.isArray(input) ? input : []);

        if (Array.isArray(data)) {
            data.forEach((val, i) => {
                const value = typeof val === 'object' ? JSON.stringify(val).slice(0, 8) : String(val);
                const numVal = typeof val === 'number' ? val : (typeof val === 'object' && val.value ? val.value : 50);

                elements.push({
                    id: i,
                    value: value,
                    numValue: numVal,
                    x: 60 + i * 65,
                    y: 150,
                    targetX: 60 + i * 65,
                    targetY: 150,
                    color: { r: 68, g: 136, b: 255 },
                    targetColor: { r: 68, g: 136, b: 255 },
                    scale: 1,
                    targetScale: 1,
                    visited: false,
                    active: false
                });
            });
        }
        return elements;
    }

    updateLineNumbers() {
        const lines = this.els.codeEditor.value.split('\n').length;
        this.els.lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) => `<div>${i + 1}</div>`).join('');
    }

    // ==================== P5.JS VISUALIZATION ====================
    initP5() {
        const container = this.els.gameCanvas.parentElement;
        // Hide the original canvas
        this.els.gameCanvas.style.display = 'none';

        const game = this;

        this.p5Instance = new p5((p) => {
            let W, H;

            p.setup = function () {
                W = container.clientWidth;
                H = container.clientHeight || 400;
                let canvas = p.createCanvas(W, H);
                canvas.parent(container);
                canvas.style('border-radius', '12px');
                p.textFont('JetBrains Mono');
            };

            p.draw = function () {
                // Background with grid
                p.background(10, 10, 18);

                // Grid pattern
                p.stroke(25, 25, 40);
                p.strokeWeight(1);
                for (let x = 0; x < W; x += 40) {
                    p.line(x, 0, x, H);
                }
                for (let y = 0; y < H; y += 40) {
                    p.line(0, y, W, y);
                }

                // Title
                p.noStroke();
                p.fill(136, 136, 160);
                p.textSize(14);
                p.textAlign(p.LEFT);
                p.text(game.currentLevel?.name || 'Code Arena', 25, 30);

                // Input label
                p.fill(85, 85, 102);
                p.textSize(11);
                p.text('INPUT DATA', 25, 70);

                // Animate elements
                game.animState.elements.forEach((el, i) => {
                    // Smooth interpolation
                    el.x += (el.targetX - el.x) * 0.12;
                    el.y += (el.targetY - el.y) * 0.12;
                    el.scale += (el.targetScale - el.scale) * 0.15;
                    el.color.r += (el.targetColor.r - el.color.r) * 0.1;
                    el.color.g += (el.targetColor.g - el.color.g) * 0.1;
                    el.color.b += (el.targetColor.b - el.color.b) * 0.1;

                    // Glow effect for active/visited
                    if (el.active || el.visited) {
                        p.drawingContext.shadowBlur = 20;
                        p.drawingContext.shadowColor = `rgba(${el.color.r}, ${el.color.g}, ${el.color.b}, 0.6)`;
                    }

                    // Draw box
                    const size = 50 * el.scale;
                    p.fill(el.color.r, el.color.g, el.color.b, 50);
                    p.stroke(el.color.r, el.color.g, el.color.b);
                    p.strokeWeight(2);
                    p.rectMode(p.CENTER);
                    p.rect(el.x, el.y, size, size * 0.85, 10);

                    p.drawingContext.shadowBlur = 0;

                    // Value text
                    p.noStroke();
                    p.fill(255);
                    p.textAlign(p.CENTER, p.CENTER);
                    p.textSize(14 * el.scale);
                    const displayVal = String(el.value).slice(0, 5);
                    p.text(displayVal, el.x, el.y);

                    // Index label
                    p.fill(85, 85, 102);
                    p.textSize(10);
                    p.text(`[${el.id}]`, el.x, el.y + size / 2 + 15);
                });

                // Draw particles (confetti)
                for (let i = game.animState.particles.length - 1; i >= 0; i--) {
                    const pt = game.animState.particles[i];

                    pt.x += pt.vx;
                    pt.y += pt.vy;
                    pt.vy += 0.15;
                    pt.life -= 3;
                    pt.rotation += pt.rotSpeed;

                    if (pt.life <= 0) {
                        game.animState.particles.splice(i, 1);
                        continue;
                    }

                    p.push();
                    p.translate(pt.x, pt.y);
                    p.rotate(pt.rotation);
                    p.noStroke();
                    p.fill(pt.r, pt.g, pt.b, pt.life);
                    p.rectMode(p.CENTER);
                    p.rect(0, 0, pt.size, pt.size * 0.6);
                    p.pop();
                }

                // Show result if available
                if (game.animState.result !== null) {
                    p.fill(85, 85, 102);
                    p.textSize(11);
                    p.textAlign(p.LEFT);
                    p.text('RESULT', 25, H / 2 + 50);

                    const resultColor = game.animState.passed ?
                        p.color(0, 255, 136) : p.color(255, 68, 102);

                    p.fill(resultColor);
                    p.textSize(20);
                    const resultStr = typeof game.animState.result === 'object' ?
                        JSON.stringify(game.animState.result) : String(game.animState.result);
                    p.text(resultStr.slice(0, 30), 25, H / 2 + 80);
                }

                // Show expected
                if (game.gameState?.expected !== undefined) {
                    p.fill(58, 58, 74);
                    p.textSize(10);
                    p.textAlign(p.LEFT);
                    const expStr = JSON.stringify(game.gameState.expected);
                    p.text(`Expected: ${expStr.slice(0, 40)}`, 25, H - 20);
                }

                // Process animation steps
                if (game.animState.animating && p.frameCount % Math.max(15, 40 - game.speed * 8) === 0) {
                    game.processNextStep();
                }
            };

            p.windowResized = function () {
                W = container.clientWidth;
                H = container.clientHeight || 400;
                p.resizeCanvas(W, H);
            };
        });
    }

    destroyP5() {
        if (this.p5Instance) {
            this.p5Instance.remove();
            this.p5Instance = null;
        }
        if (this.els.gameCanvas) {
            this.els.gameCanvas.style.display = 'block';
        }
    }

    // ==================== CODE EXECUTION ====================
    runCode() {
        if (!this.compileCode()) return;

        this.hideOverlays();
        this.initGameState();
        if (this.p5Instance) {
            this.p5Instance.remove();
        }
        this.initP5();

        const level = this.currentLevel;
        let allPassed = true;
        let failReason = '';
        let result = null;

        for (let i = 0; i < level.testCases.length; i++) {
            const testCase = level.testCases[i];
            try {
                result = this.userFn(...JSON.parse(JSON.stringify(testCase.input)));

                if (!this.deepEqual(result, testCase.expected)) {
                    allPassed = false;
                    failReason = `Test ${i + 1} failed.\nExpected: ${JSON.stringify(testCase.expected)}\nGot: ${JSON.stringify(result)}`;
                    break;
                }
            } catch (e) {
                allPassed = false;
                failReason = `Error: ${e.message}`;
                break;
            }
        }

        // Generate animation based on result
        this.generateAnimation(result, allPassed);
        this.animState.result = result;
        this.animState.passed = allPassed;
        this.animState.animating = true;
        this.animState.currentStep = 0;
        this.animState.failReason = failReason;
    }

    generateAnimation(result, passed) {
        const world = this.currentLevel.world;
        const elements = this.animState.elements;

        this.animState.steps = [];

        // Animate each element being processed
        elements.forEach((_, i) => {
            this.animState.steps.push({
                type: 'highlight',
                index: i
            });
        });

        // Show result
        this.animState.steps.push({
            type: 'showResult'
        });

        // Final state
        if (passed) {
            this.animState.steps.push({ type: 'success' });
            this.animState.steps.push({ type: 'confetti' });
        } else {
            this.animState.steps.push({ type: 'fail' });
        }

        this.animState.steps.push({ type: 'complete' });
    }

    processNextStep() {
        const step = this.animState.steps[this.animState.currentStep];
        if (!step) {
            this.animState.animating = false;
            return;
        }

        switch (step.type) {
            case 'highlight':
                // Reset previous
                this.animState.elements.forEach(el => {
                    el.active = false;
                    el.targetScale = 1;
                    el.targetColor = { r: 68, g: 136, b: 255 };
                });
                // Highlight current
                if (this.animState.elements[step.index]) {
                    this.animState.elements[step.index].active = true;
                    this.animState.elements[step.index].targetScale = 1.15;
                    this.animState.elements[step.index].targetColor = { r: 255, g: 170, b: 0 };
                }
                break;

            case 'showResult':
                // Mark all as processed
                this.animState.elements.forEach(el => {
                    el.active = false;
                    el.visited = true;
                    el.targetScale = 1;
                    el.targetColor = { r: 100, g: 180, b: 255 };
                });
                break;

            case 'success':
                this.animState.elements.forEach(el => {
                    el.targetColor = { r: 0, g: 255, b: 136 };
                });
                break;

            case 'fail':
                this.animState.elements.forEach(el => {
                    el.targetColor = { r: 255, g: 68, b: 102 };
                });
                break;

            case 'confetti':
                this.spawnConfetti();
                break;

            case 'complete':
                this.animState.animating = false;
                setTimeout(() => {
                    if (this.animState.passed) {
                        this.showSuccess();
                    } else {
                        this.showFail(this.animState.failReason);
                    }
                }, 800);
                break;
        }

        this.animState.currentStep++;
    }

    spawnConfetti() {
        const container = this.els.gameCanvas.parentElement;
        const W = container.clientWidth;

        for (let i = 0; i < 60; i++) {
            this.animState.particles.push({
                x: W / 2 + (Math.random() - 0.5) * 100,
                y: 150,
                vx: (Math.random() - 0.5) * 12,
                vy: Math.random() * -8 - 4,
                r: [255, 0, 68, 136, 255][Math.floor(Math.random() * 5)],
                g: [136, 255, 136, 255, 170][Math.floor(Math.random() * 5)],
                b: [255, 136, 255, 68, 0][Math.floor(Math.random() * 5)],
                size: Math.random() * 10 + 5,
                life: 255,
                rotation: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.3
            });
        }
    }

    stepAnimation() {
        if (this.animState.steps.length === 0) {
            this.runCode();
            return;
        }
        this.processNextStep();
    }

    compileCode() {
        try {
            const code = this.els.codeEditor.value;
            const fn = new Function(`${code}\nreturn solve;`)();
            if (typeof fn !== 'function') {
                throw new Error('Function "solve" not found');
            }
            this.userFn = fn;
            return true;
        } catch (e) {
            this.showToast(e.message);
            return false;
        }
    }

    deepEqual(a, b) {
        if (a === b) return true;
        if (typeof a !== typeof b) return false;
        if (typeof a !== 'object') return false;
        if (a === null || b === null) return a === b;
        if (Array.isArray(a) !== Array.isArray(b)) return false;

        if (Array.isArray(a)) {
            if (a.length !== b.length) return false;
            for (let i = 0; i < a.length; i++) {
                if (!this.deepEqual(a[i], b[i])) return false;
            }
            return true;
        }

        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        if (keysA.length !== keysB.length) return false;
        for (const key of keysA) {
            if (!this.deepEqual(a[key], b[key])) return false;
        }
        return true;
    }

    // ==================== OVERLAYS ====================
    showSuccess() {
        const level = this.currentLevel;
        const stars = 3;
        const xp = level.xpReward;

        if (!this.progress.completed[level.id]) {
            this.progress.completed[level.id] = true;
            this.progress.xp += xp;
        }
        this.progress.bestScores[level.id] = Math.max(this.progress.bestScores[level.id] || 0, stars);
        this.saveProgress();

        this.els.starsDisplay.querySelectorAll('.star').forEach((star, i) => {
            setTimeout(() => star.classList.toggle('earned', i < stars), i * 200);
        });
        this.els.xpEarned.textContent = xp;
        this.els.revealText.textContent = level.reveal;
        this.els.successOverlay.classList.remove('hidden');
    }

    showFail(reason) {
        this.els.failReason.textContent = reason;
        this.els.hintText.textContent = this.currentLevel.hint;
        this.els.failOverlay.classList.remove('hidden');
    }

    hideOverlays() {
        this.els.successOverlay.classList.add('hidden');
        this.els.failOverlay.classList.add('hidden');
    }

    goToNextLevel() {
        const worldLevels = LEVELS.filter(l => l.world === this.currentWorld);
        const currentIdx = worldLevels.findIndex(l => l.id === this.currentLevel.id);
        const nextLevel = worldLevels[currentIdx + 1];

        if (nextLevel) {
            this.startLevel(nextLevel.id);
        } else {
            this.showLevelSelect(this.currentWorld);
        }
    }

    resetCode() {
        this.els.codeEditor.value = this.currentLevel.starterCode;
        this.updateLineNumbers();
        this.initGameState();
        if (this.p5Instance) {
            this.p5Instance.remove();
        }
        this.initP5();
    }

    showToast(message) {
        this.els.toastMessage.textContent = message;
        this.els.toast.classList.remove('hidden');
        setTimeout(() => this.els.toast.classList.add('hidden'), 3000);
    }
}

// Initialize game
document.addEventListener('DOMContentLoaded', () => {
    window.game = new CodeArena();
});
