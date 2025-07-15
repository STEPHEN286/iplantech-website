import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search, Filter, Star, ShoppingCart } from "lucide-react"
import { HeroSection } from "@/components/ui/hero-section"
import Meta from "@/components/meta-description";

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Smart Plant Monitor Pro",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752295533/Image_fx_16_uw4cs7.png",
      category: "Smart Devices",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      inStock: true,
    },
    {
      id: 2,
      name: "iPlantTech Growing System",
      price: 149.99,
      originalPrice: null,
      image: "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752295533/Image_fx_16_uw4cs7.png",
      category: "Smart Devices",
      rating: 4.9,
      reviews: 89,
      badge: "New",
      inStock: true,
    },
    {
      id: 3,
      name: "Smart Watering Pod",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752295533/Image_fx_16_uw4cs7.png",
      category: "Smart Devices",
      rating: 4.7,
      reviews: 156,
      badge: "Sale",
      inStock: true,
    },
    {
      id: 4,
      name: "Plant Health Sensor",
      price: 59.99,
      originalPrice: null,
      image: "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752295533/Image_fx_16_uw4cs7.png",
      category: "Smart Devices",
      rating: 4.6,
      reviews: 203,
      badge: null,
      inStock: true,
    },
    {
      id: 5,
      name: "Automated Care Station",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752295533/Image_fx_16_uw4cs7.png",
      category: "Smart Devices",
      rating: 4.8,
      reviews: 67,
      badge: "Premium",
      inStock: true,
    },
    {
      id: 6,
      name: "Mini Plant Monitor",
      price: 39.99,
      originalPrice: null,
      image: "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752295533/Image_fx_16_uw4cs7.png",
      category: "Smart Devices",
      rating: 4.5,
      reviews: 145,
      badge: "Popular",
      inStock: true,
    },
    {
      id: 7,
      name: "Smart Grow Light System",
      price: 129.99,
      originalPrice: null,
      image: "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752295533/Image_fx_16_uw4cs7.png",
      category: "Smart Devices",
      rating: 4.7,
      reviews: 98,
      badge: null,
      inStock: false,
    },
  ]

  return (
    <>
      <Meta title="Shop | iPlant Tech" description="Shop smart plant care devices and accessories at iPlant Tech. Easy ordering, secure payments, and fast delivery." />
      <div className="min-h-screen ">
        {/* Hero Section */}
        <HeroSection
          backgroundImage="https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752295167/FRAME_5_j6cb1b.png"
          title="Plant Shop"
          description="Discover our collection of smart plant care devices designed to help your plants thrive"
          
          layout="grid"
          overlayOpacity="bg-green-600/30"
          height="h-[500px]"
        />

        {/* Filters and Search */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Search products..." className="pl-10 w-64" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Products</SelectItem>
                    <SelectItem value="smart-devices">Smart Devices</SelectItem>
                    <SelectItem value="sensors">Sensors</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-4 items-center">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 bg-white border-0">
                  <div className="relative">
                    <div className="aspect-square overflow-hidden rounded-t-lg bg-gray-100">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {product.badge && (
                      <Badge
                        className={`absolute top-3 left-3 ${
                          product.badge === "Sale"
                            ? "bg-red-600"
                            : product.badge === "New"
                              ? "bg-blue-600"
                              : product.badge === "Best Seller"
                                ? "bg-orange-600"
                                : product.badge === "Premium"
                                  ? "bg-purple-600"
                                  : "bg-green-600"
                        }`}
                      >
                        {product.badge}
                      </Badge>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-lg">
                        <span className="text-white font-semibold">Out of Stock</span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-500 mb-1 font-body">{product.category}</p>
                    <h3 className="text-lg font-heading font-semibold mb-2 line-clamp-2 text-gray-900">{product.name}</h3>

                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 font-body">({product.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-green-600 font-body">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through font-body">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    <Button
                      className={`w-full font-body ${
                        product.inStock
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Why Choose iPlantTech Devices?</h2>
              <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
                Our smart plant care devices are designed with cutting-edge technology to make plant care effortless
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-gray-900">Smart Monitoring</h3>
                <p className="text-gray-600 font-body">
                  Real-time monitoring of soil moisture, light levels, temperature, and plant health
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-gray-900">Mobile App Control</h3>
                <p className="text-gray-600 font-body">
                  Control and monitor your plants from anywhere with our intuitive mobile application
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-gray-900">Expert Guidance</h3>
                <p className="text-gray-600 font-body">
                  Get personalized care recommendations based on your specific plants and environment
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-green-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Stay Updated on New Products</h2>
            <p className="text-xl text-green-100 mb-8 font-body">
              Be the first to know about new smart plant care devices and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white border-0 text-gray-900 font-body flex-1"
              />
              <Button className="bg-green-800 hover:bg-green-900 text-white font-body px-8">Subscribe</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
