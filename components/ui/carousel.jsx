"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Carousel = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative w-full overflow-hidden", className)}
    {...props}
  />
))
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex w-full transition-transform duration-500 ease-in-out will-change-transform",
      className
    )}
    {...props}
  />
))
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "shrink-0 grow-0 basis-full snap-center",
      className
    )}
    {...props}
  />
))
CarouselItem.displayName = "CarouselItem"

export { Carousel, CarouselContent, CarouselItem }
