"use client"

import { useState } from "react"
import { TwoColumnSection } from "./TwoColumnSection"
import { SectionTitle } from "@workspace/ui/components/Typography"
import { useLanguage } from "@/context"
import { getTranslationValue } from "@/data/translations"
import teleConsultation from "@/assets/teleConsult.png"
import { UserPlus, ScanHeart, Calendar, Headset } from "lucide-react"

export function TeleHealth() {
  const { t, language } = useLanguage()
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const bookingStepsRaw = getTranslationValue(language, "telehealth.steps")
  const bookingSteps = Array.isArray(bookingStepsRaw) ? bookingStepsRaw : []

  return (
    <div id="telehealth">
      {/* Two Column Section - Image and Content */}
      <TwoColumnSection
        titleKey="telehealth.title"
        subtitleKey="telehealth.subtitle"
        imageSource={teleConsultation}
        imageAlt="TeleHealth"
        containerClassName="bg-gradient-to-b from-blue-100 to-white"
      />

      {/* Booking Steps Section */}
      <section className="flex flex-col items-center gap-8 bg-gradient-to-b from-white to-blue-100 px-4 py-12 text-center sm:gap-10 sm:px-6 md:gap-12 md:py-24 lg:px-8">
          <div className="max-w-6xl w-full mx-auto">
            <SectionTitle className="text-[#2329a5] mb-12">
              {t("telehealth.bookingTitle")}
            </SectionTitle>

            {bookingSteps && bookingSteps.length > 0 ? (
              <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-4">
                {bookingSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-0 w-full md:w-auto">
                    <div className="flex flex-col items-center gap-4 w-full md:w-auto">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                          hoveredStep === index
                            ? "bg-[#2329a5] text-white"
                            : "bg-gray-400 text-white"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div
                        onMouseEnter={() => setHoveredStep(index)}
                        onMouseLeave={() => setHoveredStep(null)}
                        className={`w-full md:w-[282px] h-[230px] p-6 rounded-lg border border-[#2329a5] transition-colors duration-300 cursor-pointer flex flex-col justify-center items-center gap-4 ${
                          hoveredStep === index
                            ? "bg-[#2329a5] text-white"
                            : "bg-gray-100 text-[#454545]"
                        }`}
                      >
                        <div className="text-current">
                          {index === 0 && <UserPlus size={32} />}
                          {index === 1 && <ScanHeart size={32} />}
                          {index === 2 && <Calendar size={32} />}
                          {index === 3 && <Headset size={32} />}
                        </div>
                        <h3 className="font-semibold text-xl text-center">{step.title}</h3>
                        <p className="text-md leading-relaxed text-center">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-[#454545]">
                <p>Loading booking steps...</p>
              </div>
            )}
          </div>
        </section>
      </div>
    )
  }