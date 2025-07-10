"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "de" | "fr" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.services": "Services",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.testimonies": "Testimonials",

    // Hero
    "hero.title": "Manel Bannouri",
    "hero.subtitle": "Intercultural strategist. Expert in international recruiting and global pathways",
    "hero.description":
      "I speak about what international collaboration truly needs: understanding. connection. responsibility.",
    "hero.cta": "Get in Touch",

    // Hero floating elements
    "hero.available": "Available for consultation",
    "hero.languages": "4+ Languages",
    "hero.multilingual": "Multilingual Expert",
    "hero.expert": "Expert Consultant",

    // About
    "about.title": "About Me",
    "about.quote": '"Talent acquisition is not a recruitment problem – it is a cultural challenge."',
    "about.description":
      "With a German-Tunisian multicultural background and academic journey through Heidelberg and Strasbourg, I have developed into a sought-after consultant for companies and international professionals. Only through cultural understanding can sustainable integration and global competitiveness succeed.",
    "about.position": "Founder & CEO at InvestinHuman since 2015",
    "about.experience": "Years of Experience",
    "about.languages": "Languages",

    // Services
    "services.title": "My Services",
    "services.viewDetails": "View Details",
    "services.companies": "For Companies",
    "services.companies.name1": "Market Entry & Expansion Strategies",
    "services.companies.name2": "International Talent Acquisition & Headhunting",
    "services.companies.name3": "Intercultural Integration Programs",
    "services.companies.name4": "Global Deployment Strategies",
    "services.companies.name5": "Intercultural Competency Training & Business Etiquette",
    "services.companies.name6": "International HR Consulting",
    "services.companies.desc1": "Market entry & expansion strategies: Strategic support for entering new markets considering cultural specifics and etiquette",
    "services.companies.desc2": "International talent acquisition & headhunting: Targeted sourcing of global talent with interculturally sensitive approach",
    "services.companies.desc3": "Intercultural integration programs: Sustainable integration of international employees - incl. business etiquette training and cultural workplace behavior",
    "services.companies.desc4": "Global deployment strategies: Preparation for international assignments with focus on intercultural communication and local customs",
    "services.companies.desc5": "Intercultural competency training & business etiquette: Training for teams and executives on international customs, dress codes, meeting culture and behavior in global business situations",
    "services.companies.desc6": "International HR consulting: Optimization of global HR processes incorporating cultural etiquette and protocols",
    "services.organizations": "For Organizations",
    "services.organizations.name1": "Intercultural Perspectives for Global Expansion",
    "services.organizations.name2": "Transformation Consulting in Intercultural Context",
    "services.organizations.name3": "Global Team Building Workshops",
    "services.organizations.name4": "Cultural Risk Analyses",
    "services.organizations.name5": "International Protocol & Business Etiquette Training",
    "services.organizations.desc1": "Intercultural perspectives for global expansion: Consulting on culturally successful partnerships, including etiquette in international negotiations",
    "services.organizations.desc2": "Transformation consulting in intercultural context: Culture and etiquette-conscious design of change processes",
    "services.organizations.desc3": "Global team building workshops: Building intercultural competence in teams incl. etiquette in communication, conflict resolution and virtual collaboration",
    "services.organizations.desc4": "Cultural risk analyses: Identification of potential misunderstandings - also in handling formal and informal business conventions",
    "services.organizations.desc5": "International protocol & business etiquette training: Tailored training for confident appearance at official events, delegations, events or diplomatic environments",
    "services.individuals": "For Individuals",
    "services.individuals.name1": "Expat Settlement Support",
    "services.individuals.name2": "Career Coaching & Reorientation",
    "services.individuals.name3": "Cultural Adaptation Coaching",
    "services.individuals.name4": "International Partnership Consulting",
    "services.individuals.name5": "Personal Branding for Global Visibility",
    "services.individuals.desc1": "Expat settlement support: Personal orientation assistance - including introduction to local business etiquette",
    "services.individuals.desc2": "Career coaching & reorientation: Intercultural self-marketing and confident appearance in international professional life",
    "services.individuals.desc3": "Cultural adaptation coaching: Support with settling in - including customs, greetings, body language and clothing in the target country",
    "services.individuals.desc4": "International partnership consulting: Cultural communication & etiquette in mixed private and professional relationships",
    "services.individuals.desc5": "Personal branding for global visibility: Development of authentic, cross-cultural impact - including appearance & behavior",


    // Testimonials
    "testimonials.title": "Client Testimonials",
    "testimonials.subtitle": "What clients say about working with me",
    "testimonials.reviewCount": "27 reviews",
    "testimonials.viewAll": "View all testimonials",

    "testimonials.test1": "Ms. Bannouri passionately conveyed her message of connecting cultures at the congress. I took away valuable insights and inspiration, and I look forward to further collaboration.",
    "testimonials.test2": "I had the pleasure of meeting Manel as a dedicated, highly competent, and deeply humane bridge-builder. What she has built with InvestInHuman is a model for the future.",
    "testimonials.test3": "Wonderful personality and inspiring talk, many thanks.",

    // Experience
    "experience.title": "Experience & Education",
    "experience.education": "Education",
    "experience.work": "Professional Experience",
    "experience.skills": "Core Competencies",

    // Experience (detailed for translation)
    "experience.education.0.degree": "Master Langues et Interculturalité",
    "experience.education.0.institution": "Université de Strasbourg",
    "experience.education.0.year": "2014",
    "experience.education.1.degree": "Bachelor Politikwissenschaft",
    "experience.education.1.institution": "Universität Heidelberg",
    "experience.education.1.year": "2012",
    "experience.education.2.degree": "European School of Protocol",
    "experience.education.2.institution": "Additional Training",
    "experience.education.2.year": "2015",
    "experience.work.0.position": "Founder & CEO",
    "experience.work.0.company": "InvestinHuman",
    "experience.work.0.period": "2015 - Present",
    "experience.work.1.position": "Project Manager",
    "experience.work.1.company": "GSM Training & Integration",
    "experience.work.1.period": "2016 - 2018",
    "experience.work.2.position": "Lecturer - Intercultural Communication",
    "experience.work.2.company": "Universities of Freiburg & Dresden",
    "experience.work.2.period": "2017 - 2019",
    "experience.skills.0": "International Talent Acquisition",
    "experience.skills.1": "Intercultural Coaching & Training",
    "experience.skills.2": "Business Etiquette & Protocol",
    "experience.skills.3": "Project Management",
    "experience.skills.4": "Expat Consulting",
    "experience.skills.5": "Multilingual Communication",

    // Contact
    "contact.title": "Contact Me",
    "contact.subtitle": "Ready to discuss your intercultural business needs?",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.successMessage": "Thank you! Your message has been sent successfully.",
    "contact.errorMessage": "Sorry, there was an error sending your message. Please try again.",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.languages": "Languages: Arabic, German, French, English",
    "footer.name": "Manel Bannouri",
    "footer.description": "Expert in International Recruiting & Intercultural Communication",
    "footer.companydescription":
      "Bridging cultures and connecting international talent with global opportunities.",
    "footer.link": "Visit Company Website →",
    "footer.contact": "Contact",
  },
  de: {
    // Navigation
    "nav.about": "Über mich",
    "nav.services": "Leistungen",
    "nav.experience": "Erfahrung",
    "nav.contact": "Kontakt",
    "nav.testimonies": "Kundenstimmen",

    // Hero
    "hero.title": "Manel Bannouri",
    "hero.subtitle": "Interkulturelle Strategin. Expertin für internationales Recruiting und globale Wege.",
    "hero.description":
      "Ich spreche über das, was internationale Zusammenarbeit wirklich braucht: Verständnis. Verbindung. Verantwortung.",
    "hero.cta": "Kontakt aufnehmen",

    // Hero floating elements
    "hero.available": "Verfügbar für Beratung",
    "hero.languages": "4+ Sprachen",
    "hero.multilingual": "Mehrsprachige Expertin",
    "hero.expert": "Expertin für Beratung.",

    // About
    "about.title": "Über mich",
    "about.quote": '"Fachkräftesicherung ist kein Rekrutierungsproblem – sie ist eine kulturelle Herausforderung."',
    "about.description":
      "Mit einem deutsch-tunesischen multikulturellen Hintergrund und einem akademischen Weg über Heidelberg und Straßburg habe ich mich zur gefragten Beraterin für Unternehmen und internationale Fachkräfte entwickelt. Nur durch kulturelles Verständnis gelingt nachhaltige Integration und globale Wettbewerbsfähigkeit.",
    "about.position": "Gründerin & Geschäftsführerin bei InvestinHuman seit 2015",
    "about.experience": "Jahre Erfahrung",
    "about.languages": "Sprachen",

    // Services
    "services.title": "Meine Leistungen",
    "services.viewDetails": "Details anzeigen",
    "services.companies": "Für Unternehmen",
    "services.companies.name1": "Markteintritts- & Expansionsstrategien",
    "services.companies.name2": "Internationale Fachkräftegewinnung & Headhunting",
    "services.companies.name3": "Interkulturelle Integrationsprogramme",
    "services.companies.name4": "Strategien für globale Entsendungen",
    "services.companies.name5": "Interkulturelles Kompetenztraining & Business-Etikette",
    "services.companies.name6": "Internationale HR‑Beratung",
    "services.companies.desc1": "Markteintritts- & Expansionsstrategien: Strategische Begleitung beim Eintritt in neue Märkte unter Berücksichtigung kultureller Besonderheiten und Etikette",
    "services.companies.desc2": "Internationale Fachkräftegewinnung & Headhunting: Zielgerichtetes Sourcing globaler Talente mit interkulturell sensibler Ansprache",
    "services.companies.desc3": "Interkulturelle Integrationsprogramme: Nachhaltige Einbindung internationaler Mitarbeitender – inkl. Training in Business-Etikette und kulturellem Verhalten am Arbeitsplatz",
    "services.companies.desc4": "Strategien für globale Entsendungen: Vorbereitung auf Auslandsaufenthalte mit Fokus auf interkulturelle Kommunikation und lokale Umgangsformen",
    "services.companies.desc5": "Interkulturelles Kompetenztraining & Business-Etikette: Schulungen für Teams und Führungskräfte zu internationalen Umgangsformen, Dresscodes, Meetingkultur und Verhalten in globalen Geschäftssituationen",
    "services.companies.desc6": "Internationale HR‑Beratung: Optimierung globaler HR‑Prozesse unter Einbezug kultureller Etikette und Protokolle",
    "services.organizations": "Für Organisationen",
    "services.organizations.name1": "Interkulturelle Perspektiven für globale Expansion",
    "services.organizations.name2": "Transformationsberatung im interkulturellen Kontext",
    "services.organizations.name3": "Workshops für globales Teambuilding",
    "services.organizations.name4": "Kulturelle Risikoanalysen",
    "services.organizations.name5": "Training in internationalem Protokoll & Business-Etikette",
    "services.organizations.desc1": "Interkulturelle Perspektiven für globale Expansion: Beratung zu kulturell erfolgreichen Partnerschaften, inklusive Etikette in internationalen Verhandlungen",
    "services.organizations.desc2": "Transformationsberatung im interkulturellen Kontext: Kultur- und etikettebewusste Gestaltung von Veränderungsprozessen",
    "services.organizations.desc3": "Workshops für globales Teambuilding: Aufbau interkultureller Kompetenz in Teams inkl. Etikette in Kommunikation, Konfliktlösung und virtueller Zusammenarbeit",
    "services.organizations.desc4": "Kulturelle Risikoanalysen: Identifikation potenzieller Missverständnisse – auch im Umgang mit formellen und informellen Business-Konventionen",
    "services.organizations.desc5": "Training in internationalem Protokoll & Business-Etikette: Maßgeschneiderte Trainings für sicheres Auftreten bei offiziellen Anlässen, Delegationen, Events oder diplomatischem Umfeld",
    "services.individuals": "Für Privatpersonen",
    "services.individuals.name1": "Expat‑Ansiedlungsbegleitung",
    "services.individuals.name2": "Karriere‑Coaching & Neuorientierung",
    "services.individuals.name3": "Kulturelles Anpassungscoaching",
    "services.individuals.name4": "Beratung zu internationalen Partnerschaften",
    "services.individuals.name5": "Personal Branding für globale Sichtbarkeit",
    "services.individuals.desc1": "Expat‑Ansiedlungsbegleitung: Persönliche Orientierungshilfe – inklusive Einführung in die lokale Business-Etikette",
    "services.individuals.desc2": "Karriere‑Coaching & Neuorientierung: Intercultural self-marketing and confident appearance in international professional life",
    "services.individuals.desc3": "Kulturelles Anpassungscoaching: Unterstützung beim Einleben – inklusive Umgangsformen, Begrüßung, Körpersprache und Kleidung im Zielland",
    "services.individuals.desc4": "Beratung zu internationalen Partnerschaften: Kulturelle Kommunikation & Etikette in gemischten privaten und beruflichen Beziehungen",
    "services.individuals.desc5": "Personal Branding für globale Sichtbarkeit: Entwicklung einer authentischen, kulturübergreifenden Wirkung – inklusive Auftritt & Verhalten",


    // Testimonials
    "testimonials.title": "Kundenstimmen",
    "testimonials.subtitle": "Was Kunden über die Zusammenarbeit mit mir sagen",
    "testimonials.reviewCount": "27 Bewertungen",
    "testimonials.viewAll": "Alle Bewertungen ansehen",
    "testimonials.test1": "Ihre Botschaft, Kulturen miteinander zu verbinden, hat Frau Bannouri auf dem Kongress sehr leidenschaftlich vertreten und herausgearbeitet. Ich konnte gute Impulse und Anregungen für mich mitnehmen und freue mich auf die weitere Zusammenarbeit.",
    "testimonials.test2": "Ich durfte Manel als engagierte, hochkompetente und zutiefst menschliche Brückenbauerin erleben. Was sie mit InvestInHuman aufgebaut hat, ist ein Zukunftsmodell.",
    "testimonials.test3": "Tolle Persönlichkeit und inspirierender Vortrag, Lieben Dank.",

    // Experience
    "experience.title": "Erfahrung & Ausbildung",
    "experience.education": "Ausbildung",
    "experience.work": "Berufserfahrung",
    "experience.skills": "Kernkompetenzen",

    "experience.education.0.degree": "Master Langues et Interculturalité",
    "experience.education.0.institution": "Université de Strasbourg",
    "experience.education.0.year": "2014",
    "experience.education.1.degree": "Bachelor Politikwissenschaft",
    "experience.education.1.institution": "Universität Heidelberg",
    "experience.education.1.year": "2012",
    "experience.education.2.degree": "European School of Protocol",
    "experience.education.2.institution": "Zusätzliche Ausbildung",
    "experience.education.2.year": "2015",

    "experience.work.0.position": "Gründerin & Geschäftsführerin",
    "experience.work.0.company": "InvestinHuman",
    "experience.work.0.period": "2015 - heute",
    "experience.work.1.position": "Projektleiterin",
    "experience.work.1.company": "GSM Training & Integration",
    "experience.work.1.period": "2016 - 2018",
    "experience.work.2.position": "Dozentin – Interkulturelle Kommunikation",
    "experience.work.2.company": "Universitäten Freiburg & Dresden",
    "experience.work.2.period": "2017 - 2019",

    "experience.skills.0": "Internationale Fachkräftegewinnung",
    "experience.skills.1": "Interkulturelles Coaching & Training",
    "experience.skills.2": "Business-Etikette & Protokoll",
    "experience.skills.3": "Projektmanagement",
    "experience.skills.4": "Expat-Beratung",
    "experience.skills.5": "Mehrsprachige Kommunikation",


    // Contact
    "contact.title": "Kontakt",
    "contact.subtitle": "Bereit, Ihre interkulturellen Geschäftsanforderungen zu besprechen?",
    "contact.name": "Vollständiger Name",
    "contact.email": "E-Mail-Adresse",
    "contact.subject": "Betreff",
    "contact.message": "Nachricht",
    "contact.send": "Nachricht senden",
    "contact.sending": "Wird gesendet...",
    "contact.successMessage": "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.",
    "contact.errorMessage":
      "Entschuldigung, beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",

    // Footer
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.languages": "Sprachen: Arabisch, Deutsch, Französisch, Englisch",
    "footer.name": "Manel Bannouri",
    "footer.description": "Expertin für internationales Recruiting & interkulturelle Kommunikation",
    "footer.companydescription":
      "Kulturen verbinden und internationale Talente mit globalen Chancen vernetzen.",
    "footer.link": "Unternehmenswebsite besuchen →",
    "footer.contact": "Kontakt",
  },
  fr: {
    // Navigation
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.experience": "Expérience",
    "nav.contact": "Contact",
    "nav.testimonies": "Témoignages",

    // Hero
    "hero.title": "Manel Bannouri",
    "hero.subtitle": "Stratège interculturelle. Experte en recrutement international et en parcours mondiaux",
    "hero.description":
      "Je parle de ce dont la collaboration internationale a vraiment besoin : compréhension. connexion. responsabilité.",
    "hero.cta": "Prendre contact",

    // Hero floating elements
    "hero.available": "Disponible pour consultation",
    "hero.languages": "4+ langues",
    "hero.multilingual": "Experte multilingue",
    "hero.expert": "Consultante experte.",

    // About
    "about.title": "À propos de moi",
    "about.quote": "\"La sécurisation des compétences n'est pas un problème de recrutement – c'est un défi culturel.\"",
    "about.description":
      "Avec un background multiculturel germano-tunisien et un parcours académique à travers Heidelberg et Strasbourg, je suis devenue une consultante recherchée pour les entreprises et les professionnels internationaux. Seule la compréhension culturelle permet une intégration durable et une compétitivité mondiale.",
    "about.position": "Fondatrice & PDG chez InvestinHuman depuis 2015",
    "about.experience": "Années d'expérience",
    "about.languages": "Langues",

    // Services
    "services.title": "Mes Services",
    "services.viewDetails": "Voir les détails",
    "services.companies": "Pour les Entreprises",
    "services.companies.name1": "Stratégies d'entrée et d'expansion sur le marché",
    "services.companies.name2": "Acquisition internationale de talents & chasse de têtes",
    "services.companies.name3": "Programmes d'intégration interculturelle",
    "services.companies.name4": "Stratégies de déploiement mondial",
    "services.companies.name5": "Formation aux compétences interculturelles & étiquette commerciale",
    "services.companies.name6": "Conseil RH international",
    "services.companies.desc1": "Stratégies d'entrée et d'expansion sur le marché : Accompagnement stratégique pour l'entrée sur de nouveaux marchés en tenant compte des spécificités culturelles et de l'étiquette",
    "services.companies.desc2": "Acquisition internationale de talents & chasse de têtes : Sourcing ciblé de talents mondiaux avec une approche interculturelle sensible",
    "services.companies.desc3": "Programmes d'intégration interculturelle : Intégration durable des employés internationaux – incl. formation à l'étiquette commerciale et au comportement culturel sur le lieu de travail",
    "services.companies.desc4": "Stratégies de déploiement mondial : Préparation aux missions à l'étranger avec focus sur la communication interculturelle et les coutumes locales",
    "services.companies.desc5": "Formation aux compétences interculturelles & étiquette commerciale : Formations pour équipes et dirigeants sur les usages internationaux, codes vestimentaires, culture de réunion et comportement dans les situations commerciales mondiales",
    "services.companies.desc6": "Conseil RH international : Optimisation des processus RH mondiaux en intégrant l'étiquette culturelle et les protocoles",
    "services.organizations": "Pour les Organisations",
    "services.organizations.name1": "Perspectives interculturelles pour l'expansion mondiale",
    "services.organizations.name2": "Conseil en transformation dans un contexte interculturel",
    "services.organizations.name3": "Ateliers de team building mondial",
    "services.organizations.name4": "Analyses de risques culturels",
    "services.organizations.name5": "Formation au protocole international & étiquette commerciale",
    "services.organizations.desc1": "Perspectives interculturelles pour l'expansion mondiale : Conseil sur les partenariats culturellement réussis, y compris l'étiquette dans les négociations internationales",
    "services.organizations.desc2": "Conseil en transformation dans un contexte interculturel : Conception consciente de la culture et de l'étiquette des processus de changement",
    "services.organizations.desc3": "Ateliers de team building mondial : Développement de compétences interculturelles dans les équipes incl. étiquette en communication, résolution de conflits et collaboration virtuelle",
    "services.organizations.desc4": "Analyses de risques culturels : Identification des malentendus potentiels – également dans la gestion des conventions commerciales formelles et informelles",
    "services.organizations.desc5": "Formation au protocole international & étiquette commerciale : Formations sur mesure pour une apparence confiante lors d'événements officiels, délégations, événements ou environnement diplomatique",
    "services.individuals": "Pour les Particuliers",
    "services.individuals.name1": "Accompagnement à l'installation d'expatriés",
    "services.individuals.name2": "Coaching de carrière & réorientation",
    "services.individuals.name3": "Coaching d'adaptation culturelle",
    "services.individuals.name4": "Conseil en partenariats internationaux",
    "services.individuals.name5": "Personal branding pour la visibilité mondiale",
    "services.individuals.desc1": "Accompagnement à l'installation d'expatriés : Aide à l'orientation personnelle – y compris introduction à l'étiquette commerciale locale",
    "services.individuals.desc2": "Coaching de carrière & réorientation : Auto-marketing interculturel et apparence souveraine dans la vie professionnelle internationale",
    "services.individuals.desc3": "Coaching d'adaptation culturelle : Soutien à l'intégration – y compris usages, salutations, langage corporel et vêtements dans le pays cible",
    "services.individuals.desc4": "Conseil en partenariats internationaux : Communication culturelle & étiquette dans les relations mixtes privées et professionnelles",
    "services.individuals.desc5": "Personal branding pour la visibilité mondiale : Développement d'un impact authentique et transculturel – y compris apparence & comportement",


    // Testimonials
    "testimonials.title": "Témoignages Clients",
    "testimonials.subtitle": "Ce que disent les clients à propos de leur collaboration avec moi",
    "testimonials.reviewCount": "27 avis",
    "testimonials.viewAll": "Voir tous les témoignages",

    "testimonials.test1": "Madame Bannouri a défendu avec passion son message de rapprochement entre les cultures lors du congrès. J’en ai tiré de bonnes idées et inspirations, et je me réjouis de poursuivre notre collaboration.",
    "testimonials.test2": "J’ai eu la chance de rencontrer Manel, une bâtisseuse de ponts engagée, hautement compétente et profondément humaine. Ce qu’elle a créé avec InvestInHuman est un modèle pour l’avenir.",
    "testimonials.test3": "Une personnalité formidable et une présentation inspirante, merci beaucoup.",

    // Experience
    "experience.title": "Expérience & Formation",
    "experience.education": "Formation",
    "experience.work": "Expérience Professionnelle",
    "experience.skills": "Compétences Clés",

    "experience.education.0.degree": "Master Langues et Interculturalité",
    "experience.education.0.institution": "Université de Strasbourg",
    "experience.education.0.year": "2014",
    "experience.education.1.degree": "Licence en Sciences Politiques",
    "experience.education.1.institution": "Université de Heidelberg",
    "experience.education.1.year": "2012",
    "experience.education.2.degree": "École européenne du protocole",
    "experience.education.2.institution": "Formation complémentaire",
    "experience.education.2.year": "2015",

    "experience.work.0.position": "Fondatrice & PDG",
    "experience.work.0.company": "InvestinHuman",
    "experience.work.0.period": "2015 - Aujourd'hui",
    "experience.work.1.position": "Cheffe de projet",
    "experience.work.1.company": "GSM Training & Integration",
    "experience.work.1.period": "2016 - 2018",
    "experience.work.2.position": "Chargée de cours – Communication interculturelle",
    "experience.work.2.company": "Universités de Fribourg & Dresde",
    "experience.work.2.period": "2017 - 2019",

    "experience.skills.0": "Recrutement international de talents",
    "experience.skills.1": "Coaching & formation interculturels",
    "experience.skills.2": "Étiquette professionnelle & protocole",
    "experience.skills.3": "Gestion de projet",
    "experience.skills.4": "Conseil aux expatriés",
    "experience.skills.5": "Communication multilingue",


    // Contact
    "contact.title": "Me Contacter",
    "contact.subtitle": "Prêt à discuter de vos besoins commerciaux interculturels?",
    "contact.name": "Nom Complet",
    "contact.email": "Adresse E-mail",
    "contact.subject": "Sujet",
    "contact.message": "Message",
    "contact.send": "Envoyer le Message",
    "contact.sending": "Envoi...",
    "contact.successMessage": "Merci! Votre message a été envoyé avec succès.",
    "contact.errorMessage": "Désolé, une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.",

    // Footer
    "footer.rights": "Tous droits réservés.",
    "footer.languages": "Langues: Arabe, Allemand, Français, Anglais",
    "footer.name": "Manel Bannouri",
    "footer.description": "Experte en recrutement international et communication interculturelle",
    "footer.companydescription":
      "Relier les cultures et connecter les talents internationaux aux opportunités mondiales.",
    "footer.link": "Visitez le site de l'entreprise →",
    "footer.contact": "Contact",
  },
  ar: {
    // Navigation
    "nav.about": "نبذة عني",
    "nav.services": "الخدمات",
    "nav.experience": "الخبرة",
    "nav.contact": "اتصل بي",
    "nav.testimonies": "آراء العملاء",

    // Hero
    "hero.title": "منال بنوري",
    "hero.subtitle": "خبيرة استراتيجيات ثقافية. متخصصة في التوظيف الدولي والمسارات العالمية",
    "hero.description": "أتحدث عن ما تحتاجه التعاون الدولي فعلاً: الفهم. التواصل. المسؤولية",
    "hero.cta": "تواصل معي",

    // Hero floating elements
    "hero.available": "متاحة للاستشارة",
    "hero.languages": "4+ لغات",
    "hero.multilingual": "خبيرة متعددة اللغات",
    "hero.expert": "خبيرة استشارية.",

    // About
    "about.title": "نبذة عني",
    "about.quote": '"تأمين المواهب ليس مشكلة توظيف - إنه تحدٍ ثقافي."',
    "about.description":
      "بخلفية متعددة الثقافات ألمانية-تونسية ومسيرة أكاديمية عبر هايدلبرغ وستراسبورغ، أصبحت مستشارة مطلوبة للشركات والمهنيين الدوليين. فقط من خلال الفهم الثقافي يمكن تحقيق التكامل المستدام والقدرة التنافسية العالمية.",
    "about.position": "مؤسسة ومديرة تنفيذية في InvestinHuman منذ 2015",
    "about.experience": "سنوات من الخبرة",
    "about.languages": "اللغات",

    // Services
    "services.title": "خدماتي",
    "services.viewDetails": "عرض التفاصيل",
    "services.companies": "للشركات",
    "services.companies.name1": "استراتيجيات دخول السوق والتوسع",
    "services.companies.name2": "اكتساب المواهب الدولية والبحث عن الكفاءات",
    "services.companies.name3": "برامج التكامل الثقافي",
    "services.companies.name4": "استراتيجيات النشر العالمية",
    "services.companies.name5": "تدريب الكفاءة الثقافية وآداب الأعمال",
    "services.companies.name6": "استشارات الموارد البشرية الدولية",
    "services.companies.desc1": "استراتيجيات دخول السوق والتوسع: مرافقة استراتيجية عند دخول أسواق جديدة مع مراعاة الخصائص الثقافية والآداب",
    "services.companies.desc2": "اكتساب المواهب الدولية والبحث عن الكفاءات: توظيف مستهدف للمواهب العالمية بنهج حساس ثقافياً",
    "services.companies.desc3": "برامج التكامل الثقافي: إدماج مستدام للموظفين الدوليين - بما في ذلك التدريب على آداب الأعمال والسلوك الثقافي في مكان العمل",
    "services.companies.desc4": "استراتيجيات النشر العالمية: التحضير للمهام الخارجية مع التركيز على التواصل الثقافي والعادات المحلية",
    "services.companies.desc5": "تدريب الكفاءة الثقافية وآداب الأعمال: تدريب للفرق والقيادات حول الآداب الثقافية وقواعد اللباس وثقافة الاجتماعات والسلوك في المواقف التجارية العالمية",
    "services.companies.desc6": "استشارات الموارد البشرية الدولية: تحسين عمليات الموارد البشرية العالمية مع دمج الآداب الثقافية والبروتوكولات",
    "services.organizations": "للمنظمات",
    "services.organizations.name1": "وجهات نظر ثقافية للتوسع العالمي",
    "services.organizations.name2": "استشارات التحويل في السياق الثقافي",
    "services.organizations.name3": "ورش عمل لبناء الفرق العالمية",
    "services.organizations.name4": "تحليلات المخاطر الثقافية",
    "services.organizations.name5": "تدريب البروتوكول الدولي وآداب الأعمال",
    "services.organizations.desc1": "وجهات نظر ثقافية للتوسع العالمي: استشارة حول الشراكات الناجحة ثقافياً، بما في ذلك الآداب في المفاوضات الدولية",
    "services.organizations.desc2": "استشارات التحويل في السياق الثقافي: تصميم واعٍ ثقافياً وآدابياً لعمليات التغيير",
    "services.organizations.desc3": "ورش عمل لبناء الفرق العالمية: بناء الكفاءة الثقافية في الفرق بما في ذلك الآداب في التواصل وحل النزاعات والتعاون الافتراضي",
    "services.organizations.desc4": "تحليلات المخاطر الثقافية: تحديد سوء الفهم المحتمل - أيضاً في التعامل مع الاتفاقيات التجارية الرسمية وغير الرسمية",
    "services.organizations.desc5": "تدريب البروتوكول الدولي وآداب الأعمال: تدريبات مخصصة للظهور الواثق في المناسبات الرسمية والوفود والفعاليات أو البيئة الدبلوماسية",
    "services.individuals": "للأفراد",
    "services.individuals.name1": "مرافقة استقرار المغتربين",
    "services.individuals.name2": "تدريب المهنة وإعادة التوجه",
    "services.individuals.name3": "تدريب التكيف الثقافي",
    "services.individuals.name4": "استشارة الشراكات الدولية",
    "services.individuals.name5": "بناء العلامة الشخصية للرؤية العالمية",
    "services.individuals.desc1": "مرافقة استقرار المغتربين: مساعدة شخصية في التوجه - بما في ذلك مقدمة في آداب الأعمال المحلية",
    "services.individuals.desc2": "تدريب المهنة وإعادة التوجه: التسويق الذاتي الثقافي والظهور الواثق في الحياة المهنية الدولية",
    "services.individuals.desc3": "تدريب التكيف الثقافي: دعم في الاستقرار - بما في ذلك الآداب والتحيات ولغة الجسد واللباس في البلد المستهدف",
    "services.individuals.desc4": "استشارة الشراكات الدولية: التواصل الثقافي والآداب في العلاقات المختلطة الخاصة والمهنية",
    "services.individuals.desc5": "بناء العلامة الشخصية للرؤية العالمية: تطوير تأثير أصيل عبر الثقافات - بما في ذلك المظهر والسلوك",


    // Testimonials
    "testimonials.title": "آراء العملاء",
    "testimonials.subtitle": "ما يقوله العملاء عن العمل معي",
    "testimonials.reviewCount": "27 تقييم",
    "testimonials.viewAll": "عرض جميع التقييمات",

    "testimonials.test1": "السيدة بنوري عبّرت بشغف عن رسالتها في ربط الثقافات خلال المؤتمر. لقد استفدت من أفكار ملهمة ومفيدة، وأتطلع إلى مزيد من التعاون",
    "testimonials.test2": "كان لي الشرف أن أتعرف على منال، التي تمثل نموذجًا للربط بين الناس، بفضل التزامها وكفاءتها وإنسانيتها العميقة. ما أنشأته مع InvestInHuman هو نموذج للمستقبل.",
    "testimonials.test3": "شخصية رائعة ومحاضرة ملهمة، شكراً جزيلاً",

    // Experience
    "experience.title": "الخبرة والتعليم",
    "experience.education": "التعليم",
    "experience.work": "الخبرة المهنية",
    "experience.skills": "الكفاءات الأساسية",

    "experience.education.0.degree": "ماجستير في اللغات والتواصل بين الثقافات",
    "experience.education.0.institution": "جامعة ستراسبورغ",
    "experience.education.0.year": "2014",
    "experience.education.1.degree": "بكالوريوس في العلوم السياسية",
    "experience.education.1.institution": "جامعة هايدلبرغ",
    "experience.education.1.year": "2012",
    "experience.education.2.degree": "مدرسة البروتوكول الأوروبية",
    "experience.education.2.institution": "تدريب إضافي",
    "experience.education.2.year": "2015",

    "experience.work.0.position": "المؤسسة والمديرة التنفيذية",
    "experience.work.0.company": "InvestinHuman",
    "experience.work.0.period": "2015 - الآن",
    "experience.work.1.position": "مديرة مشروع",
    "experience.work.1.company": "GSM للتدريب والاندماج",
    "experience.work.1.period": "2016 - 2018",
    "experience.work.2.position": "محاضِرة – التواصل بين الثقافات",
    "experience.work.2.company": "جامعات فرايبورغ ودريسدن",
    "experience.work.2.period": "2017 - 2019",

    "experience.skills.0": "اكتساب المواهب الدولية",
    "experience.skills.1": "التدريب والإرشاد الثقافي",
    "experience.skills.2": "آداب الأعمال والبروتوكول",
    "experience.skills.3": "إدارة المشاريع",
    "experience.skills.4": "استشارات المغتربين",
    "experience.skills.5": "التواصل بعدة لغات",


    // Contact
    "contact.title": "اتصل بي",
    "contact.subtitle": "مستعد لمناقشة احتياجاتك التجارية بين الثقافات؟",
    "contact.name": "الاسم الكامل",
    "contact.email": "عنوان البريد الإلكتروني",
    "contact.subject": "الموضوع",
    "contact.message": "الرسالة",
    "contact.send": "إرسال الرسالة",
    "contact.sending": "جاري الإرسال...",
    "contact.successMessage": "شكراً لك! تم إرسال رسالتك بنجاح.",
    "contact.errorMessage": "عذراً، حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى.",

    // Footer
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.languages": "اللغات: العربية، الألمانية، الفرنسية، الإنجليزية",
    "footer.name": "منال بنوري",
    "footer.description": "خبيرة في التوظيف الدولي والتواصل بين الثقافات",
    "footer.link": "قم بزيارة موقع الشركة →",
    "footer.contact": "اتصل",
    "footer.companydescription":
      "تجسير الثقافات وتوصيل المواهب الدولية بالفرص العالمية.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("de")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
