import React from 'react'
import { FaFacebook, FaFacebookF, FaFigma, FaTwitter } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiArrowUpRight } from 'react-icons/fi'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiGithubFill, RiLinkedinFill,} from 'react-icons/ri'

export const SocialMedia = () => {
  return (
    <div className="flex space-x-5 mt-6 cursor-pointer">
      {/* Icono de Facebook */}
      <div className="relative group">
        <FaFacebook className="h-6 w-6 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
        <FiArrowUpRight className="h-6 w-6 absolute inset-0 transition-transform transform scale-90 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:duration-300" />
      </div>

      {/* Icono de Twitter */}
      <div className="relative group">
        <FaXTwitter className="h-6 w-6 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
        <FiArrowUpRight className="h-6 w-6 absolute inset-0 transition-transform transform scale-90 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:duration-300" />
      </div>

      {/* Icono de LinkedIn */}
      <div className="relative group">
        <RiLinkedinFill className="h-6 w-6 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
        <FiArrowUpRight className="h-6 w-6 absolute inset-0 transition-transform transform scale-90 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:duration-300" />
      </div>

      {/* Icono de GitHub */}
      <div className="relative group">
        <RiGithubFill className="h-6 w-6 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
        <FiArrowUpRight className="h-6 w-6 absolute inset-0 transition-transform transform scale-90 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:duration-300" />
      </div>

      {/* Icono de Figma */}
      <div className="relative group">
        <FaFigma className="h-6 w-6 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
        <FiArrowUpRight className="h-6 w-6 absolute inset-0 transition-transform transform scale-90 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:duration-300" />
      </div>

      {/* Icono de Email */}
      <div className="relative group">
        <MdOutlineMailOutline className="h-6 w-6 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
        <FiArrowUpRight className="h-6 w-6 absolute inset-0 transition-transform transform scale-90 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:duration-300" />
      </div>

      {/* Icono de Documento */}
      <div className="relative group">
        <IoDocumentTextOutline className="h-6 w-6 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
        <FiArrowUpRight className="h-6 w-6 absolute inset-0 transition-transform transform scale-90 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:duration-300" />
      </div>
    </div>
  );
};

