import { Phone } from "lucide-react";

const Areas = () => {
  const areas = [
    "CROYDON", "SOUTH CROYDON", "THORNTON HEATH",
    "PURLEY", "PURLEY OAKS", "NORBURY", 
    "WALLINGTON", "SELSDON", "COULSDON",
    "CARSHALTON", "ADDINGTON", "CRYSTAL PALACE",
    "SUTTON", "ADDISCOMBE", "MORDEN",
    "KENLEY", "NORWOOD", "MITCHAM"
  ];

  return (
    <section id="areas" className="py-20 bg-gradient-to-br from-success to-success/90">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Areas List */}
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-8 text-yellow-300">
              AREAS WE COVER
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-white text-2xl mr-2">•</span>
                  <span className="text-white font-semibold text-lg">{area}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-white text-xl mb-4 font-medium">
                Not sure if we're in your area? Call us today we're here to help!
              </p>
              <div className="flex items-center gap-3">
                <Phone className="h-8 w-8 text-yellow-300" />
                <span className="text-yellow-300 text-4xl font-bold">020 3051 4245</span>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-8">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <svg 
                  viewBox="0 0 800 600" 
                  className="w-full h-full text-gray-400"
                  fill="currentColor"
                >
                  {/* Simple London Map Outline */}
                  <path d="M100 100 L700 100 L700 500 L100 500 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="200" cy="200" r="4" fill="#3B82F6" />
                  <text x="210" y="205" fontSize="12" fill="#374151">Croydon</text>
                  
                  <circle cx="180" cy="250" r="4" fill="#3B82F6" />
                  <text x="190" y="255" fontSize="12" fill="#374151">Purley</text>
                  
                  <circle cx="220" cy="180" r="4" fill="#3B82F6" />
                  <text x="230" y="185" fontSize="12" fill="#374151">Thornton Heath</text>
                  
                  <circle cx="160" cy="280" r="4" fill="#3B82F6" />
                  <text x="170" y="285" fontSize="12" fill="#374151">Sutton</text>
                  
                  <circle cx="240" cy="220" r="4" fill="#3B82F6" />
                  <text x="250" y="225" fontSize="12" fill="#374151">Norbury</text>
                  
                  <circle cx="190" cy="300" r="4" fill="#3B82F6" />
                  <text x="200" y="305" fontSize="12" fill="#374151">Carshalton</text>
                  
                  <circle cx="280" cy="200" r="4" fill="#3B82F6" />
                  <text x="290" y="205" fontSize="12" fill="#374151">Crystal Palace</text>
                  
                  <circle cx="140" cy="230" r="4" fill="#3B82F6" />
                  <text x="150" y="235" fontSize="12" fill="#374151">Wallington</text>
                  
                  <circle cx="260" cy="180" r="4" fill="#3B82F6" />
                  <text x="270" y="185" fontSize="12" fill="#374151">Selsdon</text>
                  
                  <circle cx="300" cy="240" r="4" fill="#3B82F6" />
                  <text x="310" y="245" fontSize="12" fill="#374131">Addington</text>
                </svg>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">South London Coverage</h3>
                <p className="text-gray-600">
                  Comprehensive driving lessons across South London and Surrey borders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;