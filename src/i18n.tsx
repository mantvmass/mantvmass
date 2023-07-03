import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';


i18n.use(Backend).use(initReactI18next).init({
    fallbackLng: 'th',
    ns: ['trans'],
    defaultNS: 'trans',
    debug: false,
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: true
    }
});

export default i18n;
