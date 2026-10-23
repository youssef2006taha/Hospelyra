import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import { staticData } from '../../data/data.js';
import { useSelector } from 'react-redux';

export default function AppLayout() {
  const language = useSelector((state) => state.lang.current);
  const { layout } = staticData[language];

  return (
    <div className="flex min-h-screen flex-col bg-bg-main text-text-main">
      <Navbar data={layout.header} navLinks={layout.navLinks} />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer data={layout.footer} navLinks={layout.navLinks} />
    </div>
  );
}
