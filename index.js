const text = "Hardik";
const typingSpeed = 150; // Speed in milliseconds
const delayBetweenLoops = 2000; // Delay between loops (2 seconds)
let index = 0;

const typeWriter = () => {
    const heroTitle = document.getElementById('heroTitle');
    

    // Add one letter at a time
    if (index < text.length) {
        heroTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed); // Call the function recursively
    } else {
        // After the full text is typed, wait for some time before clearing the text and starting over
        setTimeout(() => {
            heroTitle.textContent = '';  // Clear the text
            index = 0;                   // Reset index to 0
            typeWriter();                 // Start typing again
        }, delayBetweenLoops);
    }
};

// Start the typing effect after the page loads
window.onload = () => {
    typeWriter();
};
// Particle.js configuration
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



