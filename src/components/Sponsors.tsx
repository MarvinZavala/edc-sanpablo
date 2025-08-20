import { Heart, Award, Handshake } from "lucide-react";

export default function Sponsors() {
  const sponsorTiers = [
    {
      tier: "Principal Sponsors",
      icon: Award,
      color: "gold",
      sponsors: [
        { name: "Banco de California", logo: "BC", type: "Financiero" },
        { name: "Chevron Corporation", logo: "CHV", type: "Energía" },
        { name: "Kaiser Permanente", logo: "KP", type: "Salud" },
        { name: "PG&E", logo: "PGE", type: "Servicios" }
      ]
    },
    {
      tier: "Supporting Sponsors",
      icon: Handshake,
      color: "silver",
      sponsors: [
        { name: "Wells Fargo", logo: "WF", type: "Financiero" },
        { name: "Target Corporation", logo: "TGT", type: "Retail" },
        { name: "Safeway", logo: "SFW", type: "Alimentario" },
        { name: "Home Depot", logo: "HD", type: "Construcción" },
        { name: "Starbucks", logo: "SB", type: "Alimentario" },
        { name: "AT&T", logo: "ATT", type: "Tecnología" }
      ]
    },
    {
      tier: "Community Sponsors",
      icon: Heart,
      color: "bronze",
      sponsors: [
        { name: "San Pablo Chamber", logo: "SPC", type: "Cámara" },
        { name: "Local Credit Union", logo: "LCU", type: "Financiero" },
        { name: "Community Bank", logo: "CB", type: "Financiero" },
        { name: "Martinez Dental", logo: "MD", type: "Salud" },
        { name: "Rodriguez Law Firm", logo: "RLF", type: "Legal" },
        { name: "Elite Auto Shop", logo: "EAS", type: "Automotriz" },
        { name: "Maya's Restaurant", logo: "MR", type: "Alimentario" },
        { name: "Tech Solutions SP", logo: "TS", type: "Tecnología" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      gold: {
        bg: "bg-yellow-50",
        border: "border-yellow-200",
        icon: "text-yellow-600",
        accent: "bg-yellow-100"
      },
      silver: {
        bg: "bg-gray-50",
        border: "border-gray-200",
        icon: "text-gray-600",
        accent: "bg-gray-100"
      },
      bronze: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        icon: "text-orange-600",
        accent: "bg-orange-100"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Sponsors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thanks to our valuable sponsors who make the economic 
            development of San Pablo possible
          </p>
        </div>

        {/* Sponsor Tiers */}
        <div className="space-y-12">
          {sponsorTiers.map((tier, tierIndex) => {
            const colors = getColorClasses(tier.color);
            const Icon = tier.icon;
            
            return (
              <div key={tierIndex} className={`${colors.bg} ${colors.border} border rounded-2xl p-8`}>
                {/* Tier Header */}
                <div className="flex items-center justify-center mb-8">
                  <div className={`${colors.accent} w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
                    <Icon className={`h-6 w-6 ${colors.icon}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{tier.tier}</h3>
                </div>

                {/* Sponsors Grid */}
                <div className={`grid ${tier.sponsors.length <= 4 ? 'md:grid-cols-4' : tier.sponsors.length <= 6 ? 'md:grid-cols-6' : 'md:grid-cols-8'} gap-6`}>
                  {tier.sponsors.map((sponsor, sponsorIndex) => (
                    <div key={sponsorIndex} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group text-center">
                      {/* Logo */}
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-50 transition-colors">
                        <span className="text-gray-600 font-bold text-sm group-hover:text-blue-600">
                          {sponsor.logo}
                        </span>
                      </div>
                      
                      {/* Sponsor Info */}
                      <h4 className="font-semibold text-gray-900 text-sm mb-1 leading-tight">
                        {sponsor.name}
                      </h4>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {sponsor.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Sponsorship Benefits */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Interested in Becoming a Sponsor?
              </h3>
              <p className="text-blue-100 mb-6">
                Join leading companies that are investing in the economic 
                future of San Pablo. Your sponsorship creates real impact 
                in our community.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Sponsorship Information
              </button>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold mb-4">Sponsorship Benefits:</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-blue-100">Recognition at events and materials</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-blue-100">Networking with community leaders</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-blue-100">Corporate volunteering opportunities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-blue-100">Measurable social impact and reports</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You to All Our Sponsors
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your generous support allows us to continue our work transforming 
              lives and strengthening San Pablo&apos;s local economy. Together we are 
              building a more prosperous future for our community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}