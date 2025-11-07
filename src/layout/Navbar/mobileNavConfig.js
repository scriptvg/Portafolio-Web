import { Home, Briefcase, Mail, Github, Linkedin, Twitter, TrendingUp, Award } from 'lucide-react'

export const iconMap = {
  'Inicio': Home,
  'Proyectos': Briefcase,
  'Contacto': Mail,
}

export const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-[#333] dark:hover:text-white' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-[#0077b5]' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-[#1DA1F2]' },
]

export const stats = [
  { icon: Briefcase, value: '12+', label: 'Proyectos', color: 'text-blue-500' },
  { icon: Award, value: '3+', label: 'Años exp.', color: 'text-purple-500' },
]

export const brandConfig = {
  name: 'Portfolio',
  tagline: 'Explora mi trabajo',
  version: 'v2.0',
  icon: TrendingUp,
}
