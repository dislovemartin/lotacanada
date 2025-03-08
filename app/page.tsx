import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Import the TestimonialCard component
import { TestimonialCard } from "@/components/ui/testimonial-card"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Modern architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container-wide relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6">Fostering tomorrow's leaders</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              The Leaders of Tomorrow Association provides mentorship, education, and networking opportunities to
              develop the next generation of Canadian leaders.
            </p>
            <Link
              href="/programs"
              className="inline-flex items-center px-6 py-3 bg-white text-black hover:bg-white/90 transition-colors"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="max-w-xl mb-16">
            <h2 className="mb-6">Our Programs</h2>
            <p className="text-lg">
              Comprehensive development opportunities designed to nurture leadership skills, professional growth, and
              community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.title} className="group">
                <div className="aspect-[4/3] relative mb-6 overflow-hidden">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2">{program.title}</h3>
                <p className="mb-4">{program.description}</p>
                <Link href={program.href} className="inline-flex items-center text-sm hover:underline">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-24 bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-2 text-sm uppercase tracking-wider">Featured Event</div>
              <h2 className="mb-6">Annual Leadership Summit 2025</h2>
              <p className="text-lg mb-6">
                Join industry leaders, innovators, and emerging professionals for three days of inspiring keynotes,
                workshops, and networking opportunities.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex">
                  <div className="w-32 font-medium">Date</div>
                  <div>June 15-17, 2025</div>
                </div>
                <div className="flex">
                  <div className="w-32 font-medium">Location</div>
                  <div>Vancouver Convention Centre</div>
                </div>
                <div className="flex">
                  <div className="w-32 font-medium">Registration</div>
                  <div>Opening March 1, 2025</div>
                </div>
              </div>
              <Link
                href="/events/leadership-summit-2025"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Learn more
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

      {/* Knowledge Section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="max-w-xl mb-16">
            <h2 className="mb-6">Knowledge</h2>
            <p className="text-lg">
              Insights, research, and resources to support your professional development journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.title} href={article.href} className="group">
                <div className="aspect-[1/1] relative mb-6 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mb-2 text-sm text-muted-foreground">{article.category}</div>
                <h3 className="mb-2 group-hover:underline">{article.title}</h3>
                <p className="line-clamp-2">{article.excerpt}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/knowledge" className="inline-flex items-center text-sm hover:underline">
              View all articles <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-secondary">
        <div className="container-wide">
          <h2 className="text-2xl font-normal mb-8 text-center">What Our Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Chen"
              title="Program Participant, 2023"
              testimonial="The mentorship and networking opportunities provided by LOTA have been instrumental in my professional development. The connections I've made and the skills I've gained have truly transformed my career trajectory."
              rating={5}
              avatarSrc="/placeholder.svg?height=40&width=40"
            />

            <TestimonialCard
              name="Michael Zhang"
              title="Marketing Director, Tech Innovations Inc."
              testimonial="The Executive Mentorship Program provided me with invaluable guidance at a critical point in my career. My mentor helped me navigate complex challenges and identify opportunities for growth."
              rating={4}
              avatarSrc="/placeholder.svg?height=40&width=40"
            />

            <TestimonialCard
              name="Priya Sharma"
              title="Operations Manager, Global Solutions"
              testimonial="Participating in the Leadership Workshop Series transformed my approach to team management. The practical strategies I learned have helped me build a more collaborative and productive work environment."
              rating={5}
              avatarSrc="/placeholder.svg?height=40&width=40"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="mb-6">Stay Connected</h2>
            <p className="text-lg mb-8">
              Subscribe to our newsletter to receive updates on upcoming events, program opportunities, and leadership
              insights.
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

const programs = [
  {
    title: "Mentorship Program",
    description:
      "Connect with experienced professionals who provide guidance, support, and insights to help you navigate your career path.",
    image: "/placeholder.svg?height=600&width=800",
    href: "/programs/mentorship",
  },
  {
    title: "Leadership Workshop Series",
    description:
      "Develop essential leadership skills through interactive workshops led by industry experts and thought leaders.",
    image: "/placeholder.svg?height=600&width=800",
    href: "/programs/workshops",
  },
  {
    title: "Community Engagement",
    description:
      "Participate in community service projects that make a positive impact while building valuable leadership experience.",
    image: "/placeholder.svg?height=600&width=800",
    href: "/programs/community",
  },
]

const articles = [
  {
    title: "The Evolution of Leadership in the Digital Age",
    excerpt:
      "Exploring how technology is reshaping leadership paradigms and the skills needed to thrive in an increasingly digital world.",
    category: "Leadership",
    image: "/placeholder.svg?height=500&width=500",
    href: "/knowledge/leadership-digital-age",
  },
  {
    title: "Building Resilience: Strategies for Professional Growth",
    excerpt:
      "Practical approaches to developing resilience and adaptability in the face of professional challenges and setbacks.",
    category: "Professional Development",
    image: "/placeholder.svg?height=500&width=500",
    href: "/knowledge/building-resilience",
  },
  {
    title: "The Power of Mentorship: Research and Insights",
    excerpt:
      "Examining the impact of mentorship on career advancement, skill development, and professional satisfaction.",
    category: "Mentorship",
    image: "/placeholder.svg?height=500&width=500",
    href: "/knowledge/power-of-mentorship",
  },
]

