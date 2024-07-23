import LOCALES from "../locales";
import analytics from "./analytics";
import chat from "./chat";
import common from "./common";
import dataManagement from "./dataManagement";
import documents from "./documents";
import facilities from "./facilities";
import forms from "./forms";
import inventory from "./inventory";
import login from "./login";
import machines from "./machines";
import maintenanceDocuments from "./maintenanceDocuments";
import menus from "./menus";
import preventiveMaintenance from "./preventiveMaintenance";
import resourcePlanning from "./resourcePlanning";
import settings from "./settings";
import tickets from "./tickets";
import branding from "./branding";
import procedures from "./procedures";
import filters from "./filters";
import productionLines from "./productionLines.json";
import components from "./components.json";
import teams from "./teams.json";
import emails from "./emails.json";

export default {
  [LOCALES[2].locale]: {
    analytics,
    chat,
    common,
    dataManagement,
    documents,
    facilities,
    forms,
    inventory,
    login,
    machines,
    maintenanceDocuments,
    menus,
    preventiveMaintenance,
    resourcePlanning,
    settings,
    tickets,
    branding,
    procedures,
    filters,
    productionLines,
    components,
    teams,
    emails,
  },
};
