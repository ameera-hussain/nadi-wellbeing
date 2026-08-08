import { type ReactNode, type ElementType } from "react"
import { cn } from "@workspace/ui/lib/utils"

type BaseProps = {
  children: ReactNode
  className?: string
  as?: ElementType
}

export function HeroTitle({ children, className, as: Tag = "h1" }: BaseProps) {
  return (
    <Tag
      className={cn(
        "text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl",
        className
      )}
    >
      {children}
    </Tag>
  )
}

export function SectionTitle({ children, className, as: Tag = "h2" }: BaseProps) {
  return (
    <Tag
      className={cn(
        "text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl",
        className
      )}
    >
      {children}
    </Tag>
  )
}

export function SectionSubtitle({ children, className, as: Tag = "p" }: BaseProps) {
  return (
    <Tag className={cn("max-w-4xl text-base sm:text-lg md:text-xl", className)}>
      {children}
    </Tag>
  )
}

export function BodyText({ children, className, as: Tag = "p" }: BaseProps) {
  return (
    <Tag className={cn("max-w-3xl text-base sm:text-lg md:text-xl", className)}>
      {children}
    </Tag>
  )
}

export function CardTitle({ children, className, as: Tag = "h3" }: BaseProps) {
  return (
    <Tag className={cn("text-lg font-bold sm:text-xl", className)}>
      {children}
    </Tag>
  )
}

export function CardBody({ children, className, as: Tag = "p" }: BaseProps) {
  return (
    <Tag className={cn("text-sm sm:text-base", className)}>
      {children}
    </Tag>
  )
}
