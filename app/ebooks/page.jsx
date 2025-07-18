import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, Star, Users, BookOpen } from "lucide-react"

export const metadata = {
  title: "E-books | iPlant Tech",
  description: "Download free e-books from iPlant Tech and discover everything you need to know about smart gardening and plant care.",
};

export default function EbookPage() {
  return (
    <>
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-green-600 text-white">FREE DOWNLOAD</Badge>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  The Complete Guide to <span className="text-green-600">Indoor Plant Care</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Everything you need to know to successfully grow and care for houseplants. From beginner basics to
                  advanced techniques, this comprehensive guide has it all.
                </p>
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">127 Pages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">50,000+ Downloads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-gray-700">4.9/5 Rating</span>
                  </div>
                </div>
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Download className="mr-2 w-5 h-5" />
                  Download Free Ebook
                </Button>
              </div>
              <div className="relative">
                <div className=" bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752262906/Image_fx_12_jzwlrw.png"
                    alt="Plant Care Ebook Cover"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                {/* <div className="absolute -bottom-4 -left-4 bg-green-600 text-white px-4 py-2 rounded-full font-semibold">
                  100% FREE
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Inside the Guide</h2>
              <p className="text-xl text-gray-600">Comprehensive coverage of everything you need to know</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Plant Selection",
                  description: "Choose the right plants for your space, lighting, and experience level",
                  items: [
                    "Light requirements",
                    "Space considerations",
                    "Beginner-friendly options",
                    "Advanced varieties",
                  ],
                },
                {
                  title: "Basic Care",
                  description: "Master the fundamentals of plant care with step-by-step instructions",
                  items: ["Watering techniques", "Soil selection", "Fertilizing schedules", "Repotting guide"],
                },
                {
                  title: "Problem Solving",
                  description: "Identify and treat common plant problems before they become serious",
                  items: ["Disease identification", "Pest management", "Nutrient deficiencies", "Environmental stress"],
                },
                {
                  title: "Advanced Techniques",
                  description: "Take your plant care to the next level with expert strategies",
                  items: ["Propagation methods", "Pruning techniques", "Training and shaping", "Seasonal care"],
                },
                {
                  title: "Plant Profiles",
                  description: "Detailed care guides for 50+ popular houseplants",
                  items: ["Care requirements", "Common problems", "Growth patterns", "Styling tips"],
                },
                {
                  title: "Tools & Equipment",
                  description: "Essential tools and equipment for successful plant care",
                  items: ["Must-have tools", "Soil amendments", "Fertilizer types", "Monitoring devices"],
                },
              ].map((section, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">{section.title}</h3>
                    <p className="text-gray-600 mb-6">{section.description}</p>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Download Form */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <Card className="bg-white shadow-xl">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Copy Now</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Join over 50,000 plant parents who have transformed their plant care with this comprehensive guide
                </p>

                <form className="max-w-md mx-auto space-y-4">
                  <Input type="text" placeholder="Your first name" className="text-center" />
                  <Input type="email" placeholder="Your email address" className="text-center" />
                  <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                    <Download className="mr-2 w-5 h-5" />
                    Download Your Free Ebook
                  </Button>
                </form>

                <p className="text-sm text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Readers Are Saying</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Jessica Martinez",
                  text: "This ebook saved my plants! I went from killing everything to having a thriving indoor garden. The troubleshooting section is pure gold.",
                  rating: 5,
                },
                {
                  name: "David Thompson",
                  text: "Incredibly comprehensive yet easy to understand. Perfect for beginners but detailed enough for experienced plant parents too.",
                  rating: 5,
                },
                {
                  name: "Lisa Chen",
                  text: "The plant profiles section is amazing. I reference it constantly when caring for my 30+ houseplants. Highly recommend!",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bonus Content */}
        <section className="py-20 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Bonus Content Included</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Plant Care Checklist</h3>
                <p className="text-green-100">Printable weekly and monthly care checklists</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Troubleshooting Chart</h3>
                <p className="text-green-100">Quick reference guide for common problems</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Seasonal Calendar</h3>
                <p className="text-green-100">Year-round plant care schedule and reminders</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
