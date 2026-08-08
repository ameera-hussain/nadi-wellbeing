import { SectionTitle, SectionSubtitle, CardTitle as CardTitleTypography, CardBody } from "@workspace/ui/components/Typography"
import { useLanguage } from "@/context"
import { ExternalLink } from "lucide-react"
import { bentoShadow } from "@/lib/bentoUtils"
import StudioSihatLogo from "@/assets/StudioSihatLogo.png"
import heartHealth from "@/assets/heartHealth.png"
import hypertension from "@/assets/hypertension.png"
import diabetes from "@/assets/diabetes.png"
import weightManagement from "@/assets/weightManagement.png"
import mentalHealth from "@/assets/mentalHealth.png"

interface AdvocacyCard {
  id: string
  title: string
  description: string
  image: string
  href: string
  linkText: string
}

export function HealthAdvocacy() {
  const { t } = useLanguage()

  const cards: AdvocacyCard[] = [
    {
      id: 'hypertension',
      title: t("healthAdvocacy.hypertension"),
      description: t("healthAdvocacy.hypertensionDesc"),
      image: hypertension,
      href: 'https://www.youtube.com/playlist?list=PLljUvHFcZOQLNHvkCEW9NRsAqOn3gQ6hi',
      linkText: t("healthAdvocacy.viewPlaylist"),
    },
    {
      id: 'diabetes',
      title: t("healthAdvocacy.diabetes"),
      description: t("healthAdvocacy.diabetesDesc"),
      image: diabetes,
      href: 'https://www.youtube.com/playlist?list=PLljUvHFcZOQLW3EY3ZCpSf4QQ7Jxo88jE',
      linkText: t("healthAdvocacy.viewPlaylist"),
    },
    {
      id: 'heart',
      title: t("healthAdvocacy.heart"),
      description: t("healthAdvocacy.heartDesc"),
      image: heartHealth,
      href: 'https://www.youtube.com/playlist?list=PLljUvHFcZOQKgKFEjB0F2kGMWZMM3khaV',
      linkText: t("healthAdvocacy.viewPlaylist"),
    },
    {
      id: 'weightManagement',
      title: t("healthAdvocacy.weightManagement"),
      description: t("healthAdvocacy.weightManagementDesc"),
      image: weightManagement,
      href: 'https://www.youtube.com/playlist?list=PLljUvHFcZOQLvbzpNylQ7CCVGtTAsmvO4',
      linkText: t("healthAdvocacy.viewPlaylist"),
    },
    {
      id: 'mentalHealth',
      title: t("healthAdvocacy.mentalHealth"),
      description: t("healthAdvocacy.mentalHealthDesc"),
      image: mentalHealth,
      href: 'https://www.youtube.com/playlist?list=PLljUvHFcZOQJqNpT2-nUXluJQivb5_zZc',
      linkText: t("healthAdvocacy.viewPlaylist"),
    },
    {
      id: 'studioSihat',
      title: t("healthAdvocacy.studioSihat"),
      description: t("healthAdvocacy.studioSihatDesc"),
      image: StudioSihatLogo,
      href: 'https://www.youtube.com/@StudioSihat',
      linkText: t("healthAdvocacy.viewChannel"),
    },
  ]

  return (
    <div id="healthAdvocacy" className="flex flex-col items-center gap-8 bg-gradient-to-b from-blue-100 to-white px-4 py-8 text-center sm:gap-10 sm:px-6 md:gap-16 md:py-16 lg:px-8">
      {/* Header */}
      <div className="flex max-w-4xl flex-col items-center gap-2 sm:gap-3 md:gap-4">
        <SectionTitle className="text-[#2329a5]">
          {t("healthAdvocacy.title")}
        </SectionTitle>
        <SectionSubtitle className="text-[#454545]">
          {t("healthAdvocacy.subtitle")}
        </SectionSubtitle>
      </div>

      {/* Cards Grid - 3 columns, 2 rows */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <a
            key={card.id}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-col overflow-hidden ${card.id !== 'studioSihat' ? 'rounded-lg' : ''} transition-transform duration-200 hover:-translate-y-1 ${card.id !== 'studioSihat' ? bentoShadow : ''} cursor-pointer`}
          >
            {/* Image */}
            <div className={`overflow-hidden ${card.id === 'studioSihat' ? 'aspect-square' : 'aspect-video bg-white'}`}>
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className={`flex flex-col gap-2 grow p-4 sm:p-6 ${card.id !== 'studioSihat' ? 'bg-white' : 'bg-transparent'}`}>
              {card.id !== 'studioSihat' && (
                <CardTitleTypography className="text-left text-gray-800">
                  {card.title}
                </CardTitleTypography>
              )}
              
              <CardBody className={`text-left grow text-gray-600 ${card.id === 'studioSihat' ? 'font-semibold text-blue-950 text-center' : ''}`}>
                {card.description}
              </CardBody>

              {/* View Playlist Link */}
              {card.id !== 'studioSihat' && (
                <div className="flex items-center justify-end mt-auto pt-2 text-sm font-medium text-[#2329a5] group-hover:text-indigo-700">
                  {card.linkText}
                  <ExternalLink size={14} className="ml-1" />
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
