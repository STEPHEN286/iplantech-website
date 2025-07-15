import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Leaf, Heart } from "lucide-react"
import Image from "next/image"
import Meta from "@/components/meta-description";

export default function AboutPage() {
  return (
    <>
      <Meta title="About | iPlant Tech" description="Learn more about iPlant Tech, our mission, our team, and how we're transforming the future of smart plant care." />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
          <div className="container grid grid-cols-2  gap-6 place-items-center  mx-auto px-4 ">
            <div className="max-w-4xl mx-auto ">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                About<span className="text-green-600"> iPlantTech</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We're  passionate  about helping people discover the joy and benefits of plant parenting.Our mission is to make plant care accessible, enjoyable, and successful for everyone.
              </p>
              <button className="bg-green-600 rounded-md p-4 font-medium text-white">
                join our community
              </button>
            </div>

            <div className="  ">
          <img src="https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752262906/Image_fx_11_gdqnaf.png" className="h-full w-full rounded-3xl" alt="Team of iPlant Tech working together on smart plant care solutions" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid text-center gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                iPlantTech was born from a simple observation: too many beautiful plants were dying because their owners
                didn't know how to care for them properly. We believed that with the right guidance and support, anyone
                could become a successful plant parent.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Founded in 2020 by a team of botanists, gardeners, and plant enthusiasts, we've helped over 50,000
                people transform their homes into green sanctuaries.
              </p>
              
            </div>
            
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to eco-friendly practices and sustainable plant sourcing
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Care</h3>
                <p className="text-gray-600">Every plant deserves love and proper care - we help you provide both</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">
                  Building a supportive community of plant lovers who help each other grow
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from plant quality to customer service
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The plant experts behind iPlantTech</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <img
                  src="https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752279665/blank-profile-picture-973460_960_720_drxsoy.png"
                  alt="Portrait of Sarah Johnson, Lead Botanist at iPlant Tech"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                <p className="text-green-600 mb-2">Lead Botanist</p>
                <p className="text-gray-600">
                  PhD in Plant Biology with 15 years of experience in plant care and research
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <img
                  src="https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752279665/blank-profile-picture-973460_960_720_drxsoy.png"
                  alt="Portrait of Mike Chen, Head Gardener at iPlant Tech"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Mike Chen</h3>
                <p className="text-green-600 mb-2">Head Gardener</p>
                <p className="text-gray-600">
                  Master gardener specializing in indoor plants and sustainable growing practices
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <img
                  src="https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752279665/blank-profile-picture-973460_960_720_drxsoy.png"
                  alt="Portrait of Emma Davis, Community Manager at iPlant Tech"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Emma Davis</h3>
                <p className="text-green-600 mb-2">Community Manager</p>
                <p className="text-gray-600">Passionate about building connections between plant lovers worldwide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
