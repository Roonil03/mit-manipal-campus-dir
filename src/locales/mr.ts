import { type LocaleDefinition, type LocaleMessages } from "@/lib/i18n";

const messages = {
  "Select language": "भाषा निवडा", English: "इंग्रजी", Academics: "शैक्षणिक", Restaurants: "रेस्टॉरंट्स", Hostels: "वसतिगृहे",
  Travel: "प्रवास", Emergency: "आपत्कालीन", "Campus Life": "कॅम्पस जीवन", Services: "सेवा", Tools: "साधने",
  "Grievance Redressal": "तक्रार निवारण", Favorites: "आवडीचे", More: "अधिक", Theme: "थीम", "Open search": "शोध उघडा",
  "Toggle theme": "थीम बदला", "Toggle navigation menu": "नेव्हिगेशन मेनू बदला", "Search anything…": "काहीही शोधा…",
  Search: "शोधा", "Search directory": "निर्देशिका शोधा", "Close search": "शोध बंद करा", "No results": "निकाल नाहीत",
  "Save your contacts": "तुमचे संपर्क जतन करा", "Your saved items": "तुमच्या जतन केलेल्या गोष्टी", "MIT Manipal": "एमआयटी मणिपाल",
  Directory: "निर्देशिका", "Campus Directory": "कॅम्पस निर्देशिका", "Install Campus Directory": "कॅम्पस निर्देशिका स्थापित करा",
  "Dismiss install prompt": "स्थापना सूचना बंद करा", "Install app": "अॅप स्थापित करा", "Not now": "आता नाही", "Got it": "समजले",
  "Add to Home Screen": "होम स्क्रीनवर जोडा", "Found something wrong or missing? Help improve this directory by contributing at": "काही चुकले किंवा गहाळ आहे? येथे योगदान देऊन ही निर्देशिका सुधारण्यास मदत करा", Main: "मुख्य",
} satisfies LocaleMessages;

export const marathiLocale: LocaleDefinition = { code: "mr", label: "मराठी", messages };
