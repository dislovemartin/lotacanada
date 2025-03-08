"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Timeline, TimelineItem, TimelineCard, TimelineList, TimelineListItem } from "@/components/ui/timeline"
import { Calendar, CheckCircle2, Clock, AlertTriangle, ArrowRight } from 'lucide-react'

export default function ImplementationTimeline() {
  const [expandedPhase, setExpandedPhase] = useState<string | null>("1")
  
  const togglePhase = (phase: string) => {
    if (expandedPhase === phase) {
      setExpandedPhase(null)
    } else {
      setExpandedPhase(phase)
    }
  }
  
  return (
    <div className="container-wide py-16">
      <h1 className="text-4xl font-normal mb-4">LOTA Website Redesign: Implementation Timeline</h1>
      <p className="text-xl mb-10 max-w-3xl">
        A comprehensive timeline with specific timeframes for implementing all 20 future-focused web pages while maintaining our Aesop-inspired aesthetic.
      </p>
      
      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Timeline Overview</TabsTrigger>
          <TabsTrigger value="phase1">Phase 1: Core Pages</TabsTrigger>
          <TabsTrigger value="phase2">Phase 2: Knowledge Hub</TabsTrigger>
          <TabsTrigger value="phase3">Phase 3: Program Pages</TabsTrigger>
          <TabsTrigger value="phase4">Phase 4: Community Pages</TabsTrigger>
          <TabsTrigger value="phase5">Phase 5: Innovation Center</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-normal mb-6">Project Timeline Overview</h2>
              <p className="mb-8">
                The LOTA website redesign will be implemented over a 12-month period, divided into 5 phases with specific milestones and deliverables:
              </p>
              
              <Timeline>
                <TimelineItem 
                  phase="1" 
                  title="Phase 1: Core Pages (Months 1-3)" 
                  description="Implementation of the foundational pages that establish the site structure and design system"
                  expanded={expandedPhase === "1"}
                  onToggle={() => togglePhase("1")}
                >
                  <TimelineCard title="Key Milestones" icon={<Calendar className="h-4 w-4 text-primary" />}>
                    <TimelineList>
                      <TimelineListItem>Month 1: Design system & technical foundation</TimelineListItem>
                      <TimelineListItem>Month 2: Homepage & About Us implementation</TimelineListItem>
                      <TimelineListItem>Month 3: Contact Hub & Membership Portal</TimelineListItem>
                    </TimelineList>
                  </TimelineCard>
                  
                  <TimelineCard title="Deliverables" icon={<CheckCircle2 className="h-4 w-4 text-primary" />}>
                    <TimelineList>
                      <TimelineListItem>Extended design system with new components</TimelineListItem>
                      <TimelineListItem>4 core pages with responsive design</TimelineListItem>
                      <TimelineListItem>AI recommendation framework foundation</TimelineListItem>
                    </TimelineList>
                  </TimelineCard>
                </TimelineItem>
                
                <TimelineItem 
                  phase="2" 
                  title="Phase 2: Knowledge Hub (Months 4-5)" 
                  description="Development of content-focused pages with advanced search capabilities and personalized recommendations"
                  expanded={expandedPhase === "2"}
                  onToggle={() => togglePhase("2")}
                >
                  <TimelineCard title="Key Milestones" icon={<Calendar className="h-4 w-4 text-primary" />}>
                    <TimelineList>
                      <TimelineListItem>Month 4: Knowledge base & resource library</TimelineListItem>
                      <TimelineListItem>Month 5: Case studies & thought leadership section</TimelineListItem>
                    </TimelineList>
                  </TimelineCard>
                  
                  <TimelineCard title="Deliverables" icon={<CheckCircle2 className="h-4 w-4 text-primary" />}>
                    <TimelineList>
                      <TimelineListItem>AI-powered content recommendation engine</TimelineListItem>
                      <TimelineListItem>Advanced search functionality with filters</TimelineListItem>
                      <TimelineListItem>5 knowledge hub pages with interactive elements</TimelineListItem>
                    </TimelineList>
                  </TimelineCard>
                </TimelineItem>
                
                <TimelineItem 
                  phase="3" 
                  title="Phase 3: Program Pages (Months 6-7)" 
                  description="Implementation of interactive program-related pages with application workflows and AI-powered features"
                  expanded={expandedPhase === "3"}
                  onToggle={() => togglePhase("3")}
                >
                  <TimelineCard title="Key Milestones" icon={<Calendar className="h-4 w-4 text-primary" />}>
                    <TimelineList>
                      <TimelineListItem>Month 6: Mentorship platform & event calendar</TimelineListItem>
                      <TimelineListItem>Month 7: Grant application & program showcase</TimelineListItem>
                    </TimelineList>
                  </TimelineCard>
                  
                  <TimelineCard title="Deliverables" icon={<CheckCircle2 className="h-4 w-4 text-primary" />}>
                    <TimelineList>
                      <TimelineListItem>Mentorship matching algorithm integration</TimelineListItem>
                      <TimelineListItem>Interactive event calendar with registration</TimelineListItem>
                      <TimelineListItem>4 program pages with application workflows</TimelineListItem>
                    </TimelineList>
                  </TimelineCard>
                </TimelineItem>
                
                <TimelineItem 
                  phase="4" 
                  title="Phase 4: Community Pages (Months 8-9)" 
                  description="Development of community-focused pages with networking features and global chapter coordination"
                  expanded={expandedPhase === "4"}
                  onToggle={() => togglePhase("4")}
                >
                  <TimelineCard title="Key Milestones" icon={<Calendar className="h-4 w-4 text-primary" />}>
                    <TimelineList>
                      <TimelineListItem>Month 8: Member directory & networking hub</TimelineListItem>
                      <TimelineListItem>Month 9: Global chapters & community forums</TimelineListItem>
                    </TimelineList>
                  </TimelineCard>
                  
                  <TimelineCard title="Deliverables" icon={<CheckCircle2 className="h-4 w-4 text-primary" />}>
                    <TimelineList>
                      <TimelineListItem>Interactive member directory with filtering</TimelineListItem>
                      <TimelineListItem>Global chapter map visualization</TimelineListItem>
                      <TimelineListItem>3 community pages with social features</TimelineListItem>
                    </TimelineList>
                  </TimelineCard>
                </TimelineItem>
                
                <TimelineItem 
                  phase="5" 
                  title="Phase 5: Innovation Center (Months 10-12)" 
                  description="Implementation of forward-looking pages with WebGL visualizations and predictive analytics"
                  expanded={expandedPhase === "5"}
                  onToggle={() => togglePhase("5")}
                >
                  <TimelineCard title="Key Milestones" icon={<Calendar className="h-4 w-4 text-primary" />}>
                    <TimelineList>
                      <TimelineListItem>Month 10: Innovation showcase & future trends</TimelineListItem>
                      <TimelineListItem>Month 11: Interactive impact reports & data visualization</TimelineListItem>
                      <TimelineListItem>Month 12: Final integration & performance optimization</TimelineListItem>
                    </TimelineList>
                  </TimelineCard>
                  
                  <TimelineCard title="Deliverables" icon={<CheckCircle2 className="h-4 w-4 text-primary" />}>
                    <TimelineList>
                      <TimelineListItem>WebGL-powered interactive data visualizations</TimelineListItem>
                      <TimelineListItem>Predictive analytics dashboard for admins</TimelineListItem>
                      <TimelineListItem>4 innovation center pages with cutting-edge features</TimelineListItem>
                      <TimelineListItem>Final performance optimization across all 20 pages</TimelineListItem>
                    </TimelineList>
                  </TimelineCard>
                </TimelineItem>
              </Timeline>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-2xl font-normal mb-6">Key Considerations</h2>
              
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Clock size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Phased Implementation Strategy</h3>
                    <p className="text-sm">
                      The timeline adopts a phased approach, allowing for incremental deployment and testing. Each phase builds upon the previous, ensuring that core functionality is established before more advanced features are implemented.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle size={24} className="text-amber-500 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Potential Risk Factors</h3>
                    <p className="text-sm mb-3">
                      While the timeline is realistic, several factors could impact the schedule:
                    </p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-start">
                        <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                        <span>Technical challenges with advanced features like WebGL visualizations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                        <span>Content creation delays for specialized page content</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                        <span>Integration complexity with existing systems</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="phase1">
          <div className="space-y-12">
            <h2 className="text-2xl font-normal mb-6">Phase 1: Core Pages (Months 1-3)</h2>
            <p className="mb-8">
              The first phase focuses on establishing the foundation for the entire website redesign. During this phase, we'll implement the core pages that define the site structure, user experience, and visual identity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-normal">Month 1 Activities</h3>
                <ul className="space-y-4">
                  <li className="bg-card rounded-lg p-4 border">
                    <h4 className="font-medium">Design System Development</h4>
                    <p className="text-sm mt-2">Create comprehensive component library following Aesop-inspired aesthetic with earth tones, clean typography, and subtle animations.</p>
                  </li>
                  <li className="bg-card rounded-lg p-4 border">
                    <h4 className="font-medium">Technical Infrastructure</h4>
                    <p className="text-sm mt-2">Set up development environment, CI/CD pipeline, and deployment workflow to ensure consistent quality and efficient development.</p>
                  </li>
                  <li className="bg-card rounded-lg p-4 border">
                    <h4 className="font-medium">Accessibility Framework</h4>
                    <p className="text-sm mt-2">Establish accessibility guidelines and testing procedures to ensure WCAG 2.1 AA compliance throughout the website.</p>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-normal">Month 2-3 Activities</h3>
                <ul className="space-y-4">
                  <li className="bg-card rounded-lg p-4 border">
                    <h4 className="font-medium">Homepage Implementation</h4>
                    <p className="text-sm mt-2">Develop a modern, responsive homepage with hero section, animated value proposition, and personalized content recommendations.</p>
                  </li>
                  <li className="bg-card rounded-lg p-4 border">
                    <h4 className="font-medium">About Us Section</h4>
                    <p className="text-sm mt-2">Create an immersive organization story with timeline visualization, team profiles, and mission statement presentation.</p>
                  </li>
                  <li className="bg-card rounded-lg p-4 border">
                    <h4 className="font-medium">Contact Hub & Membership Portal</h4>
                    <p className="text-sm mt-2">Implement interactive contact methods and membership registration/login functionality with secure authentication.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-muted p-6 rounded-lg mt-8">
              <h3 className="text-xl font-normal mb-4">Phase 1 Deliverables</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card p-4 rounded-md border">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="font-medium">Design System</h4>
                  </div>
                  <p className="text-sm">Complete component library with Aesop-inspired visual language</p>
                </div>
                
                <div className="bg-card p-4 rounded-md border">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="font-medium">Core Pages</h4>
                  </div>
                  <p className="text-sm">4 responsive pages with modern UI and interactive elements</p>
                </div>
                
                <div className="bg-card p-4 rounded-md border">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="font-medium">AI Framework</h4>
                  </div>
                  <p className="text-sm">Foundation for AI-powered recommendations and personalization</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button className="inline-flex items-center px-6 py-3 border border-primary bg-transparent hover:bg-primary/5 transition-colors">
                <ArrowRight size={16} className="mr-2 rotate-180" />
                Back to Overview
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                View Phase 2 Timeline <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="phase2">
          <div className="space-y-12">
            <h2 className="text-2xl font-normal mb-6">Phase 2: Knowledge Hub (Months 4-5)</h2>
            <p className="mb-8">
              The second phase focuses on developing content-focused pages with advanced search capabilities and personalized recommendations. This phase builds upon the design system and core functionality established in Phase 1.
            </p>
            
            {/* Similar detailed content for Phase 2 would go here */}
            <div className="flex justify-center">
              <button className="inline-flex items-center px-6 py-3 border border-primary bg-transparent hover:bg-primary/5 transition-colors">
                <ArrowRight size={16} className="mr-2 rotate-180" />
                Back to Overview
              </button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="phase3">
          <div className="space-y-12">
            <h2 className="text-2xl font-normal mb-6">Phase 3: Program Pages (Months 6-7)</h2>
            <p className="mb-8">
              The third phase focuses on implementing program-related pages with interactive elements, application workflows, and AI-powered features. This phase leverages the design system and technical foundation established in earlier phases.
            </p>
            
            {/* Content for Phase 3 would continue here with similar structure to Phase 1 */}
            <div className="flex justify-center">
              <button className="inline-flex items-center px-6 py-3 border border-primary bg-transparent hover:bg-primary/5 transition-colors">
                <ArrowRight size={16} className="mr-2 rotate-180" />
                Back to Overview
              </button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="phase4">
          <div className="space-y-12">
            <h2 className="text-2xl font-normal mb-6">Phase 4: Community Pages (Months 8-9)</h2>
            <p className="mb-8">
              The fourth phase focuses on developing community-focused pages with networking features, event management, and global chapter coordination. This phase builds upon the personalization and interactive elements from previous phases.
            </p>
            
            {/* Content for Phase 4 would continue here with similar structure to previous phases */}
            <div className="flex justify-center">
              <button className="inline-flex items-center px-6 py-3 border border-primary bg-transparent hover:bg-primary/5 transition-colors">
                <ArrowRight size={16} className="mr-2 rotate-180" />
                Back to Overview
              </button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="phase5">
          <div className="space-y-12">
            <h2 className="text-2xl font-normal mb-6">Phase 5: Innovation Center (Months 10-12)</h2>
            <p className="mb-8">
              The final phase focuses on implementing forward-looking pages with advanced interactive features, WebGL visualizations, and predictive analytics. This phase completes the 20-page redesign and integrates all components into a cohesive experience.
            </p>
            
            {/* Content for Phase 5 would continue here with similar structure to previous phases */}
            <div className="flex justify-center">
              <button className="inline-flex items-center px-6 py-3 border border-primary bg-transparent hover:bg-primary/5 transition-colors">
                <ArrowRight size={16} className="mr-2 rotate-180" />
                Back to Overview
              </button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}