import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-9 w-16 items-center rounded-full border border-border bg-muted/50 hover:bg-muted transition-colors"
      aria-label="Toggle theme"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Toggle Circle */}
      <motion.div
        className="absolute h-7 w-7 rounded-full bg-background border border-border shadow-sm flex items-center justify-center"
        initial={false}
        animate={{
          x: isDark ? 30 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="h-4 w-4 text-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="h-4 w-4 text-primary" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Background Icons */}
      <div className="flex items-center justify-between w-full px-2">
        <Sun className="h-3 w-3 text-muted-foreground/50" />
        <Moon className="h-3 w-3 text-muted-foreground/50" />
      </div>
    </motion.button>
  )
}
