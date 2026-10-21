import React from 'react'

function SendOTP() {
  return (
    <section class="grid w-full max-w-5xl overflow-hidden rounded-3xl
                    border border-slate-200 bg-white shadow-xl
                    shadow-blue-100/50 dark:border-slate-800
                    dark:bg-slate-900 dark:shadow-none lg:grid-cols-2">

      
      <aside class="relative hidden  overflow-hidden
                    bg-gradient-to-brp-10 dark:from-slate-800 dark:via-blue-950
                    dark:to-slate-900 lg:flex lg:flex-col lg:justify-between">

        <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full
                    bg-white/40 blur-2xl dark:bg-blue-500/10"></div>

        <div class="absolute -bottom-20 -left-16 h-72 w-72 rounded-full
                    bg-zblur-3xl dark:bg-blue-500/10"></div>

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
            أمان حسابك أولويتنا
          </h1>

          <p class="mt-3 max-w-sm text-sm leading-7 text-slate-600
                    dark:text-slate-300">
            نتحقق من هويتك للحفاظ على بياناتك الصحية
            ومعلوماتك الشخصية بأمان.
          </p>

          <p dir="ltr" class="mt-3 text-left text-sm leading-6
                             text-slate-500 dark:text-slate-400">
            Your security and privacy are our priority.
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
                   stroke="currentColor" stroke-width="1.4"
                   class="h-20 w-20 text-blue-500">
                <rect x="5" y="3" width="14" height="18" rx="3"/>
                <path stroke-linecap="round" d="M9 7h6"/>
                <circle cx="9" cy="11" r="0.7" fill="currentColor"/>
                <circle cx="12" cy="11" r="0.7" fill="currentColor"/>
                <circle cx="15" cy="11" r="0.7" fill="currentColor"/>
                <circle cx="9" cy="14" r="0.7" fill="currentColor"/>
                <circle cx="12" cy="14" r="0.7" fill="currentColor"/>
                <circle cx="15" cy="14" r="0.7" fill="currentColor"/>
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="m9 17 2 2 4-4"/>
              </svg>
            </div>
          </div>
        </div>

        <p class="relative z-10 text-center text-xs text-slate-500
                  dark:text-slate-400" dir="ltr">
          Secure verification for your account
        </p>
      </aside>

      
      <div class="flex flex-col justify-center px-6 py-10 sm:px-12 lg:px-14">

        
        <div class="mb-7 flex justify-center lg:justify-start">
          <div class="flex h-16 w-16 items-center justify-center rounded-2xl
                      bg-blue-50 text-blue-600
                      dark:bg-blue-500/10 dark:text-sky-400">

            <svg xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="1.6"
                 class="h-8 w-8">
              <rect x="5" y="3" width="14" height="18" rx="3"/>
              <path stroke-linecap="round" d="M9 7h6"/>
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="m9 14 2 2 4-4"/>
            </svg>
          </div>
        </div>

        <div class="mb-8 text-center lg:text-right">
          <h2 class="text-3xl font-bold tracking-tight text-slate-900
                     dark:text-white">
            تحقق من حسابك
          </h2>

          <p class="mt-3 text-sm leading-7 text-slate-500
                    dark:text-slate-400">
            أدخل رمز التحقق المكوّن من 6 أرقام
            الذي أرسلناه إلى بريدك الإلكتروني.
          </p>

          <p dir="ltr" class="mt-2 text-left text-sm leading-6
                             text-slate-400">
            Enter the 6-digit code sent to your email.
          </p>
        </div>

        <form action="#" method="post" class="space-y-6">

          
          <div>
            <label for="otp"
                   class="mb-3 block text-sm font-semibold text-slate-700
                          dark:text-slate-200">
              رمز التحقق
              <span dir="ltr" class="font-normal text-slate-400">
                / Verification Code
              </span>
            </label>

            <input
              type="text"
              id="otp"
              name="otp"
              inputmode="numeric"
              autocomplete="one-time-code"
              pattern="[0-9]{6}"
              maxlength="6"
              minlength="6"
              placeholder="••••••"
              aria-describedby="otp-help"
              required
              dir="ltr"
              class="w-full rounded-xl border border-slate-200
                     bg-slate-50 px-4 py-5 text-center text-3xl
                     font-bold tracking-[0.65em] text-blue-600
                     outline-none transition placeholder:text-slate-300
                     focus:border-blue-500 focus:bg-white
                     focus:ring-4 focus:ring-blue-500/10
                     dark:border-slate-700 dark:bg-slate-800
                     dark:text-sky-400 dark:placeholder:text-slate-600
                     dark:focus:border-blue-400 dark:focus:bg-slate-800"
            />

            <p id="otp-help" class="mt-3 text-xs leading-6 text-slate-400">
              لا تشارك رمز التحقق مع أي شخص.
              <span dir="ltr">Never share your OTP with anyone.</span>
            </p>
          </div>

         
          <button
            type="submit"
            class="flex w-full items-center justify-center gap-3
                   rounded-xl bg-blue-600 px-5 py-3.5
                   text-sm font-semibold text-white shadow-lg
                   shadow-blue-600/20 transition hover:bg-blue-700
                   active:scale-[0.99] focus:outline-none
                   focus:ring-4 focus:ring-blue-500/20">

            <span>تأكيد الرمز</span>

            <svg xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="1.8"
                 class="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="m5 12 4 4L19 6"/>
            </svg>
          </button>

        </form>

        
        <div class="mt-7 text-center">
          <p class="text-sm text-slate-500 dark:text-slate-400">
            لم يصلك الرمز؟
            <span dir="ltr">Didn't receive the code?</span>
          </p>

          <button
            type="button"
            class="mt-3 inline-flex items-center gap-2 text-sm
                   font-semibold text-blue-600 transition
                   hover:text-blue-700 dark:text-sky-400
                   dark:hover:text-sky-300">

            <svg xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="1.7"
                 class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M20 7v5h-5M4 17v-5h5"/>
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M5.5 9a7 7 0 0 1 11.8-2L20 12M4 12l2.7 5a7 7 0 0 0 11.8-2"/>
            </svg>

            إعادة إرسال الرمز / Resend OTP
          </button>
        </div>

        
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
          Secure account verification
        </p>

      </div>
    </section>
  )
}

export default SendOTP