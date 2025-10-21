// Transición de pantalla de hackeo a contenido principal
document.addEventListener('DOMContentLoaded', () => {
    const continueBtn = document.getElementById('continue-btn');
    const hackScreen = document.getElementById('hack-screen');
    const mainContent = document.getElementById('main-content');

    continueBtn.addEventListener('click', () => {
        hackScreen.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(() => {
            hackScreen.classList.remove('active');
            mainContent.classList.add('active');
            window.scrollTo(0, 0);
        }, 500);
    });

    // Quiz interactivo
    let score = 0;
    const checkButtons = document.querySelectorAll('.check-btn');
    const scoreDisplay = document.getElementById('score');
    const quizResult = document.getElementById('quiz-result');
    const resultContent = quizResult.querySelector('.result-content');

    checkButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const answer = e.target.dataset.answer;
            const qrOption = e.target.closest('.qr-option');
            
            // Deshabilitar el botón
            e.target.disabled = true;
            
            if (answer === 'safe') {
                qrOption.classList.add('correct');
                score++;
                showFeedback('¡Correcto! Este QR es seguro porque está en un contexto oficial verificable.', 'success');
            } else {
                qrOption.classList.add('incorrect');
                showFeedback('¡Correcto! Este QR es peligroso. Nunca escanees códigos en lugares no verificados o que prometan cosas sospechosas.', 'success');
                score++;
            }
            
            scoreDisplay.textContent = score;
            
            // Verificar si se completó el quiz
            const allDisabled = Array.from(checkButtons).every(btn => btn.disabled);
            if (allDisabled) {
                setTimeout(() => {
                    showFinalResult();
                }, 1000);
            }
        });
    });

    function showFeedback(message, type) {
        quizResult.classList.remove('hidden');
        resultContent.innerHTML = `
            <div style="color: ${type === 'success' ? 'var(--color-success)' : 'var(--color-danger)'}">
                ${message}
            </div>
        `;
        
        setTimeout(() => {
            quizResult.classList.add('hidden');
        }, 3000);
    }

    function showFinalResult() {
        quizResult.classList.remove('hidden');
        resultContent.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 15px;">🎉</div>
            <h3 style="margin-bottom: 10px;">¡Quiz Completado!</h3>
            <p>Puntuación: ${score}/3</p>
            <p style="margin-top: 15px; color: var(--color-text-secondary);">
                ${score === 3 ? '¡Perfecto! Ahora sabes identificar QR peligrosos.' : 'Buen intento. Recuerda siempre verificar el contexto antes de escanear.'}
            </p>
        `;
    }

    // Checklist interactivo
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const checklistResult = document.getElementById('checklist-result');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const allChecked = Array.from(checkboxes).every(cb => cb.checked);
            
            if (allChecked) {
                checklistResult.classList.remove('hidden');
                checklistResult.style.animation = 'fadeIn 0.5s ease-out';
            } else {
                checklistResult.classList.add('hidden');
            }
        });
    });

    // Animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideIn 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    document.querySelectorAll('.case-card, .protection-card, .stat-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Efecto parallax suave en el hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
});

// Agregar animación de fadeOut al CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(0.95);
        }
    }
`;
document.head.appendChild(style);