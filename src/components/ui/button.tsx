import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

export default function Button({ 
  children, 
  onClick, 
  disabled = false, 
  className,
  type = 'button',
  'aria-label': ariaLabel
}: Readonly<ButtonProps>) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={clsx(
        // Base styles
        'px-6 py-3 font-medium rounded-lg transition-colors duration-200',
        // Colors and states
        'bg-blue-600 hover:bg-blue-700 active:bg-blue-800',
        'dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700',
        'text-white',
        // Focus styles
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        'dark:focus:ring-offset-gray-800',
        // Disabled styles
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600',
        'dark:disabled:hover:bg-blue-500',
        // Custom className
        className
      )}
    >
      {children}
    </button>
  );
}
