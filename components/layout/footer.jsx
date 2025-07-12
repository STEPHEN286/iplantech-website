import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* iPlantTech Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752267029/logo_tqj6ky.svg" 
                alt="iPlantTech Logo" 
                className="w-24 h-12"
              />
            </Link>
            <p className="text-gray-300 font-body text-sm leading-relaxed">
              iPlantTech is dedicated to help make their homes sustainable havens that are good for them and a greener
              planet.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Plant Care */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Plant Care</h3>
            <div className="space-y-2">
              <Link
                href="/plant-care-guide"
                className="block text-gray-300 hover:text-white transition-colors font-body text-sm"
              >
                Plant Care Guide
              </Link>
              <Link
                href="/plant-identification"
                className="block text-gray-300 hover:text-white transition-colors font-body text-sm"
              >
                Plant Identification
              </Link>
              <Link
                href="/plant-care-tips"
                className="block text-gray-300 hover:text-white transition-colors font-body text-sm"
              >
                Plant Care Tips
              </Link>
              <Link
                href="/common-problems"
                className="block text-gray-300 hover:text-white transition-colors font-body text-sm"
              >
                Common Problems
              </Link>
            </div>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Products & Services</h3>
            <div className="space-y-2">
              <Link
                href="/smart-pods"
                className="block text-gray-300 hover:text-white transition-colors font-body text-sm"
              >
                Smart Pods
              </Link>
              <Link
                href="/automated-watering"
                className="block text-gray-300 hover:text-white transition-colors font-body text-sm"
              >
                Automated Watering
              </Link>
              <Link
                href="/plant-subscription"
                className="block text-gray-300 hover:text-white transition-colors font-body text-sm"
              >
                Plant Subscription
              </Link>
              <Link
                href="/expert-consultation"
                className="block text-gray-300 hover:text-white transition-colors font-body text-sm"
              >
                Expert Consultation
              </Link>
            </div>
          </div>

          {/* Stay Green & Connected */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Stay Green & Connected</h3>
            <p className="text-gray-300 mb-4 font-body text-sm">
              Join our community of plant lovers and get weekly care tips, exclusive offers, and sustainability
              insights.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 font-body"
              />
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-body">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-body">
            © 2024 Plant Pal. All rights reserved | Making the world greener, one plant at a time.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors font-body">
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-400 hover:text-white text-sm transition-colors font-body"
            >
              Terms of Service
            </Link>
            <Link href="/sustainability" className="text-gray-400 hover:text-white text-sm transition-colors font-body">
              Sustainability
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
