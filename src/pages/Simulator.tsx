import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SimulatorProvider, useSimulator } from '@/context/SimulatorContext';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, ArrowRight, ClipboardList, Gauge, Target, CheckCircle2, RotateCcw } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const industries = [
  'קמעונאות ומסחר',
  'שירותים מקצועיים',
  'טכנולוגיה',
  'בריאות',
  'חינוך',
  'מזון ומסעדנות',
  'ייצור',
  'נדל"ן',
  'פיננסים',
  'אחר',
];

const employeeCounts = [
  '1 (עצמאי)',
  '2-5',
  '6-10',
  '11-25',
  '26-50',
  '51-100',
  '100+',
];

const revenues = [
  'עד 500K ₪',
  '500K - 1M ₪',
  '1M - 5M ₪',
  '5M - 10M ₪',
  '10M+ ₪',
];

const budgets = [
  'עד 1,000 ₪ לחודש',
  '1,000 - 5,000 ₪ לחודש',
  '5,000 - 15,000 ₪ לחודש',
  '15,000+ ₪ לחודש',
  'עדיין לא הגדרתי',
];

const timelines = [
  'מיידי - תוך חודש',
  'קצר טווח - 1-3 חודשים',
  'בינוני - 3-6 חודשים',
  'ארוך טווח - 6+ חודשים',
  'עדיין לא בטוח',
];

const currentToolsList = [
  'CRM (ניהול לקוחות)',
  'מערכת חשבונאות',
  'אוטומציית שיווק',
  'צ\'אט בוט',
  'כלי ניתוח נתונים',
  'כלי AI לכתיבה',
  'כלי AI לעיצוב',
  'אחר',
  'לא משתמש בכלים דיגיטליים',
];

const painPointsList = [
  'שירות לקוחות ותמיכה',
  'שיווק ופרסום',
  'ניהול מלאי ורכש',
  'חשבונאות וכספים',
  'ניהול משימות ופרויקטים',
  'גיוס וניהול עובדים',
  'מכירות',
  'ייצור תוכן',
  'ניתוח נתונים ודוחות',
];

const goalsList = [
  'חיסכון בזמן',
  'הפחתת עלויות',
  'שיפור חווית לקוח',
  'הגדלת מכירות',
  'שיפור קבלת החלטות',
  'אוטומציה של משימות חוזרות',
  'יתרון תחרותי',
  'צמיחה ושדרוג',
];

const approaches = [
  'צעדים קטנים - התחלה עם כלי אחד',
  'בינוני - 2-3 כלים במקביל',
  'מקיף - טרנספורמציה דיגיטלית רחבה',
  'עדיין לא בטוח - רוצה ייעוץ',
];

function SimulatorContent() {
  const navigate = useNavigate();
  const {
    currentStep,
    setCurrentStep,
    assessmentData,
    updateAssessmentData,
    resetAssessment,
    isComplete,
    setIsComplete,
  } = useSimulator();

  const steps = [
    { number: 1, title: 'פרופיל עסקי', icon: ClipboardList },
    { number: 2, title: 'מוכנות AI', icon: Gauge },
    { number: 3, title: 'תעדוף יעדים', icon: Target },
  ];

  const progress = (currentStep / 3) * 100;

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return assessmentData.businessName && assessmentData.industry && assessmentData.employeeCount;
      case 2:
        return assessmentData.budget && assessmentData.timeline;
      case 3:
        return assessmentData.painPoints.length > 0 && assessmentData.goals.length > 0;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCheckboxChange = (field: 'currentTools' | 'painPoints' | 'goals', value: string) => {
    const currentValues = assessmentData[field];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    updateAssessmentData({ [field]: newValues });
  };

  const getReadinessLevel = () => {
    const score = assessmentData.technicalCapability;
    if (score <= 2) return { level: 'מתחיל', color: 'text-amber-600', description: 'מוכנים להתחיל מהבסיס' };
    if (score <= 3) return { level: 'בינוני', color: 'text-blue-600', description: 'יסודות טובים לבנות עליהם' };
    if (score <= 4) return { level: 'מתקדם', color: 'text-green-600', description: 'מוכנים לצמיחה מואצת' };
    return { level: 'מומחה', color: 'text-purple-600', description: 'מוכנים לטרנספורמציה מלאה' };
  };

  if (isComplete) {
    const readiness = getReadinessLevel();
    return (
      <div className="max-w-4xl mx-auto">
        <div className="card-elevated p-8 sm:p-12 text-center">
          <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          
          <h2 className="heading-section text-navy mb-4">ההערכה הושלמה!</h2>
          <p className="text-body text-slate-600 mb-8">
            תודה, {assessmentData.businessName}! הנה סיכום ראשוני:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card-gradient p-6">
              <h3 className="text-lg font-bold text-navy mb-2">רמת מוכנות</h3>
              <p className={`text-2xl font-extrabold ${readiness.color}`}>{readiness.level}</p>
              <p className="text-sm text-slate-500 mt-1">{readiness.description}</p>
            </div>
            <div className="card-gradient p-6">
              <h3 className="text-lg font-bold text-navy mb-2">אזורי התמקדות</h3>
              <p className="text-2xl font-extrabold text-bright-blue">{assessmentData.painPoints.length}</p>
              <p className="text-sm text-slate-500 mt-1">תחומים לשיפור</p>
            </div>
            <div className="card-gradient p-6">
              <h3 className="text-lg font-bold text-navy mb-2">יעדים</h3>
              <p className="text-2xl font-extrabold text-amber-600">{assessmentData.goals.length}</p>
              <p className="text-sm text-slate-500 mt-1">מטרות להשגה</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 mb-8 text-right">
            <h3 className="font-bold text-navy mb-3">המלצות ראשוניות:</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>מומלץ להתחיל עם כלי AI פשוט באחד מתחומי ההתמקדות שבחרתם</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>התקציב שהגדרתם מתאים להתחלה עם פתרונות בסיסיים</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>שקלו להצטרף לקהילה שלנו לקבלת תמיכה והכוונה</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-gradient-amber px-8 py-4 rounded-xl text-lg">
              <a href="/consultation" className="flex items-center gap-2">
                קבע שיחת ייעוץ חינם
                <ArrowLeft className="h-4 w-4" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                resetAssessment();
              }}
              className="px-8 py-4 rounded-xl text-lg border-2 flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              התחל מחדש
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`flex items-center gap-2 ${
                step.number === currentStep
                  ? 'text-bright-blue'
                  : step.number < currentStep
                  ? 'text-green-600'
                  : 'text-slate-400'
              }`}
            >
              <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                step.number === currentStep
                  ? 'bg-bright-blue text-white'
                  : step.number < currentStep
                  ? 'bg-green-100 text-green-600'
                  : 'bg-slate-100'
              }`}>
                {step.number < currentStep ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <step.icon className="h-5 w-5" />
                )}
              </div>
              <span className="hidden sm:block font-medium">{step.title}</span>
            </div>
          ))}
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step Content */}
      <div className="card-elevated p-6 sm:p-8">
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="heading-section text-navy mb-2">פרופיל עסקי</h2>
              <p className="text-slate-600">ספרו לנו על העסק שלכם</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="businessName" className="text-base font-medium text-slate-700">
                  שם העסק *
                </Label>
                <Input
                  id="businessName"
                  value={assessmentData.businessName}
                  onChange={(e) => updateAssessmentData({ businessName: e.target.value })}
                  placeholder="הכניסו את שם העסק"
                  className="mt-2 py-3"
                />
              </div>

              <div>
                <Label className="text-base font-medium text-slate-700">תעשייה *</Label>
                <Select
                  value={assessmentData.industry}
                  onValueChange={(value) => updateAssessmentData({ industry: value })}
                >
                  <SelectTrigger className="mt-2 py-3">
                    <SelectValue placeholder="בחרו תעשייה" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium text-slate-700">מספר עובדים *</Label>
                <Select
                  value={assessmentData.employeeCount}
                  onValueChange={(value) => updateAssessmentData({ employeeCount: value })}
                >
                  <SelectTrigger className="mt-2 py-3">
                    <SelectValue placeholder="בחרו מספר עובדים" />
                  </SelectTrigger>
                  <SelectContent>
                    {employeeCounts.map((count) => (
                      <SelectItem key={count} value={count}>
                        {count}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium text-slate-700">מחזור שנתי משוער</Label>
                <Select
                  value={assessmentData.annualRevenue}
                  onValueChange={(value) => updateAssessmentData({ annualRevenue: value })}
                >
                  <SelectTrigger className="mt-2 py-3">
                    <SelectValue placeholder="בחרו טווח הכנסות" />
                  </SelectTrigger>
                  <SelectContent>
                    {revenues.map((revenue) => (
                      <SelectItem key={revenue} value={revenue}>
                        {revenue}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="heading-section text-navy mb-2">מוכנות AI</h2>
              <p className="text-slate-600">בחנו את רמת המוכנות שלכם</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-base font-medium text-slate-700 block mb-3">
                  כלים דיגיטליים שאתם משתמשים בהם כיום
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentToolsList.map((tool) => (
                    <div key={tool} className="flex items-center gap-3">
                      <Checkbox
                        id={tool}
                        checked={assessmentData.currentTools.includes(tool)}
                        onCheckedChange={() => handleCheckboxChange('currentTools', tool)}
                      />
                      <Label htmlFor={tool} className="text-slate-700 cursor-pointer">
                        {tool}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium text-slate-700 block mb-3">
                  יכולת טכנית של הצוות: {assessmentData.technicalCapability}/5
                </Label>
                <Slider
                  value={[assessmentData.technicalCapability]}
                  onValueChange={(value) => updateAssessmentData({ technicalCapability: value[0] })}
                  min={1}
                  max={5}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-slate-500 mt-2">
                  <span>מתחיל</span>
                  <span>מומחה</span>
                </div>
              </div>

              <div>
                <Label className="text-base font-medium text-slate-700">תקציב חודשי ל-AI *</Label>
                <Select
                  value={assessmentData.budget}
                  onValueChange={(value) => updateAssessmentData({ budget: value })}
                >
                  <SelectTrigger className="mt-2 py-3">
                    <SelectValue placeholder="בחרו טווח תקציב" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgets.map((budget) => (
                      <SelectItem key={budget} value={budget}>
                        {budget}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium text-slate-700">לו"ז ליישום *</Label>
                <Select
                  value={assessmentData.timeline}
                  onValueChange={(value) => updateAssessmentData({ timeline: value })}
                >
                  <SelectTrigger className="mt-2 py-3">
                    <SelectValue placeholder="בחרו לו&quot;ז" />
                  </SelectTrigger>
                  <SelectContent>
                    {timelines.map((timeline) => (
                      <SelectItem key={timeline} value={timeline}>
                        {timeline}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="heading-section text-navy mb-2">תעדוף יעדים</h2>
              <p className="text-slate-600">זהו את האזורים החשובים ביותר</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-base font-medium text-slate-700 block mb-3">
                  תחומים שבהם תרצו שיפור * (בחרו לפחות אחד)
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {painPointsList.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <Checkbox
                        id={`pain-${point}`}
                        checked={assessmentData.painPoints.includes(point)}
                        onCheckedChange={() => handleCheckboxChange('painPoints', point)}
                      />
                      <Label htmlFor={`pain-${point}`} className="text-slate-700 cursor-pointer">
                        {point}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium text-slate-700 block mb-3">
                  יעדים עסקיים * (בחרו לפחות אחד)
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {goalsList.map((goal) => (
                    <div key={goal} className="flex items-center gap-3">
                      <Checkbox
                        id={`goal-${goal}`}
                        checked={assessmentData.goals.includes(goal)}
                        onCheckedChange={() => handleCheckboxChange('goals', goal)}
                      />
                      <Label htmlFor={`goal-${goal}`} className="text-slate-700 cursor-pointer">
                        {goal}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium text-slate-700">גישה מועדפת</Label>
                <Select
                  value={assessmentData.preferredApproach}
                  onValueChange={(value) => updateAssessmentData({ preferredApproach: value })}
                >
                  <SelectTrigger className="mt-2 py-3">
                    <SelectValue placeholder="בחרו גישה" />
                  </SelectTrigger>
                  <SelectContent>
                    {approaches.map((approach) => (
                      <SelectItem key={approach} value={approach}>
                        {approach}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="flex items-center gap-2 px-6 py-3"
          >
            <ArrowRight className="h-4 w-4" />
            הקודם
          </Button>
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="btn-gradient-amber flex items-center gap-2 px-6 py-3"
          >
            {currentStep === 3 ? 'סיום' : 'הבא'}
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Simulator() {
  return (
    <SimulatorProvider>
      <div className="min-h-screen bg-gradient-section">
        <Header />
        <main className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <SimulatorContent />
        </main>
        <Footer />
      </div>
    </SimulatorProvider>
  );
}
