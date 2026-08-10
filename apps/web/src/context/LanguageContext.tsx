import * as React from "react"
import type { Language } from "@/data/translations"
import { getTranslation, getTranslationArray } from "@/data/translations"
import { LanguageContext } from "./useLanguage"

interface LanguageProviderProps {
  children: React.ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = React.useState<Language>("BM") // Default to Bahasa Malaysia

  const t = React.useCallback((key: string) => {
    return getTranslation(language, key)
  }, [language])

  const tArray = React.useCallback((key: string) => {
  return getTranslationArray(language, key)
}, [language])

  return (
  <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
    {children}
  </LanguageContext.Provider>
)
}
