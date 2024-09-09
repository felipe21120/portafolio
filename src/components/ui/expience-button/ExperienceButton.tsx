'use client'

import { useState } from 'react';
import Image from 'next/image';

export const ExperienceButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative flex flex-row items-center justify-around mt-6 gap-4">
      <Image
        src="/Globant.png"
        alt="Globant"
        width={35}
        height={35}
        className="rounded-full"
      />
      <button onClick={handleButtonClick}>
        <h3 className="font-semibold">Globant</h3>
        <p className="font-light">Trainee</p>
      </button>
      <div className="ml-10">
        <p className="font-light">2023 - 2024</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute top-full left-0 z-50 w-full bg-white p-4 rounded-3xl shadow-lg border border-gray-300">
          <h2 className=" font-semibold mb-2">Globant</h2>
          <p className='text-sm font-light'>Experiencia en globant</p>
          <button
            onClick={handleCloseModal}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
};
