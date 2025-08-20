"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PortfolioItem {
  id: number
  title: string
  image: string
  description?: string
}

const portfolioItems: PortfolioItem[] = [
   {
    id: 1,
    title: "Hospital Santa Bárbara",
    image: "assets/parceiros/hospital-sata.webp",
    description: "Hospital Santa Bárbara GO",
  },
  {
    id: 2,
    title: "Kalunga",
    image: "assets/parceiros/kalunga.jpg",
    description: "Loja de Informática em geral",
  },
  {
    id: 3,
    title: "Ri Happy",
    image: "assets/parceiros/ri-happy.jpg",
    description: "Loja de Brinquedos",
  },
  {
    id: 4,
    title: "Banco de Olhos",
    image: "assets/parceiros/instuto-olhos.jfif",
    description: "Instituto de olhos de Goiânia",
  },
  {
    id: 5,
    title: "Casa Fleur",
    image: "assets/parceiros/casa-fleur.webp",
    description: "Sua loja de mesa posta e decoração em Goiânia",
  },
  {
    id: 6,
    title: "Ri Happy 2",
    image: "assets/parceiros/ri_happy_2.webp",
    description: "Loja de Brinquedos Passeio das Águas Shopping",
  },
]

export function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on("reInit", onInit)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return

    const autoplay = setInterval(() => {
      emblaApi.scrollNext()
    }, 6000) // Muda slide a cada 4 segundos

    return () => clearInterval(autoplay)
  }, [emblaApi])

  return (
    <section id="clientes" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Meu Portfólio</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça alguns dos meus projetos mais recentes e impactantes
          </p>
        </div>

        <div className="relative max-w-[1920px] mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {portfolioItems.map((item) => (
                <div key={item.id} className="flex-[0_0_100%] min-w-0 relative">
                  <div className="mx-4">
                    <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-center">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">{item.title}</h3>
                        {item.description && (
                          <p className="text-white/90 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-transparent hover:bg-white shadow-lg border-none"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-10 w-10 text-white font-bold hover:text-blue-600" size={20}/>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-transparent hover:bg-white border-none"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4 text-white hover:text-blue-600" size={20}  />
          </Button>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center mt-8 gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-muted-foreground font-medium">
              {selectedIndex + 1} / {portfolioItems.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
