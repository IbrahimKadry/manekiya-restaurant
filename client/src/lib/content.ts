import type { Language } from "@/contexts/LanguageContext";

export type Localized = { en: string; ja: string };

export const pick = (value: Localized, language: Language) => value[language];

export const navigation = [
  { href: "/", label: { en: "Home", ja: "ホーム" } },
  { href: "/menu", label: { en: "Menu", ja: "お品書き" } },
  { href: "/story", label: { en: "Our Story", ja: "まねき屋について" } },
  { href: "/gallery", label: { en: "Gallery", ja: "ギャラリー" } },
] as const;

export const copy = {
  restaurant: "Manekiya",
  japaneseName: "食酒屋 まねき屋",
  reserve: { en: "Book a table", ja: "ご予約" },
  viewMenu: { en: "Explore the menu", ja: "お品書きを見る" },
  returnHome: { en: "Return home", ja: "ホームへ戻る" },
  imageSlot: { en: "Photo placement", ja: "写真配置エリア" },
  guestNotes: { en: "Guest notes", ja: "お客様の声" },
  guestNotesBody: {
    en: "For the latest guest feedback, please visit our official business listing. We only present feedback that has been independently published by its author.",
    ja: "最新のご感想は公式ビジネスプロフィールでご覧ください。まねき屋では、投稿者により独自に公開されたご感想のみをご案内しています。",
  },
  address: {
    en: "2-10-16 Kotobukicho, Odawara, Kanagawa 250-0002, Japan",
    ja: "〒250-0002 神奈川県小田原市寿町2丁目10-16 丸久ビル",
  },
  station: {
    en: "About a 12-minute walk from Midorichō Station on the Daiyūzan Line.",
    ja: "伊豆箱根鉄道大雄山線・緑町駅から徒歩約12分。",
  },
  hours: {
    en: "Dinner service begins Tuesday at 16:00. Please call ahead for current daily hours.",
    ja: "火曜日は16:00より営業開始です。最新の営業時間はお電話でご確認ください。",
  },
};

export const signatureDishes = [
  {
    name: { en: "Seasonal sashimi selection", ja: "季節のお造り盛り合わせ" },
    description: { en: "A market-led plate that follows the rhythm of Sagami Bay.", ja: "相模湾の旬を映す、仕入れに寄り添った一皿。" },
    price: { en: "Market price", ja: "時価" },
    slot: { en: "Sashimi plate", ja: "お造りの写真" },
  },
  {
    name: { en: "Crisp maitake tempura", ja: "舞茸の天ぷら" },
    description: { en: "Fragrant maitake, delicately fried to preserve its deep woodland aroma.", ja: "香り豊かな舞茸を、軽やかな衣で揚げました。" },
    price: { en: "¥1,200 tax included", ja: "税込 ¥1,200" },
    slot: { en: "Maitake tempura", ja: "舞茸天ぷらの写真" },
  },
  {
    name: { en: "Chef's garlic omelette", ja: "特製にんにく玉子焼き" },
    description: { en: "Comforting, savoury, and made to pair beautifully with sake.", ja: "お酒に寄り添う、滋味深くやさしい味わい。" },
    price: { en: "¥980 tax included", ja: "税込 ¥980" },
    slot: { en: "Garlic omelette", ja: "玉子焼きの写真" },
  },
] as const;

export const seating = [
  {
    title: { en: "Counter seating", ja: "カウンター席" },
    body: { en: "Settle close to the craft, with a clear view of the evening's preparation.", ja: "手仕事を間近に感じられる、臨場感のあるお席です。" },
    mark: "01",
  },
  {
    title: { en: "Private rooms", ja: "個室・Koshitsu" },
    body: { en: "A quietly composed room for unhurried conversations, family occasions, and business dinners.", ja: "ご会食やご家族でのお祝いに。静かな時間をお過ごしいただけます。" },
    mark: "02",
  },
  {
    title: { en: "Horigotatsu", ja: "掘りごたつ" },
    body: { en: "Traditional sunken-floor comfort for relaxed gatherings over a long table.", ja: "足を伸ばしてくつろげる、ゆったりとした伝統のお席です。" },
    mark: "03",
  },
] as const;

export const menuCategories = [
  { id: "all", label: { en: "All", ja: "すべて" } },
  { id: "lunch", label: { en: "Lunch sets", ja: "ランチ" } },
  { id: "sashimi", label: { en: "Sushi & sashimi", ja: "寿司・お造り" } },
  { id: "noodles", label: { en: "Noodles", ja: "麺料理" } },
  { id: "izakaya", label: { en: "Izakaya & sake", ja: "一品・日本酒" } },
  { id: "sweet", label: { en: "Desserts", ja: "甘味" } },
] as const;

export const menuItems = [
  { category: "lunch", name: { en: "Kaiseki lunch set", ja: "昼会席" }, description: { en: "A considered progression of small seasonal courses.", ja: "季節の小皿を丁寧につないだ昼の会席。" }, price: { en: "¥3,800", ja: "¥3,800" }, tags: { en: "Reservation preferred", ja: "要予約" }, slot: { en: "Lunch set", ja: "ランチの写真" } },
  { category: "lunch", name: { en: "Sashimi rice bowl", ja: "海鮮丼" }, description: { en: "A generous bowl of the day's best selection from the coast.", ja: "その日の鮮魚を贅沢に盛り込んだ一杯。" }, price: { en: "¥1,800", ja: "¥1,800" }, tags: { en: "Seasonal", ja: "季節限定" }, slot: { en: "Seafood bowl", ja: "海鮮丼の写真" } },
  { category: "sashimi", name: { en: "Chef's sashimi course", ja: "お造りおまかせ" }, description: { en: "A refined presentation of the chef's daily market choice.", ja: "料理長が選ぶ、その日の最良の鮮魚。" }, price: { en: "Market price", ja: "時価" }, tags: { en: "Chef's selection", ja: "料理長おまかせ" }, slot: { en: "Sashimi course", ja: "お造りの写真" } },
  { category: "sashimi", name: { en: "Seared local catch", ja: "地魚の炙り" }, description: { en: "Lightly kissed by flame, with citrus and house condiments.", ja: "香ばしく炙り、自家製の薬味と柑橘で。" }, price: { en: "¥1,650", ja: "¥1,650" }, tags: { en: "Gluten-free option", ja: "グルテンフリー対応可" }, slot: { en: "Seared fish", ja: "炙り魚の写真" } },
  { category: "noodles", name: { en: "House soy ramen", ja: "まねき屋 醤油らーめん" }, description: { en: "A clear, savoury broth with carefully selected noodles.", ja: "澄んだ旨味のスープに、こだわりの麺を合わせました。" }, price: { en: "¥1,050", ja: "¥1,050" }, tags: { en: "Contains wheat", ja: "小麦使用" }, slot: { en: "Soy ramen", ja: "醤油らーめんの写真" } },
  { category: "noodles", name: { en: "Soba with tempura", ja: "天ぷら蕎麦" }, description: { en: "Buckwheat noodles served with crisp seasonal tempura.", ja: "季節の天ぷらを添えた、香り高い蕎麦。" }, price: { en: "¥1,480", ja: "¥1,480" }, tags: { en: "Contains wheat", ja: "小麦使用" }, slot: { en: "Tempura soba", ja: "天ぷら蕎麦の写真" } },
  { category: "izakaya", name: { en: "Maitake tempura", ja: "舞茸の天ぷら" }, description: { en: "An airy, crisp expression of the mushroom's generous aroma.", ja: "舞茸の豊かな香りを、軽い食感で。" }, price: { en: "¥1,200", ja: "¥1,200" }, tags: { en: "Vegetarian", ja: "ベジタリアン" }, slot: { en: "Maitake tempura", ja: "舞茸天ぷらの写真" } },
  { category: "izakaya", name: { en: "Pairing flight of sake", ja: "利き酒三種" }, description: { en: "Three seasonal pours selected to complement the kitchen.", ja: "料理との調和を考えた、季節の三種飲み比べ。" }, price: { en: "¥1,600", ja: "¥1,600" }, tags: { en: "Ask staff for details", ja: "詳細はスタッフまで" }, slot: { en: "Sake flight", ja: "日本酒の写真" } },
  { category: "sweet", name: { en: "Roasted tea panna cotta", ja: "ほうじ茶パンナコッタ" }, description: { en: "Silky, mellow, and finished with a gently bitter tea fragrance.", ja: "なめらかな口どけに、ほうじ茶の香りを重ねました。" }, price: { en: "¥680", ja: "¥680" }, tags: { en: "Contains dairy", ja: "乳製品使用" }, slot: { en: "Tea panna cotta", ja: "ほうじ茶パンナコッタの写真" } },
] as const;

export const gallerySlots = [
  { title: { en: "The arrival", ja: "店構え" }, size: "wide" },
  { title: { en: "Seasonal craft", ja: "季節の一皿" }, size: "tall" },
  { title: { en: "Counter glow", ja: "カウンターの灯り" }, size: "square" },
  { title: { en: "Private room", ja: "個室" }, size: "square" },
  { title: { en: "A sake moment", ja: "日本酒のひととき" }, size: "wide" },
  { title: { en: "Late-evening warmth", ja: "夜のまねき屋" }, size: "tall" },
] as const;

export const pageCopy = {
  home: {
    heroEyebrow: { en: "Odawara · Kanagawa", ja: "小田原・神奈川" },
    heroTitle: { en: "An evening, invited by the season.", ja: "季節に招かれる、ひととき。" },
    heroBody: { en: "A warmly understated table for Japanese dishes, careful sake, and the conversations that unfold between them.", ja: "旬の料理と心をほどく一杯。会話が自然に続く、静かな食の時間を。" },
    dishesEyebrow: { en: "From the kitchen", ja: "まねき屋の一皿" },
    dishesTitle: { en: "Cooking that follows the tide.", ja: "海と季節に、素直に。" },
    dishesBody: { en: "The menu moves with the market, finding clarity in familiar ingredients and a sense of place in every course.", ja: "仕入れと季節の声に耳を澄ませ、馴染み深い食材に新しい表情を見つけます。" },
    chefPick: { en: "Chef's pick", ja: "料理長のおすすめ" },
    viewAll: { en: "View the full menu", ja: "すべてのお品書き" },
    seatingEyebrow: { en: "Choose your setting", ja: "お席について" },
    seatingTitle: { en: "A place for every kind of gathering.", ja: "あらゆる語らいに、心地よい居場所を。" },
    storyEyebrow: { en: "The Manekiya way", ja: "まねき屋の心" },
    storyTitle: { en: "Unhurried. Generous. Rooted in the moment.", ja: "ゆっくりと、豊かに、その瞬間に。" },
    storyBody: { en: "The details are quiet by design: an open counter, the warmth of wood, and a menu that lets the ingredients speak first.", ja: "目立たないところに、心を配る。カウンターの手仕事、木の温もり、そして食材を主役にする料理。" },
    storyCta: { en: "Discover our story", ja: "まねき屋について" },
    accessEyebrow: { en: "Visit us", ja: "ご来店案内" },
    accessTitle: { en: "Find your way to the table.", ja: "まねき屋への道のり。" },
    call: { en: "Call the restaurant", ja: "お電話でのお問い合わせ" },
    reviewCta: { en: "Visit our guest reviews", ja: "お客様の声を見る" },
    contactEyebrow: { en: "Enquiries", ja: "お問い合わせ" },
    contactTitle: { en: "An evening made for your occasion.", ja: "大切な日のための、ひとときを。" },
    contactBody: { en: "For celebrations, private dining, and special requests, our team will be pleased to help plan your table.", ja: "お祝いの席やご会食、特別なご要望についても、お気軽にご相談ください。" },
  },
  menu: {
    eyebrow: { en: "The menu", ja: "お品書き" }, title: { en: "A menu shaped by today.", ja: "今日という日に、寄り添う料理。" }, body: { en: "Our selections follow the seasons and the market. Prices and availability may change with the day's ingredients.", ja: "季節と仕入れにあわせてお届けします。価格や内容は当日の食材により変更となる場合があります。" }, tag: { en: "Details", ja: "ご案内" },
  },
  gallery: {
    eyebrow: { en: "A glimpse inside", ja: "まねき屋の景色" }, title: { en: "The moments between courses.", ja: "一皿と一皿の、あいだにある景色。" }, body: { en: "These dedicated image placements are ready for your own photography of food, interiors, and the people who make the room come alive.", ja: "料理、店内、そして空間を彩る人々の写真を、ここに自由に追加していただけます。" }, close: { en: "Close image viewer", ja: "画像ビューアを閉じる" },
  },
  story: {
    eyebrow: { en: "Our story", ja: "まねき屋について" }, title: { en: "A restaurant that makes room for the evening.", ja: "夜の時間に、余白をつくる店。" }, body: { en: "Manekiya is an invitation to stay a little longer: to notice the change of season, to share a bottle, and to rediscover the pleasure of a familiar dish made with care.", ja: "季節の移ろいに気づき、一本のお酒を分かち合い、丁寧に仕立てた馴染みの料理を楽しむ。まねき屋は、少しだけ長く過ごしたくなる場所を目指しています。" },
    historyEyebrow: { en: "The history", ja: "まねき屋の歩み" }, historyTitle: { en: "Built on hospitality, renewed each day.", ja: "もてなしの心を、毎日の新しさで。" }, historyBody: { en: "Our story is written in the rituals of service: the first warm greeting, the board of seasonal recommendations, and the quiet attention that makes a table feel personal. The menu is never fixed in spirit; it is a conversation with the day's ingredients.", ja: "最初のご挨拶、季節のおすすめ、そしてお一人おひとりに寄り添う静かな気配り。まねき屋の物語は、日々のもてなしの中にあります。お品書きもまた、その日の食材との対話から生まれます。" },
    chefEyebrow: { en: "The chef", ja: "料理人" }, chefTitle: { en: "A point of view shaped by restraint.", ja: "引き算の中に、確かな味わいを。" }, chefBody: { en: "In the kitchen, technique is there to support the ingredient—not to overpower it. Each plate seeks balance: a clean broth, a careful sear, a final seasoning that invites the next sip of sake.", ja: "厨房では、技術は食材を引き立てるためにあります。澄んだ出汁、丁寧な炙り、次の一杯を誘う最後のひと振り。すべての一皿に、心地よい均衡を探します。" },
    philosophyEyebrow: { en: "Our philosophy", ja: "まねき屋の考え方" }, philosophyTitle: { en: "Let the good things speak quietly.", ja: "良いものほど、静かに語る。" }, philosophyBody: { en: "We believe a memorable restaurant does not need to raise its voice. It is found in the quality of a welcome, the honesty of the produce, and the ease of a room where every guest can settle in.", ja: "心に残る店は、大きな声を必要としないと考えています。温かな迎え方、正直な食材、そして誰もが自然にくつろげる空間。その一つひとつを大切にしています。" },
  },
  reservation: {
    eyebrow: { en: "Reservations", ja: "ご予約" }, title: { en: "We look forward to welcoming you.", ja: "お会いできることを、楽しみにしております。" }, body: { en: "Reserve a table for dinner. For same-day requests, large parties, or private dining, please call the restaurant directly.", ja: "ディナーのご予約を承ります。当日のご予約、大人数でのご利用、貸切についてはお電話でお問い合わせください。" },
    name: { en: "Full name", ja: "お名前" }, email: { en: "Email address", ja: "メールアドレス" }, phone: { en: "Phone number", ja: "電話番号" }, date: { en: "Date", ja: "日付" }, time: { en: "Time", ja: "時間" }, guests: { en: "Guests", ja: "人数" }, seating: { en: "Seating preference", ja: "お席のご希望" }, occasion: { en: "Occasion or request", ja: "ご利用目的・ご要望" },
    counter: { en: "Counter seating", ja: "カウンター席" }, private: { en: "Private room", ja: "個室" }, table: { en: "Regular table", ja: "テーブル席" }, submit: { en: "Confirm reservation", ja: "予約を確定する" },
    note: { en: "A table request is confirmed when the booking reference appears below. The restaurant may contact you if it needs to clarify any details.", ja: "ご予約番号が表示されると受付完了です。内容の確認が必要な場合は、店舗よりご連絡することがあります。" },
    confirmed: { en: "Your table is reserved.", ja: "ご予約を承りました。" }, successBody: { en: "Thank you. Please keep your booking reference for your records.", ja: "ありがとうございます。予約番号をお控えください。" }, reference: { en: "Booking reference", ja: "予約番号" }, call: { en: "Call +81 465-32-0707", ja: "+81 465-32-0707 に電話する" }, saveError: { en: "Reservations could not be saved. Please call the restaurant instead.", ja: "ご予約を保存できませんでした。恐れ入りますが店舗へお電話ください。" }, available: { en: "Available", ja: "空席あり" }, unavailable: { en: "Unavailable", ja: "満席" }, chooseDate: { en: "Choose a date to check live availability.", ja: "日付を選択すると空席状況を確認できます。" }, checking: { en: "Checking availability…", ja: "空席を確認中…" },
  },
  cancellation: {
    eyebrow: { en: "Reservation management", ja: "ご予約の管理" }, title: { en: "Release this table?", ja: "このご予約を取り消しますか？" }, body: { en: "This action will cancel the reservation and make the table available again.", ja: "ご予約を取り消し、お席を再びご案内可能な状態にします。" }, confirm: { en: "Cancel reservation", ja: "予約を取り消す" }, completed: { en: "Reservation cancelled", ja: "ご予約を取り消しました" }, invalid: { en: "We could not find a reservation reference in this link.", ja: "このリンクには予約番号が含まれていません。" }, error: { en: "This cancellation could not be completed. Please contact the restaurant.", ja: "取り消し処理を完了できませんでした。店舗へお問い合わせください。" },
  },
} as const;
