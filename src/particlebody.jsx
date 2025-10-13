import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

function ParticuleBody () {

    const particleInitial = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);


    // const particleLoaded = useCallback(async (container) => {
    //     console.log(container);
    // }, []);

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#e2e8f0" //couleur de l'arriere plan #0d47
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick : {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                         mode: "repulse",      
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 70,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#60a5fa", // couleur des particules #ffffff ou #0d47    ou  86efac
                },
                links: {
                    color: "#60a5fa", // couleurs des lignes 93c5fd 60a5fa
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 200,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    // Forme des particules (circle, square, triangle, etc.)
                    type: "circle", // Forme des particules (circle, square, triangle, etc.)
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
        }),
        []
    );

    return <Particles init={particleInitial} options={options} />;

}
export default ParticuleBody