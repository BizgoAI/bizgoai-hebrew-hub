import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Target, Heart, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Heart,
    title: 'אמפתיה',
    description: 'אנחנו מבינים את האתגרים של עסקים קטנים כי היינו שם',
  },
  {
    icon: Users,
    title: 'קהילה',
    description: 'יחד אנחנו חזקים יותר — שיתוף ידע ותמיכה הדדית',
  },
  {
    icon: Target,
    title: 'פרקטיות',
    description: 'פתרונות שעובדים בפועל, לא רק בתיאוריה',
  },
  {
    icon: Lightbulb,
    title: 'חדשנות נגישה',
    description: 'טכנולוגיה מתקדמת בשפה שכולם מבינים',
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-hero py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="heading-hero text-navy mb-6">
              הסיפור שלנו
            </h1>
            <p className="text-body text-slate-600 max-w-2xl mx-auto">
              BizgoAI Israel נולד מתוך הבנה עמוקה של האתגרים שעסקים קטנים בישראל מתמודדים איתם בעידן ה-AI
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-right">
              <h2 className="heading-section text-bright-blue mb-6">למה הקמנו את BizgoAI?</h2>
              <p className="text-body-sm text-slate-600 mb-6">
                בעוד חברות גדולות משקיעות מיליונים בצוותי AI, בעלי עסקים קטנים נותרים מאחור. הם שומעים על הבטחות מדהימות, רואים מתחרים משתמשים בטכנולוגיות חדשות, אבל אין להם את הזמן, התקציב, או הידע לדעת מאיפה להתחיל.
              </p>
              <p className="text-body-sm text-slate-600 mb-6">
                הקמנו את BizgoAI Israel כדי לגשר על הפער הזה. אנחנו מאמינים שכל עסק קטן יכול ליהנות מהיתרונות של AI — בלי לשבור את הראש ובלי לשבור את הקופה.
              </p>
              <p className="text-body-sm text-slate-600">
                המשימה שלנו פשוטה: להפוך את AI לנגיש, מובן, ופרקטי לעסקים קטנים בישראל.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-gradient-section py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-section text-bright-blue text-center mb-12">
              הערכים שלנו
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="card-elevated p-6 text-center">
                  <div className="h-16 w-16 rounded-xl icon-gradient-navy shadow-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="heading-card text-navy mb-2">{value.title}</h3>
                  <p className="text-slate-600 font-medium">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="heading-section text-bright-blue mb-6">
              מה אנחנו מציעים?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="card-gradient p-6">
                <h3 className="text-xl font-bold text-navy mb-2">סימולטור AI</h3>
                <p className="text-slate-600">כלי הערכה חינמי שעוזר להבין את הפוטנציאל של AI בעסק שלכם</p>
              </div>
              <div className="card-gradient p-6">
                <h3 className="text-xl font-bold text-navy mb-2">קהילה תומכת</h3>
                <p className="text-slate-600">רשת של בעלי עסקים שחולקים ניסיון, טיפים, ותמיכה הדדית</p>
              </div>
              <div className="card-gradient p-6">
                <h3 className="text-xl font-bold text-navy mb-2">ייעוץ מותאם</h3>
                <p className="text-slate-600">הכוונה אישית להתחלה נכונה עם AI בעסק שלכם</p>
              </div>
            </div>

            <Button asChild className="btn-gradient-amber px-10 py-5 rounded-xl text-xl">
              <Link to="/simulator" className="flex items-center gap-3">
                התחל סימולטור חינם
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
