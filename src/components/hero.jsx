import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <div
      className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20 w-full px-4 sm:px-6">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )} />
      <div className="relative z-10 text-center max-w-3xl w-full">
        <Badge variant="secondary" className="rounded-full py-0.5 px-2 border-border text-[10px] sm:text-xs">
          <span className="flex items-center gap-1">
            <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
            Costa Rica
          </span>
        </Badge>
        <h1
          className="mt-2 sm:mt-3 md:mt-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold tracking-tight px-1">
          Allan José Vélez González
        </h1>
        <p className="mt-1.5 sm:mt-2 md:mt-3 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-primary">
          Desarrollador Full Stack
        </p>
        <p className="mt-2 sm:mt-3 md:mt-4 text-[11px] sm:text-xs md:text-sm lg:text-base text-foreground/80 max-w-2xl mx-auto leading-relaxed px-2">
          Especializado en React y Django, egresado de un bootcamp intensivo de 6 meses orientado al desarrollo web profesional.
          Apasionado por la creación de soluciones eficientes, escalables y centradas en el usuario.
        </p>
        <div className="mt-4 sm:mt-6 md:mt-8 flex items-center justify-center gap-2 flex-wrap px-2">
          <Button variant="shiny" size="sm" className="rounded-full text-[11px] sm:text-xs md:text-sm px-3 sm:px-4 md:px-5 h-8 sm:h-9 md:h-10" asChild>
            <a href="https://www.linkedin.com/in/allan-josé-vélez-gonzález" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              LinkedIn
              <ArrowUpRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-[11px] sm:text-xs md:text-sm shadow-none px-3 sm:px-4 md:px-5 h-8 sm:h-9 md:h-10"
            asChild>
            <a href="mailto:velezalan34@gmail.com">
              Contactar
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
