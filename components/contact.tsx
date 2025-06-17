"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Globe, Linkedin, Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { AnimatedSection } from "@/components/animated-section"

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "m.bannouri@investinhuman.de",
      href: "mailto:m.bannouri@investinhuman.de",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+49 176 31233484",
      href: "tel:+4917631233484",
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.investinhuman.de",
      href: "https://www.investinhuman.de",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Manel Bannouri",
      href: "https://linkedin.com/in/bannouri-manel-0751bb40",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t("contact.title")}</h2>
            <p className="text-lg text-gray-600">{t("contact.subtitle")}</p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <AnimatedSection key={index} animation="slideRight" delay={index * 100}>
                    <Card className="hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 group">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-teal-200 transition-colors duration-300">
                            <Icon className="w-5 h-5 text-teal-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">{info.label}</p>
                            <a
                              href={info.href}
                              className="text-gray-900 hover:text-teal-600 transition-colors duration-300"
                              target={info.href.startsWith("http") ? "_blank" : undefined}
                              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                )
              })}
            </div>

            {/* Professional Images Gallery */}
            <div className="space-y-4">
              <AnimatedSection animation="fadeIn" delay={600}>
                <Card className="hover:shadow-lg transition-all duration-500 group">
                  <CardContent className="p-6">
                    <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                      <img
                        src="/assets/International Speaker Slam Awards.jpg"
                        alt="Manel Bannouri - Professional Training Session"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <div className="grid grid-cols-2 gap-4">
                <AnimatedSection animation="slideRight" delay={800}>
                  <Card className="hover:shadow-lg transition-all duration-500 group">
                    <CardContent className="p-4">
                      <div className="w-full h-32 bg-gray-200 rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                        <img
                          src="/assets/Inter. Speaker Slam 1.jpeg"
                          alt="Manel Bannouri - International Conference"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="slideLeft" delay={1000}>
                  <Card className="hover:shadow-lg transition-all duration-500 group">
                    <CardContent className="p-4">
                      <div className="w-full h-32 bg-gray-200 rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                        <img
                          src="/assets/Foto International Speaker Slam.jpeg"
                          alt="Manel Bannouri - Business Meeting"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <AnimatedSection animation="slideLeft" delay={400}>
            <Card className="hover:shadow-lg transition-shadow duration-500">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">{t("contact.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("contact.name")}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("contact.email")}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full transition-all duration-300 focus:scale-105"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t("contact.subject")}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white transform hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        {t("contact.sending")}
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t("contact.send")}
                      </>
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <p className="text-teal-600 font-semibold mt-2">{t("contact.successMessage")}</p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-600 font-semibold mt-2">{t("contact.errorMessage")}</p>
                  )}
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
