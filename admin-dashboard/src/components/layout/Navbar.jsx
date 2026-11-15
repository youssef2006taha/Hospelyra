import { Menu, Moon, Sun } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleLanguage } from '../../features/app/lang/langSlice.js';
import { toggleSidebarSm } from '../../features/app/layout/layoutSlice.js';
import { toggleTheme } from '../../features/app/ui/uiSlice.js';

function Navbar({ data }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);
  const { sidebarMode } = useSelector((state) => state.layout);
  const homePath = data.navLinks[0].path;

  return (
    <header className="sticky top-0 z-20 flex h-19 items-center justify-between bg-bg-navbar px-5">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => dispatch(toggleSidebarSm())}
          className="flex min-w-0 items-center justify-center rounded-[var(--radius-sm-value)] border border-border bg-bg-hover p-2.5 text-text-secondary hover:bg-bg-active sm:hidden"
        >
          <Menu size={20} />
        </button>
        {sidebarMode === 'mini' && (
          <NavLink
            to={`/${homePath}`}
            className="text-xl font-bold text-text-primary"
          >
            {data.header.brand}
          </NavLink>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => dispatch(toggleLanguage())}
          className="rounded-[var(--radius-md-value)] border border-border bg-bg-card px-3 py-2 text-sm font-medium text-text-primary hover:bg-bg-hover"
        >
          {data.header.language}
        </button>
        <button
          type="button"
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          onClick={() => dispatch(toggleTheme())}
          className="flex min-w-0 items-center justify-center rounded-[var(--radius-sm-value)] border border-border bg-bg-hover p-2.5 hover:bg-bg-active"
        >
          {theme === 'dark' ? (
            <Sun size={20} className="text-warning" />
          ) : (
            <Moon size={20} className="text-text-primary" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
