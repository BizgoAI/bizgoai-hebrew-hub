import { Target, Clock, TrendingUp, Users, Handshake, Wallet } from 'lucide-react';

const solutions = [
  {
    icon: Target,
    title: 'קבלו החלטות AI טובות יותר',
    description: 'כלים שעוזרים לכם להבין מה באמת מתאים לעסק שלכם',
    colorClass: 'text-navy',
    gradientClass: 'icon-gradient-navy',
  },
  {
    icon: Clock,
    title: 'חסכו שבועות של מחקר',
    description: 'קיצרו את הדרך עם תובנות מנוסות מהקהילה',
    colorClass: 'text-bright-blue',
    gradientClass: 'icon-gradient-blue',
  },
  {
    icon: TrendingUp,
    title: 'צמחו מתוצאות אמיתיות',
    description: 'למדו מהצלחות וכישלונות של עסקים דומים לשלכם',
    colorClass: 'text-navy',
    gradientClass: 'icon-gradient-navy',
  },
  {
    icon: Users,
    title: 'קבלו מינוף בלי לשכור מומחים',
    description: 'גישה לידע ותמיכה ללא עלויות יועצים',
    colorClass: 'text-bright-blue',
    gradientClass: 'icon-gradient-blue',
  },
  {
    icon: Handshake,
    title: 'בנו קשרים שמתפתחים',
    description: 'רשת של בעלי עסקים שעוזרים אחד לשני',
    colorClass: 'text-navy',
    gradientClass: 'icon-gradient-navy',
  },
  {
    icon: Wallet,
    title: 'הפחיתו עלויות AI',
    description: 'מנעו טעויות יקרות והשקיעו בחכמה',
    colorClass: 'text-bright-blue',
    gradientClass: 'icon-gradient-blue',
  },
];

export default function SolutionSection() {
  return (
    <section className="bg-gradient-section py-12 sm:py-16 lg:py-24 relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, #2563eb 1px, transparent 1px), radial-gradient(circle at 80% 50%, #2563eb 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-section text-bright-blue mb-4">
            אמצו AI בביטחון
          </h2>
          <p className="text-body text-slate-600">
            העצמת עסקים קטנים דרך AI ושיתוף פעולה
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="card-gradient p-6 group"
            >
              <div className="flex items-center gap-4">
                <div className={`h-16 w-16 rounded-xl ${solution.gradientClass} shadow-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105`}>
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className={`heading-card ${solution.colorClass} mb-2`}>
                    {solution.title}
                  </h3>
                  <p className="text-slate-600 text-base font-medium">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
