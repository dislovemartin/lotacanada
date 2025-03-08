"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function Announcement() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-black text-white text-sm py-3">
      <div className="container-wide flex items-center justify-center">
        <p className="text-center text-white">
          Standard delivery is complimentary on orders over $65. Enjoy complimentary samples with all orders.
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 text-white"
          aria-label="Close announcement"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}

