"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface TestimonialCarouselProps {
  whatsappUrl: string
}

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    text: "Fiz lentes de contato dental com a Dra. Caroline e estou extremamente satisfeita com o resultado. Meu sorriso ficou natural e bonito, exatamente como eu queria!",
    image: "/placeholder.svg?height=80&width=80",
    treatment: "Lentes de Contato Dental",
  },
  {
    id: 2,
    name: "João Santos",
    text: "Sempre tive vergonha de sorrir por causa dos meus dentes. Após o tratamento com a Dra. Caroline, recuperei minha autoestima e agora sorrio sem medo!",
    image: "/placeholder.svg?height=80&width=80",
    treatment: "Implantes Dentários",
  },
  {
    id: 3,
    name: "Ricardo Oliveira",
    text: "Ótima estrutura! Já realizei diversos procedimentos, e é somente aqui que confio a minha saúde bucal. Gostaria de ressaltar a excelente recepção e o atendimento das doutoras Catarina, Carol, Amanda, Cristiane e Letícia. Equipe top e totalmente preparada para resolver qualquer problema!",
    image: "/testimonial-whitening.png",
    treatment: "Clareamento Dental",
  },
  {
    id: 4,
    name: "Mariana Morente",
    text: "Today I visited my friends' clinic in person and I loved the service from the reception. Dr. Carol was very attentive and gentle. I loved the cleaning, the care she gave me on my lips and all the support I needed to answer any questions. Thank you very much, I'll be taking my kids now.",
    image: "/testimonial-cleaning.png",
    treatment: "Limpeza Dental",
  },
  {
    id: 5,
    name: "Ana Oliveira",
    text: "Profissional extremamente competente e atenciosa. O ambiente da clínica é acolhedor e o resultado do meu tratamento superou todas as minhas expectativas.",
    image: "/placeholder.svg?height=80&width=80",
    treatment: "Facetas de Porcelana",
  },
  {
    id: 6,
    name: "Carlos Pereira",
    text: "Fiz harmonização facial com a Dra. Caroline e o resultado ficou muito natural. Todos perceberam que estou com aparência mais jovem, mas ninguém sabe exatamente o que mudou!",
    image: "/placeholder.svg?height=80&width=80",
    treatment: "Harmonização Facial",
  },
]

export function TestimonialCarousel({ whatsappUrl }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 relative">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full border-4 border-[#D4AF37] object-cover"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-[#D4AF37] text-white text-xs px-2 py-1 rounded-full">
                        ★★★★★
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-[#D4AF37]">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{testimonial.treatment}</p>
                    <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>

                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="text-green-500 border-green-500 hover:bg-green-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                        >
                          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                          <path d="M9.5 13.5c.5 1.5 2.5 2 4 1"></path>
                        </svg>
                        Quero um resultado assim
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full bg-white shadow-md border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
        onClick={prevTestimonial}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full bg-white shadow-md border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
        onClick={nextTestimonial}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </Button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-[#D4AF37]" : "bg-gray-300"}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
