
import { Metadata } from "next"

export function generateMetadata({ params }: any): Metadata {
  return {
    title: `Spiritual Tours in ${params.state} | Pikme`,
    description: `Discover spiritual tour packages in ${params.state}. Temples, heritage and sacred journeys.`,
    alternates: {
      canonical: `https://pikme.org/${params.state}/tours/${params.category}`,
    },
  }
}
