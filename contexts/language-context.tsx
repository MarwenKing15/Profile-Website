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
    "services.companies": "For Companies",
    // "services.companies.desc": "International talent acquisition, integration, and deployment of skilled professionals",
    "services.companies.desc1": "International talent acquisition and headhunting",
    "services.companies.desc2": "Cross-cultural integration programs",
    "services.companies.desc3": "Global deployment strategies",
    "services.companies.desc4": "Cultural competency training",
    "services.companies.desc5": "International HR consulting",
    "services.organizations": "For Organizations",
    // "services.organizations.desc": "International expansion and intercultural transformation consulting",
    "services.organizations.desc1": "Market entry and expansion strategies",
    "services.organizations.desc2": "Intercultural transformation consulting",
    "services.organizations.desc3": "Global team building workshops",
    "services.organizations.desc4": "Cultural risk assessment",
    "services.organizations.desc5": "International business protocol training",
    "services.individuals": "For Individuals",
    // "services.individuals.desc": "Support with emigration, partnerships, and professional reorientation abroad",
    "services.individuals.desc1": "Expatriate relocation support",
    "services.individuals.desc2": "Career transition coaching",
    "services.individuals.desc3": "Cultural adaptation guidance",
    "services.individuals.desc4": "International partnership consulting",
    "services.individuals.desc5": "Personal branding for global markets",

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
    "contact.success": "Thank you! Your message has been sent successfully.",
    "contact.error": "Sorry, there was an error sending your message. Please try again.",

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
    "services.companies": "Für Unternehmen",
    // "services.companies.desc": "Gewinnung, Integration und Entsendung internationaler Fachkräfte",
    "services.companies.desc1": "Internationale Fachkräftegewinnung und Headhunting",
    "services.companies.desc2": "Interkulturelle Integrationsprogramme",
    "services.companies.desc3": "Globale Entsendestrategien",
    "services.companies.desc4": "Training zur interkulturellen Kompetenz",
    "services.companies.desc5": "Internationale HR-Beratung",
    "services.organizations": "Für Organisationen",
    // "services.organizations.desc": "Internationale Expansion und interkulturelle Transformation",
    "services.organizations.desc1": "Markteintritts- und Expansionsstrategien",
    "services.organizations.desc2": "Interkulturelle Transformationsberatung",
    "services.organizations.desc3": "Workshops zum globalen Teambuilding",
    "services.organizations.desc4": "Kulturelle Risikoanalyse",
    "services.organizations.desc5": "Training zu internationalem Protokoll",
    "services.individuals": "Für Privatpersonen",
    // "services.individuals.desc":
    //   "Begleitung bei Auswanderung, Partnerschaft und beruflicher Neuorientierung im Ausland",
    "services.individuals.desc1": "Unterstützung bei der Expat-Ansiedlung",
    "services.individuals.desc2": "Coaching für berufliche Neuorientierung",
    "services.individuals.desc3": "Beratung zur kulturellen Anpassung",
    "services.individuals.desc4": "Beratung zu internationalen Partnerschaften",
    "services.individuals.desc5": "Personal Branding für globale Märkte",

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
    "contact.success": "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.",
    "contact.error":
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
    "services.companies": "Pour les Entreprises",
    // "services.companies.desc": "Acquisition, intégration et déploiement de talents internationaux",
    "services.companies.desc1": "Acquisition internationale de talents et chasse de têtes",
    "services.companies.desc2": "Programmes d'intégration interculturelle",
    "services.companies.desc3": "Stratégies de déploiement global",
    "services.companies.desc4": "Formation à la compétence interculturelle",
    "services.companies.desc5": "Conseil RH international",
    "services.organizations": "Pour les Organisations",
    // "services.organizations.desc": "Expansion internationale et transformation interculturelle",
    "services.organizations.desc1": "Stratégies d'entrée et d'expansion sur le marché",
    "services.organizations.desc2": "Conseil en transformation interculturelle",
    "services.organizations.desc3": "Ateliers de team building global",
    "services.organizations.desc4": "Évaluation des risques culturels",
    "services.organizations.desc5": "Formation au protocole international",
    "services.individuals": "Pour les Particuliers",
    // "services.individuals.desc":
    //   "Accompagnement pour l'émigration, les partenariats et la réorientation professionnelle à l'étranger",
    "services.individuals.desc1": "Accompagnement à l'expatriation",
    "services.individuals.desc2": "Coaching de réorientation professionnelle",
    "services.individuals.desc3": "Conseils d'adaptation culturelle",
    "services.individuals.desc4": "Conseil en partenariats internationaux",
    "services.individuals.desc5": "Branding personnel pour les marchés mondiaux",

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
    "contact.success": "Merci! Votre message a été envoyé avec succès.",
    "contact.error": "Désolé, une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.",

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
    "services.companies": "للشركات",
    // "services.companies.desc": "اكتساب وتكامل ونشر المواهب الدولية",
    "services.companies.desc1": "اكتساب المواهب الدولية والبحث عن الكفاءات",
    "services.companies.desc2": "برامج التكامل بين الثقافات",
    "services.companies.desc3": "استراتيجيات النشر العالمية",
    "services.companies.desc4": "تدريب الكفاءة الثقافية",
    "services.companies.desc5": "استشارات الموارد البشرية الدولية",
    "services.organizations": "للمنظمات",
    // "services.organizations.desc": "التوسع الدولي والتحول بين الثقافات",
    "services.organizations.desc1": "استراتيجيات دخول السوق والتوسع",
    "services.organizations.desc2": "استشارات التحول بين الثقافات",
    "services.organizations.desc3": "ورش عمل لبناء الفرق العالمية",
    "services.organizations.desc4": "تقييم المخاطر الثقافية",
    "services.organizations.desc5": "تدريب البروتوكول الدولي",
    "services.individuals": "للأفراد",
    // "services.individuals.desc": "المساعدة في الهجرة والشراكات وإعادة التوجه المهني في الخارج",
    "services.individuals.desc1": "دعم الاستقرار للمغتربين",
    "services.individuals.desc2": "توجيه لإعادة التوجه المهني",
    "services.individuals.desc3": "إرشادات التكيف الثقافي",
    "services.individuals.desc4": "استشارات الشراكات الدولية",
    "services.individuals.desc5": "بناء العلامة الشخصية للأسواق العالمية",

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
    "contact.success": "شكراً لك! تم إرسال رسالتك بنجاح.",
    "contact.error": "عذراً، حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى.",

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
