import { type LocaleDefinition, type LocaleMessages } from "@/lib/i18n";
const messages = {
  "Select language": "Выберите язык", English: "Английский", Academics: "Учёба", Restaurants: "Рестораны", Hostels: "Общежития",
  Travel: "Транспорт", Emergency: "Экстренные службы", "Campus Life": "Жизнь кампуса", Services: "Услуги", Tools: "Инструменты",
  "Grievance Redressal": "Рассмотрение жалоб", Favorites: "Избранное", More: "Ещё", Theme: "Тема", "Open search": "Открыть поиск",
  "Toggle theme": "Сменить тему", "Toggle navigation menu": "Переключить меню навигации", "Search anything…": "Найдите что угодно…",
  Search: "Поиск", "Search directory": "Поиск в справочнике", "Close search": "Закрыть поиск", "No results": "Нет результатов",
  "Save your contacts": "Сохраните контакты", "Your saved items": "Сохранённые элементы", "MIT Manipal": "MIT Manipal",
  Directory: "Справочник", "Campus Directory": "Справочник кампуса", "Install Campus Directory": "Установить справочник кампуса",
  "Dismiss install prompt": "Закрыть предложение установки", "Install app": "Установить приложение", "Not now": "Не сейчас", "Got it": "Понятно",
  "Add to Home Screen": "Добавить на главный экран", "Found something wrong or missing? Help improve this directory by contributing at": "Нашли ошибку или пропуск? Помогите улучшить справочник, внеся вклад здесь", Main: "Главная",
} satisfies LocaleMessages;
export const russianLocale: LocaleDefinition = { code: "ru", label: "Русский", messages };
