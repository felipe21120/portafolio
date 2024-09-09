import { CircleInThePage, ContainerPage, DockDemo, MagicCard, MagicCardDemo, Meteors, OrbitingCirclesDemo, SocialMedia, SubTitle, Title } from "@/components";
import "../globals.css";

import ShinyButton from "@/components/magicui/shiny-button";
import { BorderBeamDemo } from "@/components/ui/magic/border/Border";





export default function Home() {
  return (
    <div>
      <Title
        title="Andrés Felipe Prada Borja"
        className="font-bold text-2xl mb-4"
      />
      <SubTitle
        subtitle="Soy desarrollador web y Front-end"
        classname="text-sm mb-6"
      />

      
      <ShinyButton
        text="Disponible para proyectos"
      />

      <SocialMedia />

      <MagicCardDemo />

      <ContainerPage />


      <DockDemo />
      



    </div>
  );
}