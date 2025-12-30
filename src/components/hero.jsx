import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function Hero({ children }) {
  return (
    <div
      className="relative min-h-[calc(100vh-1rem)] flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20 w-full px-4 sm:px-6">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )} />
      <div className="relative z-10 text-center max-w-3xl w-full">
        {children}
      </div>
    </div>
  );
}

export function Title({ children }) {
  return (
    <h1
      className="mt-2 sm:mt-3 md:mt-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold tracking-tight px-1">
      {children}
    </h1>
  )
}

export function Subtitle({ children }) {
  return (
    <p className="mt-1.5 sm:mt-2 md:mt-3 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-primary">
      {children}
    </p>
  )
}

export function Description({ children }) {
  return (
    <p className="mt-2 sm:mt-3 md:mt-4 text-[11px] sm:text-xs md:text-sm lg:text-base text-foreground/80 max-w-2xl mx-auto leading-relaxed px-2">
      {children}
    </p>
  )
}

export function LocationBadge({ location }) {
  return (
    <Badge variant="secondary" className="rounded-full py-0.5 px-2 border-border text-[10px] sm:text-xs">
      <span className="flex items-center gap-1">
        <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
        {location}
      </span>
    </Badge>
  )
}

export function ButtonSocial({ name, href }) {
  return (
    <Button variant="shiny" size="sm" asChild>
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
        {name}
        <ArrowUpRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4" />
      </a>
    </Button>
  )
}

