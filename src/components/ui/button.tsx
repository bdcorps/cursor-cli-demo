import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  onClick, 
  disabled = false, 
  className = '',
  type = 'button'
}: Readonly<ButtonProps>) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3 
        bg-blue-600 hover:bg-blue-700 active:bg-blue-800
        dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700
        text-white font-medium 
        rounded-lg 
        transition-colors duration-200 
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        dark:focus:ring-offset-gray-800
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </button>
  );
}
