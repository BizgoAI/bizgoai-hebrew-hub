import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-hero text-navy mb-8">מדיניות פרטיות</h1>
          
          <div className="prose prose-lg max-w-none text-right space-y-8">
            <p className="text-slate-600 text-lg">
              עדכון אחרון: ינואר 2025
            </p>

            <section>
              <h2 className="heading-card text-bright-blue mb-4">1. מבוא</h2>
              <p className="text-body-sm text-slate-700 leading-relaxed">
                BizgoAI Israel ("אנחנו", "שלנו", "החברה") מחויבת לשמירה על פרטיותכם. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלכם כאשר אתם משתמשים באתר שלנו ובשירותינו.
              </p>
            </section>

            <section>
              <h2 className="heading-card text-bright-blue mb-4">2. המידע שאנו אוספים</h2>
              <p className="text-body-sm text-slate-700 leading-relaxed mb-4">
                אנו עשויים לאסוף את סוגי המידע הבאים:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>מידע אישי: שם, כתובת אימייל, מספר טלפון</li>
                <li>מידע עסקי: שם העסק, תעשייה, גודל העסק</li>
                <li>מידע שימוש: תשובות לסימולטור, העדפות ובחירות</li>
                <li>מידע טכני: כתובת IP, סוג דפדפן, זמני גישה</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-card text-bright-blue mb-4">3. כיצד אנו משתמשים במידע</h2>
              <p className="text-body-sm text-slate-700 leading-relaxed mb-4">
                המידע שלכם משמש אותנו למטרות הבאות:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>מתן השירותים שביקשתם</li>
                <li>שיפור חווית המשתמש באתר</li>
                <li>שליחת עדכונים ותוכן רלוונטי (בהסכמתכם)</li>
                <li>ניתוח ושיפור השירותים שלנו</li>
                <li>עמידה בדרישות חוקיות</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-card text-bright-blue mb-4">4. שיתוף מידע</h2>
              <p className="text-body-sm text-slate-700 leading-relaxed">
                איננו מוכרים את המידע האישי שלכם לצדדים שלישיים. אנו עשויים לשתף מידע רק עם ספקי שירות הפועלים בשמנו, ורק במידה הנדרשת לספק את השירותים.
              </p>
            </section>

            <section>
              <h2 className="heading-card text-bright-blue mb-4">5. אבטחת מידע</h2>
              <p className="text-body-sm text-slate-700 leading-relaxed">
                אנו מיישמים אמצעי אבטחה טכניים וארגוניים מתאימים להגנה על המידע האישי שלכם מפני גישה בלתי מורשית, שינוי, גילוי או הרס.
              </p>
            </section>

            <section>
              <h2 className="heading-card text-bright-blue mb-4">6. הזכויות שלכם</h2>
              <p className="text-body-sm text-slate-700 leading-relaxed mb-4">
                בהתאם לחוקי הפרטיות החלים, יש לכם את הזכויות הבאות:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>זכות גישה למידע האישי שלכם</li>
                <li>זכות לתיקון מידע שגוי</li>
                <li>זכות למחיקת המידע</li>
                <li>זכות להתנגד לעיבוד המידע</li>
                <li>זכות להגבלת העיבוד</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-card text-bright-blue mb-4">7. עוגיות (Cookies)</h2>
              <p className="text-body-sm text-slate-700 leading-relaxed">
                האתר שלנו משתמש בעוגיות לשיפור חווית הגלישה. עוגיות הן קבצים קטנים הנשמרים במכשיר שלכם. באפשרותכם לשלוט בהעדפות העוגיות דרך הגדרות הדפדפן.
              </p>
            </section>

            <section>
              <h2 className="heading-card text-bright-blue mb-4">8. שינויים במדיניות</h2>
              <p className="text-body-sm text-slate-700 leading-relaxed">
                אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת. שינויים מהותיים יפורסמו באתר עם תאריך העדכון.
              </p>
            </section>

            <section>
              <h2 className="heading-card text-bright-blue mb-4">9. יצירת קשר</h2>
              <p className="text-body-sm text-slate-700 leading-relaxed">
                לשאלות בנוגע למדיניות פרטיות זו או לזכויותיכם, אנא פנו אלינו:
              </p>
              <p className="text-body-sm text-slate-700 mt-4">
                <strong>אימייל:</strong> privacy@bizgoai.co.il<br />
                <strong>טלפון:</strong> 03-123-4567
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
