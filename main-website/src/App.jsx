import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { portfolioData } from './data/data.js';

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

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dir = dir;
  }, [theme, dir]);


  // const language = useSelector((state) => state.lang.current);
  // const { header } = portfolioData[language];

  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="contact" element={<Contact />} />

          <Route
            path="profile"
            element={
              <Profile
                data={portfolioData[dir === 'rtl' ? 'ar' : 'en'].profile}
              />
            }
          />


          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="sendOTP" element={<SendOTP />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
      <Toast />
    </>
  );
}

export default App;
