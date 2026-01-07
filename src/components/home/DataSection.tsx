import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const stats = [
  {
    emoji: '🎓',
    category: 'פער ידע',
    stat: '71.9%',
    description: 'בעלי עסקים קטנים מציינים "אני לא יודע מספיק על כלים דיגיטליים חדשים" כסיבה העיקרית לאי-אימוץ טכנולוגיה',
    source: 'Intuit & ICIC, מרץ 2025',
    isQuote: false,
  },
  {
    emoji: '💰',
    category: 'תקציבים עולים',
    stat: '36%',
    description: 'תקציבי ה־AI החודשיים צפויים לעלות מ-500$ ל-10,000$ בשנה הקרובה',
    source: 'CloudZero State of AI Costs, 2025',
    isQuote: false,
  },
  {
    emoji: '⏰',
    category: 'לחץ זמן',
    stat: '37%',
    description: 'בעלי עסקים קטנים חסרי זמן להתעדכן בטכנולוגיות חדשות',
    source: 'PayPal/Reimagine Main Street, 2025',
    isQuote: false,
  },
  {
    emoji: '🤔',
    category: 'חסם הבנה',
    stat: '62%',
    description: 'חוסר הבנה של היתרונות הוא המחסום הגדול ביותר לאימוץ AI',
    source: 'Service Direct AI Report, 2025',
    isQuote: false,
  },
  {
    emoji: '📊',
    category: 'אין ROI ברור',
    stat: '34%',
    description: 'ללא שימושיות ברורה, עסקים קטנים נמנעים מהשקעה ב-AI',
    source: 'PayPal/Reimagine Main Street, 2025',
    isQuote: false,
  },
  {
    emoji: '📉',
    category: 'ירידת אימוץ',
    stat: '28%',
    description: 'אימוץ AI בעסקים קטנים ירד מ-34% ל-28% בשנה האחרונה',
    source: 'Yahoo Finance/NEXT Survey, 2025',
    isQuote: false,
  },
  {
    emoji: '📚',
    category: 'פער ידע',
    description: '"לעסקים גדולים יש צוותי AI ייעודיים. לעסקים קטנים יש גוגל וחוסר ביטחון."',
    source: 'McKinsey State of AI, 2025',
    isQuote: true,
  },
  {
    emoji: '💸',
    category: 'מגבלות תקציב',
    description: '"עסקים קטנים לא יכולים להרשות לעצמם טעויות יקרות. כל השקעה טכנולוגית חייבת להוכיח את עצמה."',
    source: 'Todd McCracken, President, NSBA',
    isQuote: true,
  },
  {
    emoji: '⚡',
    category: 'לחץ זמן',
    description: '"הקצב שבו AI מתפתח הופך את המרדף לבלתי אפשרי עבור בעלי עסקים שכבר עובדים 60 שעות בשבוע."',
    source: 'BizTech Magazine, יוני 2025',
    isQuote: true,
  },
];

export default function DataSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-gradient-section py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-section text-bright-blue mb-3">
            אתם לא לבד בזה
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-medium">
            מחקרי תעשייה מאשרים: פער האימוץ של AI בעסקים קטנים — אמיתי.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-3 hover:bg-slate-50 transition-colors hidden sm:block -mr-4"
          >
            <ChevronRight className="h-6 w-6 text-slate-700" />
          </button>
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-3 hover:bg-slate-50 transition-colors hidden sm:block -ml-4"
          >
            <ChevronLeft className="h-6 w-6 text-slate-700" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="w-80 flex-shrink-0 snap-start card-elevated p-8"
              >
                <span className="text-6xl mb-4 block">{stat.emoji}</span>
                <h3 className="text-xl font-bold text-slate-700 mb-3">{stat.category}</h3>
                
                {!stat.isQuote && stat.stat && (
                  <p className="text-6xl font-bold text-bright-blue mb-4">{stat.stat}</p>
                )}
                
                <p className={`text-slate-600 leading-relaxed mb-4 ${stat.isQuote ? 'italic' : ''}`}>
                  {stat.description}
                </p>
                
                <span className="inline-block bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full">
                  {stat.source}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
