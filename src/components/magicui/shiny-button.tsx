"use client";

import { motion, type AnimationProps } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

interface ShinyButtonProps {
  text: string;
  className?: string;
  uppercase?: boolean; // Nuevo prop para controlar mayúsculas
}

const ShinyButton = ({
  text = "shiny-button",
  className,
  uppercase = false, // Valor por defecto en true para mantener el comportamiento actual
}: ShinyButtonProps) => {
  return (
    <motion.button
      {...animationProps}
      className={cn(
        "relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]",
        className,
      )}
    >
      <span
        className={cn(
          "relative block h-full w-full pl-1 text-sm tracking-wide",
          {
            "text-[rgba(0,0,0,0.86)] dark:text-[rgb(255,255,255,75%)]": true, // Texto más oscuro
            "uppercase": uppercase, // Condicional para mayúsculas
          }
        )}
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}
      >
        {text}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/40%)_calc(var(--x)+20%),hsl(var(--primary)/60%)_calc(var(--x)+25%),hsl(var(--primary)/40%)_calc(var(--x)+100%))] p-px" // Borde aún más oscuro
      ></span>
      
      {/* Botón verde pequeño con animación */}
      <div className="absolute top-4 left-3 transform -translate-y-1/2 bg-green-400 px-1 py-1 rounded animate-move-up-down"></div>
    </motion.button>
  );
};

export default ShinyButton;
