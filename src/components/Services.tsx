import Image from "next/image";

export default function Services() {
  const services = [
    {
      id: "business-development",
      title: "Business Development",
      image: "/sponsors/services/Business Meeting Photo.jpg"
    },
    {
      id: "job-training", 
      title: "Job Training",
      image: "/sponsors/services/Business Meeting Photo (1).jpg"
    },
    {
      id: "removing-barriers",
      title: "Removing Barriers", 
      image: "/sponsors/services/Community Support Services Photo.jpg"
    },
    {
      id: "community-impact",
      title: "Community Impact",
      image: "/sponsors/services/Community Development Project Photo.jpg"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30 overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#B04720]/5 to-[#C65A34]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[#1D3553]/5 to-[#B04720]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-[#B04720]/10 to-[#C65A34]/10 rounded-full text-primary font-semibold text-sm tracking-wide uppercase mb-6">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 tracking-tight">
            Empowering <span className="text-primary">Economic Growth</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary/70 max-w-4xl mx-auto leading-relaxed">
            Three comprehensive pillars supporting sustainable community development
          </p>
        </div>

        {/* Optimized Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

interface Service {
  id: string;
  title: string;
  image: string;
}

function ServiceCard({ service, index }: { 
  service: Service; 
  index: number; 
}) {
  return (
    <div className="group relative h-[300px] w-full overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 hover:scale-102 hover:-translate-y-2">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          
          {/* Optimized Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-black/10 transition-all duration-300"></div>
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="animate-slide-in-bottom" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center group-hover:text-white/95 transition-colors duration-300">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Border Effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/40 transition-colors duration-300"></div>
      
      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
    </div>
  );
}