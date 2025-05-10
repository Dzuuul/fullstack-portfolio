"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This would typically integrate with your analytics service
    // For example, with Google Analytics:
    // if (window.gtag) {
    //   window.gtag("config", "GA-MEASUREMENT-ID", {
    //     page_path: pathname + searchParams.toString(),
    //   })
    // }

    // For now, we'll just log to console
    console.log(`Page view: ${pathname}${searchParams.toString()}`)
  }, [pathname, searchParams])

  return null
}
