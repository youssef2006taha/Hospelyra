import React from 'react'

function HeroSection({data}) {
  return (
    <section className='py-section-padding bg-white border-b border-gray-100'>
      <div className='cotainer flex flex-col md:flex-row items-center justify-between'>

        {/* المحتوى النصي */}
        <div className="max-w-xl mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            اربط عيادتك بمرضاك بكل <span className="text-sky-600">سهولة وأمان</span>
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            نظام متكامل لإدارة الحجوزات، الملفات الطبية، والتواصل المباشر بين المريض والطبيب في منصة واحدة.
          </p>
          <div className="flex gap-4">
            <button className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200">
              احجز ديمو الآن
            </button>
            <button className="border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium py-3 px-6 rounded-lg transition duration-200">
              اعرف أكتر
            </button>
          </div>
        </div>

        {/* الجزء المرئي للسيستم */}
        <div className="w-full md:w-1/2 bg-sky-50 rounded-2xl p-8 flex items-center justify-center min-h-[250px]">
          <div className="text-sky-600 font-semibold text-xl">لوحة تحكم المنظومة الطبية 📊</div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection