// Utility functions to fetch dynamic content from S3
// Replace with your actual S3 bucket configuration

interface S3Config {
  bucketUrl: string
  region?: string
}

const s3Config: S3Config = {
  bucketUrl: process.env.NEXT_PUBLIC_S3_BUCKET_URL || "",
  region: process.env.NEXT_PUBLIC_AWS_REGION || "us-east-1",
}

/**
 * Fetch data from S3 bucket
 * @param key - The S3 object key (path to the file)
 * @returns Parsed JSON data from S3
 */
export async function fetchFromS3<T>(key: string): Promise<T | null> {
  try {
    const url = `${s3Config.bucketUrl}/${key}`
    const response = await fetch(url, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    })

    if (!response.ok) {
      console.error(`Failed to fetch from S3: ${response.statusText}`)
      return null
    }

    const data = await response.json()
    return data as T
  } catch (error) {
    console.error("Error fetching from S3:", error)
    return null
  }
}

/**
 * Fetch hero banner data
 */
export async function fetchHeroBannerData() {
  return fetchFromS3<{
    title: string
    subtitle: string
    ctaText: string
    backgroundImage: string
  }>("content/hero-banner.json")
}

/**
 * Fetch featured properties
 */
export async function fetchFeaturedProperties() {
  return fetchFromS3<
    Array<{
      id: string
      title: string
      location: string
      price: string
      bedrooms: number
      bathrooms: number
      area: string
      image: string
    }>
  >("content/featured-properties.json")
}

/**
 * Fetch news and events
 */
export async function fetchNewsEvents() {
  return fetchFromS3<
    Array<{
      id: string
      title: string
      date: string
      description: string
      image: string
      category: "news" | "event"
    }>
  >("content/news-events.json")
}

/**
 * Fetch testimonials
 */
export async function fetchTestimonials() {
  return fetchFromS3<
    Array<{
      id: string
      name: string
      role: string
      content: string
      rating: number
      avatar: string
    }>
  >("content/testimonials.json")
}
