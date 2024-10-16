


const phrases = [
    "Welcome!",
    "Hello! I'm Hardik",
    
    "Explore my first website."
];
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBetweenPhrases = 1000;

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    const typewriterElement = document.getElementById("typewriter");

    if (isDeleting) {
        typewriterElement.innerHTML = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.innerHTML = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeWriter, pauseBetweenPhrases);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeWriter, typingSpeed);
    } else {
        setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
    }
}

// Particle.js configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ["#ff00dd", "#7c03c2", "#00eeff"]
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.3,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ff00dd",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        }
    },
    retina_detect: true
});

window.addEventListener("orientationchange", function() {
    // Reload the page when the device's orientation changes
    location.reload();
}, false);

window.onload = typeWriter;