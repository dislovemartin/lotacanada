import Image from "next/image"
import ProgramCard from "@/components/program-card"

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Professional development"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container-wide relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6">Our Programs</h1>
            <p className="text-lg md:text-xl text-white/90">
              Comprehensive development opportunities designed to nurture leadership skills, professional growth, and
              community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-6">Developing Tomorrow's Leaders</h2>
            <p className="text-lg">
              Our programs are carefully designed to provide participants with the skills, knowledge, and connections
              needed to excel in their professional journeys and make meaningful contributions to their communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard
                key={program.title}
                title={program.title}
                description={program.description}
                image={program.image}
                href={program.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className="py-24 bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-2 text-sm uppercase tracking-wider">Featured Program</div>
              <h2 className="mb-6">Executive Mentorship Program</h2>
              <p className="text-lg mb-6">
                Our flagship mentorship program pairs emerging professionals with experienced executives for
                personalized guidance and career development.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-base font-medium mb-2">Program Structure</h3>
                  <p>
                    Six-month structured mentorship with bi-weekly one-on-one sessions, supplemented by monthly group
                    workshops and networking events.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-medium mb-2">Eligibility</h3>
                  <p>
                    Early to mid-career professionals with a minimum of three years of work experience and demonstrated
                    leadership potential.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-medium mb-2">Application Process</h3>
                  <p>
                    Competitive application process including resume submission, personal statement, and interview.
                    Applications open twice yearly.
                  </p>
                </div>
              </div>

              <a
                href="/programs/executive-mentorship"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Apply Now
              </a>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/3] relative">
              <Image
                src="/placeholder.svg?height=800&width=1000"
                alt="Executive Mentorship Program"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container-wide">
          <div className="max-w-xl mb-16">
            <h2 className="mb-6">Participant Experiences</h2>
            <p className="text-lg">
              Hear from past participants about how our programs have impacted their professional development and career
              trajectories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-secondary p-8">
                <blockquote className="text-lg mb-6 font-serif">"{testimonial.quote}"</blockquote>
                <div className="font-medium">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-center">Application Process</h2>
            <p className="text-lg text-center mb-12">
              Our application process is designed to identify candidates who will benefit most from our programs and
              contribute meaningfully to our community.
            </p>

            <div className="space-y-12">
              {applicationSteps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-primary rounded-full">
                    <span className="font-medium">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="mb-2">{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="/programs/apply"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Start Your Application
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const programs = [
  {
    title: "Executive Mentorship Program",
    description:
      "Connect with experienced executives who provide personalized guidance to help you navigate your career path and develop leadership skills.",
    image: "/placeholder.svg?height=600&width=800",
    href: "/programs/executive-mentorship",
  },
  {
    title: "Leadership Workshop Series",
    description:
      "Develop essential leadership skills through interactive workshops led by industry experts and thought leaders.",
    image: "/placeholder.svg?height=600&width=800",
    href: "/programs/workshops",
  },
  {
    title: "Community Engagement Initiative",
    description:
      "Participate in community service projects that make a positive impact while building valuable leadership experience.",
    image: "/placeholder.svg?height=600&width=800",
    href: "/programs/community",
  },
  {
    title: "Professional Development Seminars",
    description:
      "Enhance your skills and knowledge through specialized seminars focusing on emerging trends and best practices.",
    image: "/placeholder.svg?height=600&width=800",
    href: "/programs/seminars",
  },
  {
    title: "Networking Events",
    description:
      "Connect with peers and industry leaders through structured networking events designed to foster meaningful professional relationships.",
    image: "/placeholder.svg?height=600&width=800",
    href: "/programs/networking",
  },
  {
    title: "Leadership Certification",
    description:
      "Earn a recognized certification through our comprehensive leadership development program combining coursework and practical application.",
    image: "/placeholder.svg?height=600&width=800",
    href: "/programs/certification",
  },
]

const testimonials = [
  {
    quote:
      "The Executive Mentorship Program provided me with invaluable guidance at a critical point in my career. My mentor helped me navigate complex challenges and identify opportunities for growth that I might have otherwise missed.",
    name: "Michael Zhang",
    title: "Marketing Director, Tech Innovations Inc.",
  },
  {
    quote:
      "Participating in the Leadership Workshop Series transformed my approach to team management. The practical strategies I learned have helped me build a more collaborative and productive work environment.",
    name: "Priya Sharma",
    title: "Operations Manager, Global Solutions",
  },
  {
    quote:
      "The networking opportunities provided by LOTA have been instrumental in expanding my professional connections. I've formed relationships that have led to collaborations, mentorships, and even new career opportunities.",
    name: "Jordan Taylor",
    title: "Financial Analyst, Capital Investments",
  },
  {
    quote:
      "The Community Engagement Initiative allowed me to apply my leadership skills in meaningful ways while making a positive impact. This experience has enriched both my professional development and personal growth.",
    name: "Olivia Rodriguez",
    title: "Project Manager, Urban Development Corp.",
  },
]

const applicationSteps = [
  {
    title: "Initial Application",
    description:
      "Submit your resume, cover letter, and completed application form outlining your professional background, goals, and interest in the program.",
  },
  {
    title: "Application Review",
    description:
      "Our selection committee reviews all applications based on eligibility criteria, alignment with program objectives, and potential for contribution and growth.",
  },
  {
    title: "Interview",
    description:
      "Selected candidates are invited for an interview to discuss their application, professional aspirations, and expectations for the program.",
  },
  {
    title: "Selection and Notification",
    description:
      "Final selections are made based on interview performance and application materials. All candidates are notified of their status.",
  },
  {
    title: "Program Onboarding",
    description:
      "Successful applicants participate in an orientation session to understand program structure, expectations, and prepare for active participation.",
  },
]

