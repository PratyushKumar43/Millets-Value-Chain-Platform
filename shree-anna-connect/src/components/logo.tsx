import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  clickable?: boolean;
}

export function Logo({ className, size = "md", clickable = true }: LogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6 text-sm",
    md: "w-8 h-8 text-base", 
    lg: "w-12 h-12 text-xl"
  };

  const logoContent = (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className={cn(
        "bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold",
        sizeClasses[size]
      )}>
        SA
      </div>
      <span className={cn(
        "font-bold text-dark-blue-800",
        size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl"
      )}>
        Shree Anna Connect
      </span>
    </div>
  );

  if (clickable) {
    return (
      <Link href="/" className="hover:opacity-80 transition-opacity">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
