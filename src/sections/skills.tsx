import Carrossel from "@/components/Carrossel";

import Creative from "@/components/slides/creative";
import Landing from "@/components/slides/landing";
import Dashboard from "@/components/slides/dashboard";
import Interactive from "@/components/slides/interactive";

export default function Page() {
  const slides = [
    <Creative key="1" />,
    <Interactive key="2" />,
    <Landing key="3" />,
    <Dashboard key="4" />,
  ];

  return (
    <section className="relative w-screen h-screen overflow-hidden">
        <Carrossel slides={slides} />
            <div className="absolute bottom-0 z-10 w-screen h-5 bg-gradient-to-t from-white/20 to-transparent mt-2 animate-pulse"></div>
    </section>
  )
}
