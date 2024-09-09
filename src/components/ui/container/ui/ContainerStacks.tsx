'use client'

import React from 'react'
import { ButtonOptions } from '../../button/ButtonOptions'
import { MagicCard } from '@/components/magicui/magic-card'
import { useTheme } from 'next-themes';
import { ButtonSmall } from '../../button/ButtonSmall';
import { PiProjectorScreen } from 'react-icons/pi';
import { MdWork } from 'react-icons/md';
import { OrbitingCirclesDemo } from '../../magic/orbiting/orbiting-circle';
import { IoMdContact } from 'react-icons/io';
import { FiDownload } from 'react-icons/fi';
import { IoReaderOutline } from 'react-icons/io5';
import { CardProject } from '../../card/CardProject';
import { FaBookOpen } from 'react-icons/fa';
import Link from 'next/link';


export const ContainerStacks = () => {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={
          "flex h-[500px] w-full flex-col gap-4 lg:h-[310px] lg:flex-row"
        }
      >


        <MagicCard
          className="cursor-pointer flex-col shadow-2xl whitespace-nowrap"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <Link href="/projects">
          <div className="flex flex-col h-full py-4 px-8">
            <div>
              <div className="flex flex-row justify-between w-full gap-2">
                <ButtonSmall><PiProjectorScreen /> Proyectos</ButtonSmall>
              </div>
              <div className="flex flex-row items-center justify-around mt-6 gap-4">
                <CardProject />
              </div>
            </div>
          </div>
          </Link>
          
        </MagicCard>

        <div className='gap-2'>
          
          <MagicCard
            className="cursor-pointer flex-col shadow-2xl whitespace-nowrap h-24 mb-6"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            

              <div className="flex flex-col justify-center items-center h-full px-4 ">
              <Link href="/">
              <div className='flex flex-row items-center justify-center mt-6'>
                <ButtonSmall><FaBookOpen className='w-4 h-4' />Estudios</ButtonSmall>
               </div>
              </Link>
                
              </div>
      
            
          </MagicCard>



          <MagicCard
            className="cursor-pointer flex-col shadow-2xl whitespace-nowrap h-48"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="flex flex-col justify-center items-center h-full pb-4">
            <ButtonSmall><IoMdContact className='w-4 h-4' />Contact</ButtonSmall>
              <div>
                <h3 className='font-light text-gray-600 text-sm mt-6 text-center'>¿Necesitas crear tu pagina web?
                  <span className='font-medium block'>Contactame</span>
                </h3>

              </div>

            </div>
            <div className="flex justify-between mt-6 gap-4 w-full px-4">
              <ButtonOptions> <FiDownload className="h-4 w-4" />Descargar CV</ButtonOptions>
              <ButtonOptions > <IoReaderOutline className="w-4 h-4" />Leer CV</ButtonOptions>
            </div>
          </MagicCard>

        </div>






        <MagicCard
          className="cursor-pointer flex-col shadow-2xl whitespace-nowrap"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <Link href="/stacks">
          <div className="flex flex-col h-full py-4 px-8">
            <div>
              <div className="flex flex-col justify-between w-full gap-2">
                <div>
                  <ButtonSmall><MdWork /> Stacks</ButtonSmall>
                </div>
                <div className='mt-3'>
                  <OrbitingCirclesDemo />
                </div>

              </div>
            </div>
          </div>
          </Link>
          
        </MagicCard>
      </div>

    </>

  )
}
