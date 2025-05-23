import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface WhatsAppContactCardProps {
  whatsappUrl: string
  message: string
}

export function WhatsAppContactCard({ whatsappUrl, message }: WhatsAppContactCardProps) {
  return (
    <Card className="bg-green-50 border-green-200 overflow-hidden">
      <CardContent className="p-4 md:p-6">
        {/* Mobile layout (visible only on small screens) */}
        <div className="flex flex-col items-center sm:hidden gap-4">
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-500 rounded-full p-3 mb-3 flex-shrink-0">
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
              <h3 className="text-lg font-medium text-green-800">WhatsApp Direto</h3>
              <p className="text-green-700">{message}</p>
            </div>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="bg-green-500 hover:bg-green-600 text-white w-full">
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
              Falar Agora
            </Button>
          </a>
        </div>

        {/* Desktop layout (original design, visible only on medium screens and up) */}
        <div className="hidden sm:flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-green-500 rounded-full p-3 mr-4 flex-shrink-0">
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
              <h3 className="text-lg font-medium text-green-800">WhatsApp Direto</h3>
              <p className="text-green-700">{message}</p>
            </div>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-green-500 hover:bg-green-600 text-white">
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
              Falar Agora
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
