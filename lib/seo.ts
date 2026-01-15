import { Metadata } from 'next';

export function generateSEO(title: string, description: string, path: string): Metadata {
  const baseUrl = 'https://pikme.org';
  const url = `${baseUrl}${path}`;

  return {
    title: `${title} | Pikme`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Pikme',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
