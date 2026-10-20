import { Link } from 'react-router-dom';

export default function Footer({ data , navLinks }) {

  return (
    <footer className="mt-auto border-t border-text-light/10 bg-bg-layout">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1.2fr] md:py-16">
        <div>
          <Link to="/home" className="text-2xl font-extrabold tracking-tight text-primary">
            {data.brand}
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-text-muted">{data.description}</p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-text-main">{data.explore}</h2>
          <nav className="mt-4 flex flex-col items-start gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={`/${link.path}`}
                className="text-sm text-text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-bold text-text-main">{data.support}</h2>
          <p className="mt-4 text-sm leading-7 text-text-muted">{data.supportText}</p>
          <Link
            to="/faqs"
            className="mt-4 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover"
          >
            {data.faq}
          </Link>
        </div>
      </div>
      <div className="border-t border-text-light/10">
        <div className="container flex flex-col gap-2 py-5 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hospelyra. {data.dataright}</p>
          <p>{data.statement}</p>
        </div>
      </div>
    </footer>
  );
}