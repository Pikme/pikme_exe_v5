import Link from 'next/link';

export default function Home() {
  const states = ["Uttar Pradesh", "Maharashtra", "Karnataka", "Tamil Nadu", "Kerala"];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white p-12 rounded-3xl shadow-sm border border-gray-100 text-center">
        <h1 className="text-5xl font-bold mb-6">Pikme Travel Network</h1>
        <p className="text-xl text-gray-600 mb-12">Select a state to explore tours, hotels, and flights.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {states.map((state) => (
            <Link 
              key={state} 
              href={`/${state.toLowerCase().replace(/ /g, '-')}`}
              className="p-6 bg-gray-50 hover:bg-orange-50 rounded-2xl transition-all border border-transparent hover:border-orange-200 group"
            >
              <h3 className="font-bold text-gray-800 group-hover:text-orange-600 text-lg">{state}</h3>
              <span className="text-sm text-gray-500">Explore Hub →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
