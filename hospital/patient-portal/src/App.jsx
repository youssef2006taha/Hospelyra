import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { staticData } from './data/data.js';

import AppLayout from './components/layout/AppLayout.jsx';
import Toast from './components/ui/Toast.jsx';

function App() {
  const theme = useSelector((state) => state.ui.theme);
  const dir = useSelector((state) => state.lang.dir);
  const language = useSelector((state) => state.lang.current);
  const data = staticData[language];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.dir = dir;
  }, [theme, dir]);

  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>

        </Route>
      </Routes>
      <Toast />
    </>
  );
}

export default App;
