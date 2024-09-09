import React from 'react'


export const ButtonSmall = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="flex items-center justify-center gap-2 bg-white text-sm text-black py-2 px-4 rounded-3xl border border-gray-300 outline-1 outline-outline-custom shadow-sm">
        {children}
    </button>
  )
}
