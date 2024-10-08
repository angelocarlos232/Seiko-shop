import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Slot } from '@radix-ui/react-slot'

const textVariants = cva(
  "text-foreground",
  {
    variants: {
      variant: {
        veryLarge: "text-8xl",
        default: "text-base",
        heading: "text-2xl font-bold",
        subheading: "text-xl font-semibold",
        caption: "text-sm text-gray-500",
      },
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p"
    return (
      <Comp
        className={cn(textVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"

export { Text, textVariants }
