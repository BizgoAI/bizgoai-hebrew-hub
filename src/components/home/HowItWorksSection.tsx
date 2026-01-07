import { Link } from 'react-router-dom';
import { ClipboardList, Gauge, Target, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'פרופיל עסקי',
    description: 'ספרו לנו על העסק שלכם — גודל, תעשייה, ואתגרים עיקריים',
  },
  {
    icon: Gauge,
    step: '02',
    title: 'הערכת מוכנות',
    description: 'בחנו את רמת המוכנות הטכנולוגית והתקציבית שלכם',
  },
  {
    icon: Target,
    step: '03',
    title: 'תעדוף יעדים',
    description: 'זהו את האזורים שבהם AI יכול להשפיע הכי הרבה',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-gradient-section-alt py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-section text-bright-blue mb-4">
            איך זה עובד?
          </h2>
          <p className="text-body text-slate-600">
            3 שלבים פשוטים להבנת הפוטנציאל של AI בעסק שלכם
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card-gradient p-8 text-center h-full">
                {/* Step Number */}
                <span className="absolute top-4 left-4 text-6xl font-black text-slate-100">
                  {step.step}
                </span>
                
                <div className="h-16 w-16 rounded-xl icon-gradient-navy shadow-lg flex items-center justify-center mx-auto mb-6 relative z-10">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="heading-card text-navy mb-3">{step.title}</h3>
                <p className="text-slate-600 text-base font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Arrow (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -left-4 transform -translate-y-1/2">
                  <ArrowLeft className="h-8 w-8 text-slate-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild className="btn-gradient-amber px-10 py-6 rounded-xl text-xl">
            <Link to="/simulator" className="flex items-center gap-3">
              התחל עכשיו — בחינם
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <p className="mt-4 text-slate-500 text-sm">
            3 דקות בלבד • ללא הרשמה
          </p>
        </div>
      </div>
    </section>
  );
}
