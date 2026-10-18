import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import AppLayout from './components/layout/AppLayout.jsx';
import Toast from './components/ui/Toast.jsx';
import Home from './pages/home/Home.jsx';
import FAQs from './pages/faqs/FAQs.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import ForgotPassword from './pages/forgot-password/ForgotPassword.jsx';
import Profile from './pages/profile/Profile.jsx';

function App() {
  const theme = useSelector((state) => state.ui.theme);
  const dir = useSelector((state) => state.lang.dir);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dir = dir;
  }, [theme, dir]);

  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
      <Toast />
    </>
  );
}

export default App;
