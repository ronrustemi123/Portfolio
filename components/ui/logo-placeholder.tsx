import { cn } from "@/lib/utils";

interface LogoPlaceholderProps {
  className?: string;
  shape?: "square" | "circle";
  bgColor?: string;
  text?: string;
}

export function LogoPlaceholder({
  className,
  shape = "square",
  bgColor = "bg-muted",
  text,
}: LogoPlaceholderProps) {
  const shapeClass = shape === "circle" ? "rounded-full" : "rounded";

  return (
    <div
      className={cn(
        "flex items-center justify-center text-xs font-bold text-foreground",
        shapeClass,
        bgColor,
        className
      )}
    >
      {text || "Logo"}
    </div>
  );
}

