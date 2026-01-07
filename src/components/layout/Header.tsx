import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'בית', href: '/' },
  { name: 'סימולטור AI', href: '/simulator' },
  { name: 'אודות', href: '/about' },
  { name: 'ייעוץ', href: '/consultation' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 backdrop-blur-sm bg-white/95">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gradient-brand">BizgoAI Israel</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-base font-medium transition-colors hover:text-bright-blue ${
                location.pathname === item.href
                  ? 'text-bright-blue'
                  : 'text-slate-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button asChild className="btn-gradient-amber px-8 py-3 rounded-xl text-base">
            <Link to="/simulator" className="flex items-center gap-2">
              התחל סימולטור
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 text-base font-medium ${
                  location.pathname === item.href
                    ? 'text-bright-blue'
                    : 'text-slate-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full btn-gradient-amber py-3 rounded-xl mt-4">
              <Link to="/simulator" onClick={() => setMobileMenuOpen(false)}>
                התחל סימולטור
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
