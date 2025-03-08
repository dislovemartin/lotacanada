"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Copy, InfoIcon } from "lucide-react"

interface ColorSwatchProps {
  name: string
  variable?: string
  value: string
  className?: string
}

export function ColorSwatch({ name, variable, value, className }: ColorSwatchProps) {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = () => {
    if (variable) {
      navigator.clipboard.writeText(variable)
    } else {
      navigator.clipboard.writeText(value)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div 
      className={cn(
        "flex flex-col rounded-md overflow-hidden border shadow-sm",
        className
      )}
    >
      <div 
        className="h-20 w-full cursor-pointer transition-opacity hover:opacity-90 relative"
        style={{ backgroundColor: value }}
        onClick={copyToClipboard}
      >
        {copied && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
            <Check className="h-6 w-6" />
          </div>
        )}
      </div>
      <div className="p-3 bg-card">
        <div className="flex items-center justify-between">
          <span className="font-medium text-sm">{name}</span>
          <button 
            onClick={copyToClipboard}
            className="text-muted-foreground hover:text-foreground"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
        {variable && (
          <div className="text-xs text-muted-foreground mt-1 font-mono">
            {variable}
          </div>
        )}
        <div className="text-xs text-muted-foreground mt-1 font-mono">
          {value}
        </div>
      </div>
    </div>
  )
}

interface ColorPaletteProps {
  className?: string
  colors: {
    name: string
    variable?: string
    value: string
  }[]
}

export function ColorPalette({ className, colors }: ColorPaletteProps) {
  return (
    <div className={cn("grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", className)}>
      {colors.map((color) => (
        <ColorSwatch
          key={color.name}
          name={color.name}
          variable={color.variable}
          value={color.value}
        />
      ))}
    </div>
  )
}

interface TypographyShowcaseProps {
  className?: string
}

export function TypographyShowcase({ className }: TypographyShowcaseProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="space-y-1">
        <h1>Heading 1</h1>
        <div className="text-sm text-muted-foreground">
          text-4xl md:text-5xl lg:text-6xl font-light tracking-tight
        </div>
      </div>
      <div className="space-y-1">
        <h2>Heading 2</h2>
        <div className="text-sm text-muted-foreground">
          text-2xl md:text-3xl lg:text-4xl font-light tracking-tight
        </div>
      </div>
      <div className="space-y-1">
        <h3>Heading 3</h3>
        <div className="text-sm text-muted-foreground">
          text-xl md:text-2xl font-light tracking-tight
        </div>
      </div>
      <div className="space-y-1">
        <p>Paragraph text looks like this. It should be legible and provide good contrast.</p>
        <div className="text-sm text-muted-foreground">
          text-base md:text-lg font-light leading-relaxed
        </div>
      </div>
      <div className="space-y-1">
        <a href="#" className="link-with-arrow">
          Link with arrow →
        </a>
        <div className="text-sm text-muted-foreground">
          inline-flex items-center gap-2 text-primary hover:underline transition
        </div>
      </div>
    </div>
  )
}

interface SpacingShowcaseProps {
  className?: string
}

export function SpacingShowcase({ className }: SpacingShowcaseProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="space-y-2">
        <div className="text-sm font-medium">4px - 0.25rem</div>
        <div className="h-1 w-1 bg-primary"></div>
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">8px - 0.5rem</div>
        <div className="h-2 w-2 bg-primary"></div>
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">12px - 0.75rem</div>
        <div className="h-3 w-3 bg-primary"></div>
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">16px - 1rem</div>
        <div className="h-4 w-4 bg-primary"></div>
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">24px - 1.5rem</div>
        <div className="h-6 w-6 bg-primary"></div>
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">32px - 2rem</div>
        <div className="h-8 w-8 bg-primary"></div>
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">48px - 3rem</div>
        <div className="h-12 w-12 bg-primary"></div>
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">64px - 4rem</div>
        <div className="h-16 w-16 bg-primary"></div>
      </div>
    </div>
  )
}

interface ComponentShowcaseProps {
  title: string
  description?: string
  preview: React.ReactNode
  code?: string
  className?: string
}

export function ComponentShowcase({
  title,
  description,
  preview,
  code,
  className,
}: ComponentShowcaseProps) {
  const [showCode, setShowCode] = React.useState(false)

  return (
    <div className={cn("space-y-4", className)}>
      <div className="space-y-1">
        <h3 className="text-lg font-medium">{title}</h3>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      <div className="rounded-md border p-6 flex items-center justify-center bg-card">
        {preview}
      </div>
      {code && (
        <div>
          <button
            onClick={() => setShowCode(!showCode)}
            className="text-xs inline-flex items-center gap-1 px-2 py-1 rounded border hover:bg-muted"
          >
            {showCode ? "Hide" : "Show"} Code
          </button>
          {showCode && (
            <div className="mt-2 p-4 bg-muted rounded-md overflow-x-auto">
              <pre className="text-xs font-mono">{code}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

interface DesignSystemDocProps {
  className?: string
}

export function DesignSystemDoc({ className }: DesignSystemDocProps) {
  return (
    <div className={cn("space-y-12", className)}>
      <Tabs defaultValue="colors">
        <TabsList className="mb-8">
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="spacing">Spacing</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
        </TabsList>
        
        <TabsContent value="colors">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-normal mb-6">Brand Colors</h2>
              <p className="mb-8 max-w-3xl">
                The LotaCanada color palette is inspired by natural earth tones, providing a warm, sophisticated aesthetic
                that aligns with our Aesop-inspired design approach.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-normal mb-4">Primary Colors</h3>
                  <ColorPalette
                    colors={[
                      { name: "Primary", variable: "--primary", value: "hsl(30 8% 25%)" },
                      { name: "Primary Foreground", variable: "--primary-foreground", value: "hsl(30 10% 98%)" },
                      { name: "Secondary", variable: "--secondary", value: "hsl(30 5% 90%)" },
                      { name: "Secondary Foreground", variable: "--secondary-foreground", value: "hsl(30 8% 25%)" },
                      { name: "Accent", variable: "--accent", value: "hsl(30 5% 90%)" },
                      { name: "Accent Foreground", variable: "--accent-foreground", value: "hsl(30 8% 25%)" },
                    ]}
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-normal mb-4">UI Colors</h3>
                  <ColorPalette
                    colors={[
                      { name: "Background", variable: "--background", value: "hsl(30 25% 98%)" },
                      { name: "Foreground", variable: "--foreground", value: "hsl(30 10% 15%)" },
                      { name: "Card", variable: "--card", value: "hsl(30 25% 98%)" },
                      { name: "Card Foreground", variable: "--card-foreground", value: "hsl(30 10% 15%)" },
                      { name: "Muted", variable: "--muted", value: "hsl(30 5% 90%)" },
                      { name: "Muted Foreground", variable: "--muted-foreground", value: "hsl(30 10% 40%)" },
                      { name: "Border", variable: "--border", value: "hsl(30 5% 85%)" },
                      { name: "Input", variable: "--input", value: "hsl(30 5% 85%)" },
                      { name: "Ring", variable: "--ring", value: "hsl(30 8% 25%)" },
                    ]}
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-normal mb-4">Aesop-Inspired Earth Tones</h3>
                  <ColorPalette
                    colors={[
                      { name: "Sand Light", value: "#f5f5f0" },
                      { name: "Sand", value: "#e6e2d9" },
                      { name: "Sand Dark", value: "#d6d1c4" },
                      { name: "Earth Light", value: "#c4bfb2" },
                      { name: "Earth", value: "#a39e8c" },
                      { name: "Earth Dark", value: "#827d6d" },
                      { name: "Stone Light", value: "#5c5a54" },
                      { name: "Stone", value: "#3c3a36" },
                      { name: "Stone Dark", value: "#28262f" },
                    ]}
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-normal mb-4">Semantic Colors</h3>
                  <ColorPalette
                    colors={[
                      { name: "Destructive", variable: "--destructive", value: "hsl(0 85% 60%)" },
                      { name: "Destructive Foreground", variable: "--destructive-foreground", value: "hsl(0 0% 98%)" },
                      { name: "Success", value: "#4CAF50" },
                      { name: "Success Foreground", value: "#FFFFFF" },
                      { name: "Warning", value: "#FF9800" },
                      { name: "Warning Foreground", value: "#FFFFFF" },
                      { name: "Info", value: "#2196F3" },
                      { name: "Info Foreground", value: "#FFFFFF" },
                    ]}
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <InfoIcon className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Color Usage Guidelines</h3>
                  <p className="text-sm mb-2">
                    When applying colors to UI elements, follow these principles:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>Use primary colors for main actions and key UI elements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>Apply earth tones for visual interest and brand alignment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>Ensure sufficient contrast for all text and interactive elements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>Reserve semantic colors for their intended meanings only</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="typography">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-normal mb-6">Typography System</h2>
              <p className="mb-8 max-w-3xl">
                The LotaCanada typography system uses a modern, clean typeface with careful attention to
                hierarchy, spacing, and readability. Our Aesop-inspired approach favors light font weights
                and generous line heights.
              </p>
              
              <TypographyShowcase />
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <InfoIcon className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Typography Guidelines</h3>
                  <p className="text-sm mb-2">
                    When working with typography, follow these principles:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>Maintain a clear visual hierarchy with appropriate heading levels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>Use light font weights for elegance, but ensure readability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>Keep paragraph widths between 45-75 characters for optimal readability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>Ensure sufficient contrast between text and background</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="spacing">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-normal mb-6">Spacing System</h2>
              <p className="mb-8 max-w-3xl">
                Our spacing system is built on a 4px grid, creating a consistent rhythm throughout the interface.
                Proper spacing improves readability, creates visual hierarchy, and guides users through content.
              </p>
              
              <SpacingShowcase />
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <InfoIcon className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Spacing Guidelines</h3>
                  <p className="text-sm mb-2">
                    When applying spacing, follow these principles:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>Use larger spacing between major sections (3rem/48px or 4rem/64px)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>Apply medium spacing between related elements (1.5rem/24px or 2rem/32px)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>Use smaller spacing for closely related items (0.5rem/8px or 0.75rem/12px)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>Be consistent with spacing choices to create rhythm and harmony</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="components">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-normal mb-6">Component Library</h2>
              <p className="mb-8 max-w-3xl">
                Our component library is built on Shadcn UI, customized with our Aesop-inspired design language.
                Components are designed to be modular, accessible, and consistent with our brand aesthetic.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ComponentShowcase
                  title="Primary Button"
                  description="Used for primary actions and key user flows"
                  preview={
                    <button className="btn-primary">
                      Primary Button
                    </button>
                  }
                  code={`<button className="btn-primary">
  Primary Button
</button>`}
                />
                
                <ComponentShowcase
                  title="Card Component"
                  description="Container for grouped content with consistent styling"
                  preview={
                    <div className="w-full max-w-sm bg-card rounded-md border p-6">
                      <h3 className="font-medium mb-2">Card Title</h3>
                      <p className="text-sm text-muted-foreground">Card description text provides additional context and information.</p>
                    </div>
                  }
                  code={`<div className="bg-card rounded-md border p-6">
  <h3 className="font-medium mb-2">Card Title</h3>
  <p className="text-sm text-muted-foreground">
    Card description text provides additional context.
  </p>
</div>`}
                />
                
                <ComponentShowcase
                  title="Link with Arrow"
                  description="Styled link with directional arrow indicator"
                  preview={
                    <a href="#" className="link-with-arrow">
                      View more details →
                    </a>
                  }
                  code={`<a href="#" className="link-with-arrow">
  View more details →
</a>`}
                />
                
                <ComponentShowcase
                  title="Section Container"
                  description="Standard container with proper spacing for page sections"
                  preview={
                    <div className="w-full p-4 border border-dashed rounded-md bg-muted/50 text-center text-sm">
                      Container (max-width: 1400px)
                    </div>
                  }
                  code={`<div className="container-custom section-spacing">
  {/* Section content */}
</div>`}
                />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="patterns">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-normal mb-6">Design Patterns</h2>
              <p className="mb-8 max-w-3xl">
                Design patterns provide consistent solutions to common UI challenges. These patterns
                combine our components, spacing, typography, and colors to create cohesive experiences.
              </p>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-normal mb-4">Page Headers</h3>
                  <div className="p-6 border rounded-md bg-card">
                    <div className="max-w-3xl">
                      <h1>Page Title Goes Here</h1>
                      <p className="text-xl mb-8">
                        A supporting description that provides context and helps users understand
                        the purpose of this page or section.
                      </p>
                      <div className="flex gap-4">
                        <button className="btn-primary">Primary Action</button>
                        <a href="#" className="link-with-arrow">
                          Secondary Action →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-normal mb-4">Content Cards</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-card rounded-md border overflow-hidden">
                        <div className="h-40 bg-earth-light"></div>
                        <div className="p-6">
                          <h3 className="mb-2">Card Title {i}</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Card description provides context and additional information about this item.
                          </p>
                          <a href="#" className="link-with-arrow">
                            Read More →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-normal mb-4">Form Layout</h3>
                  <div className="p-6 border rounded-md bg-card max-w-md">
                    <h3 className="mb-6">Form Title</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border rounded-md text-sm"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address</label>
                        <input 
                          type="email" 
                          className="w-full px-3 py-2 border rounded-md text-sm"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Message</label>
                        <textarea 
                          className="w-full px-3 py-2 border rounded-md text-sm"
                          rows={4}
                          placeholder="Enter your message"
                        />
                      </div>
                      <button className="btn-primary w-full">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}