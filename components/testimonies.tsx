"use client"
import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { AnimatedSection } from "@/components/animated-section"


export default function Testimonies() {
  const { t } = useLanguage()

  const testimonies = [
    {
      name: "Oliver Köhl",
      text: t("testimonials.test1"),
      rating: 5,
    },
    // {
    //   name: "Pegasuscoaching",
    //   text: "Manel Bannouri bringt auf beeindruckende Weise zusammen, was in unserer Arbeitswelt oft noch getrennt gedacht wird: Fachkräftesicherung und kulturelles Verstehen. Ihre Expertise im interkulturellen Kontext schafft Brücken zwischen Menschen und Systemen.",
    //   rating: 5,
    // },
    {
      name: "Jörg Heider",
      text: t("testimonials.test2"),
      rating: 5,
    },
    {
      name: "Julia Burkhardt",
      text: t("testimonials.test3"),
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t("testimonials.title")}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("testimonials.subtitle")}</p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={200} className="mt-6">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900">4.99/5</span>
              <span className="ml-2 text-gray-600">({t("testimonials.reviewCount")})</span>
            </div>
            <div className="mt-2">
              <a
                href="https://www.provenexpert.com/de-de/manel-bannouri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 transition-colors duration-300 text-sm font-medium"
              >
                ProvenExpert.com
              </a>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonies.map((testimonial, index) => (
            <AnimatedSection key={index} animation="fadeUp" delay={300 + index * 200}>
              <Card className="h-full hover:shadow-lg transition-all duration-500 group overflow-hidden border-teal-100">
                <CardContent className="p-6 relative">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-teal-100 group-hover:text-teal-200 transition-colors duration-300" />
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 relative z-10">{testimonial.text}</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeUp" delay={800} className="mt-12 text-center">
          <a
            href="https://www.provenexpert.com/de-de/manel-bannouri/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors duration-300"
          >
            {t("testimonials.viewAll")} →
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}

