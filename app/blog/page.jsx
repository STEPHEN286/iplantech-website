import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/ui/hero-section"
import Meta from "@/components/meta-description";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "10 Best Plants for Beginners: Start Your Plant Journey Right",
      excerpt:
        "Discover the most forgiving and beautiful plants perfect for new plant parents. These hardy varieties will help you build confidence...",
      image: "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752280017/FRAME_4_dlzdjn.png",
      category: "Beginner Tips",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "How to Diagnose Common Plant Problems",
      excerpt:
        "Learn to identify and treat the most common issues that affect houseplants, from yellowing leaves to pest infestations...",
      image: "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752280017/FRAME_4_dlzdjn.png",
      category: "Plant Care",
      author: "Dr. Emma Green",
      date: "March 12, 2024",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: 3,
      title: "Creating the Perfect Plant Corner in Your Home",
      excerpt:
        "Transform any space into a green oasis with these design tips and plant selection strategies for different lighting conditions...",
      image: "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752280017/FRAME_4_dlzdjn.png",
      category: "Home Design",
      author: "Mike Chen",
      date: "March 10, 2024",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 4,
      title: "The Science Behind Plant Growth: Understanding Your Green Friends",
      excerpt:
        "Dive deep into photosynthesis, nutrient absorption, and growth patterns to become a more informed plant parent...",
      image: "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752280017/FRAME_4_dlzdjn.png",
      category: "Plant Science",
      author: "Dr. Emma Green",
      date: "March 8, 2024",
      readTime: "10 min read",
      featured: false,
    },
    {
      id: 5,
      title: "Seasonal Plant Care: Adapting to Changing Conditions",
      excerpt:
        "Learn how to adjust your plant care routine throughout the year to keep your plants healthy in every season...",
      image: "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752280017/FRAME_4_dlzdjn.png",
      category: "Seasonal Care",
      author: "Sarah Johnson",
      date: "March 5, 2024",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 6,
      title: "Propagation 101: Growing New Plants from Your Favorites",
      excerpt: "Master the art of plant propagation with step-by-step guides for different methods and plant types...",
      image: "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752280017/FRAME_4_dlzdjn.png",
      category: "Advanced Tips",
      author: "Mike Chen",
      date: "March 3, 2024",
      readTime: "12 min read",
      featured: false,
    },
  ]

  const categories = [
    "All",
    "Beginner Tips",
    "Plant Care",
    "Home Design",
    "Plant Science",
    "Seasonal Care",
    "Advanced Tips",
  ]

  return (
    <>
      <Meta title="Blog | iPlant Tech" description="Read expert tips, updates, and plant care guides on the iPlant Tech blog. Grow smarter and greener every day." />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <HeroSection
          backgroundImage="https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752280017/FRAME_4_dlzdjn.png"
          title="Plant Care Blog"
          description="Expert tips, guides, and insights to help you become the best plant parent you can be"
          // primaryButton={{
          //   text: "Browse Articles",
          //   href: "#featured"
          // }}
          // secondaryButton={{
          //   text: "Subscribe",
          //   href: "/newsletter"
          // }}
          layout="grid"
          overlayOpacity="bg-green-600/20"
          height="h-[500px]"
        >
         
        </HeroSection>

        {/* Categories */}
        <section className="py-8 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={category === "All" ? "bg-green-600 hover:bg-green-700" : "hover:bg-green-50"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {/* <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
            </div>

            {posts
              .filter((post) => post.featured)
              .map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="aspect-video lg:aspect-square overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <Badge className="w-fit mb-4 bg-green-600">{post.category}</Badge>
                      <h3 className="text-3xl font-bold mb-4 text-gray-900">{post.title}</h3>
                      <p className="text-gray-600 mb-6 text-lg">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <Button className="bg-green-600 hover:bg-green-700">
                          Read Full Article
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              ))}
          </div>
        </section> */}

        {/* Recent Posts */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
           <div className="flex justify-between items-center  mb-4  bg-red-600 w-full">
              
                <h2 className="text-3xl font-bold text-gray-900">Recent Articles</h2>
          

            <div className="max-w-md relative ">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input placeholder="Search articles..." className="pl-10 bg-white border-0 shadow-md" />
        </div>
         </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts
              .filter((post) => !post.featured)
              .map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-green-100 text-green-800">{post.category}</Badge>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0">
                          Read More →
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Never Miss a Plant Tip</h2>
          <p className="text-xl text-green-100 mb-8">
            Get our latest articles and exclusive plant care guides delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="bg-white border-0 text-gray-900" />
            <Button className="bg-green-800 hover:bg-green-900 text-white">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
