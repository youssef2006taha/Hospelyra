import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { staticData } from './data/data.js';

import AppLayout from './components/layout/AppLayout.jsx';
import Toast from './components/ui/Toast.jsx';
import Overview from './pages/overview/Overview.jsx';
import Hospitals from './pages/hospitals/Hospitals.jsx';
import Plans from './pages/plans/Plans.jsx';
import Settings from './pages/settings/Settings.jsx';
import Profile from './pages/profile/Profile.jsx';
import Login from './pages/auth/login/Login.jsx';
import SendOtp from './pages/auth/sendOtp/SendOtp.jsx';

function App() {
  const theme = useSelector((state) => state.ui.theme);
  const dir = useSelector((state) => state.lang.dir);
  const language = useSelector((state) => state.lang.current);
  const data = staticData[language];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dir = dir;
  }, [theme, dir]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/overview" replace />} />
        <Route element={<AppLayout data={data.layout} />}>
          <Route
            path="overview"
            element={<Overview staticData={data.pages.overview} />}
          />
          <Route
            path="hospitals"
            element={<Hospitals staticData={data.pages.hospitals} />}
          />
          <Route
            path="plans"
            element={<Plans staticData={data.pages.plans} />}
          />
          <Route
            path="settings"
            element={<Settings staticData={data.pages.settings} />}
          />
          <Route
            path="profile"
            element={<Profile staticData={data.pages.profile} />}
          />
        </Route>
        <Route path="login" element={<Login staticData={data.pages.login} />} />
        <Route
          path="send-otp"
          element={<SendOtp staticData={data.pages.sendOtp} />}
        />
        <Route path="*" element={<Navigate to="/overview" replace />} />
      </Routes>
      <Toast />
    </>
  );
}

export default App;
