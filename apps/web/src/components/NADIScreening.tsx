import { useEffect, useRef, useState } from "react";
import { SectionTitle, SectionSubtitle } from "@workspace/ui/components/Typography"
import { useLanguage } from "@/context"
import { TwoColumnSection } from "./TwoColumnSection"
import CommunitiesHero from "@/assets/CommunitiesHero.png"

type StatCardProps = {
  end: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

function StatCard({
  end,
  label,
  prefix = "",
  suffix = "",
  decimals = 0,
}: StatCardProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) return;

        setHasAnimated(true);

        const duration = 2000; // 2 seconds
        const startTime = performance.now();

        const animate = (time: number) => {
          const progress = Math.min((time - startTime) / duration, 1);

          // easeOutCubic
          const eased = 1 - Math.pow(1 - progress, 3);

          setCount(end * eased);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  const display =
    decimals > 0
      ? count.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : Math.round(count).toLocaleString();

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center gap-2 sm:gap-3"
    >
      <div className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
        {prefix}
        {display}
        {suffix}
      </div>

      <div className="text-center text-xs font-semibold uppercase tracking-[0.1em] text-white sm:text-sm md:tracking-[0.2em]">
        {label}
      </div>
    </div>
  );
}

export function NadiScreening() {
  const { t } = useLanguage()

  return (
    <div id="screening">
      {/* Two Column Section - Heading and Image */}
      <TwoColumnSection
        titleKey="screening.title"
        subtitleKey="screening.subtitle"
        imageSource={CommunitiesHero}
        imageAlt="NADI Screening"
        containerClassName="bg-gradient-to-b from-white to-blue-100"
      >
        <div className="space-y-2">
          <ul className="space-y-2">
            <li className="flex items-start gap-3 text-[#454545] sm:text-lg md:text-xl">
              <span className="text-[#2329a5] font-bold">•</span>
              <span>{t("screening.screeningTypes.bloodPressure")}</span>
            </li>
            <li className="flex items-start gap-3 text-[#454545] sm:text-lg md:text-xl">
              <span className="text-[#2329a5] font-bold">•</span>
              <span>{t("screening.screeningTypes.glucose")}</span>
            </li>
            <li className="flex items-start gap-3 text-[#454545] sm:text-lg md:text-xl">
              <span className="text-[#2329a5] font-bold">•</span>
              <span>{t("screening.screeningTypes.bmi")}</span>
            </li>
            <li className="flex items-start gap-3 text-[#454545] sm:text-lg md:text-xl">
              <span className="text-[#2329a5] font-bold">•</span>
              <span>{t("screening.screeningTypes.digitalHealth")}</span>
            </li>
          </ul>
          <div className="flex items-start pt-5 text-[#454545] sm:text-lg md:text-xl">
            {t("screening.subtitleCont")}
            </div>
        </div>
      </TwoColumnSection>

      {/* Statistics Section */}
      <section className="flex flex-col items-center gap-8 bg-gradient-to-b from-blue-100 to-white px-4 py-12 text-center sm:gap-10 sm:px-6 md:gap-12 md:py-24 lg:px-8">
        <div className="w-full rounded-2xl bg-[#2329a5] px-4 py-6 shadow-md sm:rounded-3xl sm:px-6 sm:py-8 md:px-8 md:py-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-5 md:gap-8">
            <StatCard
              end={1098}
              label={t("screening.communityCentres")}
            />
            <StatCard
              end={147081}
              label={t("screening.screeningsConducted")}
              prefix="> "
            />

            <StatCard
              end={12089}
              label={t("screening.medicalConsultations")}
              prefix="> "
            />

            <StatCard
              end={97022}
              label={t("screening.screeningParticipants")}
              prefix="> "
            />
            <StatCard
              end={34.03}
              label={t("screening.repeatScreenings")}
              prefix="> "
              suffix="%"
              decimals={2}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center gap-8 bg-gradient-to-b from-white to-blue-100 px-4 py-12 text-center sm:gap-10 sm:px-6 md:gap-12 md:py-24 lg:px-8">
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          <SectionTitle className="text-[#2329a5] mx-8 md:mx-20 lg:mx-40">
            {t("screening.cta")}
          </SectionTitle>

          <SectionSubtitle className="text-[#454545] text-center mx-auto">
            {t("screening.ctaDescription")}
          </SectionSubtitle>

          <button className="rounded-2xl bg-[#2329a5] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform duration-300 hover:scale-105 hover:bg-indigo-500 sm:px-8 sm:py-4 md:text-base">
            <a href="https://www.nadi.my/lokasi-nadi" target="_blank" rel="noopener noreferrer">{t("screening.locateCenter")}</a>
          </button>
        </div>
      </section>
    </div>
  );
}