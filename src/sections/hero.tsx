import Particles from "@/components/Particles";

export default function Hero() {
    return (
        <section className="relative w-screen h-[95vh] flex justify-center items-center overflow-hidden">
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
            <div className="pointer-events-none px-32 relative z-10 flex flex-col justify-center items-center">
                <h1 className="text-9xl ">Vortex</h1>
                <p className="text-3xl mb-8">Uma agência que gira em torno do <span className="text-sky-600">seu sucesso</span></p>
            </div>
        </section>
    );
}
