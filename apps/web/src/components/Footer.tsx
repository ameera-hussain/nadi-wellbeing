import { useLanguage } from "@/context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-blue-200 bg-blue-100 px-4 py-4 text-center sm:px-6 sm:py-6 md:px-8">
      <p className="text-xs text-[#454545] sm:text-sm">
        {t("footer.copyright")}
      </p>
    </footer>
  );
}