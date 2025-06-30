// Balloon Creation & Pop Effect
function createBalloons() {
    const container = document.querySelector('.balloons');
    const colors = ['#ff9ff3', '#feca57', '#ff6b6b', '#48dbfb', '#1dd1a1'];
    
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.top = `${Math.random() * 100}%`;
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDuration = `${5 + Math.random() * 10}s`;
        
        balloon.addEventListener('click', () => {
            balloon.style.transform = 'scale(1.1)';
            setTimeout(() => {
                balloon.remove();
            }, 200);
        });
        
        container.appendChild(balloon);
    }
}

// Confetti Effect
function startConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const confetti = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const colors = ['#ff9ff3', '#feca57', '#ff6b6b', '#48dbfb', '#1dd1a1'];
    const confettiPieces = [];
    
    for (let i = 0; i < 100; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 3 + 2,
            angle: Math.random() * 360,
            spin: Math.random() * 10 - 5
        });
    }
    
    function drawConfetti() {
        confetti.clearRect(0, 0, canvas.width, canvas.height);
        
        confettiPieces.forEach((piece, index) => {
            confetti.fillStyle = piece.color;
            confetti.beginPath();
            confetti.arc(piece.x, piece.y, piece.size, 0, Math.PI * 2);
            confetti.fill();
            
            piece.y += piece.speed;
            piece.angle += piece.spin;
            
            if (piece.y > canvas.height) {
                confettiPieces.splice(index, 1);
            }
        });
        
        if (confettiPieces.length > 0) {
            requestAnimationFrame(drawConfetti);
        }
    }
    
    drawConfetti();
}

// Music Toggle
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');

musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.textContent = '🔊 Toggle Music';
    } else {
        bgMusic.pause();
        musicBtn.textContent = '🎵 Toggle Music';
    }
});

// Confetti Button
const confettiBtn = document.getElementById('confetti-btn');
confettiBtn.addEventListener('click', startConfetti);

// Initialize Balloons
createBalloons();