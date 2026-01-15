import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getEntitiesByState } from '@/lib/cms';
import { generateSEO } from '@/lib/seo';

interface Props {
  params: { state: string };
}

export async function generateMetadata({ params }: Props) {
  const stateName = params.state.replace(/-/g, ' ').toUpperCase();
  return generateSEO(`${stateName} Travel Guide`, `Explore tours, hotels, and flights in ${stateName}`, `/${params.state}`);
}

export default async function StatePage({ params }: Props) {
  const state = params.state;
  const domestic = await getEntitiesByState('domestic-tours', state);
  const spiritual = await getEntitiesByState('spiritual-tours', state);
  const hotels = await getEntitiesByState('hotels', state);

  if (domestic.length === 0 && spiritual.length === 0 && hotels.length === 0) {
    // In a real app, we'd check if the state exists in a list
  }

  const categories = [
    { name: 'Spiritual Tours', slug: 'tours/spiritual', data: spiritual },
    { name: 'Domestic Tours', slug: 'tours/domestic', data: domestic },
    { name: 'Hotels', slug: 'hotels', data: hotels },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-8 capitalize">{state.replace(/-/g, ' ')} Travel Hub</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map(cat => (
          <div key={cat.slug} className="border p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">{cat.name}</h2>
            <p className="text-gray-600 mb-4">{cat.data.length} options available</p>
            <Link href={`/${state}/${cat.slug}`} className="text-orange-500 font-bold hover:underline">
              View All {cat.name} →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
