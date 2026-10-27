import { useEffect } from 'react';
import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarMode, closeSidebar } from '../../features/app/layout/layoutSlice.js';

function AppLayout({ data }) {
  const dispatch = useDispatch();
  const { sidebarMode, hideSidebar } = useSelector((state) => state.layout);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        dispatch(setSidebarMode("hidden"));
        dispatch(closeSidebar());
      } else if (width < 1024) {
        dispatch(setSidebarMode("mini"));
      } else {
        dispatch(setSidebarMode("full"));
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  return (
    <div className="flex min-h-screen">
      {sidebarMode === "hidden" && !hideSidebar && (
          <div
            onClick={() => dispatch(closeSidebar())}
            className="fixed inset-0 z-20 bg-primary/10 backdrop-blur-sm transition-all duration-300"
          />
      )}
      <Sidebar data={data} />
      <div className="relative min-w-0 flex-1">
        <Navbar data={data} />
        <main className="min-w-0 p-4 md:p-7 lg:p-9 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
