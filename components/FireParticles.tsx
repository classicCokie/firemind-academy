import Particles from 'react-particles-js';

const FireParticles = () => (
    <Particles
        params={{
            "particles": {
                "number": {
                    "value": 500,
                    "density": {
                        "enable": true,
                        "value_area": 3000
                    }
                },
                "color": {
                    "value": "#fc0000"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 3
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 200,
                        "height": 200
                    }
                },
                "opacity": {
                    "value": 1,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 0.6,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "size_min": 0,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 500,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 2
                },
                "move": {
                    "enable": true,
                    "speed": 4,
                    "direction": "top",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 4,
                        "duration": 0.3,
                        "opacity": 1,
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        }

        }
        style={
            {
                position: "absolute"
            }
        } />
)

export default FireParticles;
