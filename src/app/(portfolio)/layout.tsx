

export default function PortafolioLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Fondo con z-[-50] para asegurarse de que esté detrás de todo */}
      <div className="fixed inset-0 -z-50 ">
        {/* Círculo de fondo con degradado y z-[-40] para estar detrás del contenido pero sobre el fondo blanco */}
        <div className="absolute top-0 right-0 h-[600px] w-[650px] -translate-x-[20%] translate-y-[20%] rounded-full bg-gradient-to-r from-[rgba(173,109,244,0.5)] to-[rgba(0,150,255,0.5)] opacity-50 blur-[80px] z-[-40]"></div>
      </div>

      {/* Contenido con z-[0] o superior */}
      <div className="relative z-0 px-0 sm:px-0 md:px-0 lg:px-80 lg:pt-20">
        {children}
      </div>
    </main>
  );;
}