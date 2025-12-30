import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { Copy, Check, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function CopyEmail({ email }) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
    toast.success("Email copied to clipboard")
  }

  return (
    <Button size='sm' onClick={handleCopy} asChild>
      <motion.button >
        {isCopied ? <Check /> : <Mail />}
        {email}
      </motion.button>
    </Button>
  )
}
