import Image from "next/image";

export default function Landing() {
  return (
    <section className="w-screen h-screen flex items-center justify-center px-12">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-6xl font-extrabold mb-4">Landing Pages</h1>
          <h2 className="text-xl text-purple-600 mb-6">
            Estruturas feitas para converter.
          </h2>

          <p className="text-white/70 leading-relaxed mb-8">
            Desenvolvemos páginas com narrativa clara e CTAs estratégicos,
            perfeitas para lançamentos, produtos e campanhas.
          </p>

          <ul className="space-y-3 text-white/80">
            <li>• Layout com foco no objetivo</li>
            <li>• Hierarquia de informação otimizada</li>
            <li>• CTAs chamativos e persuasivos</li>
          </ul>
        </div>

    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <Image
        src="/landingImage.png"
        alt="Landing preview"
        fill
        className="object-cover"
      />
    </div>

      </div>
    </section>
  );
}
