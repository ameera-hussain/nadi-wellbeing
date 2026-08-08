"use client"

import { useLanguage } from "@/context"
import { SectionTitle, SectionSubtitle } from "@workspace/ui/components/Typography"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@workspace/ui/components/carousel"
import NadiEvent1 from "@/assets/aboutPhotos/NadiEvent1.jpg"
import NadiEvent2 from "@/assets/aboutPhotos/NadiEvent2.jpg"
import NadiEvent3 from "@/assets/aboutPhotos/NadiEvent3.jpg"
import NadiEvent4 from "@/assets/aboutPhotos/NadiEvent4.jpg"
import NadiEvent5 from "@/assets/aboutPhotos/NadiEvent5.jpg"
import NadiEvent6 from "@/assets/aboutPhotos/NadiEvent6.jpg"
import NadiEvent7 from "@/assets/aboutPhotos/NadiEvent7.jpg"
import NadiEvent8 from "@/assets/aboutPhotos/NadiEvent8.jpg"
import NadiEvent9 from "@/assets/aboutPhotos/NadiEvent9.jpg"
import NadiEvent10 from "@/assets/aboutPhotos/NadiEvent10.jpg"
import NadiEvent11 from "@/assets/aboutPhotos/NadiEvent11.jpg"
import NadiEvent13 from "@/assets/aboutPhotos/NadiEvent13.jpg"
import NadiEvent14 from "@/assets/aboutPhotos/NadiEvent14.jpg"
import NadiEvent15 from "@/assets/aboutPhotos/NadiEvent15.jpg"

export function About() {
  const { t } = useLanguage()
  const photos = [
    NadiEvent1,
    NadiEvent2,
    NadiEvent3,
    NadiEvent4,
    NadiEvent5,
    NadiEvent6,
    NadiEvent7,
    NadiEvent8,
    NadiEvent9,
    NadiEvent10,
    NadiEvent11,
    NadiEvent13,
    NadiEvent14,
    NadiEvent15,
  ]

  return (
    <div
      id="about"
      className="flex min-h-svh flex-col items-center justify-center gap-10 bg-gradient-to-b from-white to-blue-100 px-4 pt-8 text-center sm:gap-8 sm:px-6 md:gap-10 md:py-8 lg:px-8"
    >
      {/* Title and description */}
      <div className="max-w-5xl w-full flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
        <SectionTitle className="text-[#2329a5]">{t("about.title")}</SectionTitle>
        <SectionSubtitle className="whitespace-pre-wrap text-[#454545] max-w-4xl">
          {t("about.intro")}
        </SectionSubtitle>
      </div>

      {/* Photo carousel */}
      <Carousel opts={{ loop: true }} className="w-full max-w-5xl py-16">
        <CarouselContent>
          {photos.map((photo, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="h-64 overflow-hidden rounded-lg shadow-md">
                <img
                  src={photo}
                  alt={`NADI Wellbeing event ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="rounded-full bg-white border-2 border-[#2329a5] text-[#2329a5] hover:bg-[#2329a5] hover:text-white hidden md:flex" />
        <CarouselNext className="rounded-full bg-white border-2 border-[#2329a5] text-[#2329a5] hover:bg-[#2329a5] hover:text-white hidden md:flex" />
      </Carousel>
    </div>
  )
}