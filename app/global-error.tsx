"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle, Home } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Global application error:", error)
    }
    // In production, log to error tracking service
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-4 bg-destructive/10 rounded-full">
                <AlertCircle className="h-12 w-12 text-destructive" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-3xl font-serif font-bold text-foreground">
                Application Error
              </h1>
              <p className="text-muted-foreground">
                A critical error occurred. Please refresh the page or contact support if the problem persists.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={reset} variant="default">
                Try Again
              </Button>
              <Button onClick={() => window.location.href = "/"} variant="outline">
                Go Home
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

