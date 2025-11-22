import AppRouter from "./router/AppRouter"
import { ThemeProvider } from "./components/ThemeProvider"
import { Toaster } from "@/components/ui/sonner"
import { HelmetProvider } from 'react-helmet-async';

function App() {


  return (
    <HelmetProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <AppRouter />
        <Toaster richColors />
      </ThemeProvider>
    </HelmetProvider>

  )
}

export default App
