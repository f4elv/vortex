import PixelTrail from "../PixelTrail";

export default function Interactive() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32 relative overflow-hidden">
      <div className="absolute inset-0 z-10">
        <PixelTrail
          gridSize={50}
          trailSize={0.1}
          maxAge={250}
          interpolate={5}
          color="#fff"
          gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
        />
      </div>
      <div className="max-w-5xl w-full flex flex-col text-center items-center relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Sites Imersivos
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-purple-600 font-bold mb-6">
          Uma experiência que prende sua atenção
        </h2>
        <p className="leading-relaxed mb-8 text-sm sm:text-base">
          Interfaces fluidas, animações modernas e comportamento inteligente.
        </p>
        <ul className="space-y-3 text-sm sm:text-base">
          <li>• Animações suaves</li>
          <li>• Interações comportamentais</li>
          <li>• Efeitos modernos</li>
        </ul>
      </div>
    </section>

  );
}

