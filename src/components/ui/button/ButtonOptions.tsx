import React from 'react'

export const ButtonOptions = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="flex items-center justify-center gap-2 flex-1 bg-white text-sm text-black py-2 px-4 rounded-xl border border-gray-300 outline-1 outline-outline-custom shadow-md">
      {children}
    </button>
  )
}