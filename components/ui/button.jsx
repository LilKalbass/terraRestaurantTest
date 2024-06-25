import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-primary-foreground bg-white hover:bg-green transition-all",
        outline:
          "border border-[1px] border-input border-white bg-white hover:bg-white/0 hover:text-white duration-300",
        outline_green:
          "border border-[2px] border-input border-green bg-white hover:bg-green hover:text-white duration-300",
        submit:
            'bg-green text-white hover:drop-shadow-2xl hover:bg-green/90 duration-300 w-full'
      },
      size: {
        round: "h-[120px] w-[120px] rounded-full text-[22px] hover:h-[200px] hover:w-[200px] transition-all",
        strict: "font-[700] text-[20px] px-7 py-3 transition-all leading-[24px] transition-all",
        icon: "h-[50px] w-[50px]"
      },
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
