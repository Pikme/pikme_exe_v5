import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { from: string, to: string } }) {
  return generateSEO(`Flights from ${params.from} to ${params.to}`, `Book cheap flights from ${params.from} to ${params.to}`, `/flights/India/${params.from}/${params.to}`);
}

export default function FlightPage({ params }: { params: { from: string, to: string } }) {
  return (
    <div className="min-h-screen bg-white p-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Flights from {params.from} to {params.to}</h1>
      <p className="text-gray-600">Flight booking engine coming soon...</p>
    </div>
  );
}
