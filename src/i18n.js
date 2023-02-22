import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      navigation: {
        home: 'Home',
        skills: 'Skills',
        'work-experience': 'Work experience',
        about: 'About',
        contacts: 'Contacts',
      },
      footer: {
        'pdf-cv': 'PDF CV (en)',
        'source-code': 'Source code (gitHub)',
        'name': 'Alyona Udod, 2023',
      },
      contacts: {
        contacts: 'Contacts',
        links: 'Links',
        'mobile-no': 'Mobile (no)',
        'mobile-ua': 'Mobile (ua)',
        'e-mail': 'E-mail',
        copy: 'copy to clipboard',
        copied: 'copied',
      }
    }
  },
  ua: {
    translation: {
      navigation: {
        home: 'Головна',
        skills: 'Навички',
        'work-experience': 'Досвід роботи',
        about: 'Про мене',
        contacts: 'Контакти',
      },
      footer: {
        'pdf-cv': 'PDF Резюме (анг)',
        'source-code': 'Код сайту (gitHub)',
        'name': 'Альона Удод, 2023',
      },
      contacts: {
        contacts: 'Контакти',
        links: 'Посилання',
        'mobile-no': 'Мобільний (no)',
        'mobile-ua': 'Мобільний (ua)',
        'e-mail': 'E-mail',
        copy: 'копіювати в буфер',
        copied: 'зкопійовано!',
      }
    },
  },
  no: {
    translation: {
      navigation: {
        home: 'Hjem',
        skills: 'Ferdigheter',
        'work-experience': 'Arbeidserfaring',
        about: 'Om',
        contacts: 'Kontakter',
      },
      footer: {
        'pdf-cv': 'PDF CV (en)',
        'source-code': 'Kilde (gitHub)',
        'name': 'Alyona Udod, 2023',
      },
      contacts: {
        contacts: 'Kontakter',
        links: 'Lenker',
        'mobile-no': 'Mobilnummer (no)',
        'mobile-ua': 'Mobilnummer (ua)',
        'e-mail': 'E-mail',
        copy: 'kopiere til utklippstavle',
        copied: 'kopiert!',
      }
    }
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: JSON.parse(localStorage.getItem('lang')) ?? "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;