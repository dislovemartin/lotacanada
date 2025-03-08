import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowRight, Filter } from "lucide-react"

export default function EventsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="LOTA events"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container-wide relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6">Events</h1>
            <p className="text-lg md:text-xl text-white/90">
              Connect, learn, and grow with our diverse range of events designed for emerging leaders and professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <h2 className="text-2xl font-normal">Upcoming Events</h2>

            <div className="flex items-center gap-4">
              <button className="inline-flex items-center px-4 py-2 border rounded-md">
                <Filter size={16} className="mr-2" />
                Filter
              </button>

              <select className="px-4 py-2 border rounded-md bg-background">
                <option value="all">All Event Types</option>
                <option value="networking">Networking</option>
                <option value="workshop">Workshops</option>
                <option value="conference">Conferences</option>
                <option value="webinar">Webinars</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-2 text-sm uppercase tracking-wider">Featured Event</div>
              <h2 className="text-3xl font-normal mb-6">Annual Leadership Summit 2025</h2>
              <p className="text-lg mb-6">
                Join industry leaders, innovators, and emerging professionals for three days of inspiring keynotes,
                workshops, and networking opportunities.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Calendar size={20} className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium">Date</div>
                    <div className="text-muted-foreground">June 15-17, 2025</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock size={20} className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium">Time</div>
                    <div className="text-muted-foreground">9:00 AM - 5:00 PM daily</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin size={20} className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">Vancouver Convention Centre</div>
                  </div>
                </div>
              </div>

              <Link
                href="/events/leadership-summit-2025"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="aspect-[4/3] relative">
              <Image
                src="/placeholder.svg?height=800&width=1000"
                alt="Leadership Summit"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Link key={event.id} href={`/events/${event.slug}`} className="group bg-background">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-sm">
                    {event.type}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-normal mb-3 group-hover:underline">{event.title}</h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <Calendar size={16} className="mr-2 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center text-sm">
                      <Clock size={16} className="mr-2 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center text-sm">
                      <MapPin size={16} className="mr-2 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="line-clamp-2 text-muted-foreground mb-4">{event.description}</p>

                  <div className="flex items-center text-sm">
                    View Details <ArrowRight size={14} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-6 py-3 border border-primary bg-transparent hover:bg-primary/5 transition-colors">
              Load More Events
            </button>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-normal mb-6">Event Calendar</h2>
            <p className="text-lg mb-8">
              Plan ahead with our comprehensive event calendar. Filter by event type, date, or location to find the
              perfect opportunities for your professional development.
            </p>

            <Link
              href="/events/calendar"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View Full Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-24 bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-normal mb-6">Host an Event with LOTA</h2>
              <p className="text-lg mb-6">
                Are you interested in hosting an event in partnership with LOTA? We collaborate with organizations and
                individuals to create impactful experiences for our community.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Access to a diverse community of emerging leaders and professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Support with event planning, promotion, and execution</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Opportunities to showcase your expertise and thought leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Alignment with LOTA's mission of fostering professional development</span>
                </li>
              </ul>

              <Link
                href="/events/host"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Learn More About Hosting
              </Link>
            </div>

            <div className="order-1 lg:order-2 aspect-square relative">
              <Image src="/placeholder.svg?height=800&width=800" alt="Event hosting" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-normal mb-6">Stay Updated</h2>
            <p className="text-lg mb-8">
              Subscribe to our events newsletter to receive notifications about upcoming events, early bird registration
              opportunities, and exclusive content.
            </p>
            <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 bg-background border"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

const events = [
  {
    id: 1,
    title: "Networking Mixer: Tech Industry Focus",
    slug: "networking-mixer-tech",
    type: "Networking",
    date: "April 15, 2025",
    time: "6:00 PM - 8:30 PM",
    location: "The Spoke Club, Toronto",
    description:
      "Connect with professionals from the tech industry in a relaxed setting. Perfect for those looking to expand their network in technology fields.",
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    id: 2,
    title: "Workshop: Effective Communication for Leaders",
    slug: "workshop-communication",
    type: "Workshop",
    date: "May 3, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "LOTA Learning Center, Toronto",
    description:
      "Develop advanced communication skills essential for leadership roles. This full-day workshop includes practical exercises and personalized feedback.",
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    id: 3,
    title: "Webinar: Navigating Career Transitions",
    slug: "webinar-career-transitions",
    type: "Webinar",
    date: "May 12, 2025",
    time: "12:00 PM - 1:30 PM",
    location: "Virtual",
    description:
      "Learn strategies for successfully navigating career changes, promotions, and professional pivots from experts who have done it themselves.",
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    id: 4,
    title: "Panel Discussion: Diversity in Leadership",
    slug: "panel-diversity-leadership",
    type: "Panel",
    date: "May 25, 2025",
    time: "5:30 PM - 7:30 PM",
    location: "MaRS Discovery District, Toronto",
    description:
      "Join us for an insightful discussion on the importance of diversity in leadership positions and strategies for creating inclusive workplaces.",
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    id: 5,
    title: "Mentorship Matchmaking Event",
    slug: "mentorship-matchmaking",
    type: "Networking",
    date: "June 8, 2025",
    time: "4:00 PM - 7:00 PM",
    location: "Artscape Daniels Launchpad, Toronto",
    description:
      "Meet potential mentors and mentees in a structured environment designed to facilitate meaningful connections and mentorship relationships.",
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    id: 6,
    title: "Workshop: Strategic Thinking for Emerging Leaders",
    slug: "workshop-strategic-thinking",
    type: "Workshop",
    date: "June 22, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "LOTA Learning Center, Toronto",
    description:
      "Develop your ability to think strategically and make decisions that align with long-term goals. Includes case studies and practical applications.",
    image: "/placeholder.svg?height=500&width=800",
  },
]

