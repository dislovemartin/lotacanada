import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Events", href: "/events" },
    { name: "Knowledge", href: "/knowledge" },
    { name: "Contact", href: "/contact" },
  ],
  secondary: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ],
  social: [
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-secondary mt-24">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOTA%20LOGO%20transparent%20background-OoXFza2kv8qMLa5cImyPi7IUky9jiO.png"
                alt="LOTA - Leaders of Tomorrow Association"
                width={160}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              The Leaders of Tomorrow Association fosters professional growth through mentorship, education, and
              networking opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4">Navigation</h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {navigation.secondary.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest events and programs.
            </p>
            <form className="space-y-3">
              <Input type="email" placeholder="Enter your email" className="bg-background" required />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Leaders of Tomorrow Association. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

