"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TimelineProps {
  className?: string
  children: React.ReactNode
}

export function Timeline({ className, children }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
      {children}
    </div>
  )
}

interface TimelineItemProps {
  className?: string
  children: React.ReactNode
  phase: number | string
  title: string
  description?: string
  expanded?: boolean
  onToggle?: () => void
}

export function TimelineItem({ 
  className, 
  children, 
  phase, 
  title, 
  description,
  expanded,
  onToggle
}: TimelineItemProps) {
  return (
    <div className={cn("relative pl-20 pb-16", className)}>
      <div 
        className={cn(
          "absolute left-0 top-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center cursor-pointer transition-colors",
          expanded && "bg-primary/20"
        )}
        onClick={onToggle}
      >
        <span className="text-lg font-medium">{phase}</span>
      </div>
      <div className="absolute left-[7.5rem] top-8 w-3 h-3 rounded-full bg-primary"></div>
      
      <h3 className="text-xl font-normal mb-2">{title}</h3>
      {description && <p className="text-muted-foreground mb-4">{description}</p>}
      
      <div className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-4",
        !expanded && "hidden"
      )}>
        {children}
      </div>
    </div>
  )
}

interface TimelineCardProps {
  className?: string
  children: React.ReactNode
  icon?: React.ReactNode
  title: string
}

export function TimelineCard({ className, children, icon, title }: TimelineCardProps) {
  return (
    <div className={cn("bg-card text-card-foreground rounded-xl border shadow-sm p-4", className)}>
      <h4 className="font-medium mb-2 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h4>
      {children}
    </div>
  )
}

interface TimelineListProps {
  className?: string
  children: React.ReactNode
}

export function TimelineList({ className, children }: TimelineListProps) {
  return (
    <ul className={cn("text-sm space-y-1", className)}>
      {children}
    </ul>
  )
}

interface TimelineListItemProps {
  className?: string
  children: React.ReactNode
}

export function TimelineListItem({ className, children }: TimelineListItemProps) {
  return (
    <li className={cn("flex items-start", className)}>
      <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
      <span>{children}</span>
    </li>
  )
}