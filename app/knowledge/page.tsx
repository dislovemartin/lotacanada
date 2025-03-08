import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"

export default function KnowledgePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Knowledge and insights"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container-wide relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6">Knowledge</h1>
            <p className="text-lg md:text-xl text-white/90">
              Insights, research, and resources to support your professional development journey.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 border-b">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">All</button>
              <button className="px-4 py-2 bg-secondary text-foreground rounded-md hover:bg-primary/10">
                Leadership
              </button>
              <button className="px-4 py-2 bg-secondary text-foreground rounded-md hover:bg-primary/10">
                Professional Development
              </button>
              <button className="px-4 py-2 bg-secondary text-foreground rounded-md hover:bg-primary/10">
                Mentorship
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-2 text-sm uppercase tracking-wider">Featured Article</div>
              <h2 className="text-3xl font-normal mb-6">The Evolution of Leadership in the Digital Age</h2>
              <p className="text-lg mb-6">
                Exploring how technology is reshaping leadership paradigms and the skills needed to thrive in an
                increasingly digital world.
              </p>
              <p className="mb-8">
                As organizations navigate digital transformation, leaders must adapt their approaches to management,
                communication, and strategic thinking. This article examines emerging leadership models and provides
                practical insights for developing digital leadership capabilities.
              </p>
              <Link
                href="/knowledge/leadership-digital-age"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Read Article
              </Link>
            </div>
            <div className="aspect-[4/3] relative">
              <Image
                src="/placeholder.svg?height=800&width=1000"
                alt="Digital Leadership"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-secondary">
        <div className="container-wide">
          <div className="max-w-xl mb-16">
            <h2 className="text-3xl font-normal mb-6">Latest Articles</h2>
            <p className="text-lg">
              Explore our collection of articles covering leadership development, professional growth, and industry
              insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.title} href={article.href} className="group bg-background">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-sm text-muted-foreground">{article.category}</div>
                  <h3 className="text-xl font-normal mb-2 group-hover:underline">{article.title}</h3>
                  <p className="line-clamp-3 mb-4 text-muted-foreground">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                    <span className="text-sm flex items-center">
                      Read more <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/knowledge/all"
              className="inline-flex items-center px-6 py-3 border border-primary bg-transparent hover:bg-primary/5 transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="max-w-xl mb-16">
            <h2 className="text-3xl font-normal mb-6">Resources</h2>
            <p className="text-lg">
              Practical tools and guides to support your leadership development and professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <div key={resource.title} className="border p-8">
                <h3 className="text-xl font-normal mb-4">{resource.title}</h3>
                <p className="mb-6 text-muted-foreground">{resource.description}</p>
                <Link href={resource.href} className="inline-flex items-center text-sm hover:underline">
                  Access Resource <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-secondary">
        <div className="container-wide">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-normal mb-6">Stay Informed</h2>
            <p className="text-lg mb-8">
              Subscribe to our newsletter to receive the latest articles, resources, and insights directly to your
              inbox.
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

const articles = [
  {
    title: "The Most Incredible Websites for Business Networking",
    excerpt:
      "A comprehensive guide to LinkedIn, BNI, and Alignable - the top platforms for professional connections and business growth.",
    category: "Networking",
    image: "/placeholder.svg?height=500&width=800",
    href: "/knowledge/business-networking-websites",
    date: "March 6, 2025",
  },
  {
    title: "Building Resilience: Strategies for Professional Growth",
    excerpt:
      "Practical approaches to developing resilience and adaptability in the face of professional challenges and setbacks.",
    category: "Professional Development",
    image: "/placeholder.svg?height=500&width=800",
    href: "/knowledge/building-resilience",
    date: "February 28, 2025",
  },
  {
    title: "The Power of Mentorship: Research and Insights",
    excerpt:
      "Examining the impact of mentorship on career advancement, skill development, and professional satisfaction.",
    category: "Mentorship",
    image: "/placeholder.svg?height=500&width=800",
    href: "/knowledge/power-of-mentorship",
    date: "January 20, 2025",
  },
  {
    title: "Effective Communication in Leadership",
    excerpt: "Strategies for clear, impactful communication that inspires teams and drives organizational success.",
    category: "Leadership",
    image: "/placeholder.svg?height=500&width=800",
    href: "/knowledge/effective-communication",
    date: "December 10, 2024",
  },
  {
    title: "Navigating Career Transitions",
    excerpt: "Guidance for successfully managing career changes, promotions, and professional pivots.",
    category: "Career Development",
    image: "/placeholder.svg?height=500&width=800",
    href: "/knowledge/career-transitions",
    date: "November 5, 2024",
  },
  {
    title: "Inclusive Leadership: Creating Diverse Teams",
    excerpt:
      "Approaches to building and leading diverse teams that leverage varied perspectives for innovation and growth.",
    category: "Diversity & Inclusion",
    image: "/placeholder.svg?height=500&width=800",
    href: "/knowledge/inclusive-leadership",
    date: "October 18, 2024",
  },
]

const resources = [
  {
    title: "Leadership Self-Assessment Toolkit",
    description:
      "A comprehensive set of assessment tools to help you identify your leadership strengths and areas for development.",
    href: "/resources/leadership-assessment",
  },
  {
    title: "Mentorship Program Guide",
    description: "A detailed guide for both mentors and mentees to maximize the benefits of mentorship relationships.",
    href: "/resources/mentorship-guide",
  },
  {
    title: "Professional Development Planning Template",
    description:
      "A structured template to help you create a personalized professional development plan with clear goals and action steps.",
    href: "/resources/development-planning",
  },
  {
    title: "Networking Strategy Workbook",
    description:
      "Practical exercises and templates to help you develop and implement an effective networking strategy.",
    href: "/resources/networking-workbook",
  },
]

