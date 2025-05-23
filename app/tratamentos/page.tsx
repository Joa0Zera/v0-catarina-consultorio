import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TreatmentCard } from "@/components/treatment-card"

export default function TratamentosPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-[#8B4513] mb-4">Nossos Tratamentos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os tratamentos odontológicos oferecidos pela Dra. Caroline Meza para transformar seu sorriso e
            aumentar sua autoestima.
          </p>
        </div>

        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-light text-[#8B4513] mb-4">Estética Dental</h2>
              <p className="text-gray-600 mb-6">
                A Odontologia Estética é uma especialidade que visa melhorar a aparência do sorriso, proporcionando
                dentes mais brancos, alinhados e harmoniosos. Com técnicas modernas e materiais de alta qualidade, é
                possível transformar completamente o seu sorriso.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#8B4513] mr-2"></div>
                  <p className="text-gray-700">Resultados naturais e harmoniosos</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#8B4513] mr-2"></div>
                  <p className="text-gray-700">Procedimentos minimamente invasivos</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#8B4513] mr-2"></div>
                  <p className="text-gray-700">Materiais de alta qualidade e durabilidade</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#8B4513] mr-2"></div>
                  <p className="text-gray-700">Planejamento digital do sorriso</p>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-[#8B4513] hover:bg-[#6B3410]">Agendar Consulta</Button>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Estética Dental"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TreatmentCard
              title="Lentes de Contato Dental"
              description="Lâminas ultrafinas de porcelana que são coladas sobre os dentes, proporcionando um sorriso mais branco, alinhado e harmonioso."
              icon="/tooth-icon.svg"
            />
            <TreatmentCard
              title="Facetas de Porcelana"
              description="Lâminas de porcelana um pouco mais espessas que as lentes, indicadas para casos que necessitam de maior correção estética."
              icon="/tooth-icon.svg"
            />
            <TreatmentCard
              title="Clareamento Dental"
              description="Procedimento que remove manchas e pigmentações dos dentes, deixando-os mais brancos e brilhantes."
              icon="/tooth-icon.svg"
            />
          </div>
        </section>

        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Implantes Dentários"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-light text-[#8B4513] mb-4">Implantes Dentários</h2>
              <p className="text-gray-600 mb-6">
                Os implantes dentários são a solução mais moderna e eficiente para substituir dentes perdidos. Eles
                proporcionam função, estética e conforto semelhantes aos dentes naturais, devolvendo a autoestima e
                qualidade de vida.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#8B4513] mr-2"></div>
                  <p className="text-gray-700">Alta taxa de sucesso e durabilidade</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#8B4513] mr-2"></div>
                  <p className="text-gray-700">Preservação do osso maxilar</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#8B4513] mr-2"></div>
                  <p className="text-gray-700">Função e estética semelhantes aos dentes naturais</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#8B4513] mr-2"></div>
                  <p className="text-gray-700">Melhora na qualidade de vida e autoestima</p>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-[#8B4513] hover:bg-[#6B3410]">Agendar Consulta</Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TreatmentCard
              title="Implantes Unitários"
              description="Substituição de um único dente perdido por um implante de titânio e uma coroa protética."
              icon="/tooth-icon.svg"
            />
            <TreatmentCard
              title="Protocolo"
              description="Reabilitação completa da arcada com implantes e prótese fixa, devolvendo função e estética."
              icon="/tooth-icon.svg"
            />
            <TreatmentCard
              title="Overdenture"
              description="Prótese removível sobre implantes, oferecendo mais estabilidade e conforto que as próteses convencionais."
              icon="/tooth-icon.svg"
            />
          </div>
        </section>

        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-light text-[#8B4513] mb-4">Harmonização Facial</h2>
              <p className="text-gray-600 mb-6">
                A Harmonização Facial é um conjunto de procedimentos estéticos minimamente invasivos que visam melhorar
                a harmonia e o equilíbrio do rosto. Com técnicas modernas e produtos de alta qualidade, é possível
                rejuvenescer e embelezar o rosto de forma natural.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#8B4513] mr-2"></div>
                  <p className="text-gray-700">Resultados naturais e harmoniosos</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#8B4513] mr-2"></div>
                  <p className="text-gray-700">Procedimentos minimamente invasivos</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#8B4513] mr-2"></div>
                  <p className="text-gray-700">Rejuvenescimento facial com resultados duradouros</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#8B4513] mr-2"></div>
                  <p className="text-gray-700">Tratamentos personalizados para cada tipo de rosto</p>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-[#8B4513] hover:bg-[#6B3410]">Agendar Consulta</Button>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Harmonização Facial"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TreatmentCard
              title="Toxina Botulínica"
              description="Tratamento para suavizar linhas de expressão e rugas, proporcionando um aspecto mais jovem."
              icon="/tooth-icon.svg"
            />
            <TreatmentCard
              title="Preenchimento Facial"
              description="Restauração de volume e contorno facial com ácido hialurônico, melhorando a aparência da pele."
              icon="/tooth-icon.svg"
            />
            <TreatmentCard
              title="Bioestimuladores"
              description="Estimulam a produção de colágeno, melhorando a firmeza e elasticidade da pele."
              icon="/tooth-icon.svg"
            />
          </div>
        </section>

        <section>
          <div className="bg-[#8B4513] text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-light mb-4">Agende sua Consulta</h2>
            <p className="max-w-2xl mx-auto mb-6">
              Entre em contato conosco para agendar uma avaliação e conhecer mais sobre nossos tratamentos. Estamos
              prontos para transformar o seu sorriso!
            </p>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#8B4513]">
              Agendar Agora
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}
