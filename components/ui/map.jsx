"use client"

import { cn } from "@/lib/utils"

const Map = ({ 
  src, 
  width = "600", 
  height = "450", 
  className,
  title = "Location Map",
  allowFullScreen = true,
  loading = "lazy",
  referrerPolicy = "no-referrer-when-downgrade"
}) => {
  return (
    <div className={cn("w-full ", className)}>
      <iframe 
        src={src}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen={allowFullScreen}
        loading={loading}
        referrerPolicy={referrerPolicy}
        title={title}
        className="w-full rounded-lg container shadow-lg"
      />
    </div>
  )
}

export { Map } 