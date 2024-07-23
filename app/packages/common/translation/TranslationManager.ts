import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import StorageFacade ,{StorageKeys} from "../facade/StorageFacade";
const translations = {
  en: {
    analytics: require('../../../../shared/multiLang/en-US/analytics.json'),
    chat: require('../../../../shared/multiLang/en-US/chat.json'),
    common: require('../../../../shared/multiLang/en-US/common.json'),
    dataManagement: require('../../../../shared/multiLang/en-US/dataManagement.json'),
    login: require('../../../../shared/multiLang/en-US/login.json'),
    machines: require('../../../../shared/multiLang/en-US/machines.json'),
    maintenanceDocuments: require('../../../../shared/multiLang/en-US/maintenanceDocuments.json'),
    menus: require('../../../../shared/multiLang/en-US/menus.json'),
    preventiveMaintenance: require('../../../../shared/multiLang/en-US/preventiveMaintenance.json'),
    resourcePlanning: require('../../../../shared/multiLang/en-US/resourcePlanning.json'),
    tickets: require('../../../../shared/multiLang/en-US/tickets.json'),
    branding: require('../../../../shared/multiLang/en-US/branding.json'),
    procedures: require('../../../../shared/multiLang/en-US/procedures.json'),
    filters: require('../../../../shared/multiLang/en-US/filters.json'),
    productionLines: require('../../../../shared/multiLang/en-US/productionLines.json'),
    components: require('../../../../shared/multiLang/en-US/components.json'),
    teams: require('../../../../shared/multiLang/en-US/teams.json'),
    emails: require('../../../../shared/multiLang/en-US/emails.json'),
    facilities:require('../../../../shared/multiLang/en-US/facilities.json'),
    documents:require('../../../../shared/multiLang/en-US/documents.json'),
    forms:require('../../../../shared/multiLang/en-US/forms.json'),
    inventory:require('../../../../shared/multiLang/en-US/inventory.json')
  },
  es: {
    analytics: require('../../../../shared/multiLang/es-ES/analytics.json'),
    chat: require('../../../../shared/multiLang/es-ES/chat.json'),
    common: require('../../../../shared/multiLang/es-ES/common.json'),
    dataManagement: require('../../../../shared/multiLang/es-ES/dataManagement.json'),
    login: require('../../../../shared/multiLang/es-ES/login.json'),
    machines: require('../../../../shared/multiLang/es-ES/machines.json'),
    maintenanceDocuments: require('../../../../shared/multiLang/es-ES/maintenanceDocuments.json'),
    menus: require('../../../../shared/multiLang/es-ES/menus.json'),
    preventiveMaintenance: require('../../../../shared/multiLang/es-ES/preventiveMaintenance.json'),
    resourcePlanning: require('../../../../shared/multiLang/es-ES/resourcePlanning.json'),
    tickets: require('../../../../shared/multiLang/es-ES/tickets.json'),
    branding: require('../../../../shared/multiLang/es-ES/branding.json'),
    procedures: require('../../../../shared/multiLang/es-ES/procedures.json'),
    filters: require('../../../../shared/multiLang/es-ES/filters.json'),
    productionLines: require('../../../../shared/multiLang/es-ES/productionLines.json'),
    components: require('../../../../shared/multiLang/es-ES/components.json'),
    teams: require('../../../../shared/multiLang/es-ES/teams.json'),
    emails: require('../../../../shared/multiLang/es-ES/emails.json'),
    facilities:require('../../../../shared/multiLang/es-ES/facilities.json'),
    documents:require('../../../../shared/multiLang/es-ES/documents.json'),
    forms:require('../../../../shared/multiLang/es-ES/forms.json'),
    inventory:require('../../../../shared/multiLang/es-ES/inventory.json')
  },
  de: {
    analytics: require('../../../../shared/multiLang/de-DE/analytics.json'),
    chat: require('../../../../shared/multiLang/de-DE/chat.json'),
    common: require('../../../../shared/multiLang/de-DE/common.json'),
    dataManagement: require('../../../../shared/multiLang/de-DE/dataManagement.json'),
    login: require('../../../../shared/multiLang/de-DE/login.json'),
    machines: require('../../../../shared/multiLang/de-DE/machines.json'),
    maintenanceDocuments: require('../../../../shared/multiLang/de-DE/maintenanceDocuments.json'),
    menus: require('../../../../shared/multiLang/de-DE/menus.json'),
    preventiveMaintenance: require('../../../../shared/multiLang/de-DE/preventiveMaintenance.json'),
    resourcePlanning: require('../../../../shared/multiLang/de-DE/resourcePlanning.json'),
    tickets: require('../../../../shared/multiLang/de-DE/tickets.json'),
    branding: require('../../../../shared/multiLang/de-DE/branding.json'),
    procedures: require('../../../../shared/multiLang/de-DE/procedures.json'),
    filters: require('../../../../shared/multiLang/de-DE/filters.json'),
    productionLines: require('../../../../shared/multiLang/de-DE/productionLines.json'),
    components: require('../../../../shared/multiLang/de-DE/components.json'),
    teams: require('../../../../shared/multiLang/de-DE/teams.json'),
    emails: require('../../../../shared/multiLang/de-DE/emails.json'),
    facilities:require('../../../../shared/multiLang/de-DE/facilities.json'),
    documents:require('../../../../shared/multiLang/de-DE/documents.json'),
    forms:require('../../../../shared/multiLang/de-DE/forms.json'),
    inventory:require('../../../../shared/multiLang/de-DE/inventory.json')

  },
}


const languageDetectorPlugin = {
  type: "languageDetector", async: true,
  init: () => {
  },
  detect: async function(callback: (lang: string) => void) {
    try {
      const language = StorageFacade.getStringKey(StorageKeys.LANGUAGE)
      if (language) {
        return callback(language);
      } else {
        return callback("en");
      }
    } catch (error) {
      console.log("Error reading language", error)
    }
  },
  cacheUserLanguage: async function(language: string) {
    try {
      //save a user's language choice in Async storage StorageFacade setkey(StorageKeys. LANGUAGE, language)
    } catch (error) {
    }
  }
}
const resources= {
  en:{
    translation:translations.en
  },
  es:{
    translation:translations.es
  },
  de:{
    translation:translations.de
  }
}

i18n.use(initReactI18next).use(languageDetectorPlugin).init({
  resources,
  compatibilityJSON: 'v3',
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  }});

export default i18n;
