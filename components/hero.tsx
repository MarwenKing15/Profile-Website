"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { AnimatedSection } from "@/components/animated-section"

export default function Hero() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center overflow-hidden relative z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <AnimatedSection animation="fadeUp" delay={0}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {t("hero.title")}
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={200}>
                <p className="text-xl sm:text-2xl text-blue-600 font-medium">{t("hero.subtitle")}</p>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={400}>
                <p className="text-lg text-gray-600 leading-relaxed">{t("hero.description")}</p>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fadeUp" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="slideLeft" delay={300} className="relative z-20">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="/assets/Profilbild.jpg"
                alt="Manel Bannouri - Professional Portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Company Logo - Higher z-index */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4 hidden lg:block hover:shadow-2xl transition-all duration-300 z-30 border border-gray-100">
              <a
                href="https://www.investinhuman.de"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:scale-110 transition-transform duration-300"
              >
                <img src="/assets/logo.png" alt="InvestinHuman Logo" className="h-12 w-auto" />
              </a>
            </div>

            {/* Floating elements - Higher z-index */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-4 hidden lg:block hover:shadow-2xl transition-all duration-300 z-30 border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{t("hero.available")}</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white rounded-lg shadow-xl p-4 hidden lg:block hover:shadow-2xl hover:bg-blue-700 transition-all duration-300 z-30">
              <div className="text-sm font-medium">{t("hero.languages")}</div>
              <div className="text-xs opacity-90">{t("hero.multilingual")}</div>
            </div>

            {/* Additional floating element for visual interest */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-xl p-3 hidden lg:block hover:shadow-2xl transition-all duration-300 z-30">
              <div className="text-xs font-medium">{t("hero.expert")}</div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse z-0"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-200 rounded-full opacity-20 animate-pulse z-0 animated-delay-1s"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse z-0 animated-delay-2s"></div>
    </section>
  )
}
