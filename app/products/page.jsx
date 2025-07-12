import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Droplets, Sun, Thermometer } from "lucide-react"
import { HeroSection } from "@/components/ui/hero-section"

export default function ProductsPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752270299/FRAME_3_oux2kk.png"
        title="Plant Care Products"
        description="Discover our comprehensive range of plant care tools, accessories, and smart devices designed to help your plants thrive."
        primaryButton={{
          text: "Shop Now",
          href: "/shop"
        }}
        secondaryButton={{
          text: "Learn More",
          href: "/about"
        }}
        overlayOpacity="bg-green-600/30"
      />

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Plant Tracker</h3>
                <p className="text-gray-600 mb-6">Smart sensors to monitor your plants' health and environment</p>
                <Button variant="outline" className="w-full">
                  View Products
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <Droplets className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Watering Systems</h3>
                <p className="text-gray-600 mb-6">Automated and manual watering solutions for every plant</p>
                <Button variant="outline" className="w-full">
                  View Products
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors">
                  <Sun className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Grow Lights</h3>
                <p className="text-gray-600 mb-6">LED grow lights for optimal plant growth indoors</p>
                <Button variant="outline" className="w-full">
                  View Products
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <Thermometer className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Climate Control</h3>
                <p className="text-gray-600 mb-6">Humidity and temperature control devices</p>
                <Button variant="outline" className="w-full">
                  View Products
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Our most popular plant care solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Smart Plant Monitor Pro",
                price: "$89.99",
                originalPrice: "$119.99",
                image: "/placeholder.svg?height=300&width=300",
                badge: "Best Seller",
                features: [
                  "Soil moisture tracking",
                  "Light level monitoring",
                  "Temperature alerts",
                  "Mobile app integration",
                ],
              },
              {
                name: "Auto-Watering System",
                price: "$149.99",
                image: "/placeholder.svg?height=300&width=300",
                badge: "New",
                features: [
                  "Programmable schedules",
                  "Multiple plant support",
                  "Water level indicator",
                  "Easy installation",
                ],
              },
              {
                name: "Full Spectrum LED Grow Light",
                price: "$79.99",
                image: "/placeholder.svg?height=300&width=300",
                badge: "Popular",
                features: ["Full spectrum lighting", "Adjustable height", "Timer function", "Energy efficient"],
              },
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white">
                <div className="relative">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-green-600">{product.badge}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <ul className="text-sm text-gray-600 mb-6 space-y-1">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
