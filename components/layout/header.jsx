"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Leaf, Menu, Search, Phone, ChevronDown, ShoppingCart } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752267029/logo_tqj6ky.svg" 
              alt="iPlantTech Logo" 
              className="w-20 h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors font-body font-medium">
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-green-600 transition-colors font-body font-medium"
            >
             Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors font-body font-medium">
              About
            </Link>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors font-body font-medium">
                Resources
                <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors">
                    Blog
                  </Link>
                  <Link href="/ebooks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors">
                    E-Books
                  </Link>
                </div>
              </div>
            </div>

            {/* Service Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors font-body font-medium">
                Service
                <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link href="/maintenance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors">
                    Repairs
                  </Link>
                  <Link href="/support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors">
                    Delivery
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/shop" className="text-gray-700 hover:text-green-600 transition-colors font-body font-medium">
              Shop
            </Link>
            {/* <Link href="/pricing" className="text-gray-700 hover:text-green-600 transition-colors font-body font-medium">
              Pricing
            </Link> */}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-green-600">
              <Search className="w-5 h-5" />
            </Button>

          <Link href="/contact">
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-green-600">
                <Phone className="w-5 h-5" />
              </Button>
          </Link>
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-green-600">
              <ShoppingCart className="w-5 h-5" />
            </Button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-green-600 transition-colors font-body font-medium">
                ENG
                <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Español</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
                <DropdownMenuItem>Deutsch</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="/"
                    className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                 <div className="border-t pt-4">
                   <div className="text-xs uppercase text-gray-400 mb-2">Resources</div>
                   <Link
                     href="/blog"
                     className="block text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                     onClick={() => setIsOpen(false)}
                   >
                     Blog
                   </Link>
                   <Link
                     href="/ebooks"
                     className="block text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                     onClick={() => setIsOpen(false)}
                   >
                     E-Books
                   </Link>
                 </div>
                  <div className="border-t pt-4">
                    <div className="text-xs uppercase text-gray-400 mb-2">Services</div>
                    <Link
                      href="/maintenance"
                      className="text-lg block font-medium text-gray-700 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Repairs
                    </Link>
                    <Link
                      href="/support"
                      className="text-lg block font-medium text-gray-700 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Delivery
                    </Link>
                  </div>
                  <Link
                    href="/shop"
                    className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Shop
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
