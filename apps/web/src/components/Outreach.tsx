import { TwoColumnSection } from "./TwoColumnSection"

export function Outreach() {
  return (
    <TwoColumnSection
      sectionId="outreach"
      titleKey="outreach.title"
      subtitleKey="outreach.subtitle"
      imageSource="https://placehold.co/800x600"
      imageAlt="Outreach"
      imagePosition="left"
      containerClassName="bg-gradient-to-b from-indigo-100 to-indigo-50"
    />
  )
}
