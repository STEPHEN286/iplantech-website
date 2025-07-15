import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Leaf, Camera, MessageCircle, Calendar, Award } from "lucide-react"
import Meta from "@/components/meta-description";

const services = [
  {
    id: 1,
    name: "Plant Health Consultation",
    price: "From $25",
    duration: "30 minutes",
    description: "Get expert advice on plant care, diagnosis, and treatment plans.",
    features: [
      "One-on-one video consultation",
      "Personalized care plan",
      "Follow-up support",
      "Plant identification help",
    ],
    icon: Leaf,
    popular: true,
  },
  {
    id: 2,
    name: "Plant Photography Service",
    price: "From $50",
    duration: "1 hour",
    description: "Professional photography to showcase your beautiful plants.",
    features: [
      "Professional plant photography",
      "High-resolution images",
      "Basic editing included",
      "Social media ready formats",
    ],
    icon: Camera,
  },
  {
    id: 3,
    name: "24/7 Plant Care Support",
    price: "$15/month",
    duration: "Ongoing",
    description: "Round-the-clock support for all your plant care questions.",
    features: [
      "Unlimited chat support",
      "Emergency plant care advice",
      "Monthly care reminders",
      "Access to expert community",
    ],
    icon: MessageCircle,
  },
  {
    id: 4,
    name: "Monthly Plant Care Plan",
    price: "$35/month",
    duration: "Monthly visits",
    description: "Regular in-home plant care service for busy plant parents.",
    features: ["Monthly home visits", "Watering and feeding", "Pruning and maintenance", "Health monitoring reports"],
    icon: Calendar,
  },
]

export default function ServicesPage() {
  return (
    <>
      <Meta title="Repairs | iPlant Tech" description="Need help with your device? iPlant Tech offers professional repair services for smart gardening tools and accessories." />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Plant Care <span className="text-green-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional plant care services to help your green friends thrive. From consultations to ongoing care,
              we've got you covered.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Card key={service.id} className="relative hover:shadow-lg transition-shadow">
                  {service.popular && <Badge className="absolute -top-3 left-6 bg-green-600 z-10">Most Popular</Badge>}
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <IconComponent className="h-8 w-8 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-2xl font-bold text-green-600">{service.price}</span>
                          <span className="text-gray-500">• {service.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">Book Now</Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600">Professional expertise you can trust</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Certified Experts</h3>
                <p className="text-gray-600">
                  Our team consists of certified botanists and experienced plant care specialists
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">100% satisfaction guarantee on all our services or your money back</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                <p className="text-gray-600">Continuous support and follow-up to ensure your plants stay healthy</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Give Your Plants the Best Care?</h2>
          <p className="text-xl text-green-100 mb-8">
            Book a consultation today and see the difference professional care makes
          </p>
          <Button size="lg" variant="secondary">
            Schedule Your Consultation
          </Button>
        </div>
      </section>
    </>
  )
}
