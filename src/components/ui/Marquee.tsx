import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

type MarqueeProps = {
  children: ReactNode
  reverse?: boolean
  className?: string
}

export function Marquee({ children, reverse = false, className }: MarqueeProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max gap-8",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
