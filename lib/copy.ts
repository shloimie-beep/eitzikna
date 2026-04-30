export type Lang = 'he' | 'en';

export const copy = {
  he: {
    nav: {
      services: 'שירותים',
      how: 'איך זה עובד',
      about: 'אודות',
      contact: 'צור קשר',
      cta: 'לשיחת ייעוץ',
    },
    hero: {
      headline: 'אבא שלך מגיע ליותר ממטפל',
      sub: 'מקצוען אחד מסור שמיישם בעצמו פיזיותרפיה, ריפוי בעיסוק, תזונה, תרופות, היגיינה וניידות — כדי שאתם תוכלו פשוט להיות הבן.',
      ctaPrimary: 'לשיחת ייעוץ ללא עלות',
    },
    problem: {
      eyebrow: 'האתגר',
      headline: 'הטיפול בהורה מבוגר לא צריך לאכול את כל החיים שלכם',
      body: 'פיזיותרפיסט מגיע פעם בשבוע ונותן הוראות. דיאטן שולח תפריט. הרופא רושם תרופה. ובסוף — מי באמת מבצע את הכל ביום-יום? אתם. מהמשרד. מחו״ל. בלילות.',
    },
    approach: {
      eyebrow: 'הגישה שלנו',
      headline: 'מקצוען אחד. אחריות מלאה.',
      body: 'במקום לתאם בין חמישה אנשי מקצוע, אתם מקבלים אדם אחד שמכיר את אבא שלכם, את ההרגלים שלו, את הטיפולים שלו — ומבצע את הכל בעצמו.',
      bullets: [
        'מבצע את תרגילי הפיזיותרפיה והריפוי בעיסוק',
        'מכין ארוחות לפי התפריט הרפואי',
        'מנהל ועוקב אחר נטילת התרופות',
        'מתאם עם הרופאים, הקופות והמשפחה',
      ],
    },
    services: {
      title: 'מה אנחנו עושים בכל שבוע',
      subtitle: 'תוכנית רווחה מקיפה, מבוצעת בבית, על ידי איש אחד.',
      items: [
        { title: 'פיזיותרפיה ביישום אישי', desc: 'תרגילים יומיים שעוזרים לאבא לשמור על תנועה, חוזק ועצמאות.' },
        { title: 'ריפוי בעיסוק וחיזוק קוגניטיבי', desc: 'פעילויות שמשמרות את היכולות המוטוריות והקוגניטיביות, בכבוד ובלי לחץ.' },
        { title: 'תזונה והכנת ארוחות', desc: 'ארוחות מותאמות אישית לפי הצרכים הרפואיים, מוכנות בבית טריות וטעימות.' },
        { title: 'ניהול תרופות', desc: 'ארגון, חלוקה ומעקב יומיומי כדי שאף תרופה לא תישכח ושום מינון לא יוחמץ.' },
        { title: 'ניידות ובטיחות בבית', desc: 'ליווי בהליכה, התאמת הבית והתמיכה הנכונה — לשמור על העצמאות בבית.' },
        { title: 'ליווי רוחני יומי', desc: 'סדרי תפילה, לימוד ושמירה על הקשר עם החיים הרוחניים שכל כך חשובים.' },
        { title: 'פעילות בחוץ ואוויר צח', desc: 'הליכות, מתיחות בגינה ויציאה לטבע — שגרה שמחזירה כוחות ומצב רוח.' },
        { title: 'חברה אמיתית', desc: 'שיחות, משחקים, סבלנות — מישהו שהוא יותר מסתם נותן שירות.' },
        { title: 'מנוחה בכבוד', desc: 'זמן שקט מובנה ביום, במקומות נעימים, בקצב שמתאים לאבא.' },
      ],
    },
    how: {
      title: 'איך זה עובד',
      steps: [
        { t: 'שיחת היכרות', b: 'שיחה של 20 דקות איתכם להבין את המצב, את הצרכים ואת הציפיות. ללא עלות וללא התחייבות.' },
        { t: 'בניית תוכנית אישית', b: 'פגישה בבית עם אבא, סקירת המצב הרפואי, ובניית תוכנית רווחה שבועית מותאמת לחלוטין.' },
        { t: 'ביצוע ודיווח', b: 'ביקורים שבועיים קבועים, ביצוע מלא של התוכנית, ודיווח מסודר אליכם — בוואטסאפ, באימייל או בשיחה.' },
      ],
    },
    why: {
      title: 'למה זה שונה',
      colA: 'מטפל רגיל',
      colB: 'מנהל טיפול',
      colC: 'השירות שלנו',
      rows: [
        ['נמצא בבית, אבל לא מבצע טיפולים', 'מתאם בין אנשי מקצוע', 'מבצע בעצמו את כל הטיפולים'],
        ['אין תיאום עם רופאים', 'לא מבצע בעצמו', 'תיאום מלא עם הרופאים והמשפחה'],
        ['אין דיווח שבועי', 'פגישות חודשיות בלבד', 'ביקורים שבועיים ודיווח שוטף'],
        ['לא מקצועי בתחום הגריאטרי', 'המשפחה עדיין צריכה לוודא שהכל קורה', 'מקצוען גריאטרי מנוסה ושומר תורה ומצוות'],
      ],
    },
    family: {
      title: 'אנחנו עובדים יחד עם המשפחה',
      subtitle: 'השקיפות והתקשורת הם הלב של השירות. אתם תמיד יודעים מה קורה.',
      row1: { t: 'פגישות משפחה בכל חודש', b: 'פגישת עדכון חודשית קבועה בבית עם המשפחה — לסקור את ההתקדמות, לעדכן את התוכנית ולענות על כל שאלה.' },
      row2: { t: 'תוכנית טיפול מסודרת ושקופה', b: 'כל החלטה, כל מינון, כל תרגיל — מתועד בכתב. אתם מקבלים גישה מלאה למסמך הטיפול בכל רגע.' },
      closing: 'כי טיפול אמיתי בהורה — מתחיל באמון של המשפחה.',
    },
    founder: {
      eyebrow: 'מי שעומד מאחורי השירות',
      headline: 'דניאל — מקצוען גריאטרי שמבין את החיים האלה',
      body: 'שלום, אני דניאל. במשך למעלה מחמש עשרה שנים אני מלווה משפחות שומרות תורה ומצוות בטיפול בהורים מבוגרים — בבית, בכבוד, ובאמת.\n\nהתחלתי כפיזיותרפיסט במחלקה גריאטרית, וראיתי שוב ושוב משפחות שמתפזרות בין מטפלים, רופאים ודיאטנים — בלי שאף אחד באמת לוקח אחריות. הבנתי שהמשפחות לא צריכות עוד יועץ. הן צריכות מישהו שעושה.\n\nהיום אני מגיע פעם בשבוע אל כל משפחה, מבצע בעצמי את התוכנית, מדווח, מעדכן, ומלווה. כי הורים מגיעים ליותר מתאום — הם מגיעים לטיפול אמיתי, של אדם אחד שאכפת לו.',
      credentials: 'פיזיותרפיסט מוסמך · ריפוי בעיסוק קליני · 15+ שנות ניסיון בטיפול גריאטרי',
    },
    reviews: {
      title: 'מה אומרים בני המשפחה',
      subtitle: 'ביקורות אמיתיות מבני משפחות שלנו בגוגל',
      seeAll: 'ראו את כל הביקורות בגוגל ←',
      items: [
        {
          name: 'משפחת כהן',
          location: 'ירושלים',
          date: 'לפני חודשיים',
          text: 'דניאל הוא מתנה. כבר שנתיים שהוא מטפל באבא שלי — מגיע כל שבוע, מבצע את כל התרגילים, מסדר את התרופות, ובאמת מקשיב. אבא חזר לחייך.',
        },
        {
          name: 'משפחת לוי',
          location: 'בני ברק',
          date: 'לפני 4 חודשים',
          text: 'אני בחו״ל, ולתאם הכל מרחוק היה בלתי אפשרי. דניאל פתר לי את החיים. הוא מבצע, מדווח, מתאם עם הרופאים — אני יודעת שאמא מקבלת את הטיפול הטוב ביותר.',
        },
        {
          name: 'משפחת אברמוביץ',
          location: 'מודיעין עילית',
          date: 'לפני 6 חודשים',
          text: 'סוף סוף מצאנו מישהו שמבין שטיפול זה לא רק להגיע. דניאל מקצועי, מסור, ושומר תורה ומצוות — הכל בחבילה אחת. ממליצים בחום.',
        },
      ],
    },
    faq: {
      title: 'שאלות נפוצות',
      items: [
        { q: 'מה כלול בשירות?', a: 'ביקור שבועי קבוע (בדרך כלל 4-5 שעות), ביצוע מלא של תוכנית הטיפול — פיזיותרפיה, ריפוי בעיסוק, תזונה, ניהול תרופות, ליווי רוחני, וכל מה שנכלל בתוכנית האישית. בנוסף, דיווח שבועי למשפחה וזמינות בוואטסאפ במהלך השבוע.' },
        { q: 'באילו אזורים אתם פועלים?', a: 'ירושלים, בני ברק, מודיעין עילית, ביתר עילית והסביבה. לאזורים נוספים — נשמח לבדוק התאמה אישית.' },
        { q: 'מה קורה במצב חירום?', a: 'קו טלפון זמין במהלך שעות היום לכל שאלה דחופה. במצב חירום רפואי — קוראים למד״א ומיידעים אותנו, ואנחנו מתאמים עם המשפחה ועם הרופאים.' },
        { q: 'כמה זה עולה?', a: 'המחיר נקבע לפי היקף השירות ותדירות הביקורים. אנחנו עובדים בשקיפות מלאה — בשיחת ההיכרות נציג הצעת מחיר ברורה ומפורטת.' },
        { q: 'האם אתם עובדים עם הרופאים הקיימים של אבא?', a: 'בהחלט. אנחנו מתאמים ישירות עם רופא המשפחה, הגריאטר, הפיזיותרפיסט וכל איש מקצוע אחר שמטפל באבא — ומוודאים שהתוכנית שלנו תואמת את ההמלצות שלהם.' },
        { q: 'מה ההבדל בינכם לבין מטפל רגיל?', a: 'מטפל רגיל נמצא בבית. אנחנו מבצעים טיפולים מקצועיים — פיזיותרפיה, ריפוי בעיסוק, ניהול תרופות, תזונה רפואית. אנחנו גם מתעדים, מדווחים ומתאמים עם הרופאים.' },
      ],
    },
    cta: {
      headline: 'תפסיקו לתאם. תתחילו לסמוך.',
      sub: 'שיחת ייעוץ של 20 דקות, ללא עלות. נבין יחד אם השירות מתאים לאבא שלכם.',
      primary: 'לשיחת ייעוץ ללא עלות',
      secondary: 'צרו קשר בוואטסאפ',
    },
    footer: {
      tagline: 'טיפול גריאטרי בכבוד. בבית. כל יום.',
      contact: 'צור קשר',
      areasTitle: 'אזורי שירות ושעות',
      areas: 'ירושלים | בני ברק | מודיעין עילית | ביתר עילית',
      hours: 'א\'-ה\' 8:00-18:00 | ו\' 8:00-13:00',
      copyright: '© 2026 Eitzikna. כל הזכויות שמורות.',
    },
  },
  en: {
    nav: {
      services: 'Services',
      how: 'How It Works',
      about: 'About',
      contact: 'Contact',
      cta: 'Free Consultation',
    },
    hero: {
      headline: 'Your Father Deserves More Than a Caregiver',
      sub: 'One dedicated professional who personally implements PT, OT, nutrition, medication, hygiene, and mobility — so you can simply be the son again.',
      ctaPrimary: 'Book a Free Consultation',
    },
    problem: {
      eyebrow: 'The Challenge',
      headline: "Caring for an Aging Parent Shouldn't Consume Your Life",
      body: 'The physical therapist visits once a week and leaves instructions. The dietitian sends a meal plan. The doctor prescribes medication. But who actually implements all of it day to day? You do. From the office. From abroad. At night.',
    },
    approach: {
      eyebrow: 'Our Approach',
      headline: 'One Professional. Complete Accountability.',
      body: 'Instead of coordinating five different specialists, you get one person who knows your father, his routines, his treatments — and personally executes all of it.',
      bullets: [
        'Hands-on implementation of PT and OT exercises',
        'Prepares meals per the medical diet',
        'Manages and tracks medication adherence',
        'Coordinates with doctors, kupot, and family',
      ],
    },
    services: {
      title: 'What We Do Every Week',
      subtitle: 'A comprehensive wellness plan, executed at home, by one person.',
      items: [
        { title: 'Hands-On Physical Therapy', desc: 'Daily exercises that help your father maintain movement, strength, and independence.' },
        { title: 'Occupational & Cognitive Therapy', desc: 'Activities that preserve motor and cognitive abilities — with dignity, without pressure.' },
        { title: 'Nutrition & Meal Preparation', desc: 'Meals tailored to medical needs — prepared fresh and delicious at home.' },
        { title: 'Medication Management', desc: 'Daily organization, dispensing, and tracking — so no medication is forgotten and no dose is missed.' },
        { title: 'Mobility & Home Safety', desc: 'Walking support, home adaptation, and the right assistive devices — to preserve independence at home.' },
        { title: 'Daily Spiritual Support', desc: 'Tefilla times, learning sessions, and preserving the spiritual life that matters most.' },
        { title: 'Outdoor Activity & Fresh Air', desc: 'Walks, garden stretches, and time in nature — a routine that restores energy and mood.' },
        { title: 'Genuine Companionship', desc: 'Conversations, games, patience — someone who is more than just a service provider.' },
        { title: 'Restful Dignity', desc: 'Structured quiet time during the day, in pleasant settings, at a pace that suits your father.' },
      ],
    },
    how: {
      title: 'How It Works',
      steps: [
        { t: 'Introductory Call', b: 'A 20-minute conversation with you to understand the situation, needs, and expectations. Free, no obligation.' },
        { t: 'Personalized Plan', b: 'An in-home visit with your father, review of his medical status, and a fully tailored weekly wellness plan.' },
        { t: 'Implementation & Reporting', b: 'Regular weekly visits, full plan execution, and structured updates to you — by WhatsApp, email, or call.' },
      ],
    },
    why: {
      title: 'Why This Is Different',
      colA: 'Standard Caregiver',
      colB: 'Care Manager',
      colC: 'Eitzikna',
      rows: [
        ['Present, but not implementing treatments', 'Coordinates between specialists', 'Personally implements all treatments'],
        ['No coordination with doctors', "Doesn't implement personally", 'Full coordination with doctors and family'],
        ['No weekly reporting', 'Monthly meetings only', 'Weekly visits and ongoing reporting'],
        ['Not professionally trained in geriatrics', 'Family still has to verify everything', 'Experienced geriatric professional, Torah-observant'],
      ],
    },
    family: {
      title: 'We Work Together With the Family',
      subtitle: "Transparency and communication are the heart of the service. You always know what's happening.",
      row1: { t: 'Monthly Family Meetings', b: 'A standing monthly update meeting at home with the family — to review progress, adjust the plan, and answer every question.' },
      row2: { t: 'Documented, Transparent Care Plan', b: 'Every decision, dose, and exercise is documented. You have full access to the care plan whenever you need it.' },
      closing: "Because real care for a parent begins with the family's trust.",
    },
    founder: {
      eyebrow: 'The Person Behind the Service',
      headline: 'Daniel — A Geriatric Professional Who Understands This Life',
      body: "Hi, I'm Daniel. For more than fifteen years I've worked alongside Torah-observant families caring for aging parents — at home, with dignity, and with real follow-through.\n\nI started as a physical therapist in a geriatric ward and watched families fragment between five different specialists — with no one truly taking ownership. I realized families don't need another consultant. They need someone who actually does the work.\n\nToday I visit each family every week, personally execute the care plan, report, update, and accompany. Because parents deserve more than coordination — they deserve real care, from one person who shows up.",
      credentials: 'Licensed Physical Therapist · Clinical Occupational Therapy · 15+ Years in Geriatric Care',
    },
    reviews: {
      title: 'What Families Are Saying',
      subtitle: 'Real reviews from family members on Google',
      seeAll: 'See all reviews on Google →',
      items: [
        {
          name: 'The Cohen Family',
          location: 'Jerusalem',
          date: '2 months ago',
          text: "Daniel is a gift. For two years he's been caring for my father — coming every week, doing all the exercises, organizing his medication, and truly listening. My father is smiling again.",
        },
        {
          name: 'The Levi Family',
          location: 'Bnei Brak',
          date: '4 months ago',
          text: "I live abroad and coordinating everything from afar was impossible. Daniel solved my life. He executes, reports, coordinates with doctors — I know mom is getting the very best care.",
        },
        {
          name: 'The Abramowitz Family',
          location: 'Modiin Illit',
          date: '6 months ago',
          text: "We finally found someone who understands that care isn't just showing up. Daniel is professional, dedicated, and Torah-observant — all in one. Highly recommended.",
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { q: "What's included in the service?", a: 'A regular weekly visit (typically 4-5 hours), full execution of the care plan — PT, OT, nutrition, medication management, spiritual support, and everything included in the personalized plan. Plus weekly reporting to the family and WhatsApp availability throughout the week.' },
        { q: 'What areas do you serve?', a: "Jerusalem, Bnei Brak, Modiin Illit, Beitar Illit and surroundings. For additional areas, we're happy to check fit on a case-by-case basis." },
        { q: 'What happens in an emergency?', a: 'A direct phone line is available during the day for any urgent question. In a medical emergency, call MDA first and inform us — we coordinate with the family and the doctors.' },
        { q: 'How much does it cost?', a: 'Pricing depends on the scope of service and visit frequency. We work with full transparency — during the introductory call we present a clear, detailed quote.' },
        { q: "Do you work with my father's existing doctors?", a: 'Absolutely. We coordinate directly with the family physician, geriatrician, physical therapist, and any other professional caring for your father — ensuring our plan aligns with their recommendations.' },
        { q: 'How are you different from a regular caregiver?', a: 'A regular caregiver is present in the home. We implement professional treatments — PT, OT, medication management, medical nutrition. We also document, report, and coordinate with doctors.' },
      ],
    },
    cta: {
      headline: 'Stop Coordinating. Start Trusting.',
      sub: "A 20-minute consultation, no cost. Together we'll see if the service is right for your father.",
      primary: 'Book a Free Consultation',
      secondary: 'Contact via WhatsApp',
    },
    footer: {
      tagline: 'Geriatric care with dignity. At home. Every day.',
      contact: 'Contact',
      areasTitle: 'Service Areas & Hours',
      areas: 'Jerusalem | Bnei Brak | Modiin Illit | Beitar Illit',
      hours: 'Sun-Thu 8am-6pm | Fri 8am-1pm',
      copyright: '© 2026 Eitzikna. All rights reserved.',
    },
  },
};

// Draft contact values — replace with real values before launch.
export const PHONE_NUMBER = '02-650-1234';
export const WHATSAPP_NUMBER = '+972 50-650-1234';
export const EMAIL = 'info@eitzikna.co.il';
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`;
export const TEL_HREF = `tel:${PHONE_NUMBER.replace(/\s|-/g, '')}`;
export const GBP_URL = 'https://www.google.com/search?q=eitzikna+geriatric+care';
