import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface TreatmentCardProps {
  title: string
  description: string
  icon: string
  whatsappUrl: string
}

export function TreatmentCard({ title, description, icon, whatsappUrl }: TreatmentCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-t-[#D4AF37]">
      <CardContent className="p-4 md:p-6">
        {/* Mobile layout (visible only on small screens) */}
        <div className="flex flex-col items-center sm:hidden space-y-3">
          <div className="bg-[#D4AF37] rounded-full p-2 flex-shrink-0">
            <Image src={icon || "/placeholder.svg"} alt={title} width={24} height={24} className="text-white" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-medium text-[#D4AF37] mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
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
                Saiba mais
              </Button>
            </a>
          </div>
        </div>

        {/* Desktop layout (original design, visible only on medium screens and up) */}
        <div className="hidden sm:flex items-start space-x-4">
          <div className="bg-[#D4AF37] rounded-full p-2 flex-shrink-0">
            <Image src={icon || "/placeholder.svg"} alt={title} width={24} height={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-medium text-[#D4AF37] mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
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
                Saiba mais
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
