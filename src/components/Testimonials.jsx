import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Forward Tech & Freedom',
    role: 'Bootcamp Instructor',
    content: 'Allan demostró un compromiso excepcional durante su formación. Su capacidad para resolver problemas complejos y su actitud proactiva lo destacan como un desarrollador con gran potencial.',
    rating: 5,
    avatar: 'FT'
  },
  {
    name: 'Academia UPC',
    role: 'Cliente - Proyecto Moodle',
    content: 'El trabajo realizado en la integración de IA para la creación de exámenes superó nuestras expectativas. Profesionalismo y dedicación en cada etapa del proyecto.',
    rating: 5,
    avatar: 'AU'
  },
  {
    name: 'Compañero de Bootcamp',
    role: 'Desarrollador Full Stack',
    content: 'Trabajar con Allan fue una gran experiencia. Su habilidad para explicar conceptos técnicos y su disposición para ayudar al equipo son invaluables.',
    rating: 5,
    avatar: 'CB'
  }
]

const Testimonials = () => {
  return (
    <section className="py-6 sm:py-10 md:py-14 px-4 sm:px-6 bg-muted/30">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[10px] sm:text-xs font-medium text-muted-foreground mb-2 sm:mb-3 tracking-wider uppercase">
            Testimonios
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
            Lo Que Dicen
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
            Feedback de clientes y colaboradores
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl hover:border-primary/30 transition-all group">
                <CardContent className="p-4 sm:p-6">
                  {/* Quote icon */}
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <span className="text-sm sm:text-base font-bold text-primary">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-semibold">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
