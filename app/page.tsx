import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WhatsappButton } from "@/components/whatsapp-button"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { BeforeAfterGallery } from "@/components/before-after-gallery"
import { FeaturedTestimonial } from "@/components/featured-testimonial"
import { FeaturedCleaningTestimonial } from "@/components/featured-cleaning-testimonial"

// Updated WhatsApp number and message to be used throughout the page
const WHATSAPP_NUMBER = "5511997642576"
const WHATSAPP_MESSAGE = "Olá, gostaria de agendar uma consulta com a Dra. Catarina Rodrigues."
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Mobile responsive but desktop restored */}
      <section id="home" className="relative w-full">
        {/* Desktop gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent z-10 hidden md:block" />

        <div className="container mx-auto px-4 md:px-6">
          {/* Mobile layout (visible only on small screens) */}
          <div className="flex flex-col max-w-xl mx-auto md:hidden py-8">
            <div className="mb-4">
              <Image
                src="/ca-odonto-logo.png"
                alt="CA ODONTO Logo"
                width={200}
                height={64}
                className="mb-4 max-w-[180px]"
              />
              <h1 className="text-3xl sm:text-4xl font-light gold-text-gradient">
                Transforme seu <span className="font-bold">sorriso</span> e sua{" "}
                <span className="font-bold">autoestima</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-light text-[#D4AF37] mt-2">com a Dra Catarina Rodrigues</h2>
            </div>

            <p className="text-base text-gray-700 mb-4">
              Realize tratamentos humanizados, e conquiste um sorriso natural e saudável
            </p>

            <div className="mb-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#D4AF37] hover:bg-[#B8860B] text-white rounded-md px-4 py-4 text-sm sm:text-base uppercase font-medium w-full">
                  Quero falar com a Dra Catarina
                </Button>
              </a>

              <p className="mt-3 text-[#D4AF37] font-medium text-sm">Não aceitamos convênios</p>
            </div>

            {/* Mobile hero image */}
            <div className="w-full rounded-lg overflow-hidden shadow-lg mt-4 mb-6">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/clinic-reception.png"
                  alt="CA ODONTO Recepção"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Desktop layout (original design, visible only on medium screens and up) */}
          <div className="hidden md:grid md:grid-cols-2 min-h-[600px] relative z-20">
            <div className="flex flex-col justify-center py-16 lg:py-24 space-y-6 max-w-xl">
              <div className="mb-4">
                <Image src="/ca-odonto-logo.png" alt="CA ODONTO Logo" width={250} height={80} className="mb-6" />
                <h1 className="text-4xl md:text-5xl font-light gold-text-gradient">
                  Transforme seu <span className="font-bold">sorriso</span> e sua{" "}
                  <span className="font-bold">autoestima</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-light text-[#D4AF37] mt-2">com a Dra Catarina Rodrigues</h2>
              </div>

              <p className="text-gray-700 text-lg">
                Realize tratamentos humanizados, e conquiste um sorriso natural e saudável
              </p>

              <div className="pt-4">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#D4AF37] hover:bg-[#B8860B] text-white rounded-md px-8 py-6 text-lg uppercase font-medium">
                    Quero falar com a Dra Catarina
                  </Button>
                </a>

                <p className="mt-4 text-[#D4AF37] font-medium">Não aceitamos convênios</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop hero image (original absolute positioning) */}
        <div className="absolute top-0 right-0 h-full w-1/2 hidden md:block">
          <Image
            src="/clinic-reception.png"
            alt="CA ODONTO Recepção"
            fill
            className="object-cover object-center"
            priority
            sizes="50vw"
          />
        </div>

        <div className="h-2 bg-[#D4AF37] w-full absolute bottom-0 left-0 right-0" />
      </section>

      {/* First WhatsApp Contact Banner - Mobile responsive but desktop restored */}
      <section className="py-4 md:py-6 bg-[#e8f8f0]">
        <div className="container mx-auto px-4">
          {/* Mobile layout (visible only on small screens) */}
          <div className="sm:hidden">
            <div className="flex flex-col items-center justify-between gap-4 p-4">
              <div className="flex items-center text-center">
                <div className="bg-[#25D366] rounded-full p-3 mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                    <path d="M9.5 13.5c.5 1.5 2.5 2 4 1"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#075E54]">WhatsApp Direto</h3>
                  <p className="text-[#128C7E] text-sm">Tire suas dúvidas sobre nossos tratamentos</p>
                </div>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white w-full">Falar Agora</Button>
              </a>
            </div>
          </div>

          {/* Desktop layout (original design, visible only on medium screens and up) */}
          <div className="hidden sm:block">
            <div className="flex flex-row items-center justify-between px-4 py-2">
              <div className="flex items-center">
                <div className="bg-[#25D366] rounded-full p-3 mr-4 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                    <path d="M9.5 13.5c.5 1.5 2.5 2 4 1"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#075E54]">WhatsApp Direto</h3>
                  <p className="text-[#128C7E]">Tire suas dúvidas sobre nossos tratamentos diretamente pelo WhatsApp</p>
                </div>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6">Falar Agora</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="enhanced-section with-pattern py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title-container">
            <h2 className="section-title text-4xl md:text-5xl text-[#D4AF37]">
              <span className="gold-accent">Quem Sou</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              <div className="border-2 border-[#D4AF37] rounded-lg p-4 relative">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Dra. Catarina Rodrigues Portrait"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-[#D4AF37] p-4 rounded-lg hidden sm:block">
                <Image src="/tooth-icon-gold.svg" alt="Tooth Icon" width={40} height={40} className="text-white" />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 text-lg">
                Olá, eu sou a Catarina e vou contar um pouco da minha trajetória na Odontologia para você!!
              </p>

              <p className="text-gray-700 text-lg">
                Me formei no final do ano de 2007 pela Universidade Estadual de Londrina (UEL) como cirurgiã dentista e
                desde os últimos anos da faculdade minha vontade sempre foi: DEVOLVER SORRISOS!!
              </p>

              <p className="text-gray-700 text-lg">
                Desde o início da minha carreira, comecei a trabalhar em clínicas e vi a quantidade de pessoas que
                perdiam um ou mais dentes e como isso afetava sua autoestima. Me apaixonei por devolver essa alegria de
                sorrir às pessoas e por isso decidi que minha primeira especialidade seria PRÓTESE DENTÁRIA.
              </p>

              <p className="text-gray-700 text-lg">
                Terminei a especialização de Prótese no ano de 2011 e desde então venho me aperfeiçoando cada vez mais
                nessa área. Fiz diversos cursos de aperfeiçoamento em Prótese sobre Implante, Lentes de Contato Dental,
                Facetas, Coroas, entre outros.
              </p>

              <div className="pt-4 flex flex-wrap">
                <Badge className="bg-[#D4AF37] hover:bg-[#B8860B] mr-2 mb-2">Prótese Dentária</Badge>
                <Badge className="bg-[#D4AF37] hover:bg-[#B8860B] mr-2 mb-2">Implantodontia</Badge>
                <Badge className="bg-[#D4AF37] hover:bg-[#B8860B] mr-2 mb-2">Facetas</Badge>
                <Badge className="bg-[#D4AF37] hover:bg-[#B8860B] mr-2 mb-2">Lentes de Contato</Badge>
                <Badge className="bg-[#D4AF37] hover:bg-[#B8860B] mr-2 mb-2">Harmonização Facial</Badge>
              </div>

              <div className="pt-6">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white w-full sm:w-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                    Fale comigo no WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second WhatsApp Contact Card Section - Mobile responsive but desktop restored */}
      <section className="py-6 md:py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#e8f8f0] rounded-lg overflow-hidden">
            {/* Mobile layout (visible only on small screens) */}
            <div className="sm:hidden p-4">
              <div className="flex flex-col items-center justify-between gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#25D366] rounded-full p-3 mb-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                      <path d="M9.5 13.5c.5 1.5 2.5 2 4 1"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#075E54]">WhatsApp Direto</h3>
                    <p className="text-[#128C7E]">
                      Tire suas dúvidas sobre nossos tratamentos diretamente pelo WhatsApp
                    </p>
                  </div>
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white w-full">Falar Agora</Button>
                </a>
              </div>
            </div>

            {/* Desktop layout (original design, visible only on medium screens and up) */}
            <div className="hidden sm:block px-6 py-4">
              <div className="flex flex-row items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-[#25D366] rounded-full p-3 mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                      <path d="M9.5 13.5c.5 1.5 2.5 2 4 1"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#075E54]">WhatsApp Direto</h3>
                    <p className="text-[#128C7E]">
                      Tire suas dúvidas sobre nossos tratamentos diretamente pelo WhatsApp
                    </p>
                  </div>
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6">Falar Agora</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section id="before-after" className="enhanced-section with-pattern py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title-container">
            <h2 className="section-title text-4xl md:text-5xl text-[#D4AF37]">
              <span className="gold-accent">Antes e Depois</span>
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Confira alguns dos resultados dos nossos tratamentos e veja como podemos transformar o seu sorriso.
              Destacamos nossos tratamentos de lentes de resina, clareamento dental e limpeza profissional, que
              proporcionam resultados impressionantes.
            </p>
          </div>

          <BeforeAfterGallery whatsappUrl={WHATSAPP_URL} />

          <div className="mt-12 text-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white w-full sm:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
                Quero um resultado como esses
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="enhanced-section py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-title-container">
            <h2 className="section-title text-4xl md:text-5xl text-[#D4AF37]">
              <span className="gold-accent">Depoimentos</span>
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Veja o que nossos pacientes dizem sobre os tratamentos realizados.
            </p>
          </div>

          <TestimonialCarousel whatsappUrl={WHATSAPP_URL} />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <FeaturedTestimonial whatsappUrl={WHATSAPP_URL} />
            <FeaturedCleaningTestimonial whatsappUrl={WHATSAPP_URL} />
          </div>
        </div>
      </section>

      {/* Our Clinic Section */}
      <section id="our-clinic" className="enhanced-section with-pattern py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title-container">
            <h2 className="section-title text-4xl md:text-5xl text-[#D4AF37]">
              <span className="gold-accent">Nossa Clínica</span>
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Conheça o ambiente onde realizamos nossos tratamentos, projetado para oferecer conforto e tranquilidade
              aos nossos pacientes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-md group">
                <div className="aspect-square relative">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=Clínica ${index}`}
                    alt={`Ambiente da clínica ${index}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-medium">Ambiente {index}</h3>
                    <p className="text-sm text-gray-200">Espaço projetado para seu conforto</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#D4AF37] hover:bg-[#B8860B] text-white w-full sm:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
                Agende uma visita
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Team Section - Updated to remove Dra. Catarina and adjust grid layout */}
      <section id="team" className="enhanced-section py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-title-container">
            <h2 className="section-title text-4xl md:text-5xl text-[#D4AF37]">
              <span className="gold-accent">Nossa Equipe</span>
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Conheça os profissionais altamente qualificados que compõem nossa equipe.
            </p>
          </div>

          {/* Updated grid layout for 4 doctors instead of 5 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              {
                name: "Dra. Carol",
                role: "Especialista em Implantodontia",
                education: "Universidade de São Paulo (USP)",
                specializations: ["Implantodontia", "Cirurgia Oral"],
                courses: ["Implantes Imediatos", "Enxertos Ósseos", "Reabilitação Total"],
              },
              {
                name: "Dra. Amanda",
                role: "Especialista em Ortodontia",
                education: "Universidade Federal do Paraná (UFPR)",
                specializations: ["Ortodontia", "Ortopedia Facial"],
                courses: ["Alinhadores Invisíveis", "Ortodontia Lingual", "Aparelhos Autoligados"],
              },
              {
                name: "Dra. Cristiane",
                role: "Especialista em Endodontia",
                education: "Universidade Estadual de Maringá (UEM)",
                specializations: ["Endodontia", "Microscopia Operatória"],
                courses: ["Tratamento de Canal", "Retratamento Endodôntico", "Microcirurgia Apical"],
              },
              {
                name: "Dra. Letícia",
                role: "Especialista em Odontopediatria",
                education: "Universidade Estadual Paulista (UNESP)",
                specializations: ["Odontopediatria", "Pacientes Especiais"],
                courses: ["Sedação Consciente", "Tratamento Preventivo", "Odontologia para Bebês"],
              },
            ].map((doctor, index) => (
              <Card key={index} className="overflow-hidden border-t-4 border-t-[#D4AF37] h-full">
                <CardContent className="p-0">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={`/placeholder.svg?height=400&width=300&text=${doctor.name}`}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="text-lg font-medium text-[#D4AF37] mb-1">{doctor.name}</h3>
                    <p className="text-gray-600 font-medium mb-3">{doctor.role}</p>
                    <div className="space-y-3 mt-3">
                      <div>
                        <p className="text-xs text-gray-500">Formação:</p>
                        <p className="text-xs text-gray-700">{doctor.education}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Especializações:</p>
                        <p className="text-xs text-gray-700">{doctor.specializations.join(", ")}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Cursos:</p>
                        <p className="text-xs text-gray-700">{doctor.courses.join(", ")}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-[#25D366] border-[#25D366] hover:bg-[#e8f8f0]"
                        >
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
                          Agendar consulta
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Mobile responsive but desktop restored */}
      <section className="py-12 pb-20 md:py-16 md:pb-24 gold-gradient">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4 md:mb-6">Transforme seu Sorriso Hoje</h2>
          <p className="text-white max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
            Não espere mais para ter o sorriso dos seus sonhos. Entre em contato agora mesmo e agende sua consulta com a
            Dra. Catarina Rodrigues.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-[#D4AF37] hover:bg-gray-100 px-4 sm:px-6 md:px-8 py-4 md:py-6 text-sm sm:text-base md:text-lg w-full sm:w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              <span className="whitespace-normal">AGENDAR CONSULTA PELO WHATSAPP</span>
            </Button>
          </a>
        </div>
      </section>

      {/* WhatsApp Button - Fixed */}
      <WhatsappButton whatsappUrl={WHATSAPP_URL} />
    </main>
  )
}
