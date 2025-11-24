"use client";

import Particles from "@/components/Particles";
import Button from "@/components/ui/button";
import Blur from "@/components/ui/blur";
import Light from "@/components/ui/light";

export default function Hero() {
    return (
        <section id="Hero" className="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8 md:px-16 lg:px-32">
            <Blur />
            <div className="absolute inset-0 z-0 pointer-events-auto">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.2}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    particleHoverFactor={1.5}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            <div className="pointer-events-none relative z-10 flex flex-col items-center gap-6 max-w-[900px] text-center">
                <p className="text-purple-600 sm:text-lg md:text-xl">
                    Uma agência de desenvolvimento web criando experiências imersivas, únicas.
                </p>
                <h1 className="font-bold text-6xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
                    VORTEX
                </h1>
                <p className="text-sm sm:text-base md:text-lg max-w-[700px]">
                    Criamos e desenvolvemos sites cinematográficos de alto desempenho com visuais impactantes,
                    interações fluídas e imersivas; cada scroll, cada pixel, é uma história, intencional.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
                    <Button
                        variant="primary"
                        className="pointer-events-auto w-full sm:w-auto"
                        onClick={() =>
                            document.getElementById("About")?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Entre no fluxo
                    </Button>

                    <Button
                        variant="secondary"
                        className="pointer-events-auto w-full sm:w-auto"
                        onClick={() =>
                            document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Começe um novo projeto
                    </Button>
                </div>
            </div>
            <div className="absolute bottom-0 flex flex-col items-center pb-6 pointer-events-none">
                <span className="text-sm text-stone-100/70 mb-3">Siga a luz</span>
                <Light />
            </div>
        </section>
    );
}
