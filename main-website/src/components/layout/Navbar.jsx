import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeMobileMenu,
  toggleMobileMenu,
  toggleTheme,
} from '../../features/app/ui/uiSlice.js';
import { toggleLanguage } from '../../features/app/lang/langSlice.js';
import { navLinks } from './Navs.js';

const navLabels = {
  en: {
    brand: 'Hospelyra',
    menu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    theme: 'Switch color theme',
    language: 'العربية',
  },
  ar: {
    brand: 'هوسبيليرا',
    menu: 'فتح قائمة التنقل',
    closeMenu: 'إغلاق قائمة التنقل',
    theme: 'تغيير المظهر',
    language: 'English',
  },
};

export default function Navbar() {
  const dispatch = useDispatch();
  const { isMobileMenuOpen, theme } = useSelector((state) => state.ui);
  const { current: language } = useSelector((state) => state.lang);
  const labels = navLabels[language];

  useEffect(() => {
    const closeMenuOnResize = () => dispatch(closeMobileMenu());
    window.addEventListener('resize', closeMenuOnResize);
    return () => window.removeEventListener('resize', closeMenuOnResize);
  }, [dispatch]);

  useEffect(() => {
    const closeMenuOnEscape = (event) => {
      if (event.key === 'Escape') dispatch(closeMobileMenu());
    };

    window.addEventListener('keydown', closeMenuOnEscape);
    return () => window.removeEventListener('keydown', closeMenuOnEscape);
  }, [dispatch]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-text-light/10 bg-bg-main/90 shadow-sm backdrop-blur-lg">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link
          className="shrink-0 text-xl font-extrabold tracking-tight text-primary sm:text-2xl"
          to="/home"
          aria-label={labels.brand}
        >
          {labels.brand}
        </Link>

        <nav aria-label={language === 'ar' ? 'التنقل الرئيسي' : 'Main navigation'} className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={`/${link.path}`}
              className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary-light text-primary'
                  : 'text-text-muted hover:bg-bg-secondary hover:text-primary'
              }`}
            >
              {link.label[language]}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => dispatch(toggleTheme())}
            className="rounded-xl border border-text-light/15 bg-bg-secondary p-2 text-primary transition-colors hover:bg-primary-light"
            aria-label={labels.theme}
            title={labels.theme}
          >
            {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>

          <button
            type="button"
            onClick={() => dispatch(toggleLanguage())}
            className="flex items-center gap-2 rounded-xl bg-primary-light px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/20 sm:text-sm"
            aria-label={labels.language}
          >
            <Globe size={16} aria-hidden="true" />
            <span>{labels.language}</span>
          </button>

          <button
            type="button"
            onClick={() => dispatch(toggleMobileMenu())}
            className="rounded-xl bg-primary p-2 text-text-inverse transition-colors hover:bg-primary-hover lg:hidden"
            aria-label={isMobileMenuOpen ? labels.closeMenu : labels.menu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-20 z-40 bg-text-main/20 backdrop-blur-sm transition-opacity lg:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
        onClick={() => dispatch(closeMobileMenu())}
      />
      <nav
        id="mobile-navigation"
        aria-label={language === 'ar' ? 'التنقل الرئيسي' : 'Main navigation'}
        aria-hidden={!isMobileMenuOpen}
        inert={!isMobileMenuOpen}
        className={`absolute inset-x-0 top-full z-50 overflow-hidden border-b border-text-light/10 bg-bg-main shadow-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container flex flex-col gap-1 py-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={`/${link.path}`}
              onClick={() => dispatch(closeMobileMenu())}
              className={({ isActive }) => `rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary-light text-primary'
                  : 'text-text-muted hover:bg-bg-secondary hover:text-primary'
              }`}
            >
              {link.label[language]}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
