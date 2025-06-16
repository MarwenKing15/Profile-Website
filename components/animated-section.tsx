"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"
import { useState, useEffect } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale"
  delay?: number
}

export function AnimatedSection({ children, className = "", animation = "fadeUp", delay = 0 }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation()
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldAnimate(true)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isVisible, delay])

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out"

    if (!shouldAnimate) {
      switch (animation) {
        case "fadeUp":
          return `${baseClasses} opacity-0 translate-y-6`
        case "fadeIn":
          return `${baseClasses} opacity-0`
        case "slideLeft":
          return `${baseClasses} opacity-0 -translate-x-6`
        case "slideRight":
          return `${baseClasses} opacity-0 translate-x-6`
        case "scale":
          return `${baseClasses} opacity-0 scale-95`
        default:
          return `${baseClasses} opacity-0 translate-y-6`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}
