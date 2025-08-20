import { Calendar, Clock, MapPin, Users, ArrowRight, Bell } from "lucide-react";

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "WIOA Orientation - Job Training Program",
      date: "2024-01-25",
      time: "10:00 AM - 12:00 PM",
      location: "San Pablo Community Center",
      address: "1970 Rumrill Blvd, San Pablo, CA",
      attendees: 45,
      maxAttendees: 50,
      type: "Orientation",
      description: "Learn all about our WIOA program and how it can help you develop new job skills.",
      featured: true
    },
    {
      id: 2,
      title: "Connect to Opportunity - Job Fair",
      date: "2024-02-05",
      time: "9:00 AM - 3:00 PM",
      location: "San Pablo Community Center",
      address: "13831 San Pablo Ave, San Pablo, CA",
      attendees: 120,
      maxAttendees: 150,
      type: "Job Fair",
      description: "Connect directly with local employers and discover job opportunities in your area.",
      featured: false
    },
    {
      id: 3,
      title: "Small Business Entrepreneurship Workshop",
      date: "2024-02-15",
      time: "6:00 PM - 8:00 PM",
      location: "EDC San Pablo Office",
      address: "1970 Rumrill Blvd, Suite 200, San Pablo, CA",
      attendees: 28,
      maxAttendees: 35,
      type: "Workshop",
      description: "Learn the fundamentals of starting your own business with entrepreneurship experts.",
      featured: false
    }
  ];

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getTypeColor = (type: string) => {
    const colors = {
      "Orientation": "bg-accent text-primary",
      "Job Fair": "bg-[#EBF0E6] text-primary",
      "Workshop": "bg-[#EBE6F0] text-secondary"
    };
    return colors[type as keyof typeof colors] || "bg-muted text-secondary";
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-secondary/80 max-w-3xl mx-auto">
            Join our events and workshops designed to boost your professional 
            and business development
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event) => (
            <div key={event.id} className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${event.featured ? 'lg:col-span-2 bg-gradient-to-br from-[#F5F0E6] to-[#F0E6D8]' : 'bg-white'}`}>
              {/* Event Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                  {event.featured && (
                    <span className="bg-[#F0E6D0] text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className={`font-bold mb-3 ${event.featured ? 'text-2xl' : 'text-xl'} text-secondary leading-tight`}>
                  {event.title}
                </h3>

                <p className="text-secondary/80 mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-secondary">
                    <Calendar className="h-5 w-5 text-primary mr-3" />
                    <span className="font-medium">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-secondary">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start text-secondary">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium">{event.location}</div>
                      <div className="text-sm text-secondary/70">{event.address}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-secondary">
                    <Users className="h-5 w-5 text-primary mr-3" />
                    <span>{event.attendees}/{event.maxAttendees} registered</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-secondary/80 mb-2">
                    <span>Availability</span>
                    <span>{event.maxAttendees - event.attendees} spots remaining</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center">
                    Register
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button className="border-2 border-primary text-primary py-3 px-6 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                    <Bell className="mr-2 h-4 w-4" />
                    Remind Me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-[#F5F0E6] rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Can&apos;t find the event you&apos;re looking for?
            </h3>
            <p className="text-secondary/80 mb-8 max-w-2xl mx-auto">
              We organize regular events based on our community&apos;s needs. 
              Subscribe to receive notifications about new events and workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                View Full Calendar
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                Request Custom Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}