"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Updated WhatsApp URL for all header links
const WHATSAPP_NUMBER = "5511997642576"
const WHATSAPP_MESSAGE = "Olá, gostaria de agendar uma consulta com a Dra. Catarina Rodrigues."
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" onClick={() => scrollToSection("home")}>
          <Image src="/ca-odonto-logo.png" alt="CA ODONTO Logo" width={150} height={50} />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-600 font-medium hover:text-[#B8860B] transition-colors"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-600 font-medium hover:text-[#B8860B] transition-colors"
          >
            Quem Sou
          </button>
          <button
            onClick={() => scrollToSection("before-after")}
            className="text-gray-600 font-medium hover:text-[#B8860B] transition-colors"
          >
            Antes e Depois
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-gray-600 font-medium hover:text-[#B8860B] transition-colors"
          >
            Depoimentos
          </button>
          <button
            onClick={() => scrollToSection("our-clinic")}
            className="text-gray-600 font-medium hover:text-[#B8860B] transition-colors"
          >
            Nossa Clínica
          </button>
          <button
            onClick={() => scrollToSection("team")}
            className="text-gray-600 font-medium hover:text-[#B8860B] transition-colors"
          >
            Equipe
          </button>
        </nav>

        <div className="hidden md:block">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white">
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
              WhatsApp
            </Button>
          </a>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
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
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col h-full">
              <button onClick={() => scrollToSection("home")} className="py-4 border-b">
                <Image src="/ca-odonto-logo.png" alt="CA ODONTO Logo" width={120} height={40} />
              </button>
              <nav className="flex flex-col space-y-4 mt-8">
                <button onClick={() => scrollToSection("home")} className="text-lg text-gray-600">
                  Início
                </button>
                <button onClick={() => scrollToSection("about")} className="text-lg text-gray-600">
                  Quem Sou
                </button>
                <button onClick={() => scrollToSection("before-after")} className="text-lg text-gray-600">
                  Antes e Depois
                </button>
                <button onClick={() => scrollToSection("testimonials")} className="text-lg text-gray-600">
                  Depoimentos
                </button>
                <button onClick={() => scrollToSection("our-clinic")} className="text-lg text-gray-600">
                  Nossa Clínica
                </button>
                <button onClick={() => scrollToSection("team")} className="text-lg text-gray-600">
                  Equipe
                </button>
              </nav>
              <div className="mt-auto mb-8">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
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
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
