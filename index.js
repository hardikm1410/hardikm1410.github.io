const text = "Hardik";
const titleElement = document.getElementById("title");
let isDeleting = false;
let charIndex = 0;
let typingSpeed = 200;
let deletingSpeed = 100;

function typeWriter() {
    const currentText = text.substring(0, charIndex);
    titleElement.textContent = currentText;

    if (!isDeleting && charIndex < text.length) {
        // Typing
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else if (!isDeleting && charIndex === text.length) {
        // End of typing, wait before deleting
        isDeleting = true;
        setTimeout(typeWriter, 1500); // Pause at the end
    } else if (isDeleting && charIndex > 0) {
        // Deleting
        charIndex--;
        setTimeout(typeWriter, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
        // End of deleting, start typing again
        isDeleting = false;
        setTimeout(typeWriter, 500); // Pause before retyping
    }
}

// Start the typewriter effect when the page loads
window.onload = function() {
    typeWriter();
};

// Find all elements with the cta-button class
const ctaButtons = document.querySelectorAll('.cta-button');

// Add scroll functionality to each button
ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default behavior if button is in a form or link
        
        // Get current scroll position and viewport height
        const currentPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        
        // Scroll to next viewport
        window.scrollTo({
            top: currentPosition + viewportHeight*1.13,
            behavior: 'smooth'
        });
    });
});

// Optional: Hide button when reaching bottom of page
window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    ctaButtons.forEach(button => {
        if (scrollPosition + viewportHeight >= totalHeight - 100) {
            button.style.opacity = '0';
            button.style.pointerEvents = 'none';
        } else {
            button.style.opacity = '1';
            button.style.pointerEvents = 'auto';
        }
    });
});

particlesJS('particles-js', {
    particles: {
        number: {
            value: 75,
            density: {
                enable: true,
                value_area: 1300
            }
        },
        color: {
            value: ["#ff00dd", "#7c03c2", "#00eeff"]
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: .7,
            random: true
        },
        size: {
            value: 2,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 200,
            color: "#ff00dd",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
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

particlesJS('particles-js', {
    particles: {
        number: {
            value: 75,
            density: {
                enable: true,
                value_area: 1300
            }
        },
        color: {
            value: ["#ff00dd", "#7c03c2", "#00eeff"]
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: .7,
            random: true
        },
        size: {
            value: 2,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 200,
            color: "#ff00dd",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
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