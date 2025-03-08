import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="LOTA leadership team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container-wide relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6">About LOTA</h1>
            <p className="text-lg md:text-xl text-white/90">
              Fostering the next generation of business leaders and professionals in Toronto and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-normal mb-8">Our Mission</h2>
              <p className="text-lg mb-6">
                The Leaders of Tomorrow Association champions the development of the next generation of business leaders
                and professionals in the diverse and vibrant landscape of Toronto and beyond. Recognizing the unique
                challenges faced by emerging professionals, our mission is to create a dynamic, inclusive environment
                that fosters networking, skill development, and leadership among young visionaries from various cultural
                backgrounds.
              </p>
              <p className="text-lg mb-6">
                We are dedicated to bridging the gaps faced by emerging professionals by facilitating a platform where
                they can unite to exchange ideas, cultivate relationships, and enhance their skills. By promoting
                inclusivity and diversity, we empower our members to excel and lead in their respective fields while
                contributing positively to Canada's multicultural society.
              </p>
            </div>
            <div className="aspect-square relative">
              <Image src="/placeholder.svg?height=800&width=800" alt="LOTA mission" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-secondary">
        <div className="container-wide">
          <h2 className="text-3xl font-normal mb-12 text-center">Addressing Key Challenges</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8">
              <h3 className="text-xl font-normal mb-4">Building Networks</h3>
              <p className="text-muted-foreground">
                Young emerging professionals often face challenges in building a supportive network of like-minded
                individuals, especially in diverse cultural landscapes like Canada.
              </p>
            </div>

            <div className="bg-background p-8">
              <h3 className="text-xl font-normal mb-4">Cultural Barriers</h3>
              <p className="text-muted-foreground">
                Cultural and ethnic differences can isolate individuals, as communities may be segregated based on these
                factors, limiting opportunities for diverse connections.
              </p>
            </div>

            <div className="bg-background p-8">
              <h3 className="text-xl font-normal mb-4">Professional Growth</h3>
              <p className="text-muted-foreground">
                The lack of a diverse and inclusive network can hinder professional growth, limit opportunities for
                collaboration and mentorship, and impede the ability to navigate the complexities of the professional
                world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-normal mb-12 text-center">Our Objectives</h2>

            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-primary rounded-full">
                  <span className="font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-normal mb-2">Dynamic Platform</h3>
                  <p className="text-muted-foreground">
                    Establish a dynamic platform for networking and collaboration among young professionals across
                    diverse industries in the Greater Toronto Area.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-primary rounded-full">
                  <span className="font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-normal mb-2">Educational Programs</h3>
                  <p className="text-muted-foreground">
                    Provide educational programs and resources that foster business innovation and personal leadership
                    development.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-primary rounded-full">
                  <span className="font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-normal mb-2">Entrepreneurial Spirit</h3>
                  <p className="text-muted-foreground">
                    Encourage an entrepreneurial spirit and drive innovation within our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 bg-secondary">
        <div className="container-wide">
          <h2 className="text-3xl font-normal mb-12 text-center">Our Leadership Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {leadershipTeam.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-[3/4] relative mb-6 overflow-hidden bg-background">
                  <Image
                    src={member.image || "/placeholder.svg?height=600&width=450"}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-normal mb-1">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.title}</p>
                <p className="line-clamp-3 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-normal mb-8">Membership Benefits</h2>
              <p className="text-lg mb-6">
                Members of the Leaders of Tomorrow Association gain access to a comprehensive suite of benefits designed
                to accelerate their professional growth and expand their network.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Exclusive networking events and leadership workshops led by industry pioneers</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Competitive business challenges and recognition programs</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Mentorship opportunities with seasoned professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Resources for business development and personal growth</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Collaborative projects and partnerships within the local business community</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Visibility for initiatives and contributions through association platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Support through scholarships and community contributions</span>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/membership"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Join LOTA <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 aspect-square relative">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="LOTA membership benefits"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Focus Section */}
      <section className="py-24 bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-normal mb-8">Our Geographic Focus</h2>
            <p className="text-lg mb-12">
              While our immediate initiatives are centered in the Greater Toronto Area, providing immediate access to a
              dense network of professionals and resources, our vision encompasses influencing leadership globally,
              starting with strong local foundations.
            </p>

            <div className="aspect-[16/9] relative">
              <Image src="/placeholder.svg?height=720&width=1280" alt="Toronto skyline" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-normal mb-6">Join Our Community</h2>
            <p className="text-lg mb-8">
              Become part of a vibrant community of emerging leaders and professionals dedicated to growth, innovation,
              and positive impact in Toronto and beyond.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/membership"
                className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Become a Member
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-primary bg-transparent hover:bg-primary/5 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const leadershipTeam = [
  {
    name: "Stone Yu",
    title: "President",
    bio: "As President of the Leaders of Tomorrow Association, Stone Yu leads the charge in championing the development of the next generation of business leaders and professionals in Toronto and beyond. With a deep understanding of the unique challenges faced by emerging professionals, he steers the organization towards creating a dynamic, inclusive environment that fosters networking, skill development, and leadership among young visionaries from diverse cultural backgrounds.",
    image: "/placeholder.svg?height=600&width=450",
  },
  {
    name: "Mo Mokbel",
    title: "CEO",
    bio: "Mo Mokbel is a dynamic and visionary leader at the helm of the Leaders of Tomorrow Association. With a diverse background spanning business management, entrepreneurship, and cryptocurrency, he brings a wealth of experience and expertise to the role. As CEO, Mo is responsible for overseeing all aspects of the association, from strategic planning and partnership development to program management and financial oversight.",
    image: "/placeholder.svg?height=600&width=450",
  },
  {
    name: "Daniel Kim",
    title: "COO",
    bio: "Daniel is a strategic leader profoundly impacting Toronto's business landscape through his active roles across the non-profit, technology, and real estate sectors. As COO at the Leaders of Tomorrow Association, Daniel is instrumental in shaping initiatives that transform young professionals into future business leaders. His leadership enhances organizational effectiveness and expands the reach of the association's programs.",
    image: "/placeholder.svg?height=600&width=450",
  },
  {
    name: "David Chau",
    title: "CFO",
    bio: "David is a seasoned financial expert and accomplished real estate developer in the Greater Toronto Area. With a robust background in both finance and property development, David brings a unique blend of financial acumen and industry knowledge to his role as Chief Financial Officer. David's experience in real estate development in the GTA has equipped him with a deep understanding of the local market dynamics and economic trends.",
    image: "/placeholder.svg?height=600&width=450",
  },
  {
    name: "Sue McLay",
    title: "VP of Marketing",
    bio: "Sue is a seasoned realtor and VP at Tyler McLay Realty Group working in the vibrant Toronto / GTA area, bringing a wealth of experience and dedication to every client interaction. A proud graduate of the prestigious Schulich School of Business, Sue combines her academic prowess with a genuine passion for community engagement. With a firm belief in the transformative power of connection, she thrives on fostering meaningful relationships within her community.",
    image: "/placeholder.svg?height=600&width=450",
  },
  {
    name: "Andrew Kim",
    title: "CTO",
    bio: "Andrew Kim, CTO at Connex Telecommunications Inc., brings a rich legacy of IT leadership from his previous roles. At Connex, since February 2020, he previously excelled as the Director of Client Engagement Services, mastering the deployment of complex cloud solutions and enhancing customer service technologies. His tenure at Bell Canada and IBM involved significant IT projects, focusing on integration and system optimization.",
    image: "/placeholder.svg?height=600&width=450",
  },
  {
    name: "Robin Nan",
    title: "VP of Memberships",
    bio: "Robin Nan is the Founder and President of G.A.N Golf Club and serves as the Marketing Manager at Everest Prestige. He graduated with a degree in Film and Television from Sheridan College, focusing his career on social platform building and entrepreneurial support. In the realm of platform building, Robin has developed a dynamic and resource-rich social network centered around golf, which has become a vital community hub.",
    image: "/placeholder.svg?height=600&width=450",
  },
  {
    name: "Charles Yin",
    title: "VP of Strategic Alliances",
    bio: "Charles Yin, Business Development Manager of Sihuan Pharmaceutical Holdings Group Ltd; Investment Analyst of Everest Prestige Capital; Co-founder and Vice President of G.A.N. Golf Club; Graduated double major in Human Biology and Statistics from University of Toronto. As Vice President of Alliances, Charles is a strategic visionary adept at forging symbiotic partnerships to drive mutual growth and innovation.",
    image: "/placeholder.svg?height=600&width=450",
  },
  {
    name: "Martin Lyu",
    title: "VP of IT and Technology",
    bio: "Martin is a visionary entrepreneur and the founder of Soln AI and dve.ai, fueled by a profound passion for crafting inclusive AI solutions that uplift communities worldwide. His dedication to friendly innovation shines through his altruistic spirit, evident in his global educational initiatives aimed at inspiring others. Resourceful and adaptable, Martin excels at bridging cultural divides, leveraging his fluency in English and Mandarin to foster collaboration.",
    image: "/placeholder.svg?height=600&width=450",
  },
  {
    name: "Alexander Hackett",
    title: "Website and IT",
    bio: "With business experience spanning continents, Alexander Hackett brings a wealth of international business experience to the The Leaders of Tomorrow Association. Alexander has pursued a degree in Economics with a Specialization in Finance at Western University. He has also served as the Chief Business Development Officer for Vertico Farms- a successful Vertical Farming company based in Toronto with products now featured in 3 Michelin Star restaurants.",
    image: "/placeholder.svg?height=600&width=450",
  },
  {
    name: "Casper Pan",
    title: "Director",
    bio: "Casper Pan, an emerging entrepreneur with a passion for economics, finance, and commercial real estate investments. Armed with a background in Economics and Finance, Casper has honed his expertise in identifying advantageous opportunities and navigating the complexities of the real estate market. Committed to fostering the success of new and upcoming professionals, Casper is dedicated to building a robust network infrastructure.",
    image: "/placeholder.svg?height=600&width=450",
  },
]

