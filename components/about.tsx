"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { AnimatedSection } from "@/components/animated-section"

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-32 bg-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedSection animation="fadeUp">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{t("about.title")}</h2>
            </AnimatedSection>

            <AnimatedSection animation="scale" delay={200}>
              <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow duration-500">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-blue-600 mx-auto mb-4 animate-pulse" />
                  <blockquote className="text-xl sm:text-2xl font-medium text-gray-800 italic text-center">
                    {t("about.quote")}
                  </blockquote>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <AnimatedSection animation="slideRight" delay={400}>
                <p className="text-lg text-gray-600 leading-relaxed">{t("about.description")}</p>
              </AnimatedSection>

              <AnimatedSection animation="slideRight" delay={600}>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <a
                    href="https://www.investinhuman.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
                  >
                    <img src="/assets/logo.png" alt="InvestinHuman Logo" className="h-8 w-auto" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">InvestinHuman</div>
                      <div className="text-xs text-gray-600">{t("about.position")}</div>
                      {/* <div className="text-xs text-gray-600">Founder & CEO since 2015</div> */}
                    </div>
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideRight" delay={800}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                    <div className="text-2xl font-bold text-blue-600 counter" data-target="10">
                      10+
                    </div>
                    <div className="text-sm text-gray-600">{t("about.experience")}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                    <div className="text-2xl font-bold text-blue-600 counter" data-target="4">
                      4
                    </div>
                    <div className="text-sm text-gray-600">{t("about.languages")}</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="slideLeft" delay={600}>
              <div className="relative group">
                <div className="w-full h-80 bg-gray-200 rounded-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500 shadow-lg">
                  <img
                    src="/assets/Foto International Speaker Slam.jpeg"
                    alt="Manel Bannouri - Professional Consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-2xl transition-colors duration-500"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
