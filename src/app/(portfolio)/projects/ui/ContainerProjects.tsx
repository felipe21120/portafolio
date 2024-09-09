import Image from 'next/image';
import React from 'react';

export const ContainerProjects = () => {
  return (
    <div className="flex flex-row gap-4 justify-center items-center text-center mt-10">
      <div className="w-1/3 p-4 bg-gray-50 shadow-lg rounded-lg border border-gray-300">
        <h2 className="text-lg font-semibold mb-2">Lechongori</h2>
        <Image 
            src="/lechongori-logo.jpg"
            alt='Lechongori'
            width={200}
            height={200}
            className=''
        />
        <button className='border border-gray-200 bg-white rounded-lg py-2 w-full'>
            <h3 className='tetx-sm font-semibold'>Ver sitio web</h3>
        </button>
      </div>
      <div className="w-1/3 p-4 bg-white shadow-lg rounded-lg border border-gray-300">
        <h2 className="text-lg font-semibold mb-2">Teslo Shop</h2>
        <p className="text-sm text-gray-600">Aquí puedes agregar información sobre tu proyecto.</p>
      </div>
      <div className="w-1/3 p-4 bg-white shadow-lg rounded-lg border border-gray-300">
        <h2 className="text-lg font-semibold mb-2">Proximamente mas...</h2>
        <p className="text-sm text-gray-600">Aquí puedes agregar información sobre tu proyecto.</p>
      </div>
    </div>
  );
};

