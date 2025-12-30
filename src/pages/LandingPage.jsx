import { Suspense, lazy } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import Hero, { ButtonSocial, Description, LocationBadge, Subtitle, Title } from '@/components/hero'
import { Skeleton } from '@/components/ui/skeleton'
import ScrollProgress from '@/components/ui/scroll-progress'
import BackToTop from '@/components/ui/back-to-top'
import SEO from '@/components/SEO'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

// Lazy load components
const AboutMe = lazy(() => import('@/components/AboutMe'))
const Experience = lazy(() => import('@/components/Experience'))
const FeaturedWork = lazy(() => import('@/components/FeaturedWork'))
const TechStack = lazy(() => import('@/components/TechStack'))
const Stats = lazy(() => import('@/components/Stats'))
const WorkProcess = lazy(() => import('@/components/WorkProcess'))
const Testimonials = lazy(() => import('@/components/Testimonials'))
const CTA = lazy(() => import('@/components/CTA'))
const Services = lazy(() => import('@/components/Services'))

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full py-12 sm:py-16 md:py-20 px-4 container mx-auto">
    <Skeleton className="h-8 w-48 mx-auto mb-8" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Skeleton className="h-64 w-full rounded-xl" />
      <Skeleton className="h-64 w-full rounded-xl" />
      <Skeleton className="h-64 w-full rounded-xl" />
    </div>
  </div>
)

const metaData = {
  title: "Inicio",
  description: "Portafolio de Allan Vélez, Desarrollador Full Stack especializado en React y Django. Explora mis proyectos y experiencia.",
}





function LandingPage() {
  return (
    <>
      <SEO
        title={metaData.title}
        description={metaData.description}
      />
      <ScrollProgress />
      <ScrollArea className="h-full w-full">
        <div className="scroll-smooth w-full overflow-x-hidden">
          {/* Hero Section - Eager loaded for LCP */}
          <section id="inicio">
            <Hero>
              <LocationBadge location='Costa Rica'/>
              <Title>Allan José Vélez González</Title>
              <Subtitle>Desarrollador Full Stack</Subtitle>
              <Description>
                Especializado en React y Django, egresado de un bootcamp intensivo de 6 meses orientado al desarrollo web profesional.
                Apasionado por la creación de soluciones eficientes, escalables y centradas en el usuario.
              </Description>
              <div className="mt-4 sm:mt-6 md:mt-8 flex items-center justify-center gap-2 flex-wrap px-2">
                <ButtonSocial name="LinkedIn" href="https://www.linkedin.com/in/allan-josé-vélez-gonzález"/>

              </div>
            </Hero>

          </section>

          <Suspense fallback={<SectionLoader />}>
            {/* About Me Section */}
            <AboutMe />

            {/* Stats Section */}
            <Stats />

            {/* Tech Stack Section */}
            <TechStack />

            {/* Experience Section */}
            <Experience />

            {/* Services Section */}
            <Services />

            {/* Featured Work Section */}
            <FeaturedWork />

            {/* Work Process Section */}
            <WorkProcess />

            {/* Testimonials Section */}
            <Testimonials />

            {/* CTA Section (Contact) */}
            <section id="contacto">
              <CTA />
            </section>
          </Suspense>
        </div>
        <BackToTop />
      </ScrollArea>
    </>
  )
}

export default LandingPage
