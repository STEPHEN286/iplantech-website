import * as React from "react"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef & 
>(({ className, variant, ...props }, ref) => (
  
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef
>(({ className, ...props }, ref) => (
  
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef
>(({ className, ...props }, ref) => (
  
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
