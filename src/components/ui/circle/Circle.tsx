import React from "react";

interface CircleProps {
  x: string;
  y: string;
  color?: string;
  size?: string;
}

export const CircleInThePage: React.FC<CircleProps> = ({
  x,
  y,
  color = "bg-blue-500",
  size = "w-16 h-16",
}) => {
  return (
    <div
      className={`fixed ${x} ${y} ${color} ${size} rounded-full`}
      style={{ transform: "translate(-50%, -50%)" }}
    ></div>
  );
};
