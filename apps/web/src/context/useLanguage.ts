import * as React from "react"
import type { Language } from "@/data/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
  tArray: (key: string) => string[]
}

export const LanguageContext = React.createContext<LanguageContextType | undefined>(
  undefined
)

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
