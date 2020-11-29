import { useContext } from "react";
import { LanguageContext, defaultLocale } from "./LanguageProvider";

const LangStrings = require('../data/resume.json');

export default function useTranslation() {
    const [locale] = useContext(LanguageContext);

    function term(key: string) {
        if (!LangStrings[locale][key]) {
            console.warn(`No string '${key}' for locale '${locale}'`);
        }

        return (
            LangStrings[locale][key] || LangStrings[defaultLocale][key] || ""
        );
    }

    return { term, locale };
}
