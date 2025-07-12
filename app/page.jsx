"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Droplets,
  BarChart3,
  Thermometer,
  Eye,
  Bell,
  Calendar,
  TrendingUp,
} from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const carouselSlides = [
  {
    id: 1,
    title: "From Pot to Pod - Your PLant is your Friend",
    subtitle: "Smart Plant Care Technology",
    image:
      "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752264175/Image_fx_13_hvy30w.png",
    description: "Revolutionary smart pods that monitor and care for your plants automatically",
  },
  {
    id: 2,
    title: "Automated Watering Systems",
    subtitle: "Never Miss a Watering Again",
    image: "https://res-console.cloudinary.com/dmgt3ctyd/thumbnails/v1/image/upload/v1752262906/SW1hZ2VfZnhfMTBfcm9jZzA1/drilldown",
    description: "AI-powered irrigation that adapts to your plant's specific needs",
  },
  {
    id: 3,
    title: "Climate Control Technology",
    subtitle: "Perfect Environment Every Time",
    image: "/c1.jpg",
    description: "Advanced sensors monitor temperature, humidity, and light conditions",
  },
]

export default function HomePage() {
  const [swiperInstance, setSwiperInstance] = useState(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef(null)
 
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }
 
 

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative h-[500px] bg-gray-100 overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, A11y]}
          slidesPerView={1}
          // loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          className="relative h-full"
          onSwiper={setSwiperInstance}
        >
          {carouselSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative w-full h-full">
              {/* Background Image & Overlay */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  onError={e => { e.target.onerror = null; e.target.src = "/placeholder.svg"; }}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "center" }}
                />
                <div className="absolute inset-0 bg-black/15"></div>
              </div>
              {/* Content Overlay */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center max-w-4xl mx-auto px-4">
                  <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 ">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-4 font-body ">{slide.subtitle}</p>
                  <p className="text-lg text-gray-100 mb-8 font-body max-w-2xl mx-auto ">
                    {slide.description}
                  </p>
                  {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-body shadow-lg"
                    >
                      Learn More
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-8 py-3 font-body bg-white/90"
                    >
                      Watch Demo
                    </Button>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Buttons */}
        <button
          onClick={() => swiperInstance && swiperInstance.slidePrev()}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-green-600/80 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => swiperInstance && swiperInstance.slideNext()}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-green-600/80 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">See Our Technology in Action</h2>
            <p className="text-lg text-gray-600 font-body max-w-3xl mx-auto">
              Watch how our smart plant care system revolutionizes the way you care for your plants
            </p>
          </div>
          
          <div className="relative bg-gradient-to-br from-green-600 to-green-700 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                poster="/https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752262906/Image_fx_10_rocg05.png"
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              >
                <source src="https://res.cloudinary.com/dmgt3ctyd/video/upload/v1752266363/20250711_2038_video_asyigj.mp4" type="video/mp4" />
                {/* <source src="/your-video.webm" type="video/webm" /> */}
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Video overlay with play button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black-600/20 pointer-events-none">
              <button 
                onClick={toggleVideo}
                className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors group hover:scale-110 transform duration-200 pointer-events-auto"
              >
                {isVideoPlaying ? (
                  <div className="w-8 h-8 text-gray-700 group-hover:text-green-600 flex items-center justify-center">
                    <div className="w-3 h-8 border-l-4 border-r-4 border-gray-700 group-hover:border-green-600"></div>
                  </div>
                ) : (
                  <Play className="w-8 h-8 text-gray-700 ml-1 group-hover:text-green-600" />
                )}
              </button>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 font-body">
              Learn how our smart sensors and AI technology work together to provide the perfect care for your plants
            </p>
          </div>
        </div>
      </section>

     

      {/* Smart Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">Smart Features for Smarter Farming</h2>
            <p className="text-lg text-gray-600 font-body max-w-3xl mx-auto">
              Our comprehensive plant care system combines cutting-edge technology with agricultural expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Smart Irrigation */}
            <Card className="text-center bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Droplets className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Smart Irrigation</h3>
                <p className="text-gray-600 font-body">
                  Automated watering system adapts to your plant's needs and local weather conditions.
                </p>
              </CardContent>
            </Card>

            {/* Crop Monitoring */}
            <Card className="text-center bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Crop Monitoring</h3>
                <p className="text-gray-600 font-body">
                  Monitor growth and soil conditions to optimize growth and yield.
                </p>
              </CardContent>
            </Card>

            {/* Climate Analysis */}
            <Card className="text-center bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                  <Thermometer className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Climate Analysis</h3>
                <p className="text-gray-600 font-body">
                  Monitor temperature and humidity to create the perfect environment for your crops.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet iPlantTech Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Meet iPlantTech</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Monitor */}
            <div className="text-center text-white group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Monitor</h3>
              <p className="text-green-100 font-body text-sm">
                Monitors moisture, sunlight, temperature, nutrients, and health
              </p>
            </div>

            {/* Alerts */}
            <div className="text-center text-white group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Alerts</h3>
              <p className="text-green-100 font-body text-sm">Sends real-time care alerts to your phone or email</p>
            </div>

            {/* Reminders */}
            <div className="text-center text-white group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Reminders</h3>
              <p className="text-green-100 font-body text-sm">Reminds you exactly when to water or move your plant</p>
            </div>

            {/* Tracking */}
            <div className="text-center text-white group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Tracking</h3>
              <p className="text-green-100 font-body text-sm">Tracks your plant care and provides expert advice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">Join Our Growing Community</h2>
          <p className="text-xl text-green-100 mb-8 font-body">
            Get expert plant care tips, exclusive offers, and sustainability insights delivered weekly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white border-0 text-gray-900 font-body flex-1"
            />
            <Button className="bg-green-800 hover:bg-green-900 text-white font-body px-8">Join</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
