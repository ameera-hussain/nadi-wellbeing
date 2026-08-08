import type { ReactNode } from "react";
import { SectionTitle, SectionSubtitle } from "@workspace/ui/components/Typography";
import { useLanguage } from "@/context";

type TwoColumnSectionProps = {
  titleKey?: string;
  subtitleKey: string;
  imageSource: string;
  imageAlt?: string;
  children?: ReactNode;
  containerClassName?: string;
  imagePosition?: "left" | "right";
  sectionId?: string;
};

export function TwoColumnSection({
  titleKey,
  subtitleKey,
  imageSource,
  imageAlt = "Section image",
  children,
  containerClassName = "",
  imagePosition = "right",
  sectionId,
}: TwoColumnSectionProps) {
  const { t } = useLanguage();

  const isImageLeft = imagePosition === "left";

  return (
    <section id={sectionId} className={`py-16 md:py-24 px-4 md:px-8 ${containerClassName}`}>
      <div className="mx-auto max-w-7xl">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${isImageLeft ? "md:grid-flow-col md:grid-cols-2 md:auto-cols-fr" : ""}`}>
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-6">
            {titleKey && <SectionTitle className="text-[#2329a5]">{t(titleKey)}</SectionTitle>}
            <SectionSubtitle className="text-[#454545]">{t(subtitleKey)}</SectionSubtitle>
            {children}
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center">
            <img
              src={imageSource}
              alt={imageAlt}
              className="w-full h-auto rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
