import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface FeaturedTestimonialProps {
  whatsappUrl: string
}

export function FeaturedTestimonial({ whatsappUrl }: FeaturedTestimonialProps) {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <h3 className="text-xl font-medium text-[#D4AF37] mb-6 text-center">Depoimento em Destaque</h3>
      <Card className="border-none shadow-lg bg-gradient-to-r from-amber-50 to-white">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0">
              <div className="relative">
                <Image
                  src="/testimonial-whitening.png"
                  alt="Ricardo Oliveira"
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-[#D4AF37] object-cover"
                />
                <div className="absolute -bottom-2 -right-2 bg-[#D4AF37] text-white text-xs px-2 py-1 rounded-full">
                  ★★★★★
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-medium text-[#D4AF37]">Ricardo Oliveira</h3>
                  <p className="text-sm text-gray-500">Clareamento Dental</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Cliente Verificado
                  </span>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "Ótima estrutura! Já realizei diversos procedimentos, e é somente aqui que confio a minha saúde bucal.
                Gostaria de ressaltar a excelente recepção e o atendimento das doutoras Catarina, Carol, Amanda,
                Cristiane e Letícia. Equipe top e totalmente preparada para resolver qualquer problema!"
              </p>
              <div className="flex justify-end">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="text-green-500 border-green-500 hover:bg-green-50">
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
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
