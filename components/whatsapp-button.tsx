"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface WhatsappButtonProps {
  whatsappUrl: string
}

export function WhatsappButton({ whatsappUrl }: WhatsappButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPulsing, setIsPulsing] = useState(true)

  // Add pulsing effect that repeats every few seconds
  setTimeout(() => {
    setIsPulsing(false)
    setTimeout(() => setIsPulsing(true), 10000)
  }, 2000)

  return (
    <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-6 z-50">
      <div
        className={`absolute bottom-full right-0 mb-2 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
      >
        <div className="bg-white p-2 sm:p-3 rounded-lg shadow-lg text-xs sm:text-sm whitespace-nowrap">
          Clique para falar no WhatsApp
        </div>
      </div>

      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <Button
          className={`h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg flex items-center justify-center ${
            isPulsing ? "animate-pulse" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
            <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
            <path d="M9.5 13.5c.5 1.5 2.5 2 4 1"></path>
          </svg>
        </Button>
      </a>
    </div>
  )
}
