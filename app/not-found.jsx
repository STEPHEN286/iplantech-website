import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="relative mb-8">
          {/* 404 GIF */}
          <div className="relative w-full max-w-2xl mx-auto">
            <img
              src="https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752298678/404_Error_2_oersrk.gif"
              alt="404 Error - Page Not Found"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            {/* Light green overlay */}
            <div className="absolute inset-0 bg-green-500/10 rounded-lg"></div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            Oops! <span className="text-green-600">404</span>
          </h1>
          
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Page Not Found
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Looks like this page has wandered off like a lost seedling! 
            Don't worry, we'll help you find your way back to our garden of plant care resources.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link href="/">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back to Home
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Support
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Or explore our popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/products" className="text-green-600 hover:text-green-700 font-medium transition-colors">
                Products
              </Link>
              <Link href="/blog" className="text-green-600 hover:text-green-700 font-medium transition-colors">
                Blog
              </Link>
              <Link href="/services" className="text-green-600 hover:text-green-700 font-medium transition-colors">
                Services
              </Link>
              <Link href="/resources" className="text-green-600 hover:text-green-700 font-medium transition-colors">
                Resources
              </Link>
              <Link href="/shop" className="text-green-600 hover:text-green-700 font-medium transition-colors">
                Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 