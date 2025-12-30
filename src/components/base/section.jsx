import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";

export const sectionVariants = cva(
  "py-6 sm:py-10 md:py-14 px-4 sm:px-6 bg-muted/30",
  {
    variants: {
      variant: {
        default: "py-6 sm:py-10 md:py-14 px-4 sm:px-6 bg-muted/30",
        dark: "py-6 sm:py-10 md:py-14 px-4 sm:px-6 bg-muted/30",
      },
    },
  }
)



export function Section({
  initial,
  animate,
  transition,
  className,
  variant = "default",
  ...props
}) {
  return (
    <motion.section
      {...props}
      className={cn(sectionVariants({ variant }), className)}
      initial={initial}
      animate={animate}
      transition={transition}
    />
  )
}
