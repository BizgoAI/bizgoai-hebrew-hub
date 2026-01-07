import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    name: 'דניאל כהן',
    business: 'סטודיו עיצוב',
    text: 'הסימולטור עזר לי להבין בדיוק איפה AI יכול לחסוך לי זמן',
    rating: 5,
  },
  {
    name: 'רונית לוי',
    business: 'חנות אונליין',
    text: 'סוף סוף מישהו שמדבר בשפה שאני מבינה על AI',
    rating: 5,
  },
  {
    name: 'יוסי אברהם',
    business: 'משרד רואי חשבון',
    text: 'קיבלתי תוכנית פעולה ברורה תוך דקות',
    rating: 5,
  },
];

export default function HeroSection() {
  return (
    <section className="bg-gradient-hero pt-20 pb-12 sm:pt-32 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="lg:col-span-6">
            <h1 className="heading-hero text-navy mb-6">
              עסקים קטנים מתקדמים עם AI.{' '}
              <span className="text-bright-blue">בביטחון.</span>
            </h1>
            
            <p className="text-body text-slate-600 mb-4 max-w-xl">
              מתחילים בכלי הערכה חינמי → ממשיכים עם קהילה תומכת לעסקים קטנים → צומחים עם כלים ופתרונות שנבנה ביחד
            </p>
            
            <p className="text-lg text-bright-blue font-medium mb-8">
              AI מבלבל? קבלו תשובות ישירות.
            </p>

            <Button asChild className="btn-gradient-amber px-10 py-6 rounded-xl text-xl mb-6">
              <Link to="/simulator" className="flex items-center gap-3">
                התחל סימולטור
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>

            <div className="flex flex-wrap gap-6 text-slate-600">
              {['ללא עלות', 'ללא התחייבות', 'תוצאות כנות'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="font-medium">{item}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Review Cards */}
          <div className="hidden lg:block lg:col-span-6 relative h-[500px]">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="absolute bg-white rounded-xl shadow-xl border border-slate-200 p-6 w-80 transition-all duration-300 hover:shadow-2xl"
                style={{
                  right: `${index * 40}px`,
                  top: `${index * 60 + 40}px`,
                  transform: `rotate(${(index - 1) * 3}deg)`,
                  zIndex: 3 - index,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-navy to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-navy">{review.name}</p>
                    <p className="text-sm text-slate-500">{review.business}</p>
                  </div>
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">{review.text}</p>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
