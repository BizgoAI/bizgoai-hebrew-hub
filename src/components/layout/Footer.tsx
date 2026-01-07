import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">BizgoAI Israel</h3>
            <p className="text-slate-400 text-base leading-relaxed max-w-md">
              עסקים קטנים מתקדמים עם AI. בביטחון. קהילה תומכת לעסקים קטנים בישראל.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">קישורים מהירים</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  בית
                </Link>
              </li>
              <li>
                <Link to="/simulator" className="text-slate-400 hover:text-white transition-colors">
                  סימולטור AI
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-slate-400 hover:text-white transition-colors">
                  ייעוץ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">משפטי</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  מדיניות פרטיות
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
          <p>© {new Date().getFullYear()} BizgoAI Israel. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
