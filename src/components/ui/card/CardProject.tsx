import Image from 'next/image';
import React from 'react';

export const CardProject = () => {
    return (
        <>
            <div className="relative group w-[200px] h-[140px] mt-5">
                {/* 
                <Image
                    src="/bd-naranja.jpg"
                    alt="Imagen secundaria"
                    height={140}
                    width={200}
                    className="absolute top-0 left-0 rounded-lg transition-transform duration-300 group-hover:blur-sm"
                    style={{ transform: 'rotate(5deg)', zIndex: 30 }}
                />
                <Image
                    src="/lechongori.png"
                    alt="Imagen secundaria"
                    height={140}
                    width={200}
                    className="absolute top-0 left-0 rounded-lg transition-transform duration-300 group-hover:blur-sm"
                    style={{ transform: 'rotate(10deg)', zIndex: 20 }}
                /> */}
                

                {/* Imagen principal */}
                <Image
                    src="/lechongori-logo.jpg"
                    alt="Imagen principal"
                    height={140}
                    width={200}
                    className="absolute top-0 left-0 rounded-lg transition-transform duration-300 group-hover:blur-sm"
                    style={{ zIndex: 40 }}
                />

                {/* Botón */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    <button className="bg-white py-2 px-4 rounded-lg shadow-lg text-sm">
                        Ir a Proyectos
                    </button>
                </div>
            </div>


            {/**
             *  <div className='flex flex-row mt-2'>
                <div className="z-40 bg-blue-400 rounded-full p-4">05</div>
                <div className="z-30 bg-red-400 rounded-full p-4 -ml-4">04</div>
                <div className="z-20 bg-green-400 rounded-full p-4 -ml-4">03</div>
                <div className="z-10 bg-slate-400 rounded-full p-4 -ml-4">02</div>
                <div className="z-0 bg-amber-600 rounded-full p-4 -ml-4">01</div>
            </div>
             */}

        </>

    );
};
