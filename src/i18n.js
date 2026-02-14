import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        logo: "GOLDEN FORK",
        menu: "Menu",
        story: "Our Story",
        contact: "Contact",
        cart: "Cart",
        reserve: "Reserve"
      },
      menuGrid: {
        title: "Signature Creations",
        all: "All",
        appetizers: "Appetizers",
        entrees: "Entrées",
        desserts: "Desserts",
        addToCart: "Add to Cart",
        loadMore: "Load More",
        loadLess: "Load Less"
      },
      menuItems: {
        wagyu_tartare: { title: "Wagyu Truffle Tartare", description: "A5 Wagyu beef, black truffle shavings, quail egg yolk, gold leaf." },
        lobster_risotto: { title: "Saffron Lobster Risotto", description: "Arborio rice, Maine lobster tail, saffron threads, parmesan crisp." },
        seared_scallops: { title: "Golden Seared Scallops", description: "Pan-seared scallops, cauliflower purée, caviar beurre blanc." },
        ossetra_caviar: { title: "Royal Ossetra Caviar", description: "Served with buckwheat blinis, crème fraîche, and chives." },
        foie_gras: { title: "Pan-Seared Foie Gras", description: "Fig jam, toasted brioche, balsamic reduction." },
        sea_bass: { title: "Miso Glazed Chilean Sea Bass", description: "Bok choy, ginger dashi broth, lotus root chips." },
        rack_of_lamb: { title: "Herb-Crusted Rack of Lamb", description: "Ratatouille, rosemary jus, mint pesto." },
        king_crab: { title: "Butter Poached King Crab", description: "Asparagus, lemon beurre blanc, tarragon oil." },
        gold_steak: { title: "24K Gold Leaf Steak", description: "Filet Mignon, truffle mashed potatoes, gold leaf." },
        chocolate_sphere: { title: "Valrhona Chocolate Sphere", description: "Warm caramel sauce, hazelnut praline, gold dust." },
        yuzu_tart: { title: "Yuzu Lemon Tart", description: "Meringue clouds, raspberry coulis, candied zest." },
        tiramisu: { title: "Gold Leaf Tiramisu", description: "Mascarpone cream, espresso-soaked ladyfingers, 24k gold." }
      }
    }
  },
  ar: {
    translation: {
      nav: {
        logo: "Golden Fork",
        menu: "القائمة",
        story: "قصتنا",
        contact: "تواصل معنا",
        cart: "عربة التسوق",
        reserve: "احجز"
      },
      menuGrid: {
        title: "إبداعاتنا المميزة",
        all: "الكل",
        appetizers: "المقبلات",
        entrees: "الأطباق الرئيسية",
        desserts: "الحلويات",
        addToCart: "أضف للسلة",
        loadMore: "عرض المزيد",
        loadLess: "عرض أقل"
      },
      menuItems: {
        wagyu_tartare: { title: "تارتار واغيو بالكمأة", description: "لحم واغيو A5، شرائح الكمأة السوداء، صفار بيض السمان، ورق الذهب." },
        lobster_risotto: { title: "ريزوتو الكركند بالزعفران", description: "أرز أربوريو، ذيل كركند ماين، خيوط الزعفران، رقائق البارميزان." },
        seared_scallops: { title: "اسكالوب محمر ذهبي", description: "اسكالوب محمر، هريس القرنبيط، كافيار بصلصة الزبدة البيضاء." },
        ossetra_caviar: { title: "كافيار أوسيترا الملكي", description: "يقدم مع بليني الحنطة السوداء، والكريمة الطازجة، والثوم المعمر." },
        foie_gras: { title: "كبد الاوز المحمر", description: "مربى التين، بريوش محمص، صلصة البلسميك." },
        sea_bass: { title: "سمك القاروص التشيلي بالميسو", description: "بوك تشوي، مرق داشي بالزنجبيل، رقائق جذور اللوتس." },
        rack_of_lamb: { title: "ضلع الحمل بالأعشاب", description: "راتاتوي، مرق إكليل الجبل، بيستو النعناع." },
        king_crab: { title: "سلطعون الملك المسلوق بالزبدة", description: "هليون، صلصة الزبدة والليمون، زيت الطرخون." },
        gold_steak: { title: "شريحة لحم بورق الذهب عيار 24", description: "فيليه مينيون، بطاطس مهروسة بالكمأة، ورق الذهب." },
        chocolate_sphere: { title: "كرة شوكولاتة فالرونا", description: "صلصة الكراميل الدافئة، برالين البندق، غبار الذهب." },
        yuzu_tart: { title: "تارت ليمون يوزو", description: "سحب الميرانغ، كولي التوت، قشر مسكر." },
        tiramisu: { title: "تيراميسو ورق الذهب", description: "كريمة الماسكاربوني، أصابع الست المنقوعة في الإسبريسو، ذهب عيار 24." }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;