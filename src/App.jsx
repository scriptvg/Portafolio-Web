import AppRouter from "./router/AppRouter"
import { ThemeProvider } from "./components/ThemeProvider"
import { Toaster } from "@/components/ui/sonner"

function App() {


  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange>
      <AppRouter />
      <Toaster richColors />
    </ThemeProvider>

  )
}

export default App
