import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProgramCardProps {
  title: string
  description: string
  image: string
  href: string
}

export default function ProgramCard({ title, description, image, href }: ProgramCardProps) {
  return (
    <div className="group">
      <div className="aspect-[4/3] relative mb-6 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link href={href} className="inline-flex items-center text-sm hover:underline">
        Learn more <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  )
}

