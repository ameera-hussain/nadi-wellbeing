import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@workspace/ui/components/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@workspace/ui/components/avatar";
import { SectionSubtitle, SectionTitle } from "@workspace/ui/components/Typography"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel";
import { useLanguage } from "@/context/useLanguage";
import { getTranslationValue } from "@/data/translations";

type Testimonial = {
  title: string;
  quote: string;
  name: string;
  age: number;
  role: string;
  image?: string;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  const { t, language } = useLanguage();
  const testimonialsData = getTranslationValue(language, "healthAdvocacy.testimonialsData") as Testimonial[] || [];
    
  return (
    <div id="testimonials" className="flex flex-col items-center gap-8 bg-gradient-to-b from-blue-100 to-white px-4 py-8 text-center sm:gap-10 sm:px-6 md:gap-16 md:py-16 lg:px-8">
    <div className="flex w-full max-w-6xl flex-col items-center gap-6 md:gap-8">
        <div className="flex max-w-6xl flex-col items-center gap-2 sm:gap-3">
          <SectionTitle className="text-[#2329a5]">
            {t("healthAdvocacy.testimonials")}
          </SectionTitle>
          <SectionSubtitle className="text-[#454545]">
            {t("healthAdvocacy.testimonialsDesc")}
          </SectionSubtitle>
        </div>

        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4 py-7">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <Card className={`flex flex-col h-full text-left rounded-2xl`}>
                  <CardContent className="flex flex-col flex-1 p-4 sm:p-5 md:p-6">
                    <div className="mb-3 sm:mb-4">
                      <h3 className="font-semibold text-sm sm:text-base text-[#2329a5] leading-snug">
                        {testimonial.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#454545] mb-2 sm:mb-3 flex-1">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                  <CardHeader className="flex flex-row items-center gap-2 sm:gap-3 pt-2 sm:pt-3 pb-4 sm:pb-5 px-4 sm:px-5 md:px-6">
                    <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="text-xs sm:text-sm">
                        {getInitials(testimonial.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col min-w-0">
                      <CardTitle className="text-xs sm:text-sm truncate">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-xs truncate">
                        {testimonial.age} • {testimonial.role}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="rounded-full bg-white border-2 border-[#2329a5] text-[#2329a5] hover:bg-[#2329a5] hover:text-white hidden md:flex" />
          <CarouselNext className="rounded-full bg-white border-2 border-[#2329a5] text-[#2329a5] hover:bg-[#2329a5] hover:text-white hidden md:flex" />
        </Carousel>
      </div>
    </div>
    )
}