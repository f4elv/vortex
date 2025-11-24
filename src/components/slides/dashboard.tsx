import Image from "next/image";

export default function Dashboard() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 py-12 sm:px-12 sm:py-12 md:px-20 lg:px-32">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Dashboards inteligentes
          </h1>
          <h2 className="text-lg sm:text-xl text-purple-600 font-bold mb-6">
            Visualização intuitiva para decisões rápidas.
          </h2>
          <ul className="space-y-3 text-sm sm:text-base">
            <li>• Interfaces limpas</li>
            <li>• Gráficos modernos</li>
            <li>• Informações apresentadas com clareza</li>
          </ul>
        </div>
        <div className="relative w-full h-64 sm:h-80 md:h-full rounded-2xl overflow-hidden">
          <Image
            src="/dashboardImage.png"
            alt="Dashboard preview"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
