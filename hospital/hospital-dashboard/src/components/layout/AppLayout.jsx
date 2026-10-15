import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import AppBrand from '../common/AppBrand.jsx'
import { toggleSidebar } from '../../features/app/appSlice.js'
import { useAppDispatch } from '../../hooks/useAppDispatch.js'
import { useAppSelector } from '../../hooks/useAppSelector.js'
import { pages } from '../../pages/pageConfig.js'

function AppLayout() {
  const dispatch = useAppDispatch()
  const sidebarOpen = useAppSelector((state) => state.app.sidebarOpen)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800">
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} hidden shrink-0 flex-col border-r border-slate-200 bg-white transition-all md:flex`}>
        <div className="flex h-16 items-center gap-3 border-b border-slate-100 px-5">
          <AppBrand title="Hospelyra Hospital" compact={!sidebarOpen} />
        </div>
        <nav aria-label="Main navigation" className="flex-1 space-y-1 p-3">
          {pages.map(({ path, title }) => (
            <NavLink
              key={path}
              to={`/${path}`}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:bg-slate-50'
                }`
              }
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-current opacity-70" />
              {sidebarOpen && <span>{title}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center gap-3 border-b border-slate-200 bg-white px-4 md:px-7">
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => {
              dispatch(toggleSidebar())
              setMobileMenuOpen((open) => !open)
            }}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <span className="md:hidden"><AppBrand title="Hospelyra Hospital" /></span>
          <div className="ml-auto text-sm text-slate-500">Hospital management</div>
        </header>
        {mobileMenuOpen && (
          <nav aria-label="Mobile navigation" className="space-y-1 border-b border-slate-200 bg-white p-3 md:hidden">
            {pages.map(({ path, title }) => (
              <NavLink
                key={path}
                to={`/${path}`}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:bg-slate-50'
                  }`
                }
              >
                {title}
              </NavLink>
            ))}
          </nav>
        )}
        <main className="flex-1 p-5 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
