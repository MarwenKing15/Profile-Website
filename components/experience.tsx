"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Award } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { AnimatedSection } from "@/components/animated-section"

export default function Experience() {
  const { t } = useLanguage()

  const education = [
    {
      degree: t("experience.education.0.degree"),
      institution: t("experience.education.0.institution"),
      year: t("experience.education.0.year"),
    },
    {
      degree: t("experience.education.1.degree"),
      institution: t("experience.education.1.institution"),
      year: t("experience.education.1.year"),
    },
    {
      degree: t("experience.education.2.degree"),
      institution: t("experience.education.2.institution"),
      year: t("experience.education.2.year"),
    },
  ]

  const experience = [
    {
      position: t("experience.work.0.position"),
      company: t("experience.work.0.company"),
      period: t("experience.work.0.period"),
    },
    {
      position: t("experience.work.1.position"),
      company: t("experience.work.1.company"),
      period: t("experience.work.1.period"),
    },
    {
      position: t("experience.work.2.position"),
      company: t("experience.work.2.company"),
      period: t("experience.work.2.period"),
    },
  ]

  const skills = [
    t("experience.skills.0"),
    t("experience.skills.1"),
    t("experience.skills.2"),
    t("experience.skills.3"),
    t("experience.skills.4"),
    t("experience.skills.5"),
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t("experience.title")}</h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <AnimatedSection animation="slideRight" delay={200}>
            <Card className="hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-gray-900">
                  <GraduationCap className="w-6 h-6 mr-2 text-teal-600" />
                  {t("experience.education")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-teal-200 pl-4 hover:border-teal-400 transition-colors duration-300"
                  >
                    <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Professional Experience */}
          <AnimatedSection animation="fadeUp" delay={400}>
            <Card className="hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-gray-900">
                  <Briefcase className="w-6 h-6 mr-2 text-slate-600" />
                  {t("experience.work")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-slate-200 pl-4 hover:border-slate-400 transition-colors duration-300"
                  >
                    <h4 className="font-semibold text-gray-900">{exp.position}</h4>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Skills */}
          <AnimatedSection animation="slideLeft" delay={600}>
            <Card className="hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-gray-900">
                  <Award className="w-6 h-6 mr-2 text-slate-700" />
                  {t("experience.skills")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-sm hover:bg-teal-100 hover:text-teal-800 transition-colors duration-300 cursor-default"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
