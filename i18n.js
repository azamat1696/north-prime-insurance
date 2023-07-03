import {I18n} from "i18n-js";
import translations from "./locales";
import * as Localization from "expo-localization";

const i18n = new I18n(translations);

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

i18n.enableFallback = true;

export default i18n;