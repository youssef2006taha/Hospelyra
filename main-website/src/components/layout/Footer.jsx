import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { navLinks } from './Navs.js';

const footerCopy = {
  en: {
    description: 'A simpler way to find care, connect with providers, and put your wellbeing first.',
    explore: 'Explore',
    support: 'Need a hand?',
    supportText: 'Find answers to common questions in our help center.',
    faq: 'Visit FAQs',
    copyright: 'All rights reserved.',
  },
  ar: {
    description: 'طريقة أسهل للعثور على الرعاية والتواصل مع مقدمي الخدمات والاهتمام بصحتك.',
    explore: 'استكشف',
    support: 'هل تحتاج إلى مساعدة؟',
    supportText: 'اعثر على إجابات للأسئلة الشائعة في مركز المساعدة.',
    faq: 'الأسئلة الشائعة',
    copyright: 'جميع الحقوق محفوظة.',
  },
};

export default function Footer() {
  const language = useSelector((state) => state.lang.current);
  const copy = footerCopy[language];

  return (
    <footer className="mt-auto border-t border-text-light/10 bg-bg-layout">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1.2fr] md:py-16">
        <div>
          <Link to="/home" className="text-2xl font-extrabold tracking-tight text-primary">
            {language === 'ar' ? 'هوسبيليرا' : 'Hospelyra'}
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-text-muted">{copy.description}</p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-text-main">{copy.explore}</h2>
          <nav aria-label={language === 'ar' ? 'روابط التذييل' : 'Footer navigation'} className="mt-4 flex flex-col items-start gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={`/${link.path}`}
                className="text-sm text-text-muted transition-colors hover:text-primary"
              >
                {link.label[language]}
              </Link>
            ))}
            <Link to="/forgot-password" className="text-sm text-text-muted transition-colors hover:text-primary">
              {language === 'ar' ? 'نسيت كلمة المرور؟' : 'Forgot password?'}
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-bold text-text-main">{copy.support}</h2>
          <p className="mt-4 text-sm leading-7 text-text-muted">{copy.supportText}</p>
          <Link
            to="/faqs"
            className="mt-4 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover"
          >
            {copy.faq}
          </Link>
        </div>
      </div>
      <div className="border-t border-text-light/10">
        <div className="container flex flex-col gap-2 py-5 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hospelyra. {copy.copyright}</p>
          <p>{language === 'ar' ? 'رعايتك، بطريقة أفضل.' : 'Your care, made simpler.'}</p>
        </div>
      </div>
    </footer>
  );
}