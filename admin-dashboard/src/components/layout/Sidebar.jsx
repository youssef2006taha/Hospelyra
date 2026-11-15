import {
  Building2,
  CircleUserRound,
  CreditCard,
  LayoutDashboard,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  X,
} from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  closeSidebar,
  toggleLabels,
} from '../../features/app/layout/layoutSlice.js';

const linkIcons = {
  overview: LayoutDashboard,
  hospitals: Building2,
  plans: CreditCard,
  settings: Settings,
  profile: CircleUserRound,
};

function Sidebar({ data }) {
  const { sidebarMode, hideSidebar, showLabels } = useSelector(
    (state) => state.layout,
  );
  const dir = useSelector((state) => state.lang.dir);
  const dispatch = useDispatch();
  const isRtl = dir === 'rtl';
  const homePath = data.navLinks[0].path;

  const sidebarPosition =
    sidebarMode === 'full'
      ? 'w-[270px] px-5 pb-7 sticky'
      : sidebarMode === 'mini'
        ? 'w-[85px] px-2.5 pb-2.5 sticky'
        : `fixed ${isRtl ? 'right-0' : 'left-0'} w-[270px] px-5 pb-7 ${
            hideSidebar
              ? isRtl
                ? 'translate-x-full'
                : '-translate-x-full'
              : 'translate-x-0'
          }`;

  return (
    <aside
      className={`top-0 z-30 flex h-screen flex-col justify-between bg-bg-sidebar transition-transform duration-300 ${sidebarPosition}`}
    >
      <div
        className={`flex w-full flex-col ${
          sidebarMode === 'mini' ? 'items-center' : ''
        }`}
      >
        {sidebarMode === 'hidden' && !hideSidebar && (
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => dispatch(closeSidebar())}
            className={`absolute top-4.5 z-50 flex h-5.5 w-5.5 items-center justify-center rounded-xl border border-border bg-bg-hover text-text-primary/50 transition-all duration-300 hover:text-text-primary ${
              isRtl ? 'left-3.5' : 'right-3.5'
            }`}
          >
            <X size={16} />
          </button>
        )}

        <div
          className={`flex h-19 flex-col justify-between pt-3 ${
            sidebarMode === 'mini' ? 'items-center' : ''
          }`}
        >
          {sidebarMode !== 'mini' ? (
            <NavLink
              to={`/${homePath}`}
              className="text-xl font-bold text-text-primary"
            >
              {data.header.brand}
            </NavLink>
          ) : (
            <NavLink
              to={`/${homePath}`}
              aria-label={data.header.brand}
              className="text-xl font-bold text-primary"
            >
              {data.header.brand.slice(0, 1)}
            </NavLink>
          )}
          <div className="h-0.5 w-full bg-linear-to-r from-transparent via-primary to-transparent" />
        </div>

        <nav className="mt-5 flex w-full flex-col gap-1">
          {data.navLinks.map((navLink) => {
            const Icon = linkIcons[navLink.path];

            return (
              <NavLink
                key={navLink.path}
                to={`/${navLink.path}`}
                onClick={() => {
                  if (sidebarMode === 'hidden') dispatch(closeSidebar());
                }}
                className={({ isActive }) =>
                  `relative flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 ${
                    sidebarMode === 'mini' ? 'justify-center' : 'justify-start'
                  } ${
                    isActive
                      ? 'bg-primary text-white shadow-primary'
                      : 'text-text-secondary hover:bg-primary-light hover:text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="flex h-6 w-6 items-center justify-center">
                      <Icon size={20} strokeWidth={2.2} />
                    </span>
                    <span
                      className={`whitespace-nowrap text-sm font-semibold transition-all duration-300 ${
                        sidebarMode === 'mini'
                          ? `absolute top-1/2 ${
                              isRtl ? 'right-19' : 'left-19'
                            } -translate-y-1/2 rounded-xl border px-4 py-3 shadow-md ${
                              isActive
                                ? 'border-primary bg-primary text-white'
                                : 'border-border bg-bg-surface text-text-primary'
                            } ${
                              showLabels
                                ? 'opacity-100'
                                  : `pointer-events-none opacity-0 ${
                                      isRtl
                                        ? 'translate-x-[250%]'
                                        : 'translate-x-[-250%]'
                                    }`
                            }`
                          : ''
                      }`}
                    >
                      {sidebarMode === 'mini' && (
                        <span
                          className={`absolute top-1/2 h-3 w-3 -translate-y-1/2 rotate-[-45deg] border-l border-t transition-all duration-300 ${
                            isRtl ? '-right-[5px]' : '-left-[5px]'
                          } ${
                            isActive
                              ? 'border-primary bg-primary'
                              : 'border-border bg-bg-surface'
                          }`}
                        />
                      )}
                      {navLink.label}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {sidebarMode === 'mini' && (
        <button
          type="button"
          aria-label={showLabels ? 'Hide navigation labels' : 'Show navigation labels'}
          onClick={() => dispatch(toggleLabels())}
          className={`flex min-w-0 items-center justify-center rounded-sm border border-border p-2.5 shadow-none ${
            showLabels
              ? 'bg-primary hover:bg-primary-hover'
              : 'bg-bg-hover hover:bg-bg-active'
          }`}
        >
          {showLabels ? (
            <PanelLeftClose size={20} />
          ) : (
            <PanelLeftOpen size={20} />
          )}
        </button>
      )}
    </aside>
  );
}

export default Sidebar;
