import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContactForm from "@/components/contact/contact-form"
import LocationMap from "@/components/contact/location-map"
import TeamAvailability from "@/components/contact/team-availability"
import FaqAccordion from "@/components/contact/faq-accordion"
import CommunicationOptions from "@/components/contact/communication-options"

export const metadata = {
  title: "Contact Us | LOTA Canada",
  description:
    "Connect with the Leaders of Tomorrow Association through our various communication channels and find the right person to address your inquiry.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="LOTA headquarters"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container-wide relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6">Contact & Connect</h1>
            <p className="text-lg md:text-xl text-white/90">
              Reach out to the Leaders of Tomorrow Association through multiple channels. Our team is ready to assist
              with your inquiries and connect you with the right resources.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-normal mb-6">Connect With Us</h2>
              <p className="mb-8 text-muted-foreground">
                Whether you have questions about our programs, membership, or partnership opportunities, we're here to
                help you find the information you need.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-3">Headquarters</h3>
                  <address className="not-italic text-muted-foreground">
                    <p>200 Bay Street, Suite 3000</p>
                    <p>Toronto, ON M5J 2J1</p>
                    <p>Canada</p>
                  </address>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">General Inquiries</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@lotacanada.org" className="hover:underline">
                      info@lotacanada.org
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="tel:+14165551234" className="hover:underline">
                      +1 (416) 555-1234
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Office Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                  <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      LinkedIn
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Twitter
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* Team Availability */}
              <div className="mt-12">
                <h3 className="text-lg font-medium mb-4">Team Availability</h3>
                <TeamAvailability />
              </div>
            </div>

            {/* Contact Form and Map */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="contact-form" className="w-full">
                <TabsList className="mb-8 w-full justify-start">
                  <TabsTrigger value="contact-form">Contact Form</TabsTrigger>
                  <TabsTrigger value="communication">Communication Options</TabsTrigger>
                  <TabsTrigger value="locations">Our Locations</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>

                <TabsContent value="contact-form" className="mt-0">
                  <div className="bg-secondary p-8">
                    <h2 className="text-2xl font-normal mb-6">Get in Touch</h2>
                    <p className="mb-8 text-muted-foreground">
                      Our intelligent routing system will direct your inquiry to the appropriate team member for a
                      prompt response.
                    </p>
                    <ContactForm />
                  </div>
                </TabsContent>

                <TabsContent value="communication" className="mt-0">
                  <div className="bg-secondary p-8">
                    <h2 className="text-2xl font-normal mb-6">Communication Channels</h2>
                    <p className="mb-8 text-muted-foreground">
                      Choose the communication method that works best for you. We offer multiple channels to ensure
                      seamless connection.
                    </p>
                    <CommunicationOptions />
                  </div>
                </TabsContent>

                <TabsContent value="locations" className="mt-0">
                  <div className="bg-secondary p-8">
                    <h2 className="text-2xl font-normal mb-6">Our Locations</h2>
                    <p className="mb-8 text-muted-foreground">
                      LOTA has a presence across Canada with our headquarters in Toronto and regional chapters in major
                      cities.
                    </p>
                    <div className="aspect-[16/9] relative">
                      <LocationMap />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="faq" className="mt-0">
                  <div className="bg-secondary p-8">
                    <h2 className="text-2xl font-normal mb-6">Frequently Asked Questions</h2>
                    <p className="mb-8 text-muted-foreground">
                      Find quick answers to common questions about LOTA's programs, membership, and services.
                    </p>
                    <FaqAccordion />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-normal mb-4">Join Our Community</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Become part of a vibrant network of emerging leaders and professionals dedicated to growth, innovation,
              and positive impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/membership"
                className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Become a Member
              </a>
              <a
                href="/programs"
                className="px-6 py-3 border border-primary bg-transparent hover:bg-primary/5 transition-colors"
              >
                Explore Programs
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

