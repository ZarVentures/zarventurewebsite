"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, MessageCircle, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { CONTACT_INFO } from "@/lib/constants"

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Input sanitization function
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/[<>]/g, "") // Remove potential HTML tags
      .trim()
  }

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    // Indian phone format: +91 followed by 10 digits, or 10 digits starting with 6-9
    const phoneRegex = /^(\+91[\s-]?)?[6-9]\d{9}$/
    const cleaned = phone.replace(/[\s-]/g, "")
    return phoneRegex.test(cleaned)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    const sanitizedName = sanitizeInput(formData.name)
    if (!sanitizedName || sanitizedName.length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    } else if (sanitizedName.length > 100) {
      newErrors.name = "Name must be less than 100 characters"
    }

    // Email validation
    const sanitizedEmail = sanitizeInput(formData.email)
    if (!sanitizedEmail) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(sanitizedEmail)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation
    const sanitizedPhone = sanitizeInput(formData.phone)
    if (!sanitizedPhone) {
      newErrors.phone = "Phone number is required"
    } else if (!validatePhone(sanitizedPhone)) {
      newErrors.phone = "Please enter a valid Indian phone number (+91 XXXXXXXXXX)"
    }

    // Subject validation
    const sanitizedSubject = sanitizeInput(formData.subject)
    if (!sanitizedSubject || sanitizedSubject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters"
    } else if (sanitizedSubject.length > 200) {
      newErrors.subject = "Subject must be less than 200 characters"
    }

    // Message validation
    const sanitizedMessage = sanitizeInput(formData.message)
    if (!sanitizedMessage || sanitizedMessage.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    } else if (sanitizedMessage.length > 2000) {
      newErrors.message = "Message must be less than 2000 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form")
      return
    }

    setIsSubmitting(true)
    setIsSuccess(false)

    try {
      // Sanitize all inputs
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message),
      }

      // Send form data to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData)
      })

      // Check if response is ok before parsing JSON
      if (!response.ok) {
        let errorMessage = 'Failed to send message'
        try {
          const errorData = await response.json()
          errorMessage = errorData.error || errorMessage
        } catch (e) {
          // If response is not JSON, use status text
          errorMessage = response.statusText || errorMessage
        }
        throw new Error(errorMessage)
      }

      const result = await response.json()

      if (!result.success) {
        throw new Error(result.error || 'Failed to send message')
      }

      setIsSuccess(true)
      toast.success(result.message || "Thank you for your message! We will get back to you soon.")
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setErrors({})
      
      // Reset success state after 10 seconds
      setTimeout(() => setIsSuccess(false), 10000)
    } catch (error) {
      toast.error("Failed to send message. Please try again or contact us directly.")
      if (process.env.NODE_ENV === "development") {
        console.error("Form submission error:", error)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-accent">Send Us A Message</h2>
          </div>
          {isSuccess && (
            <div className="mb-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-300 dark:border-green-700 rounded-lg shadow-lg flex items-start gap-4 animate-in fade-in slide-in-from-top-2">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold text-green-800 dark:text-green-200 mb-1">
                  Thank You!
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Your message has been sent successfully. We will get back to you soon at <strong>{formData.email || 'your email'}</strong>.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className={`bg-card border-border ${errors.name ? "border-destructive" : ""}`}
                  maxLength={100}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className={`bg-card border-border ${errors.email ? "border-destructive" : ""}`}
                  maxLength={255}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                  Phone *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXXXXXXX"
                  className={`bg-card border-border ${errors.phone ? "border-destructive" : ""}`}
                  maxLength={15}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.phone}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                  className={`bg-card border-border ${errors.subject ? "border-destructive" : ""}`}
                  maxLength={200}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.subject}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us more about your requirements..."
                rows={3}
                className={`bg-card border-border resize-none ${errors.message ? "border-destructive" : ""}`}
                maxLength={2000}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              <div className="flex items-start justify-between">
                {errors.message ? (
                  <p id="message-error" className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.message}
                  </p>
                ) : (
                  <span></span>
                )}
                <span className="text-xs text-muted-foreground">
                  {formData.message.length}/2000
                </span>
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-accent text-black hover:bg-accent/90 button-enhanced"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>

          <div className="mt-6 pt-4 border-t border-border">
            <h3 className="text-base font-semibold text-foreground mb-3 text-center">Connect With Us</h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border text-accent hover:bg-accent hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border text-accent hover:bg-accent hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/917247248887"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border text-accent hover:bg-accent hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
