import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, BookOpen, Video, FileText, ExternalLink } from "lucide-react"

const resources = [
  {
    id: 1,
    title: "Complete Plant Care Guide",
    description: "Comprehensive PDF guide covering care instructions for 50+ popular houseplants.",
    type: "PDF Guide",
    size: "2.5 MB",
    downloads: 1250,
    icon: FileText,
    free: true,
  },
  {
    id: 2,
    title: "Plant Care Video Series",
    description: "Step-by-step video tutorials on watering, repotting, and troubleshooting.",
    type: "Video Course",
    duration: "2.5 hours",
    downloads: 890,
    icon: Video,
    free: false,
    price: "$19.99",
  },
  {
    id: 3,
    title: "Plant Identification Chart",
    description: "Visual guide to identify common houseplants and their specific care needs.",
    type: "Infographic",
    size: "1.8 MB",
    downloads: 2100,
    icon: FileText,
    free: true,
  },
  {
    id: 4,
    title: "Seasonal Care Calendar",
    description: "Month-by-month plant care schedule to keep your plants healthy year-round.",
    type: "Calendar",
    size: "850 KB",
    downloads: 1680,
    icon: FileText,
    free: true,
  },
]

const tools = [
  {
    id: 1,
    title: "Plant Care Reminder App",
    description: "Never forget to water your plants again with our mobile app.",
    type: "Mobile App",
    platform: "iOS & Android",
    icon: ExternalLink,
  },
  {
    id: 2,
    title: "Light Meter Calculator",
    description: "Determine if your plants are getting enough light with our online tool.",
    type: "Web Tool",
    platform: "Browser",
    icon: ExternalLink,
  },
  {
    id: 3,
    title: "Plant Health Checker",
    description: "Upload a photo of your plant to get instant health assessment.",
    type: "AI Tool",
    platform: "Web & Mobile",
    icon: ExternalLink,
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Plant Care <span className="text-green-600">Resources</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to become a successful plant parent. Download guides, watch tutorials, and use our
              tools to keep your plants thriving.
            </p>
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Free Resources</h2>
            <p className="text-xl text-gray-600">High-quality plant care resources at no cost</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {resources
              .filter((resource) => resource.free)
              .map((resource) => {
                const IconComponent = resource.icon
                return (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-green-100 rounded-lg">
                          <IconComponent className="h-8 w-8 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{resource.type}</Badge>
                            <Badge className="bg-green-600">Free</Badge>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                          <p className="text-gray-600 mb-4">{resource.description}</p>

                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                            {resource.size && <span>Size: {resource.size}</span>}
                            {resource.duration && <span>Duration: {resource.duration}</span>}
                            <span>{resource.downloads.toLocaleString()} downloads</span>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <Download className="h-4 w-4 mr-2" />
                        Download Free
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </div>
      </section>

      {/* Premium Resources */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Resources</h2>
            <p className="text-xl text-gray-600">Advanced guides and courses for serious plant enthusiasts</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {resources
              .filter((resource) => !resource.free)
              .map((resource) => {
                const IconComponent = resource.icon
                return (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-green-100 rounded-lg">
                          <IconComponent className="h-8 w-8 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{resource.type}</Badge>
                            <Badge className="bg-blue-600">Premium</Badge>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                          <p className="text-gray-600 mb-4">{resource.description}</p>

                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                            {resource.duration && <span>Duration: {resource.duration}</span>}
                            <span>{resource.downloads.toLocaleString()} downloads</span>
                          </div>

                          <div className="text-2xl font-bold text-green-600 mb-6">{resource.price}</div>
                        </div>
                      </div>

                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Purchase Now
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </div>
      </section>

      {/* Tools & Apps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tools & Apps</h2>
            <p className="text-xl text-gray-600">Digital tools to make plant care easier and more effective</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool) => {
              const IconComponent = tool.icon
              return (
                <Card key={tool.id} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>

                    <Badge variant="outline" className="mb-4">
                      {tool.type}
                    </Badge>
                    <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    <p className="text-sm text-gray-500 mb-6">Available on {tool.platform}</p>

                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <Link href="#">
                        Try Now
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-green-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get New Resources First</h2>
          <p className="text-xl text-green-100 mb-8">Subscribe to get notified when we release new guides and tools</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
