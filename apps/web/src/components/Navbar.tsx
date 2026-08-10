import { useState } from "react"
import { Button } from "@workspace/ui/components/button"
import { useLanguage } from "@/context"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  // NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu"

export function NavMenu() {
  const { language, setLanguage, t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "BM" : "EN")
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    closeMobileMenu()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-indigo-200 bg-white shadow-sm">
      <div className="flex w-full items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-8">
        {/* Logo */}
        <button
          onClick={scrollToTop}
          className="flex items-baseline gap-1 shrink-0 hover:opacity-80 transition-opacity sm:gap-2 cursor-pointer"
        >
          <span className="text-lg font-black text-[#2239a5] sm:text-2xl">{t("logoName")}</span>
          {/* <span className="font-logo font-extrabold text-lg text-indigo-400 sm:text-3xl">
            Wellbeing
          </span> */}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="gap-2 xl:gap-4">
              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection("healthAdvocacy")}
                  className="h-auto rounded-md bg-transparent px-2 py-2 text-xs font-bold uppercase tracking-wide text-neutral-900 hover:bg-neutral-100 focus:bg-transparent xl:px-3 xl:text-sm"
                >
                  {t("navigation.healthAdvocacy")}
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection("screening")}
                  className="h-auto rounded-md bg-transparent px-2 py-2 text-xs font-bold uppercase tracking-wide text-neutral-900 hover:bg-neutral-100 focus:bg-transparent xl:px-3 xl:text-sm"
                >
                  {t("navigation.screening")}
                </button>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection("outreach")}
                  className="h-auto rounded-md bg-transparent px-2 py-2 text-xs font-bold uppercase tracking-wide text-neutral-900 hover:bg-neutral-100 focus:bg-transparent xl:px-3 xl:text-sm"
                >
                  {t("navigation.outreach")}
                </button>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection("telehealth")}
                  className="h-auto rounded-md bg-transparent px-2 py-2 text-xs font-bold uppercase tracking-wide text-neutral-900 hover:bg-neutral-100 focus:bg-transparent xl:px-3 xl:text-sm"
                >
                  {t("navigation.telehealth")}
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            onClick={toggleLanguage}
            className="shrink-0 rounded-2xl bg-[#2329a5] px-4 py-2 text-xs font-bold uppercase text-white hover:bg-indigo-400 xl:px-6 xl:text-sm"
          >
            {language === "EN" ? "BM" : "EN"}
          </Button>
        </div>

        {/* Mobile Menu Button & Language Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <Button
            onClick={toggleLanguage}
            className="shrink-0 rounded-2xl bg-[#2329a5] px-3 py-2 text-xs font-bold uppercase text-white hover:bg-indigo-500"
          >
            {language === "EN" ? "BM" : "EN"}
          </Button>

          <button
            onClick={toggleMobileMenu}
            className="flex flex-col gap-1.5 rounded-md p-2 hover:bg-neutral-100"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-neutral-900 transition-all duration-300 ${
                isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-neutral-900 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-neutral-900 transition-all duration-300 ${
                isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-indigo-100 bg-white lg:hidden">
          <div className="flex flex-col gap-2 px-4 py-4">
            <button
              onClick={() => scrollToSection("healthAdvocacy")}
              className="rounded-md px-3 py-2 text-left text-sm font-bold uppercase tracking-wide text-neutral-900 hover:bg-neutral-100"
            >
              {t("navigation.healthAdvocacy")}
            </button>
            <button
              onClick={() => scrollToSection("screening")}
              className="rounded-md px-3 py-2 text-left text-sm font-bold uppercase tracking-wide text-neutral-900 hover:bg-neutral-100"
            >
              {t("navigation.screening")}
            </button>
            <button
              onClick={() => scrollToSection("outreach")}
              className="rounded-md px-3 py-2 text-left text-sm font-bold uppercase tracking-wide text-neutral-900 hover:bg-neutral-100"
            >
              {t("navigation.outreach")}
            </button>
            <button
              onClick={() => scrollToSection("telehealth")}
              className="rounded-md px-3 py-2 text-left text-sm font-bold uppercase tracking-wide text-neutral-900 hover:bg-neutral-100"
            >
              {t("navigation.telehealth")}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}