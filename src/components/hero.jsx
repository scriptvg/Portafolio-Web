import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <div
      className="relative min-h-[600px] sm:min-h-[700px] md:min-h-[800px] flex items-center justify-center px-4 sm:px-6 overflow-hidden py-12 sm:py-16">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )} />
      <div className="relative z-10 text-center max-w-3xl w-full">
        <Badge variant="secondary" className="rounded-full py-1 px-3 border-border text-xs sm:text-sm">
          <span className="flex items-center gap-1 sm:gap-2">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Esparza, Puntarenas,</span> Costa Rica
          </span>
        </Badge>
        <h1
          className="mt-4 sm:mt-6 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-tight md:leading-[1.2] font-semibold tracking-tighter px-2">
          Allan José Vélez González
        </h1>
        <p className="mt-3 sm:mt-4 text-xl xs:text-2xl md:text-3xl font-medium text-primary">
          Desarrollador Full Stack
        </p>
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-foreground/80 max-w-2xl mx-auto px-4">
          Especializado en React y Django, egresado de un bootcamp intensivo de 6 meses orientado al desarrollo web profesional. 
          Apasionado por la creación de soluciones eficientes, escalables y centradas en el usuario.
        </p>
        <div className="mt-8 sm:mt-12 flex items-center justify-center gap-2 sm:gap-4 flex-wrap px-4">
          <Button size="default" className="rounded-full text-sm sm:text-base" asChild>
            <a href="https://www.linkedin.com/in/allan-velez" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 sm:gap-2">
              <span className="hidden xs:inline">LinkedIn</span>
              <span className="xs:hidden">In</span>
              <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="default"
            className="rounded-full text-sm sm:text-base shadow-none"
            asChild>
            <a href="mailto:velezalan34@gmail.com">
              Contactar
            </a>
          </Button>
          <Button
            variant="outline"
            size="default"
            className="rounded-full text-sm sm:text-base shadow-none hidden xs:flex"
            asChild>
            <a href="tel:+50684813021">
              +506 8481 3021
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
