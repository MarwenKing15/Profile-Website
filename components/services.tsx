"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Globe, Users, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { AnimatedSection } from "@/components/animated-section"

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Building2,
      title: t("services.companies"),
      color: "bg-teal-500",
      items: [
        t("services.companies.desc1"),
        t("services.companies.desc2"),
        t("services.companies.desc3"),
        t("services.companies.desc4"),
        t("services.companies.desc5"),
      ],
    },
    {
      icon: Globe,
      title: t("services.organizations"),
      color: "bg-slate-500",
      items: [
        t("services.organizations.desc1"),
        t("services.organizations.desc2"),
        t("services.organizations.desc3"),
        t("services.organizations.desc4"),
        t("services.organizations.desc5"),
      ],
    },
    {
      icon: Users,
      title: t("services.individuals"),
      color: "bg-slate-700",
      items: [
        t("services.individuals.desc1"),
        t("services.individuals.desc2"),
        t("services.individuals.desc3"),
        t("services.individuals.desc4"),
        t("services.individuals.desc5"),
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t("services.title")}</h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            // Determine the title hover color based on icon color:
            const titleHoverColor =
              service.color === "bg-teal-500"
                ? "group-hover:text-teal-600"
                : service.color === "bg-slate-500"
                  ? "group-hover:text-slate-600"
                  : "group-hover:text-slate-800"

            // Determine the CheckCircle icon color:
            const checkCircleColor =
              service.color === "bg-teal-500"
                ? "text-teal-500"
                : service.color === "bg-slate-500"
                  ? "text-slate-500"
                  : "text-slate-700"

            return (
              <AnimatedSection key={index} animation="fadeUp" delay={index * 200} className="h-full">
                <Card className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full group border-teal-100">
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle
                      className={`text-xl font-semibold text-gray-900 ${titleHoverColor} transition-colors duration-300`}
                    >
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3 group/item">
                          <CheckCircle
                            className={`${checkCircleColor} w-5 h-5 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200`}
                          />
                          <span className="text-gray-600 leading-relaxed group-hover/item:text-gray-800 transition-colors duration-200">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
