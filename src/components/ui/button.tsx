import React, { forwardRef } from "react";

interface BlurButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const BlurButton = forwardRef<HTMLButtonElement, BlurButtonProps>(
  ({ className = "", variant = "default", size = "md", children, ...props }, ref) => {
    const baseStyles = `
      relative 
      overflow-hidden 
      backdrop-blur-md 
      bg-white/20 
      dark:bg-black/20 
      border 
      border-white/30 
      dark:border-white/10 
      rounded-xl 
      font-medium 
      transition-all 
      duration-300 
      ease-out
      hover:bg-white/30 
      dark:hover:bg-black/30 
      hover:border-white/50 
      dark:hover:border-white/20
      hover:shadow-lg 
      hover:shadow-white/20 
      dark:hover:shadow-black/20
      active:scale-95
      focus:outline-none 
      focus:ring-2 
      focus:ring-blue-500/50
      before:absolute 
      before:inset-0 
      before:bg-gradient-to-r 
      before:from-transparent 
      before:via-white/10 
      before:to-transparent 
      before:translate-x-[-100%] 
      before:transition-transform 
      before:duration-700
      hover:before:translate-x-[100%]
      after:absolute
      after:inset-0
      after:bg-gradient-to-r
      after:from-blue-500/20
      after:via-purple-500/20
      after:to-pink-500/20
      after:opacity-0
      after:transition-opacity
      after:duration-300
      hover:after:opacity-100
    `;

    const variantStyles = {
      default: "text-gray-800 dark:text-gray-200",
      primary: "text-blue-600 dark:text-blue-400 border-blue-500/30 hover:border-blue-500/50",
      secondary: "text-purple-600 dark:text-purple-400 border-purple-500/30 hover:border-purple-500/50",
    };

    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim()}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

BlurButton.displayName = "BlurButton";

export default BlurButton;