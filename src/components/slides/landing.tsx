import Image from "next/image";

export default function Landing() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 py-12 sm:px-12 md:px-20 lg:px-32 ">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Landing Pages
          </h1>
          <h2 className="text-lg sm:text-xl text-purple-600 font-bold mb-6">
            Estruturas feitas para converter.
          </h2>
          <p className="leading-relaxed mb-8 text-sm sm:text-base">
            Desenvolvemos páginas com narrativa clara e CTAs estratégicos.
          </p>
          <ul className="space-y-3 text-sm sm:text-base">
            <li>• Layout com foco no objetivo</li>
            <li>• Hierarquia de informação otimizada</li>
            <li>• CTAs chamativos</li>
          </ul>
        </div>
        <div className="relative w-full h-64 sm:h-80 md:h-full rounded-2xl overflow-hidden">
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
