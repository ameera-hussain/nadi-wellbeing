import { FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/context"
import { HeroTitle, SectionSubtitle } from "@workspace/ui/components/Typography"

export function Contact() {
  const { t } = useLanguage()

  return (
    <div id="contact" className="flex min-h-svh flex-col items-center justify-center gap-3 bg-gradient-to-b from-indigo-100 to-indigo-50 px-4 py-8 text-center sm:gap-4 sm:px-6 md:gap-6 md:py-12 lg:px-8">
      <HeroTitle className="text-indigo-400">
        {t("contact.title")}
      </HeroTitle>
      <SectionSubtitle className="text-[#454545]">
        {t("contact.subtitle")}
      </SectionSubtitle>
      <div className="mt-2 sm:mt-4">
        {/* where social media links will go */}
        <div className="flex gap-4 sm:gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} className="text-indigo-400 hover:text-indigo-600 sm:size-6 transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className="text-indigo-400 hover:text-indigo-600 sm:size-6 transition-colors" />
          </a>
          <a href="mailto:contact@nadiwellbeing.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={20} className="text-indigo-400 hover:text-indigo-600 sm:size-6 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  )
}