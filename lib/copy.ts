export type Lang = 'he' | 'en';

export const copy = {
  he: {
    nav: {
      services: 'שירותים',
      pillars: 'הגישה',
      conditions: 'מצבים',
      about: 'אודות',
      contact: 'צור קשר',
      cta: 'לשיחת ייעוץ',
    },
    hero: {
      eyebrow: 'מקבלים כעת לקוח אחד חדש בלבד',
      headline: 'אבא שלך מגיע ליותר ממטפל',
      sub: 'מנהל טיפול גריאטרי פרטי שמיישם בעצמו את כל מערכת הטיפול — תרופות, פיזיותרפיה, תזונה, ניידות וליווי קוגניטיבי — ומדווח אליכם בכתב, בכל יום ביקור.',
      ctaPrimary: 'קביעת שיחת ייעוץ',
    },
    problem: {
      eyebrow: 'האתגר',
      headline: 'הטיפול בהורה מבוגר לא צריך לאכול את כל החיים שלכם',
      body: 'הפיזיותרפיסט מגיע פעם בשבוע ומשאיר הוראות. הדיאטן שולח תפריט. הרופא רושם תרופה. אבל מי באמת מבצע את הכל יום אחר יום? מי מתעד? מי מתאם בין הצוות הרפואי? בדרך כלל — אתם. מהמשרד, מחו״ל, בלילות.',
    },
    approach: {
      eyebrow: 'הגישה שלנו — אקטיבציה של הלקוח',
      headline: 'מקצוען אחד. אחריות מלאה. תיעוד יומי.',
      body: 'במקום לתאם בין חמישה אנשי מקצוע ולקוות שהמידע יזרום ביניהם — אתם מקבלים אדם אחד שמכיר את אבא שלכם לעומק, נוכח בכל פגישה רפואית, מבצע את כל הטיפולים בעצמו, ומדווח אליכם בכתב בכל יום ביקור.',
      bullets: [
        'מבצע בעצמו את כל תרגילי הפיזיותרפיה והריפוי בעיסוק — ישירות לפי הנחיית המומחה',
        'מכין ארוחות לפי תפריט רפואי, עוקב אחר צריכה והפרשה, מזהה סימני התייבשות וחוסר ספיגה',
        'מנהל לוח תרופות מלא — מינונים, הזכרות, תיאום עם בית המרקחת, וידוא נטילה',
        'מתאם ישירות עם רופא המשפחה, גריאטר, פיזיותרפיסט, דיאטן ובית חולים בעת הצורך',
        'מתעד יומית: סימפטומים, סימנים חיוניים, מצב רוח, קוגניציה, התקדמות פיזיותרפית',
        'מדווח לבני המשפחה בוואטסאפ, באימייל או בשיחה — בקצב שמתאים לכם',
      ],
    },
    services: {
      title: 'מה אנחנו מבצעים בכל ביקור',
      subtitle: 'תוכנית רווחה מקיפה, מבוצעת בבית, על ידי מנהל טיפול אחד עם רקע קליני ישיר.',
      items: [
        { title: 'יישום פיזיותרפיה קליני', desc: 'נוכח בכל פגישת פיזיותרפיה, לומד את הטכניקה ישירות מהמומחה, ומבצע את התרגילים בבית במהלך השבוע — בצורה הנכונה, במינון הנכון, ללא הפסקות.' },
        { title: 'ריפוי בעיסוק וגירוי קוגניטיבי', desc: 'משחקי לוח, פעילויות מוטוריות עדינות, אימון זיכרון ותרגול תפקודי — נבחרים לפי המצב הקוגניטיבי הנוכחי, מעודכנים עם השינויים.' },
        { title: 'תזונה רפואית והכנת ארוחות', desc: 'בתאום עם דיאטנית קלינית. עוקב אחר צריכה, הידרציה, והפרשה — מזהה מוקדם סימני התייבשות, עצירות וחוסר ספיגה, ומיישם תפריט מותאם רפואית.' },
        { title: 'ניהול תרופות ועמידה במינון', desc: 'פיקוח מלא על לוח התרופות, וידוא נטילה, מעקב אחר תופעות לוואי, תיאום מילוי מרשמים, ותקשורת עם בית המרקחת והרופא הרושם.' },
        { title: 'ניידות, העברות ומניעת נפילות', desc: 'מיומן בהעברות בטוחות, הליכה מלווה, התאמת הבית למניעת נפילות. הכשרה בטיפול בלקוחות מוגבלי תנועה, פוסט-שבץ, ופרקינסון.' },
        { title: 'ליווי רוחני ומסורתי', desc: 'סדר תפילות יומי, לימוד גמרא או חומש, שמירה על הקשר הרוחני שעושה את החיים בעלי משמעות. מותאם לרקע ולמסורת המשפחה.' },
        { title: 'פעילות חוץ טיפולית', desc: 'הליכה יומית, יציאה לפארק, הליכה מלווה לבית הכנסת, סידורים בקהילה — חשיפה מבוקרת לאוויר צח ולחברה, חלק מהתוכנית הקלינית.' },
        { title: 'ליווי עומק ונוכחות קוגניטיבית', desc: 'נוכחות אמיתית — לא רק במקום. שיחות, שירה משותפת, תיעוד היסטוריה אישית למזכרת משפחתית, האזנה סבלנית. גירוי קוגניטיבי דרך קשר אנושי.' },
        { title: 'מנוחה מובנית ושיקום', desc: 'זמני שינה ומנוחה מתוזמנים, סביבה רגועה, תזמון נכון של הפסקות בין פעילויות — לאזן עומס פיזי וקוגניטיבי לאורך היום.' },
      ],
    },
    pillars: {
      title: 'ארבעת עמודי הטיפול',
      subtitle: 'מתודולוגיה קלינית, פותחה מתוך כמעט שלוש שנות עבודה ישירה עם מטופלי פרקינסון, דמנציה, ומגבלות פיזיות וקוגניטיביות מורכבות.',
      items: [
        {
          number: '01',
          title: 'פיקוח רפואי וטיפול אישי',
          summary: 'הניהול היומיומי של בריאות הלקוח — מהמינון הראשון של הבוקר עד הדיווח לרופא בערב.',
          details: [
            { h: 'ניהול תרופות', b: 'פיקוח מלא על לוח הזמנים, וידוא מינונים, מעקב אחר תופעות לוואי, תיאום עם בית המרקחת והרופא הרושם.' },
            { h: 'היגיינה בכבוד', b: 'תמיכה מלאה בלבוש, רחצה, וטיפול בבריחת שתן — בדגש מוחלט על כבוד הלקוח ונוחות פיזית.' },
            { h: 'ניידות ובטיחות', b: 'חזק פיזית ומיומן בהעברות בטוחות, הערכת סיכוני נפילה, התאמות בסביבה הביתית.' },
            { h: 'תיעוד ודיווח', b: 'יומן יומי מפורט: סימפטומים, מינונים, פיזיותרפיה, צריכה תזונתית, מצב רוח, קוגניציה. נמסר לצוות הרפואי ולמשפחה.' },
          ],
        },
        {
          number: '02',
          title: 'יסוד עיכולי — מפתח ההישרדות',
          summary: 'בלי עיכול תקין — שום דבר אחר לא עובד. תרופות לא נספגות, פיזיותרפיה לא מתודלקת, הגוף לא מתחזק את עצמו.',
          details: [
            { h: 'אינטגרציה מערכתית', b: 'מתעדף עיכול תקין כיסוד הלא-מתפשר של כל הטיפול. ללא יסוד עיכולי תקין — הטיפול הרפואי קורס, גם אם נראה טוב על הנייר.' },
            { h: 'תיאום קליני', b: 'עובד בשיתוף הדוק עם דיאטניות ותזונאיות לניהול הצריכה ומעקב הפרשה. מוודא שמערכת ה״מנוע״ של הגוף עובדת בפועל.' },
            { h: 'זיהוי מוקדם', b: 'מזהה סימנים מוקדמים של התייבשות, עצירות, וחוסר ספיגה — מסלים לרופא לפני שהמצב הופך למשבר.' },
          ],
        },
        {
          number: '03',
          title: 'יישום פיזיותרפיה ותנועה טיפולית',
          summary: 'נוכח בפגישות עם המומחה — לומד את הטכניקה ישירות. מיישם בבית במהלך השבוע. שום תרגיל לא ״הולך לאיבוד״.',
          details: [
            { h: 'יישום קליני', b: 'משתתף בפגישות פיזיותרפיה ו-OT מקצועיות כדי ללמוד את השגרות ישירות מהמומחה — מבטיח ביצוע נכון בבית.' },
            { h: 'תנועה אינטגרטיבית', b: 'מיישם שגרות מתיחה מתואמות ומסאז\' טיפולי לאורך היום לשמירה על גמישות.' },
            { h: 'שגרות מותאמות', b: 'כשהשגרה הסטנדרטית לא ניתנת לביצוע, מחליף בתנועות חלופיות מתואמות מראש — להתקדמות עקבית בלי מאמץ יתר.' },
          ],
        },
        {
          number: '04',
          title: 'מסגרת, יציאות ונוכחות קוגניטיבית',
          summary: 'יום מובנה. יציאות שמשמשות מטרה. נוכחות אמיתית של אדם שאכפת לו.',
          details: [
            { h: 'שגרה פעילה', b: 'יצירת לוח זמנים יומי צפוי שמתעדף יציאות ופעילויות שמגרות את הגוף ואת המוח.' },
            { h: 'ליווי עומק', b: 'נוכחות מלאה וקשובה. שיחות, שירה משותפת, תיעוד היסטוריה אישית למזכרת משפחתית, האזנה סבלנית — באמת איתו.' },
            { h: 'ליווי רוחני', b: 'זמין לתפילה ולימוד יומיים — חיבור לחיים הרוחניים שעושים את החיים משמעותיים, מותאם לרקע המשפחתי.' },
          ],
        },
      ],
    },
    conditions: {
      title: 'מצבים ותחומי התמחות',
      subtitle: 'נסיון ישיר בניהול מקרים מורכבים פיזית וקוגניטיבית.',
      items: [
        { title: 'מחלת פרקינסון', desc: 'ניהול שלבי מחלה מתקדמים, תפעול מינוני L-Dopa, תיזמון פעילות בחלונות ה-on, ניהול תקופות ה-off.' },
        { title: 'דמנציה ושיטיון', desc: 'אלצהיימר, דמנציה כלי-דם, גופי לואי, פרונטוטמפורלי. שגרות מבניות, גירוי קוגניטיבי, ניהול שינויים התנהגותיים.' },
        { title: 'התאוששות פוסט-שבץ', desc: 'יישום פיזיותרפיה שיקומית, ניהול אפזיה, שיקום מוטורי, תיאום עם רופא משקם.' },
        { title: 'מוגבלות תנועה', desc: 'לקוחות מרותקים לכיסא גלגלים או מוגבלי תנועה — העברות בטוחות, מניעת פצעי לחץ, שמירה על טווחי תנועה.' },
        { title: 'ירידה קוגניטיבית', desc: 'הערכה מתמשכת, מסגרת תומכת, גירוי דרך פעילות מובנית — האטה של תהליך הירידה.' },
        { title: 'ניהול מחלות כרוניות', desc: 'סוכרת, מחלות לב, COPD, אי-ספיקת כליות — ניהול תרופתי, מעקב יומי, הסלמה מוקדמת לרופא.' },
        { title: 'שיקום פוסט-אשפוז', desc: 'גשר בטוח בין בית החולים והבית — תיאום הוצאה, יישום הוראות שחרור, מעקב לסיבוכים.' },
      ],
    },
    how: {
      title: 'איך מתחילים',
      steps: [
        { t: 'שיחת היכרות', b: 'שיחה של 30 דקות איתכם להבין את המצב הרפואי, את האתגרים היומיומיים, ואת הציפיות מהליווי. ללא עלות, ללא התחייבות.' },
        { t: 'ביקור הערכה ובניית תוכנית', b: 'פגישה בבית עם הלקוח, סקירת התיק הרפואי, פגישה עם רופא המשפחה במידת הצורך — ובניית תוכנית רווחה שבועית מלאה ומותאמת.' },
        { t: 'ביצוע, תיעוד, ודיווח', b: 'ביקורים שבועיים קבועים (בדרך כלל יום שלם), ביצוע מלא של התוכנית, תיעוד יומי, ודיווח מסודר אליכם בקצב שמתאים — וואטסאפ, אימייל, או שיחה.' },
      ],
    },
    why: {
      title: 'מה הופך את השירות לשונה',
      colA: 'מטפל סיעודי',
      colB: 'מנהל טיפול',
      colC: 'מנהל וטיפול אישי',
      rows: [
        ['נוכח בבית, לא מבצע טיפולים', 'מתאם בין מומחים מרחוק', 'נוכח, מתאם, ומבצע — באותו אדם'],
        ['ללא תיאום ישיר עם רופאים', 'תיאום אדמיניסטרטיבי בלבד', 'נוכח בפגישות רפואיות, מבצע הוראות ישירות'],
        ['ללא תיעוד יומי', 'דוחות חודשיים', 'תיעוד יומי + דיווח קבוע למשפחה'],
        ['לא מקצועי בתחום הגריאטרי', 'המשפחה צריכה לוודא ביצוע', '3 שנות נסיון בפרקינסון, דמנציה ומגבלות מורכבות'],
        ['בלי אחריות קלינית', 'אחריות תיאום בלבד', 'אחריות מלאה — מהמינון הראשון של הבוקר עד הדיווח בערב'],
      ],
    },
    family: {
      title: 'אנחנו עובדים בשיתוף עם המשפחה',
      subtitle: 'שקיפות מלאה ותקשורת קבועה — לא תכונה, אלא הליבה של השירות.',
      row1: { t: 'דיווח לבני המשפחה בכל יום ביקור', b: 'בכל יום ביקור, אתם מקבלים סיכום מסודר: מה בוצע, איך אבא הרגיש, אם היו שינויים בסימפטומים, מה הוחלט. בקצב שמתאים — וואטסאפ, אימייל, או שיחה.' },
      row2: { t: 'תוכנית טיפול מתועדת ושקופה', b: 'כל החלטה, כל מינון, כל תרגיל — מתועד בכתב. אתם מקבלים גישה מלאה למסמך הטיפול בכל רגע, ויודעים בדיוק איפה אבא עומד.' },
      closing: 'כי טיפול אמיתי בהורה — מתחיל באמון של המשפחה.',
    },
    founder: {
      eyebrow: 'מי שעומד מאחורי השירות',
      headline: 'דני דרטלר — מנהל וטיפול אישי פרטי',
      body: 'שמי דני דרטלר. במשך כמעט שלוש שנים אני מלווה לקוחות עם פרקינסון, דמנציה, ומגבלות פיזיות וקוגניטיביות מורכבות — בבית שלהם, באופן אישי, יום אחר יום.\n\nהגישה שלי מבוססת על אקטיבציה של הלקוח: רואה את המצב מנקודת המבט שלו, ופועל לטובתו בכל רגע. אני לוקח תפקיד אקטיבי בתמיכה בנוחות, בריאות, בטיחות ורווחה כללית. דרך אמפתיה, האזנה ונוכחות מלאה, כל לקוח מרגיש מובן, נתמך ומטופל באמת.\n\nאני אמין, קשוב, ומהיר ללמוד את השגרות, ההעדפות והצרכים הייחודיים של כל לקוח. כיום אני זמין ללקוח אחד מסור, באופן מלא או בתדירות גבוהה.',
      credentials: 'מנהל וטיפול אישי פרטי · 3 שנות נסיון · מתמחה בפרקינסון, דמנציה ומגבלות מורכבות · רמת בית שמש',
    },
    references: {
      title: 'מה אומרים בני המשפחה',
      subtitle: 'הפניות מקצועיות וממשפחות לקוחות זמינות בבקשה.',
      body: 'נשמח לחבר אתכם ישירות עם משפחות שדני עובד או עבד איתן — שתשמעו מהן בעצמכם, בלי תיווך, על איך נראה השירות הזה ביום-יום אמיתי.',
      cta: 'צרו קשר לבקשת הפניות',
    },
    faq: {
      title: 'שאלות נפוצות',
      items: [
        { q: 'מה ההבדל בין מנהל וטיפול אישי לבין מטפל סיעודי?', a: 'מטפל סיעודי נוכח בבית ומספק עזרה בסיסית. מנהל וטיפול אישי הוא מקצוען עם רקע קליני שמבצע בעצמו את כל הטיפולים — פיזיותרפיה, ניהול תרופות, מעקב רפואי, תיאום עם הצוות הרפואי, ותיעוד יומי. השירות יותר מקיף, יותר אקטיבי, ויותר אחראי קלינית.' },
        { q: 'באילו מצבים יש לדני הכי הרבה נסיון?', a: 'מחלת פרקינסון בכל שלביה (כולל ניהול מינוני L-Dopa וחלונות on/off), דמנציה (אלצהיימר, דמנציה כלי-דם, גופי לואי), התאוששות פוסט-שבץ, מוגבלות תנועה, וניהול מחלות כרוניות מורכבות.' },
        { q: 'האם אתם עובדים עם הרופאים הקיימים של אבא?', a: 'בהחלט — זה חלק מרכזי מהשירות. דני נוכח בפגישות עם רופא המשפחה, גריאטר, פיזיותרפיסט ודיאטן. הוא מקבל הוראות ישירות, מיישם אותן בבית, ומדווח חזרה. הצוות הרפואי הקיים מקבל מידע מדויק ועקבי.' },
        { q: 'איך נראה דיווח יומי?', a: 'בכל יום ביקור: מינוני תרופות שניתנו, סימפטומים שצויינו, שינויים במצב רוח או קוגניציה, ביצוע פיזיותרפיה (אילו תרגילים, בכמה חזרות), צריכת מזון ושתייה, הפרשה, ופעילויות. הסיכום נמסר בוואטסאפ, באימייל או בשיחה — לפי הקצב שאתם מבקשים.' },
        { q: 'באילו אזורים אתם פועלים?', a: 'רמת בית שמש א\', בית שמש, ביתר עילית, מודיעין עילית, וירושלים. זמינות לקצרי-טווח גם באזורים נוספים — צרו קשר לבדיקה.' },
        { q: 'מה הזמינות?', a: 'מקבלים כעת לקוח אחד חדש בלבד, באופן מלא או בתדירות גבוהה. גישת הריכוז הזו מאפשרת להעניק עומק שלא ניתן לתת לכמה לקוחות במקביל.' },
        { q: 'מה קורה במצב חירום?', a: 'במצב חירום רפואי — קוראים למד״א מיידית. דני זמין טלפונית במהלך היום לכל שאלה דחופה, ובמהלך הביקור עצמו הוא מסלים את כל מה שמצריך התייחסות רפואית מיידית לרופא המתאים.' },
        { q: 'כמה זה עולה?', a: 'התמחור נקבע לפי היקף השירות — מספר ימים בשבוע, מספר שעות, ומורכבות המצב. בשיחת ההיכרות נעבור על המצב הספציפי ונציג הצעת מחיר ברורה ומלאה. שקיפות מלאה מההתחלה.' },
        { q: 'האם דני זמין גם לעבודה משלימה?', a: 'כן. למרות שהשירות המלא הוא חבילה מקיפה, דני זמין גם לעבודה משלימה — אם למשפחה כבר יש מערכת תמיכה במקום, הוא יעבוד בתוכה כדי להבטיח את הבריאות והרווחה הטובה ביותר ללקוח.' },
        { q: 'יש הפניות?', a: 'כן — הפניות מקצועיות ממשפחות לקוחות זמינות לבקשה. נשמח לחבר אתכם ישירות עם משפחות שדני עובד או עבד איתן.' },
      ],
    },
    cta: {
      headline: 'תפסיקו לתאם. תתחילו לסמוך.',
      sub: 'שיחת ייעוץ של 30 דקות, ללא עלות. נבין יחד אם השירות מתאים לאבא שלכם — ואם לא, נכוון אתכם לאן שכן יתאים.',
      primary: 'קביעת שיחת ייעוץ',
      secondary: 'צרו קשר בוואטסאפ',
      availability: 'מקבלים כעת לקוח אחד חדש בלבד · בתהליך בקשה',
    },
    footer: {
      tagline: 'ניהול וטיפול גריאטרי פרטי. בכבוד. בבית. כל יום.',
      contact: 'צור קשר',
      areasTitle: 'אזורי שירות ושעות',
      areas: 'רמת בית שמש א\' · בית שמש · ביתר עילית · מודיעין עילית · ירושלים',
      hours: 'א\'-ה\' 7:00-19:00 · ו\' 7:00-13:00 · זמינות לחירומים גם מחוץ לשעות',
      copyright: '© 2026 Eitzikna · דני דרטלר — מנהל וטיפול אישי פרטי. כל הזכויות שמורות.',
    },
  },
  en: {
    nav: {
      services: 'Services',
      pillars: 'Methodology',
      conditions: 'Conditions',
      about: 'About',
      contact: 'Contact',
      cta: 'Free Consultation',
    },
    hero: {
      eyebrow: 'Currently accepting one new client',
      headline: 'Your Father Deserves More Than a Caregiver',
      sub: 'A private geriatric Care Manager who personally implements the entire care plan — medication, physical therapy, nutrition, mobility, and cognitive engagement — and reports back to you, in writing, every visit day.',
      ctaPrimary: 'Schedule a Consultation',
    },
    problem: {
      eyebrow: 'The Challenge',
      headline: "Caring for an Aging Parent Shouldn't Consume Your Life",
      body: 'The physical therapist visits once a week and leaves instructions. The dietitian sends a meal plan. The doctor prescribes medication. But who actually implements all of it day to day? Who documents? Who coordinates between the medical team? Usually — you do. From the office, from abroad, at night.',
    },
    approach: {
      eyebrow: 'Our Approach — Client Advocacy',
      headline: 'One Professional. Complete Accountability. Daily Documentation.',
      body: "Instead of coordinating five different specialists and hoping the information flows between them — you get one person who knows your father deeply, attends every medical appointment, personally executes every treatment, and reports back to you in writing every visit day.",
      bullets: [
        'Hands-on implementation of all PT and OT exercises — directly under the specialist\'s instruction',
        'Prepares meals per the medical diet, monitors intake and output, identifies early signs of dehydration and malabsorption',
        'Manages the full medication schedule — dosing, reminders, pharmacy coordination, dose verification',
        'Coordinates directly with the family physician, geriatrician, PT, dietitian, and hospital when needed',
        'Daily documentation: symptoms, vitals, mood, cognition, PT progression',
        'Reports to family via WhatsApp, email, or call — at the cadence that works for you',
      ],
    },
    services: {
      title: 'What We Execute at Every Visit',
      subtitle: 'A comprehensive wellness plan, executed in-home, by one Care Manager with direct clinical experience.',
      items: [
        { title: 'Clinical PT Implementation', desc: 'Attends every professional PT session, learns the technique directly from the specialist, and executes the routine in-home throughout the week — correctly, at the right intensity, without gaps.' },
        { title: 'Occupational & Cognitive Therapy', desc: 'Board games, gentle motor activities, memory exercises, and functional task practice — selected based on current cognitive status, updated as the situation changes.' },
        { title: 'Medical Nutrition & Meal Preparation', desc: 'In coordination with a clinical dietitian. Tracks intake, hydration, and output — identifies early signs of dehydration, constipation, and malabsorption — and implements the medically-tailored menu.' },
        { title: 'Medication Management & Compliance', desc: 'Full oversight of the medication schedule, dose verification, side-effect monitoring, prescription refill coordination, and direct communication with the pharmacy and prescribing physician.' },
        { title: 'Mobility, Transfers & Fall Prevention', desc: "Skilled in safe transfers, assisted ambulation, and home environment adaptation. Trained in care for limited-mobility clients, post-stroke recovery, and Parkinson's." },
        { title: 'Spiritual Care & Tradition', desc: "Daily tefilla, learning Gemara or Chumash, preserving the spiritual connection that makes life meaningful. Tailored to the family's background and tradition." },
        { title: 'Therapeutic Outdoor Activity', desc: 'Daily walks, park outings, escorted shul attendance, community errands — controlled exposure to fresh air and social environment, treated as part of the clinical plan.' },
        { title: 'Deep Companionship & Cognitive Presence', desc: 'Real presence — not just being in the room. Conversations, shared singing, recording personal history as a family memoir, patient listening. Cognitive stimulation through human connection.' },
        { title: 'Structured Rest & Restoration', desc: 'Scheduled rest and sleep windows, calm environment, properly timed breaks between activities — to balance physical and cognitive load throughout the day.' },
      ],
    },
    pillars: {
      title: 'The Four Pillars of Care',
      subtitle: "A clinical methodology developed over nearly three years of direct work with Parkinson's, dementia, and complex physical and cognitive cases.",
      items: [
        {
          number: '01',
          title: 'Medical Supervision & Personal Care',
          summary: "The day-to-day management of the client's health — from the first morning dose to the evening report to the physician.",
          details: [
            { h: 'Medication Management', b: 'Full oversight of schedules, dose verification, side-effect tracking, and coordination with the pharmacy and prescribing physician.' },
            { h: 'Hygiene with Dignity', b: "Comprehensive support with dressing, bathing, and incontinence care — delivered with strict respect for the client's dignity and physical comfort." },
            { h: 'Mobility & Safety', b: 'Physically strong and skilled in safe transfers, fall-risk assessment, and home environment adaptation.' },
            { h: 'Accountability Logging', b: 'Detailed daily records: symptoms, doses, PT performance, dietary intake, mood, cognition. Provided to the medical team and the family.' },
          ],
        },
        {
          number: '02',
          title: 'Digestive Foundation — The Key to Survival',
          summary: 'Without proper digestion — nothing else works. Medications cannot absorb, PT cannot be fueled, the body cannot sustain itself.',
          details: [
            { h: 'Systems Integration', b: 'Treats digestive function as the non-negotiable foundation of all care. Without it, the medical plan collapses regardless of how good it looks on paper.' },
            { h: 'Clinical Coordination', b: 'Works in close coordination with dietitians and nutritionists to manage intake and monitor output. Ensures the body\'s "engine" is actually running.' },
            { h: 'Early Detection', b: 'Identifies early signs of dehydration, constipation, and malabsorption — escalates to the physician before a crisis develops.' },
          ],
        },
        {
          number: '03',
          title: 'PT Facilitation & Therapeutic Movement',
          summary: 'Present at sessions with the specialist — learning the technique directly. Implements at home throughout the week. No exercise gets lost in translation.',
          details: [
            { h: 'Clinical Implementation', b: 'Attends professional PT and OT sessions to master routines directly from the specialist — ensuring exercises are performed correctly at home.' },
            { h: 'Integrated Mobility', b: 'Implements coordinated stretching routines and therapeutic massage throughout the day to maintain flexibility.' },
            { h: 'Adaptive Routines', b: "When the standard routine isn't viable, substitutes pre-coordinated alternative movements to ensure consistent progress without overexertion." },
          ],
        },
        {
          number: '04',
          title: 'Structure, Outings & Cognitive Presence',
          summary: 'A structured day. Outings with purpose. The real presence of someone who actually cares.',
          details: [
            { h: 'Active Routine', b: 'A predictable daily schedule that prioritizes meaningful outings and activities designed to stimulate both mind and body.' },
            { h: 'Deep Companionship', b: 'Full, attentive presence. Whether singing together, recording personal history for a memoir, or simply being a patient listener — truly with the client.' },
            { h: 'Spiritual Support', b: "Available for daily davening and learning — a connection to tradition tailored to the client's background and family." },
          ],
        },
      ],
    },
    conditions: {
      title: 'Conditions & Areas of Expertise',
      subtitle: 'Direct experience managing physically and cognitively complex cases.',
      items: [
        { title: "Parkinson's Disease", desc: 'Management across all disease stages, L-Dopa dosing protocols, activity timing within "on" windows, navigation of "off" periods.' },
        { title: 'Dementia', desc: "Alzheimer's, vascular dementia, Lewy body, frontotemporal. Structured routines, cognitive stimulation, behavioral change management." },
        { title: 'Post-Stroke Recovery', desc: 'Rehabilitation PT implementation, aphasia management, motor recovery, coordination with the physiatrist.' },
        { title: 'Limited Mobility', desc: 'Wheelchair-bound or mobility-impaired clients — safe transfers, pressure-injury prevention, range-of-motion preservation.' },
        { title: 'Cognitive Decline', desc: 'Ongoing assessment, supportive structure, stimulation through structured activity — slowing the trajectory of decline.' },
        { title: 'Chronic Disease Management', desc: 'Diabetes, heart disease, COPD, renal insufficiency — medication management, daily monitoring, early escalation.' },
        { title: 'Post-Hospital Discharge', desc: 'Safe bridge between hospital and home — discharge coordination, implementation of discharge instructions, complication monitoring.' },
      ],
    },
    how: {
      title: 'How to Begin',
      steps: [
        { t: 'Introductory Call', b: 'A 30-minute conversation with you to understand the medical situation, the daily challenges, and the expectations of the engagement. Free, no obligation.' },
        { t: 'Assessment Visit & Plan Build', b: 'In-home visit with the client, review of medical records, meeting with the family physician where appropriate — and construction of a complete, tailored weekly wellness plan.' },
        { t: 'Implementation, Documentation, Reporting', b: 'Regular weekly visits (typically a full day), full execution of the plan, daily documentation, and structured reporting back to you at the cadence you prefer — WhatsApp, email, or call.' },
      ],
    },
    why: {
      title: 'What Makes This Different',
      colA: 'Standard Caregiver',
      colB: 'Care Manager',
      colC: 'Care Manager + Practitioner',
      rows: [
        ['Present in the home, does not implement treatments', 'Coordinates between specialists remotely', 'Present, coordinates, AND implements — same person'],
        ['No direct coordination with physicians', 'Administrative coordination only', 'Attends medical appointments, executes orders directly'],
        ['No daily documentation', 'Monthly reports', 'Daily documentation + standing reports to family'],
        ['Not professionally trained in geriatrics', 'Family must verify execution', "3 years experience in Parkinson's, dementia, complex limitations"],
        ['No clinical accountability', 'Coordination accountability only', 'Full accountability — from morning dose to evening report'],
      ],
    },
    family: {
      title: 'We Work in Partnership With the Family',
      subtitle: 'Full transparency and constant communication — not a feature, but the core of the service.',
      row1: { t: 'Family Reporting Every Visit Day', b: 'Every visit day, you receive a structured summary: what was performed, how your father felt, whether symptoms changed, what was decided. Delivered at your preferred cadence — WhatsApp, email, or call.' },
      row2: { t: 'Documented, Transparent Care Plan', b: 'Every decision, dose, and exercise — documented in writing. You have full access to the care record at any moment, and you know exactly where your father stands.' },
      closing: "Because real care for a parent begins with the family's trust.",
    },
    founder: {
      eyebrow: 'The Person Behind the Service',
      headline: 'Dani Dratler — Private Care Manager & Practitioner',
      body: "My name is Dani Dratler. For nearly three years I've worked alongside clients with Parkinson's, dementia, and complex physical and cognitive challenges — in their homes, personally, day after day.\n\nMy approach is built on client advocacy: seeing every situation from the client's perspective and acting in their best interest, every moment. I take a proactive role in supporting comfort, health, safety, and overall well-being. Through empathy, attentive listening, and full presence, every client feels understood, supported, and truly cared for.\n\nI'm reliable, attentive, and quick to learn each client's unique routines, preferences, and needs. I am currently available for one dedicated client — full-time or high-frequency.",
      credentials: "Private Care Manager & Practitioner · 3 Years Experience · Specialized in Parkinson's, Dementia & Complex Limitations · Ramat Beit Shemesh",
    },
    references: {
      title: 'What Families Are Saying',
      subtitle: 'Professional and family references available on request.',
      body: "We'd be glad to put you directly in touch with families Dani is currently working with or has worked with — so you hear, unfiltered, what this service actually looks like day to day.",
      cta: 'Contact us to request references',
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { q: 'What\'s the difference between a Private Care Manager and a regular caregiver?', a: 'A regular caregiver is present in the home and provides basic assistance. A Private Care Manager is a clinically-trained professional who personally implements the full care plan — PT, medication management, medical monitoring, coordination with the medical team, and daily documentation. The service is more comprehensive, more proactive, and clinically accountable.' },
        { q: 'What conditions does Dani have the most experience with?', a: "Parkinson's disease across all stages (including L-Dopa dosing protocols and on/off window management), dementia (Alzheimer's, vascular, Lewy body), post-stroke recovery, mobility limitations, and management of complex chronic disease." },
        { q: "Do you work with my father's existing doctors?", a: "Absolutely — it's a central part of the service. Dani attends appointments with the family physician, geriatrician, physical therapist, and dietitian. He receives instructions directly, implements them at home, and reports back. The existing medical team gets accurate, consistent information." },
        { q: 'What does daily reporting look like?', a: 'Every visit day: doses administered, symptoms noted, changes in mood or cognition, PT execution (which exercises, how many reps), food and fluid intake, output, and activities. Delivered via WhatsApp, email, or call — at the cadence you request.' },
        { q: 'What areas do you serve?', a: 'Ramat Beit Shemesh Aleph, Beit Shemesh, Beitar Illit, Modiin Illit, and Jerusalem. Available short-term in additional areas — please reach out to discuss.' },
        { q: 'What\'s your availability?', a: "Currently accepting one new client only — full-time or high-frequency. This focused approach lets Dani deliver a depth of care that's not possible across multiple clients in parallel." },
        { q: 'What happens in an emergency?', a: "In a medical emergency — call MDA immediately. Dani is reachable by phone during the day for any urgent question, and during the visit itself he escalates anything requiring immediate medical attention to the appropriate physician." },
        { q: 'How much does it cost?', a: 'Pricing is set based on the scope of service — number of days per week, number of hours, and complexity of the situation. During the introductory call we go over the specific case and present a clear, complete proposal. Full transparency from the outset.' },
        { q: 'Is Dani available for complementary care?', a: 'Yes. While the full service is a comprehensive package, Dani is equally available to provide complementary care — if a family already has specific systems in place, he\'ll work supportively within that framework to ensure the greatest health and wellness for the client.' },
        { q: 'Do you have references?', a: "Yes — professional references from client families are available on request. We're happy to put you directly in touch with families Dani is currently working with or has worked with previously." },
      ],
    },
    cta: {
      headline: 'Stop Coordinating. Start Trusting.',
      sub: "A 30-minute consultation, no cost. Together we'll see if the service is right for your father — and if not, we'll point you to where it would be.",
      primary: 'Schedule a Consultation',
      secondary: 'Contact via WhatsApp',
      availability: 'Currently accepting one new client only · By application',
    },
    footer: {
      tagline: 'Private geriatric care management. With dignity. At home. Every day.',
      contact: 'Contact',
      areasTitle: 'Service Areas & Hours',
      areas: 'Ramat Beit Shemesh Aleph · Beit Shemesh · Beitar Illit · Modiin Illit · Jerusalem',
      hours: 'Sun-Thu 7am-7pm · Fri 7am-1pm · After-hours availability for emergencies',
      copyright: '© 2026 Eitzikna · Dani Dratler — Private Care Manager & Practitioner. All rights reserved.',
    },
  },
};

// Real contact values — Dani Dratler
export const PHONE_NUMBER = '054-841-5109';
export const WHATSAPP_NUMBER = '+972 54-841-5109';
export const EMAIL = 'danielmoshedratler@gmail.com';
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`;
export const TEL_HREF = `tel:${PHONE_NUMBER.replace(/\s|-/g, '')}`;
export const GBP_URL = 'https://www.google.com/search?q=dani+dratler+care+manager+ramat+beit+shemesh';
