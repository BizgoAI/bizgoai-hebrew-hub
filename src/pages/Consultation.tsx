import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, CheckCircle2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const businessSizes = [
  '1 (עצמאי)',
  '2-5 עובדים',
  '6-10 עובדים',
  '11-25 עובדים',
  '26+ עובדים',
];

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

const interests = [
  'שיחת ייעוץ ראשונית',
  'הצטרפות לקהילה',
  'קבלת עדכונים ותוכן',
  'שיתוף פעולה עסקי',
  'אחר',
];

export default function Consultation() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessSize: '',
    industry: '',
    interests: [] as string[],
    message: '',
    agreeToPrivacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.agreeToPrivacy) {
      toast({
        title: "שגיאה",
        description: "אנא מלאו את כל השדות הנדרשים",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "נשלח בהצלחה!",
      description: "נחזור אליכם בהקדם",
    });
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-16 sm:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="card-elevated p-12">
              <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="heading-section text-navy mb-4">תודה על הפנייה!</h1>
              <p className="text-body text-slate-600 mb-8">
                קיבלנו את הפרטים שלכם ונחזור אליכם בהקדם האפשרי.
                בינתיים, מוזמנים לנסות את הסימולטור שלנו.
              </p>
              <Button asChild className="btn-gradient-amber px-8 py-4 rounded-xl">
                <a href="/simulator">לסימולטור AI</a>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 sm:py-16 bg-gradient-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="heading-hero text-navy mb-4">בואו נדבר</h1>
            <p className="text-body text-slate-600 max-w-2xl mx-auto">
              מעוניינים בייעוץ אישי? השאירו פרטים ונחזור אליכם לשיחה קצרה וללא התחייבות
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="card-elevated p-6 space-y-6">
                <h2 className="text-xl font-bold text-navy">יצירת קשר</h2>
                
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-bright-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">אימייל</p>
                    <p className="text-sm">info@bizgoai.co.il</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-bright-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">טלפון</p>
                    <p className="text-sm">03-123-4567</p>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h3 className="font-bold text-navy mb-3">למה לפנות אלינו?</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>שיחת ייעוץ ראשונית חינם</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>הכוונה מותאמת אישית</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>ללא התחייבות</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="card-elevated p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-medium text-slate-700">
                      שם מלא *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="הכניסו שם מלא"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base font-medium text-slate-700">
                      אימייל *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="email@example.com"
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="phone" className="text-base font-medium text-slate-700">
                      טלפון
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="050-000-0000"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="businessName" className="text-base font-medium text-slate-700">
                      שם העסק
                    </Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                      placeholder="שם העסק שלכם"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label className="text-base font-medium text-slate-700">גודל העסק</Label>
                    <Select
                      value={formData.businessSize}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, businessSize: value }))}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="בחרו גודל" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessSizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-base font-medium text-slate-700">תעשייה</Label>
                    <Select
                      value={formData.industry}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}
                    >
                      <SelectTrigger className="mt-2">
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
                </div>

                <div className="mb-6">
                  <Label className="text-base font-medium text-slate-700 block mb-3">
                    מה מעניין אתכם?
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      <div key={interest} className="flex items-center gap-3">
                        <Checkbox
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={() => handleInterestChange(interest)}
                        />
                        <Label htmlFor={interest} className="text-slate-700 cursor-pointer">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <Label htmlFor="message" className="text-base font-medium text-slate-700">
                    הודעה נוספת
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="ספרו לנו עוד על הצרכים שלכם..."
                    className="mt-2 min-h-[100px]"
                  />
                </div>

                <div className="mb-6">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="privacy"
                      checked={formData.agreeToPrivacy}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, agreeToPrivacy: checked as boolean }))
                      }
                      required
                    />
                    <Label htmlFor="privacy" className="text-sm text-slate-600 cursor-pointer">
                      אני מסכים/ה ל
                      <a href="/privacy" className="text-bright-blue hover:underline mx-1">
                        מדיניות הפרטיות
                      </a>
                      ולקבלת תוכן שיווקי *
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full btn-gradient-amber py-4 rounded-xl text-lg">
                  <Send className="h-5 w-5 ml-2" />
                  שליחה
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
