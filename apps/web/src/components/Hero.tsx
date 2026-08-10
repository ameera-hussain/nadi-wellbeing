import { useLanguage } from "@/context"
import { HeroTitle, SectionSubtitle } from "@workspace/ui/components/Typography"
import familyImage from "@/assets/family5.png"

export function Hero() {
  const { t } = useLanguage()
  const { tArray } = useLanguage()

  return (
    <div 
      id="hero" 
      className="flex min-h-[calc(100svh-60px)] items-center justify-start bg-cover bg-gradient-to-b from-white to-indigo-50 bg-center px-4 py-8 sm:px-6 md:py-12 lg:px-8 scroll-smooth"
      style={{ backgroundImage: `url(${familyImage})` }}
    >
      <div className="flex flex-col gap-3 text-left sm:gap-4 md:gap-6 max-w-2xl p-6 md:p-8">
  <HeroTitle className="text-[#2329a5] leading-tight sm:leading-snug drop-shadow-md">
    {t("hero.title")}
  </HeroTitle>
  <SectionSubtitle className="text-[#454545] text-lg sm:text-xl md:text-2xl drop-shadow-md">
    <div>
    {tArray("hero.subtitle").map((line: string, index: number) => (
      <p key={index} className="mb-4">{line}</p>
    ))}
  </div>
  </SectionSubtitle>
</div>
    </div>
  )
}