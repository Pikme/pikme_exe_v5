import { notFound } from 'next/navigation';
import { getEntityBySlug } from '@/lib/cms';
import TourPageTemplate from '@/components/TourPageTemplate';

export default async function Page({ params }: { params: { slug: string } }) {
  const tour = await getEntityBySlug('spiritual-tours', params.slug);
  if (!tour) notFound();
  return <TourPageTemplate tour={tour} />;
}
