import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-secGreen border-2 border-secGreen transition-colors hover:bg-white hover:text-secGreen hover:border-secGreen h-fit w-max py-1 px-3 rounded-full text-white font-semibold ${props.className || ''}`}
    >
      {text}
    </button>
  );
};

export default Button;
