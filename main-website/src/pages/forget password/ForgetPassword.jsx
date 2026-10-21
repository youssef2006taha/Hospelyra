import React from 'react'

function ForgetPassword() {
  return (
    <section class="grid w-full max-w-5xl overflow-hidden rounded-3xl
                    border border-slate-200 bg-white shadow-xl shadow-blue-100/50
                    dark:border-slate-800 dark:bg-slate-900 dark:shadow-none
                    lg:grid-cols-2">

      
      <div class="relative hidden overflow-hidden
                   from-sky-100 via-blue-100 to-cyan-200
                  p-10 dark:from-slate-800 dark:via-blue-950 dark:to-slate-900
                  lg:flex lg:flex-col lg:justify-between">

        <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full
                    bg-white/40 blur-2xl dark:bg-blue-500/10"></div>

        <div class="absolute -bottom-24 -left-16 h-80 w-80 rounded-full
                    bg-sky-300/30 blur-3xl dark:bg-blue-500/10"></div>

        <div class="relative z-10">
          <div class="mb-6 flex h-14 w-14 items-center justify-center
                      rounded-2xl bg-white/80 text-blue-600 shadow-sm
                      dark:bg-slate-800 dark:text-sky-400">

            <svg xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="1.7"
                 class="h-7 w-7">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 3v18M3 12h18"/>
            </svg>
          </div>

          <h1 class="text-3xl font-bold leading-relaxed text-slate-800
                     dark:text-white">
            استعد الوصول إلى حسابك
          </h1>

          <p class="mt-3 max-w-sm text-sm leading-7 text-slate-600
                    dark:text-slate-300">
            لا تقلق، يمكنك إعادة تعيين كلمة المرور بسهولة وأمان.
            أدخل بريدك الإلكتروني وسنساعدك على استعادة حسابك.
          </p>

          <p dir="ltr" class="mt-3 text-left text-sm leading-6 text-slate-500
                             dark:text-slate-400">
            Regain access to your account securely.
          </p>
        </div>

        
        <div class="relative z-10 flex items-center justify-center py-8">
          <div class="flex h-56 w-56 items-center justify-center rounded-full
                      border border-white/70 bg-white/40 shadow-inner
                      dark:border-white/10 dark:bg-white/5">

            <div class="flex h-36 w-36 items-center justify-center rounded-3xl
                        bg-white/80 shadow-lg dark:bg-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg"
                   fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="1.2"
                   class="h-24 w-24 text-blue-500">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M8 11V7a4 4 0 0 1 8 0v4"/>
                <rect x="5" y="11" width="14" height="10" rx="2"/>
                <circle cx="12" cy="15" r="1"/>
                <path stroke-linecap="round" d="M12 16v2"/>
              </svg>
            </div>
          </div>
        </div>

        <p class="relative z-10 text-center text-xs text-slate-500
                  dark:text-slate-400" dir="ltr">
          Your privacy and security matter.
        </p>
      </div>

      
      <div class="flex flex-col justify-center px-6 py-10 sm:px-12 lg:px-14">

        
        <div class="mb-7 flex justify-center lg:justify-start">
          <div class="flex h-16 w-16 items-center justify-center rounded-2xl
                      bg-blue-50 text-blue-600
                      dark:bg-blue-500/10 dark:text-sky-400">

            <svg xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="1.6"
                 class="h-8 w-8">
              <rect x="5" y="10" width="14" height="11" rx="2"/>
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3"/>
            </svg>
          </div>
        </div>

        <div class="mb-8 text-center lg:text-right">
          <h2 class="text-3xl font-bold tracking-tight text-slate-900
                     dark:text-white">
            نسيت كلمة المرور؟
          </h2>

          <p class="mt-3 text-sm leading-7 text-slate-500
                    dark:text-slate-400">
            أدخل بريدك الإلكتروني المسجل وسنرسل إليك رابطًا
            لإعادة تعيين كلمة المرور.
          </p>

          <p dir="ltr" class="mt-2 text-left text-sm leading-6
                             text-slate-400">
            Enter your email to reset your password.
          </p>
        </div>

        <form action="#" method="post" class="space-y-6">

          <div>
            <label for="email"
                   class="mb-2 block text-sm font-semibold text-slate-700
                          dark:text-slate-200">
              البريد الإلكتروني
              <span dir="ltr" class="font-normal text-slate-400">
                / Email address
              </span>
            </label>

            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 right-0
                          flex items-center pr-4 text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="1.6"
                     class="h-5 w-5">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="m3 7 9 6 9-6"/>
                </svg>
              </div>

              <input
                type="email"
                id="email"
                name="email"
                autocomplete="email"
                placeholder="example@email.com"
                required
                class="w-full rounded-xl border border-slate-200
                       bg-slate-50 py-3.5 pr-12 pl-4 text-left text-sm
                       text-slate-800 outline-none transition
                       placeholder:text-slate-400
                       focus:border-blue-500 focus:bg-white
                       focus:ring-4 focus:ring-blue-500/10
                       dark:border-slate-700 dark:bg-slate-800
                       dark:text-white dark:focus:border-blue-400
                       dark:focus:bg-slate-800"
                dir="ltr"
              />
            </div>
          </div>

          <button
            type="submit"
            class="flex w-full items-center justify-center gap-3
                   rounded-xl bg-blue-600 px-5 py-3.5
                   text-sm font-semibold text-white shadow-lg
                   shadow-blue-600/20 transition
                   hover:bg-blue-700 active:scale-[0.99]
                   focus:outline-none focus:ring-4
                   focus:ring-blue-500/20">

            <span>إرسال رابط الاستعادة</span>

            <svg xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="1.8"
                 class="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M5 12h14m-6-6 6 6-6 6"/>
            </svg>
          </button>

        </form>

        <div class="my-7 flex items-center gap-4">
          <div class="h-px flex-1 bg-slate-200 dark:bg-slate-700"></div>
          <span class="text-xs text-slate-400">أو / OR</span>
          <div class="h-px flex-1 bg-slate-200 dark:bg-slate-700"></div>
        </div>

        <a href="login.html"
           class="group flex items-center justify-center gap-2
                  text-sm font-semibold text-blue-600 transition
                  hover:text-blue-700 dark:text-sky-400
                  dark:hover:text-sky-300">

          <svg xmlns="http://www.w3.org/2000/svg"
               fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="1.8"
               class="h-5 w-5 transition-transform
                      group-hover:translate-x-1">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19 12H5m6 6-6-6 6-6"/>
          </svg>

          العودة إلى تسجيل الدخول
        </a>

        <p class="mt-10 text-center text-xs text-slate-400" dir="ltr">
          Secure account recovery
        </p>

      </div>
    </section>
  )
}

export default ForgetPassword