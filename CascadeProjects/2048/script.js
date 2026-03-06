class Game2048 {
    constructor() {
        this.size = 4;
        this.grid = [];
        this.score = 0;
        this.best = localStorage.getItem('best2048') || 0;
        this.tileContainer = document.getElementById('tile-container');
        this.scoreElement = document.getElementById('score');
        this.bestElement = document.getElementById('best');
        this.gameMessage = document.getElementById('game-message');
        this.tiles = new Map();
        
        this.init();
        this.setupEventListeners();
    }
    
    init() {
        this.grid = Array(this.size).fill().map(() => Array(this.size).fill(0));
        this.score = 0;
        this.updateScore();
        this.clearTiles();
        this.addRandomTile();
        this.addRandomTile();
        this.updateDisplay();
        this.hideMessage();
    }
    
    setupEventListeners() {
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
                this.handleMove(e.key);
            }
        });
        
        // Touch controls
        let touchStartX = 0;
        let touchStartY = 0;
        
        this.tileContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        });
        
        this.tileContainer.addEventListener('touchend', (e) => {
            if (!touchStartX || !touchStartY) return;
            
            let touchEndX = e.changedTouches[0].clientX;
            let touchEndY = e.changedTouches[0].clientY;
            
            let dx = touchEndX - touchStartX;
            let dy = touchEndY - touchStartY;
            
            let absDx = Math.abs(dx);
            let absDy = Math.abs(dy);
            
            if (Math.max(absDx, absDy) > 30) {
                if (absDx > absDy) {
                    this.handleMove(dx > 0 ? 'ArrowRight' : 'ArrowLeft');
                } else {
                    this.handleMove(dy > 0 ? 'ArrowDown' : 'ArrowUp');
                }
            }
            
            touchStartX = 0;
            touchStartY = 0;
        });
        
        // Button controls
        document.getElementById('new-game-button').addEventListener('click', () => this.init());
        document.getElementById('retry-button').addEventListener('click', () => this.init());
    }
    
    handleMove(direction) {
        let moved = false;
        const previousGrid = this.grid.map(row => [...row]);
        
        switch(direction) {
            case 'ArrowLeft':
                moved = this.moveLeft();
                break;
            case 'ArrowRight':
                moved = this.moveRight();
                break;
            case 'ArrowUp':
                moved = this.moveUp();
                break;
            case 'ArrowDown':
                moved = this.moveDown();
                break;
        }
        
        if (moved) {
            this.addRandomTile();
            this.updateDisplay();
            this.updateScore();
            
            if (this.checkWin()) {
                this.showMessage('You win!', 'game-won');
            } else if (this.checkGameOver()) {
                this.showMessage('Game over!', 'game-over');
            }
        }
    }
    
    moveLeft() {
        let moved = false;
        for (let row = 0; row < this.size; row++) {
            const newRow = this.slideAndMerge(this.grid[row]);
            if (newRow.toString() !== this.grid[row].toString()) {
                moved = true;
                this.grid[row] = newRow;
            }
        }
        return moved;
    }
    
    moveRight() {
        let moved = false;
        for (let row = 0; row < this.size; row++) {
            const reversed = [...this.grid[row]].reverse();
            const newRow = this.slideAndMerge(reversed).reverse();
            if (newRow.toString() !== this.grid[row].toString()) {
                moved = true;
                this.grid[row] = newRow;
            }
        }
        return moved;
    }
    
    moveUp() {
        let moved = false;
        for (let col = 0; col < this.size; col++) {
            const column = this.grid.map(row => row[col]);
            const newColumn = this.slideAndMerge(column);
            if (newColumn.toString() !== column.toString()) {
                moved = true;
                for (let row = 0; row < this.size; row++) {
                    this.grid[row][col] = newColumn[row];
                }
            }
        }
        return moved;
    }
    
    moveDown() {
        let moved = false;
        for (let col = 0; col < this.size; col++) {
            const column = this.grid.map(row => row[col]).reverse();
            const newColumn = this.slideAndMerge(column).reverse();
            const originalColumn = this.grid.map(row => row[col]);
            if (newColumn.toString() !== originalColumn.toString()) {
                moved = true;
                for (let row = 0; row < this.size; row++) {
                    this.grid[row][col] = newColumn[row];
                }
            }
        }
        return moved;
    }
    
    slideAndMerge(arr) {
        // Remove zeros
        let newArr = arr.filter(val => val !== 0);
        
        // Merge adjacent equal numbers
        for (let i = 0; i < newArr.length - 1; i++) {
            if (newArr[i] === newArr[i + 1]) {
                newArr[i] *= 2;
                this.score += newArr[i];
                newArr.splice(i + 1, 1);
            }
        }
        
        // Fill with zeros
        while (newArr.length < this.size) {
            newArr.push(0);
        }
        
        return newArr;
    }
    
    addRandomTile() {
        const emptyCells = [];
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                if (this.grid[row][col] === 0) {
                    emptyCells.push({row, col});
                }
            }
        }
        
        if (emptyCells.length > 0) {
            const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            this.grid[randomCell.row][randomCell.col] = Math.random() < 0.9 ? 2 : 4;
        }
    }
    
    updateDisplay() {
        this.clearTiles();
        
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                if (this.grid[row][col] !== 0) {
                    this.createTile(row, col, this.grid[row][col]);
                }
            }
        }
    }
    
    createTile(row, col, value) {
        const tile = document.createElement('div');
        tile.className = `tile tile-${value}`;
        tile.textContent = value;
        
        const position = this.getTilePosition(row, col);
        tile.style.left = position.x + 'px';
        tile.style.top = position.y + 'px';
        
        this.tileContainer.appendChild(tile);
        this.tiles.set(`${row}-${col}`, tile);
    }
    
    getTilePosition(row, col) {
        const tileSize = 107;
        const gap = 15;
        const padding = 15;
        
        return {
            x: col * (tileSize + gap) + padding,
            y: row * (tileSize + gap) + padding
        };
    }
    
    clearTiles() {
        this.tileContainer.innerHTML = '';
        this.tiles.clear();
    }
    
    updateScore() {
        this.scoreElement.textContent = this.score;
        if (this.score > this.best) {
            this.best = this.score;
            this.bestElement.textContent = this.best;
            localStorage.setItem('best2048', this.best);
        }
        this.bestElement.textContent = this.best;
    }
    
    checkWin() {
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                if (this.grid[row][col] === 2048) {
                    return true;
                }
            }
        }
        return false;
    }
    
    checkGameOver() {
        // Check for empty cells
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                if (this.grid[row][col] === 0) {
                    return false;
                }
            }
        }
        
        // Check for possible merges
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                const current = this.grid[row][col];
                
                // Check right
                if (col < this.size - 1 && current === this.grid[row][col + 1]) {
                    return false;
                }
                
                // Check down
                if (row < this.size - 1 && current === this.grid[row + 1][col]) {
                    return false;
                }
            }
        }
        
        return true;
    }
    
    showMessage(text, className) {
        this.gameMessage.querySelector('p').textContent = text;
        this.gameMessage.className = `game-message ${className}`;
        this.gameMessage.style.display = 'block';
    }
    
    hideMessage() {
        this.gameMessage.style.display = 'none';
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new Game2048();
});
