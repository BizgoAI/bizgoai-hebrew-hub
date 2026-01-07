import { Clock, DollarSign, Lightbulb } from 'lucide-react';

const painPoints = [
  {
    icon: Clock,
    title: 'זמן',
    description: 'שוקעים בעבודה יומיומית — בלי רוחב פס לחקור פתרונות AI',
  },
  {
    icon: DollarSign,
    title: 'תקציב',
    description: 'משאבים מוגבלים ופחד אמיתי לבזבז כסף ללא תמורה ברורה ROI',
  },
  {
    icon: Lightbulb,
    title: 'מומחיות',
    description: 'אין ידע טכני פנימי או צוות IT שיכול להעריך, ליישם ולתחזק כלים',
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 overflow-hidden relative">
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="heading-section text-bright-blue mb-4 sm:mb-6">
          טובעים בכאוס של AI
        </h2>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-navy mb-8">
          עסקים קטנים נמצאים בלחץ לאמץ AI בעוד שהטכנולוגיה רצה מהר יותר מהיכולת שלהם להדביק את הקצב.
        </p>

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="card-elevated p-8 group"
            >
              <div className="h-16 w-16 rounded-xl icon-gradient-amber shadow-lg flex items-center justify-center mb-4 mx-auto transition-transform group-hover:scale-105">
                <point.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="heading-card text-navy mb-3">{point.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
