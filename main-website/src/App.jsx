import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { staticData } from './data/data.js';

import AppLayout from './components/layout/AppLayout.jsx';
import Toast from './components/ui/Toast.jsx';
// Nav Pages
import Home from './pages/home/Home.jsx';
import FAQs from './pages/faqs/FAQs.jsx';
import Contact from "./pages/contact/Contact.jsx"
import Profile from './pages/profile/Profile.jsx';
// Auth Pages
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import ForgetPassword from './pages/forget password/ForgetPassword.jsx';
import SendOTP from './pages/send OTP/SendOTP.jsx';


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
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home data={data.home} />} />
          <Route path="faqs" element={<FAQs data={data.faqs} />} />
          <Route path="contact" element={<Contact data={data.contact} />} />
          <Route path="profile" element={<Profile data={data.profile} />} />

          <Route path="login" element={<Login data={data.auth.login} />} />
          <Route path="register" element={<Register data={data.auth.register} />} />
          <Route path="forget-password" element={<ForgetPassword data={data.auth.forgetPassword} />} />
          <Route path="sendOTP" element={<SendOTP data={data.auth.sendOtp} />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
      <Toast />
    </>
  );
}

export default App;
