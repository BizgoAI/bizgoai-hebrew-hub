import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  { icon: Shield, text: 'מידע שלכם מאובטח' },
  { icon: Users, text: 'קהילה תומכת' },
  { icon: Zap, text: 'תוצאות מיידיות' },
];

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-navy to-blue-800 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
          מוכנים לגלות את הפוטנציאל של AI בעסק שלכם?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          הסימולטור שלנו יעזור לכם להבין בדיוק איפה להתחיל ואיך להתקדם
        </p>

        <Button asChild className="btn-gradient-amber px-12 py-6 rounded-xl text-xl mb-8">
          <Link to="/simulator" className="flex items-center gap-3">
            התחל סימולטור חינם
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>

        <div className="flex flex-wrap justify-center gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-blue-100">
              <benefit.icon className="h-5 w-5" />
              <span className="font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
