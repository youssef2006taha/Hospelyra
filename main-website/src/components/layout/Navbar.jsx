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
import person from "../../assets/mem.png"

export default function Navbar({ data , navLinks }) {
  const dispatch = useDispatch();
  const { isMobileMenuOpen, theme } = useSelector((state) => state.ui);

  // navs
  const navs = navLinks.filter((el) => ["home", "faqs", "contact"].includes(el.path))
  const profileNav = navLinks.filter((el) => el.path === "profile")[0]
  const loginNav = navLinks.filter((el) => el.path === "login")[0]
  const registerNav = navLinks.filter((el) => el.path === "register")[0]




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
        >
          {data.brand}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navs.map(
              (link) => (
                <NavLink
                  key={link.path}
                  to={`/${link.path}`}
                  className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-light text-primary'
                      : 'text-text-muted hover:bg-bg-secondary hover:text-primary'
                  }`}
                >
                  {link.label}
                </NavLink>
              )
            )
          }
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => dispatch(toggleTheme())}
            className="cursor-pointer size-8 flex justify-center items-center rounded-xl border border-text-light/15 bg-bg-secondary text-primary transition-colors hover:bg-primary-light"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => dispatch(toggleLanguage())}
            className="cursor-pointer h-8 flex justify-center items-center gap-1 px-2 rounded-xl bg-primary-light text-xs font-semibold text-primary transition-colors hover:bg-primary/20 sm:text-sm"
          >
            <Globe size={16} />
            <span>{data.language}</span>
          </button>

          <NavLink
            key={profileNav.path}
            to={`/${profileNav.path}`}
            className="rounded-full size-9"
            style={{
              backgroundImage: `url(${person})`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          >
          </NavLink>

          <NavLink
            key={loginNav.path}
            to={`/${loginNav.path}`}
            className="h-9 flex justify-center items-center px-2 rounded-xl bg-primary text-text-inverse transition-colors hover:bg-primary-hover"
          >
            {loginNav.label}
          </NavLink>
          
          <NavLink
            key={registerNav.path}
            to={`/${registerNav.path}`}
            className="h-9 flex justify-center items-center px-2 rounded-xl bg-primary text-text-inverse transition-colors hover:bg-primary-hover"
          >
            {registerNav.label}
          </NavLink>

          <button
            type="button"
            onClick={() => dispatch(toggleMobileMenu())}
            className="cursor-pointer size-9 flex justify-center items-center rounded-xl bg-primary text-text-inverse transition-colors hover:bg-primary-hover lg:hidden"
          >
            {isMobileMenuOpen ? <X size={21} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-20 z-40 bg-text-main/20 backdrop-blur-sm transition-opacity lg:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => dispatch(closeMobileMenu())}
      />
      <nav
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
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
