import { type LocaleDefinition, type LocaleMessages } from "@/lib/i18n";
const messages = {
  "Select language": "Choisir la langue", English: "Anglais", Academics: "Études", Restaurants: "Restaurants", Hostels: "Résidences",
  Travel: "Transport", Emergency: "Urgences", "Campus Life": "Vie du campus", Services: "Services", Tools: "Outils",
  "Grievance Redressal": "Traitement des réclamations", Favorites: "Favoris", More: "Plus", Theme: "Thème", "Open search": "Ouvrir la recherche",
  "Toggle theme": "Changer de thème", "Toggle navigation menu": "Afficher le menu de navigation", "Search anything…": "Rechercher…",
  Search: "Rechercher", "Search directory": "Rechercher dans l’annuaire", "Close search": "Fermer la recherche", "No results": "Aucun résultat",
  "Save your contacts": "Enregistrez vos contacts", "Your saved items": "Vos éléments enregistrés", "MIT Manipal": "MIT Manipal",
  Directory: "Annuaire", "Campus Directory": "Annuaire du campus", "Install Campus Directory": "Installer l’annuaire du campus",
  "Dismiss install prompt": "Fermer l’invite d’installation", "Install app": "Installer l’application", "Not now": "Pas maintenant", "Got it": "Compris",
  "Add to Home Screen": "Ajouter à l’écran d’accueil", "Found something wrong or missing? Help improve this directory by contributing at": "Une erreur ou un oubli ? Aidez à améliorer cet annuaire en contribuant ici", Main: "Principal",
} satisfies LocaleMessages;
export const frenchLocale: LocaleDefinition = { code: "fr", label: "Français", messages };
