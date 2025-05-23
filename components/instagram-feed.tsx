import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface InstagramFeedProps {
  whatsappUrl: string
}

const instagramPosts = [
  {
    id: 1,
    image: "/placeholder.svg?height=300&width=300",
    likes: 124,
    comments: 8,
    caption:
      "Transformação com lentes de contato dental. Resultado natural e harmonioso! #OdontologiaEstética #SorrisoPerfeito",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=300&width=300",
    likes: 98,
    comments: 12,
    caption: "Antes e depois de tratamento com facetas de porcelana. #TransformaçãoDoSorriso #Odontologia",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=300",
    likes: 156,
    comments: 14,
    caption: "Harmonização facial com preenchimento labial. Resultados naturais! #HarmonizaçãoFacial #Estética",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=300&width=300",
    likes: 87,
    comments: 5,
    caption: "Implantes dentários: devolvendo função e estética. #ImplantesDentários #SorrisoNovo",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=300&width=300",
    likes: 112,
    comments: 9,
    caption: "Dicas de higiene bucal para manter seu sorriso sempre bonito e saudável. #SaúdeBucal #DicasOdontológicas",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=300&width=300",
    likes: 143,
    comments: 11,
    caption: "Clareamento dental: procedimento simples que transforma seu sorriso! #ClareamentoDental #SorrisoClaro",
  },
]

export function InstagramFeed({ whatsappUrl }: InstagramFeedProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {instagramPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            <Link href={whatsappUrl} target="_blank" className="block relative group">
              <div className="relative aspect-square">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={`Instagram post ${post.id}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white flex items-center space-x-4">
                    <div className="flex items-center">
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
                        className="mr-1"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                      {post.likes}
                    </div>
                    <div className="flex items-center">
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
                        className="mr-1"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      {post.comments}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                <div className="text-white text-xs font-medium">Clique para saber mais</div>
              </div>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
