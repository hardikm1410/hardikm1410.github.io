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