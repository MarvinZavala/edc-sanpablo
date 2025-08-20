import { Users, Building, DollarSign, Award, Target } from "lucide-react";

export default function ImpactMetrics() {
  const metrics = [
    {
      icon: Users,
      value: "2,670+",
      label: "Total Clients Served",
      description: "People who have received our services since 2012",
      color: "blue"
    },
    {
      icon: Users,
      value: "1,955",
      label: "Employment Support",
      description: "Individuals receiving employment supportive services",
      color: "green"
    },
    {
      icon: Target,
      value: "1,399",
      label: "Workforce Participants",
      description: "People enrolled in our workforce development programs",
      color: "indigo"
    },
    {
      icon: Building,
      value: "783",
      label: "Businesses Served",
      description: "Small businesses and entrepreneurs supported",
      color: "red"
    },
    {
      icon: DollarSign,
      value: "$16M",
      label: "Tax Credits Allocated",
      description: "New Market Tax Credits for community development",
      color: "purple"
    },
    {
      icon: Award,
      value: "12+",
      label: "Years of Service",
      description: "Continuous economic development since 2012",
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-accent text-primary border-primary/20",
      green: "bg-[#EBF0E6] text-primary border-primary/20",
      purple: "bg-[#EBE6F0] text-secondary border-secondary/20",
      yellow: "bg-[#F0E6D0] text-primary border-primary/20",
      indigo: "bg-accent text-primary border-primary/20",
      red: "bg-[#F0E6E6] text-primary border-primary/20"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F0E6] to-[#F0E6D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-secondary/80 max-w-3xl mx-auto">
            Over a decade transforming lives and strengthening the local 
            economy of San Pablo
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const colorClasses = getColorClasses(metric.color);
            
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                {/* Icon */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl ${colorClasses} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Value */}
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {metric.value}
                </div>

                {/* Label */}
                <div className="text-xl font-semibold text-secondary mb-3">
                  {metric.label}
                </div>

                {/* Description */}
                <p className="text-secondary/80 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Timeline Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary text-center mb-12">
            12 Years of Continuous Growth
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">2012</span>
              </div>
              <h4 className="font-semibold text-secondary mb-2">Foundation</h4>
              <p className="text-secondary/80 text-sm">San Pablo EDC established</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#EBF0E6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">783</span>
              </div>
              <h4 className="font-semibold text-secondary mb-2">Businesses</h4>
              <p className="text-secondary/80 text-sm">Small businesses and entrepreneurs served</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#EBE6F0] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary font-bold text-lg">1,955</span>
              </div>
              <h4 className="font-semibold text-secondary mb-2">Employment</h4>
              <p className="text-secondary/80 text-sm">Individuals with employment support</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#F0E6D0] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">2,670+</span>
              </div>
              <h4 className="font-semibold text-secondary mb-2">Total Impact</h4>
              <p className="text-secondary/80 text-sm">Total clients served since inception</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}