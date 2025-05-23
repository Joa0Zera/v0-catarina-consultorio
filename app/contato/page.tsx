import { ContactForm } from "@/components/contact-form"

export default function ContatoPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-[#8B4513] mb-4">Entre em Contato</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos à disposição para esclarecer suas dúvidas, agendar consultas e fornecer informações sobre nossos
            tratamentos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-light text-[#8B4513] mb-6">Envie uma Mensagem</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-light text-[#8B4513] mb-6">Informações de Contato</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
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
                    className="mr-2 text-[#8B4513] flex-shrink-0"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>
                    Rua Exemplo, 123 - Centro
                    <br />
                    Londrina - PR, 86000-000
                  </span>
                </li>
                <li className="flex items-center">
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
                    className="mr-2 text-[#8B4513] flex-shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>(43) 3000-0000</span>
                </li>
                <li className="flex items-center">
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
                    className="mr-2 text-[#8B4513] flex-shrink-0"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span>contato@carolinemeza.com.br</span>
                </li>
                <li className="flex items-center">
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
                    className="mr-2 text-[#8B4513] flex-shrink-0"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                    <path d="M9.5 13.5c.5 1.5 2.5 2 4 1"></path>
                  </svg>
                  <span>(43) 99000-0000</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light text-[#8B4513] mb-6">Horário de Atendimento</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span>08:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span>08:00 - 12:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light text-[#8B4513] mb-6">Localização</h2>
              <div className="h-64 bg-gray-200 rounded-lg">
                {/* Google Maps iframe would go here */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">Mapa do Google</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
