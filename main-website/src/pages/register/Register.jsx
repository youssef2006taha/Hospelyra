import React from 'react'

function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-bg-main text-text-main px-4 py-12 transition-colors duration-300">
      <div className="w-full max-w-md bg-bg-surface p-8 rounded-2xl shadow-xl border border-primary/20">
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-primary tracking-tight mb-2">
            إنشاء حساب جديد
          </h1>
          <p className="text-sm font-medium text-text-muted">
            انضم إلى Hospelyra وابدأ تجربتك اليوم
          </p>
        </div>
        <form className="space-y-5">
          {/* الاسم الكامل */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-bold text-text-muted mb-1.5">
              الاسم الكامل
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="يوسف طه"
              required
              className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-primary/20 text-text-main placeholder-text-light font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          {/* البريد الإلكتروني */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-text-muted mb-1.5">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              required
              className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-primary/20 text-text-main placeholder-text-light font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          {/* كلمة المرور */}
          <div>
            <label htmlFor="password" className="block text-sm font-bold text-text-muted mb-1.5">
              كلمة المرور
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-primary/20 text-text-main placeholder-text-light font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          {/* تأكيد كلمة المرور */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-bold text-text-muted mb-1.5">
              تأكيد كلمة المرور
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-primary/20 text-text-main placeholder-text-light font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          {/* زر الإرسال */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-inverse font-bold rounded-xl shadow-md transition-all duration-200 mt-2 cursor-pointer"
          >
            إنشاء الحساب
          </button>
        </form>

        <p className="mt-8 text-center text-sm font-medium text-text-muted">
          لديك حساب بالفعل؟{' '}
          <a href="/login" className="font-bold text-primary hover:underline underline-offset-4">
            تسجيل الدخول
          </a>
        </p>
      </div>
    </div>
  )
}

export default Register