"use client"

import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/assets/logo.png" alt="InvestinHuman Logo" className="h-10 w-auto" />
              <h3 className="text-xl font-bold">{t("footer.name")}</h3>
            </div>
            <p className="text-gray-300 mb-4">{t("footer.description")}</p>
            <p className="text-sm text-gray-400">{t("footer.languages")}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="space-y-2 text-gray-300">
              <p>m.bannouri@investinhuman.de</p>
              <p>+49 176 31233484</p>
              <a
                href="https://www.investinhuman.de"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors"
              >
                www.investinhuman.de
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">InvestinHuman</h4>
            <p className="text-gray-300 mb-4">
              {t("footer.companydescription")}
            </p>
            <a
              href="https://www.investinhuman.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
            >
              {t("footer.link")}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {t("footer.name")}. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
