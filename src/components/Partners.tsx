import { Quote, Star } from "lucide-react";

export default function Partners() {
  const partners = [
    {
      name: "Maria Rodriguez",
      title: "Director, Community Center",
      company: "Latino Resource Center",
      quote: "San Pablo EDC has been instrumental in connecting our community with real opportunities for economic growth.",
      rating: 5,
      logo: "LRC"
    },
    {
      name: "James Thompson",
      title: "CEO",
      company: "Bay Area Workforce Alliance",
      quote: "Their comprehensive approach to workforce development has transformed lives throughout the region.",
      rating: 5,
      logo: "BWA"
    },
    {
      name: "Carmen Valdez",
      title: "Program Coordinator",
      company: "Small Business Development Center",
      quote: "The collaboration with San Pablo EDC has resulted in 40% more successful startups in our area.",
      rating: 5,
      logo: "SBDC"
    }
  ];

  const trustedLogos = [
    { name: "City of San Pablo", logo: "CSP" },
    { name: "Contra Costa County", logo: "CCC" },
    { name: "California EDD", logo: "EDD" },
    { name: "WIOA", logo: "WIOA" },
    { name: "SBA", logo: "SBA" },
    { name: "United Way", logo: "UW" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partners & Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work alongside leading organizations to maximize impact 
            in our community
          </p>
        </div>

        {/* Partner Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-all duration-300">
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{partner.quote}&rdquo;
              </p>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(partner.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Partner Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {partner.logo}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{partner.name}</div>
                  <div className="text-sm text-gray-600">{partner.title}</div>
                  <div className="text-sm text-blue-600 font-medium">{partner.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              We Collaborate with Trusted Organizations
            </h3>
            <p className="text-gray-600">
              Our strategic partners enable us to offer comprehensive services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {trustedLogos.map((org, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 font-bold text-sm mb-2 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  {org.logo}
                </div>
                <span className="text-sm text-gray-600 text-center">{org.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Want to be our next partner?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our network of organizations committed to the economic 
            and social development of the San Pablo community
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact for Partnerships
          </button>
        </div>
      </div>
    </section>
  );
}