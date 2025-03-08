"use client"

import { DesignSystemDoc } from "@/components/ui/design-system"

export default function DesignSystemPage() {
  return (
    <div className="container-custom py-12">
      <h1 className="mb-8">LotaCanada Design System</h1>
      <p className="text-xl max-w-3xl mb-12">
        A comprehensive design system based on Aesop-inspired aesthetics with warm earth tones,
        clean typography, and a focus on accessibility and responsive design.
      </p>
      
      <DesignSystemDoc />
    </div>
  )
}