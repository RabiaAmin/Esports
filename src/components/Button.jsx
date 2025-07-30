import React from "react";

function Button({ title, id, rightIcon, leftIcon, containerClass }) {
  return (
    <div
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-voilet-50 px-7 py-3 text-black flex items-center gap-2 ${containerClass}`}
    >
      {leftIcon}
      <span className="font-general text-xs uppercase">{title}</span>
      {rightIcon}
    </div>
  );
}

export default Button;
