"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

interface BeforeAfterGalleryProps {
  whatsappUrl: string
}

const beforeAfterCases = [
  {
    id: 1,
    category: "lentes",
    title: "Lentes de Resina",
    description:
      "Transformação com lentes de resina para corrigir dentes manchados e desalinhados. Procedimento minimamente invasivo que proporciona um sorriso mais branco e harmonioso em poucas sessões.",
    beforeImage: "/before-resin-lens.png",
    afterImage: "/after-resin-lens.png",
    featured: true,
  },
  {
    id: 2,
    category: "clareamento",
    title: "Clareamento Dental",
    description:
      "Tratamento de clareamento dental profissional que remove manchas e amarelamento, devolvendo o brilho natural dos dentes com resultados visíveis em poucas sessões.",
    beforeImage: "/before-whitening.png",
    afterImage: "/after-whitening.png",
    featured: true,
  },
  {
    id: 3,
    category: "limpeza",
    title: "Limpeza Profissional",
    description:
      "Procedimento essencial para remoção de tártaro e placa bacteriana, prevenindo doenças gengivais e cáries. Promove saúde bucal e melhora a aparência dos dentes.",
    beforeImage: "/before-cleaning.png",
    afterImage: "/after-cleaning.png",
    featured: true,
  },
  {
    id: 4,
    category: "lentes",
    title: "Lentes de Contato Dental",
    description: "Correção de dentes manchados e desalinhados.",
    beforeImage: "/placeholder.svg?height=300&width=400",
    afterImage: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    category: "implantes",
    title: "Implantes Dentários",
    description: "Reabilitação completa com implantes e próteses.",
    beforeImage: "/placeholder.svg?height=300&width=400",
    afterImage: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    category: "implantes",
    title: "Implantes Dentários",
    description: "Substituição de dentes perdidos com implantes unitários.",
    beforeImage: "/placeholder.svg?height=300&width=400",
    afterImage: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 7,
    category: "harmonizacao",
    title: "Harmonização Facial",
    description: "Preenchimento labial e contorno facial.",
    beforeImage: "/placeholder.svg?height=300&width=400",
    afterImage: "/placeholder.svg?height=300&width=400",
  },
]

export function BeforeAfterGallery({ whatsappUrl }: BeforeAfterGalleryProps) {
  const [hoveredCase, setHoveredCase] = useState<number | null>(null)

  return (
    <Tabs defaultValue="todos" className="w-full">
      <TabsList className="grid grid-cols-6 max-w-xl mx-auto mb-8">
        <TabsTrigger value="todos" className="text-[#D4AF37]">
          Todos
        </TabsTrigger>
        <TabsTrigger value="lentes" className="text-[#D4AF37]">
          Lentes
        </TabsTrigger>
        <TabsTrigger value="clareamento" className="text-[#D4AF37]">
          Clareamento
        </TabsTrigger>
        <TabsTrigger value="limpeza" className="text-[#D4AF37]">
          Limpeza
        </TabsTrigger>
        <TabsTrigger value="implantes" className="text-[#D4AF37]">
          Implantes
        </TabsTrigger>
        <TabsTrigger value="harmonizacao" className="text-[#D4AF37]">
          Harmonização
        </TabsTrigger>
      </TabsList>

      {/* Featured cases - always visible at the top */}
      <div className="mb-10">
        <h3 className="text-xl font-medium text-[#D4AF37] mb-4 text-center">Casos em Destaque</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {beforeAfterCases
            .filter((item) => item.featured)
            .map((item) => (
              <FeaturedBeforeAfterCard
                key={item.id}
                item={item}
                isHovered={hoveredCase === item.id}
                onMouseEnter={() => setHoveredCase(item.id)}
                onMouseLeave={() => setHoveredCase(null)}
                whatsappUrl={whatsappUrl}
              />
            ))}
        </div>
      </div>

      <TabsContent value="todos" className="space-y-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beforeAfterCases
            .filter((item) => !item.featured)
            .map((item) => (
              <BeforeAfterCard
                key={item.id}
                item={item}
                isHovered={hoveredCase === item.id}
                onMouseEnter={() => setHoveredCase(item.id)}
                onMouseLeave={() => setHoveredCase(null)}
                whatsappUrl={whatsappUrl}
              />
            ))}
        </div>
      </TabsContent>

      <TabsContent value="lentes" className="space-y-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beforeAfterCases
            .filter((item) => item.category === "lentes" && !item.featured)
            .map((item) => (
              <BeforeAfterCard
                key={item.id}
                item={item}
                isHovered={hoveredCase === item.id}
                onMouseEnter={() => setHoveredCase(item.id)}
                onMouseLeave={() => setHoveredCase(null)}
                whatsappUrl={whatsappUrl}
              />
            ))}
        </div>
      </TabsContent>

      <TabsContent value="clareamento" className="space-y-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beforeAfterCases
            .filter((item) => item.category === "clareamento" && !item.featured)
            .map((item) => (
              <BeforeAfterCard
                key={item.id}
                item={item}
                isHovered={hoveredCase === item.id}
                onMouseEnter={() => setHoveredCase(item.id)}
                onMouseLeave={() => setHoveredCase(null)}
                whatsappUrl={whatsappUrl}
              />
            ))}
        </div>
      </TabsContent>

      <TabsContent value="limpeza" className="space-y-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beforeAfterCases
            .filter((item) => item.category === "limpeza" && !item.featured)
            .map((item) => (
              <BeforeAfterCard
                key={item.id}
                item={item}
                isHovered={hoveredCase === item.id}
                onMouseEnter={() => setHoveredCase(item.id)}
                onMouseLeave={() => setHoveredCase(null)}
                whatsappUrl={whatsappUrl}
              />
            ))}
        </div>
      </TabsContent>

      <TabsContent value="implantes" className="space-y-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beforeAfterCases
            .filter((item) => item.category === "implantes")
            .map((item) => (
              <BeforeAfterCard
                key={item.id}
                item={item}
                isHovered={hoveredCase === item.id}
                onMouseEnter={() => setHoveredCase(item.id)}
                onMouseLeave={() => setHoveredCase(null)}
                whatsappUrl={whatsappUrl}
              />
            ))}
        </div>
      </TabsContent>

      <TabsContent value="harmonizacao" className="space-y-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beforeAfterCases
            .filter((item) => item.category === "harmonizacao")
            .map((item) => (
              <BeforeAfterCard
                key={item.id}
                item={item}
                isHovered={hoveredCase === item.id}
                onMouseEnter={() => setHoveredCase(item.id)}
                onMouseLeave={() => setHoveredCase(null)}
                whatsappUrl={whatsappUrl}
              />
            ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}

interface FeaturedBeforeAfterCardProps {
  item: {
    id: number
    title: string
    description: string
    beforeImage: string
    afterImage: string
    category: string
  }
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  whatsappUrl: string
}

function FeaturedBeforeAfterCard({
  item,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  whatsappUrl,
}: FeaturedBeforeAfterCardProps) {
  // Define benefits based on treatment type
  const getBenefits = () => {
    if (item.category === "lentes") {
      return [
        "Procedimento minimamente invasivo",
        "Resultados rápidos em poucas sessões",
        "Correção de manchas, desalinhamentos e pequenas fraturas",
        "Aparência natural e harmoniosa",
        "Maior durabilidade comparada a outros tratamentos estéticos",
      ]
    } else if (item.category === "clareamento") {
      return [
        "Procedimento seguro e indolor",
        "Resultados visíveis em poucas sessões",
        "Remoção de manchas causadas por alimentos, bebidas e tabaco",
        "Melhora significativa na autoestima",
        "Tratamento personalizado conforme a necessidade de cada paciente",
      ]
    } else if (item.category === "limpeza") {
      return [
        "Remoção completa de tártaro e placa bacteriana",
        "Prevenção de gengivite e periodontite",
        "Redução do mau hálito",
        "Melhora na aparência dos dentes",
        "Procedimento rápido e indolor",
      ]
    } else {
      return []
    }
  }

  const benefits = getBenefits()

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <CardContent className="p-0">
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
            <div className="relative h-[250px] overflow-hidden rounded-lg">
              <Image
                src={item.beforeImage || "/placeholder.svg"}
                alt={`Antes - ${item.title}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-2 left-2 bg-white text-[#D4AF37] text-xs font-bold px-2 py-1 rounded">
                ANTES
              </div>
            </div>
            <div className="relative h-[250px] overflow-hidden rounded-lg">
              <Image
                src={item.afterImage || "/placeholder.svg"}
                alt={`Depois - ${item.title}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-2 right-2 bg-[#D4AF37] text-white text-xs font-bold px-2 py-1 rounded">
                DEPOIS
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-medium text-[#D4AF37]">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>

            {benefits.length > 0 && (
              <div className="mt-2 space-y-2">
                <h4 className="text-sm font-medium text-gray-700">Benefícios da {item.title}:</h4>
                <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc">
                  {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="text-green-500 border-green-500 hover:bg-green-50 w-full">
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
  )
}

interface BeforeAfterCardProps {
  item: {
    id: number
    title: string
    description: string
    beforeImage: string
    afterImage: string
  }
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  whatsappUrl: string
}

function BeforeAfterCard({ item, isHovered, onMouseEnter, onMouseLeave, whatsappUrl }: BeforeAfterCardProps) {
  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <CardContent className="p-0">
        <div className="relative">
          <div className="relative h-[250px] overflow-hidden">
            <div
              className="absolute inset-0 transition-transform duration-500 ease-in-out"
              style={{ transform: isHovered ? "translateX(-100%)" : "translateX(0)" }}
            >
              <Image
                src={item.beforeImage || "/placeholder.svg"}
                alt={`Antes - ${item.title}`}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2 bg-white text-[#D4AF37] text-xs font-bold px-2 py-1 rounded">
                ANTES
              </div>
            </div>
            <div
              className="absolute inset-0 transition-transform duration-500 ease-in-out"
              style={{ transform: isHovered ? "translateX(0)" : "translateX(100%)" }}
            >
              <Image
                src={item.afterImage || "/placeholder.svg"}
                alt={`Depois - ${item.title}`}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2 bg-[#D4AF37] text-white text-xs font-bold px-2 py-1 rounded">
                DEPOIS
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-[#D4AF37]">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="text-green-500 border-green-500 hover:bg-green-50 w-full">
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
      </CardContent>
    </Card>
  )
}
