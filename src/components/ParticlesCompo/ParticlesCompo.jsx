import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesCompo = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={
                {
                    name: "React Night Sky",
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                        },
                        modes: {
                            push: {
                                quantity: 1,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#FFF",
                        },
                        links: {
                            blink: false,
                            color: {
                                value: "#fff",
                            },
                            consent: false,
                            distance: 150,
                            enable: true,
                            opacity: 0.02,
                            shadow: {
                                blur: 5,
                                color: {
                                    value: "lime",
                                },
                                enable: false,
                            },
                            width: 1,
                        },
                        move: {
                            attract: {
                                enable: false,
                                rotate: {
                                    x: 3000,
                                    y: 3000,
                                },
                            },
                            direction: "right",
                            enable: true,
                            outModes: "bounce",
                            speed: 0.05,
                        },
                        collisions: {
                            enable: true,
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            limit: -1,
                            value: 300,
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                speed: 1,
                                sync: false,
                            },
                            value: {
                                min: 0.05,
                                max: 0.6,
                            },
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: 2.5,
                        },
                    },
                    pauseOnBlur: true,
                    background: {
                        color: "#050810",
                        image: "",
                        position: "50% 50%",
                        repeat: "no-repeat",
                        size: "cover",
                    },
                }

}
/>
    );
};

export default ParticlesCompo;