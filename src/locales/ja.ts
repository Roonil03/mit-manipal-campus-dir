import { type LocaleDefinition, type LocaleMessages } from "@/lib/i18n";
const messages = {
  "Select language": "言語を選択", English: "英語", Academics: "学業", Restaurants: "レストラン", Hostels: "寮",
  Travel: "交通", Emergency: "緊急", "Campus Life": "キャンパスライフ", Services: "サービス", Tools: "ツール",
  "Grievance Redressal": "苦情対応", Favorites: "お気に入り", More: "その他", Theme: "テーマ", "Open search": "検索を開く",
  "Toggle theme": "テーマを切り替え", "Toggle navigation menu": "ナビゲーションメニューを切り替え", "Search anything…": "何でも検索…",
  Search: "検索", "Search directory": "ディレクトリを検索", "Close search": "検索を閉じる", "No results": "結果がありません",
  "Save your contacts": "連絡先を保存", "Your saved items": "保存済みの項目", "MIT Manipal": "MITマニパル",
  Directory: "ディレクトリ", "Campus Directory": "キャンパスディレクトリ", "Install Campus Directory": "キャンパスディレクトリをインストール",
  "Dismiss install prompt": "インストール案内を閉じる", "Install app": "アプリをインストール", "Not now": "今はしない", "Got it": "了解",
  "Add to Home Screen": "ホーム画面に追加", "Found something wrong or missing? Help improve this directory by contributing at": "誤りや不足を見つけましたか？ここから貢献してディレクトリの改善にご協力ください", Main: "メイン",
} satisfies LocaleMessages;
export const japaneseLocale: LocaleDefinition = { code: "ja", label: "日本語", messages };
