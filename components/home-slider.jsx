"use client"

import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    text: "Your Plant Care Companion",
    image: "/placeholder.svg?height=900&width=1600&text=Beautiful+Indoor+Plants",
  },
  {
    id: 2,
    text: "From Pot to Pod - YOur PLant is your Friend",
    image: "/placeholder.svg?height=900&width=1600&text=Plant+in+Glass+Vase",
  },
  {
    id: 3,
    text: "Expert Plant Care Made Simple",
    image: "/placeholder.svg?height=900&width=1600&text=Plant+Care+Expert",
  },
  {
    id: 4,
    text: "Grow Your Green Thumb Today",
    image: "/placeholder.svg?height=900&width=1600&text=Growing+Plants",
  },
]

export function HeroSlider() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="relative w-full h-[40vw] min-h-[320px] max-h-[600px] flex items-center justify-center bg-black">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        loop={true}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
        onInit={swiper => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.text}
                className="absolute inset-0 w-full h-full object-cover object-center z-0 select-none pointer-events-none"
                draggable={false}
              />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <h2 className="text-green-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center bg-white/70 px-4 py-2 rounded-md shadow-md">
                  {slide.text}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Navigation Arrows */}
        <button
          ref={prevRef}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-green-100 hover:bg-green-200 rounded-full p-2 shadow-lg border border-green-400 focus:outline-none"
          style={{ touchAction: 'manipulation' }}
        >
          <ChevronLeft className="h-6 w-6 text-green-700" />
        </button>
        <button
          ref={nextRef}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-green-100 hover:bg-green-200 rounded-full p-2 shadow-lg border border-green-400 focus:outline-none"
          style={{ touchAction: 'manipulation' }}
        >
          <ChevronRight className="h-6 w-6 text-green-700" />
        </button>
        {/* Pagination Dots */}
        <div className="custom-swiper-pagination absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-30" />
      </Swiper>
    </section>
  )
} 