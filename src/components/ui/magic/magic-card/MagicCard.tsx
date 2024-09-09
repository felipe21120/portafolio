'use client'

import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { ButtonSmall } from "../../button/ButtonSmall";
import Image from "next/image";
import Meteors from "@/components/magicui/meteors";
import { ButtonOptions } from "../../button/ButtonOptions";
import { FiDownload } from "react-icons/fi";
import { IoReaderOutline } from "react-icons/io5";
import { MdWork, MdWorkOutline } from "react-icons/md";
import { PiProjectorScreen } from "react-icons/pi";
import { CardProject } from "../../card/CardProject";
import { BorderBeam } from "@/components/magicui/border-beam";
import Link from "next/link";
import { ExperienceButton } from "../../expience-button/ExperienceButton";

export function MagicCardDemo() {
  const { theme } = useTheme(); 
  return (
    <div
      className={
        "flex h-[500px] w-full flex-col gap-4 lg:h-[300px] lg:flex-row mt-20"
      }
      
    >
      
      <MagicCard
        className="cursor-pointer flex-col shadow-2xl whitespace-nowrap "
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <Link href="/sobre-mi">
           {/** <BorderBeam size={200} duration={12} delay={9}/>*/} 
        <div className="flex flex-col h-full py-4 px-8">
          <div>
            <div className="flex flex-row justify-between w-full gap-2">
              <ButtonSmall><PiProjectorScreen /> Sobre mí</ButtonSmall>
            </div>
            <div className="flex flex-col mt-6 ">
              <h2 className="text-sm font-light text-gray-600 mb-2">26/08/2024</h2>
              <h3 className="font-semibold">Desarrollador Web</h3>
              <div className="flex flex-row gap-2 mt-3 font-light text-sm w-20">
                <ButtonOptions>React</ButtonOptions>
                <ButtonOptions>Next JS</ButtonOptions>
                <ButtonOptions>Figma</ButtonOptions>
              </div>
              <p className="text-sm font-light my-7">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, 
                <span className="block">consectetur, adipisci velit...</span>
              </p>
              
            </div>
          </div>
        </div>
        </Link>
      
      </MagicCard>

      

      <MagicCard
        className="cursor-pointer flex-col shadow-2xl whitespace-nowrap bg-[#ffffff]"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        style={{ backgroundColor: "hsla(0, 0%, 98%, 0.7)" }}
      >
          <div className="flex flex-col h-full py-4 px-8">
            <div>
              <div className="flex flex-row justify-between w-full gap-2">
                <ButtonSmall><MdWork /> Experiencia</ButtonSmall>
              </div>
              <ExperienceButton />
            </div>
          </div>
          <div className="flex justify-between mt-6 gap-4 w-full px-4">
            <ButtonOptions> <FiDownload className="h-4 w-4"/>Descargar CV</ButtonOptions>
            <ButtonOptions > <IoReaderOutline className="w-4 h-4"/>Leer CV</ButtonOptions>
          </div>
        <Meteors />
        


      </MagicCard>
      
    </div>
  );
}