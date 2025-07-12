"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const HeroSection = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  description, 
  primaryButton, 
  secondaryButton, 
  className,
  overlayOpacity = "bg-green-600/20",
  height = "h-[500px]",
  children 
}) => {
  return (
    <section className={cn("relative overflow-hidden", height, className)}>
      
      <div className="absolute inset-0 w-full h-full">
        <img
          src={backgroundImage}
          alt={title}
          onError={e => { e.target.onerror = null; e.target.src = "/placeholder.svg"; }}
          className="absolute inset-0 w-full h-full object-cover "
          style={{ objectPosition: "center" }}
        />
        {/* Light Green Overlay */}
        <div className={cn("absolute inset-0", overlayOpacity)}></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl mx-auto px-4">
          {title && (
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 drop-shadow-lg">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-xl md:text-2xl text-white mb-4 font-body drop-shadow-md">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-lg text-gray-100 mb-8 font-body max-w-2xl mx-auto drop-shadow-sm">
              {description}
            </p>
          )}
          
          {/* Custom children content */}
          {children}
          
          {/* Action Buttons */}
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryButton && (
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-body shadow-lg"
                  onClick={primaryButton.onClick}
                  asChild={primaryButton.href ? true : false}
                >
                  {primaryButton.href ? (
                    <a href={primaryButton.href}>{primaryButton.text}</a>
                  ) : (
                    primaryButton.text
                  )}
                </Button>
              )}
              {secondaryButton && (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-8 py-3 font-body bg-white/90"
                  onClick={secondaryButton.onClick}
                  asChild={secondaryButton.href ? true : false}
                >
                  {secondaryButton.href ? (
                    <a href={secondaryButton.href}>{secondaryButton.text}</a>
                  ) : (
                    secondaryButton.text
                  )}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export { HeroSection } 