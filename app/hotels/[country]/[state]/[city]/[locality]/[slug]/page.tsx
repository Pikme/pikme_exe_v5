import { notFound } from 'next/navigation';
import { getEntityBySlug } from '@/lib/cms';
import TourPageTemplate from '@/components/TourPageTemplate';

export default async function Page({ params }: { params: { slug: string } }) {
  const hotel = await getEntityBySlug('hotels', params.slug);
  if (!hotel) notFound();
  // Using the same template for simplicity, but could be customized
  return <TourPageTemplate tour={hotel} />;
}
