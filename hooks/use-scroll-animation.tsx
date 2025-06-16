"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true)
        // Disconnect observer after first intersection to prevent re-triggering
        if (observerRef.current && ref.current) {
          observerRef.current.unobserve(ref.current)
        }
      }
    },
    [isVisible],
  )

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    // Add a small delay to prevent immediate observation issues
    const timer = setTimeout(() => {
      try {
        observerRef.current = new IntersectionObserver(handleIntersection, {
          threshold,
          rootMargin: "50px 0px -50px 0px", // Trigger slightly before element is fully visible
        })

        if (currentRef) {
          observerRef.current.observe(currentRef)
        }
      } catch (error) {
        console.warn("IntersectionObserver error:", error)
        // Fallback: just show the element
        setIsVisible(true)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      if (observerRef.current && currentRef) {
        try {
          observerRef.current.unobserve(currentRef)
          observerRef.current.disconnect()
        } catch (error) {
          console.warn("Observer cleanup error:", error)
        }
      }
    }
  }, [handleIntersection, threshold])

  return { ref, isVisible }
}
