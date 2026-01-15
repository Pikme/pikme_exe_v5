import Hero from '@/components/Hero';
import QuickHighlights from '@/components/QuickHighlights';
import Highlights from '@/components/Highlights';
import Itinerary from '@/components/Itinerary';
import InclusionsExclusions from '@/components/InclusionsExclusions';
import Policies from '@/components/Policies';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function TourPageTemplate({ tour }: { tour: any }) {
  return (
    <div className="min-h-screen bg-white pb-24 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <Hero title={tour.title} location={tour.location} price={tour.price} duration={tour.duration} />
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <QuickHighlights data={tour.quickHighlights} />
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">About this tour</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{tour.overview}</p>
            </section>
            <Highlights highlights={tour.highlights} />
            <Itinerary itinerary={tour.itinerary} />
            <InclusionsExclusions inclusions={tour.inclusions} exclusions={tour.exclusions} />
            <Policies importantInfo={tour.importantInfo} />
            <FAQ faqs={tour.faqs} />
          </div>
          <div className="hidden lg:block">
            <div className="sticky top-8 bg-white border border-gray-200 p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold text-gray-900 mb-6">{tour.price}</p>
              <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold mb-3">Book Now</button>
              <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold">WhatsApp Us</button>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
}
