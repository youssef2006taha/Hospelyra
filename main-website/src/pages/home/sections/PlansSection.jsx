import React from 'react'

function PlansSection({data}) {
  return (
    <section className='py-section-padding bg-white'>
      <div className='cotainer'>
        
        {/* عنوان القسم */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">باقات تناسب جميع العيادات</h2>
          <div className="w-16 h-1 bg-sky-600 mx-auto rounded"></div>
        </div>

        {/* كروت الخطط والباقات */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* الباقة الأولى */}
          <div className="border border-slate-200 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">باقة العيادات الصغيرة</h3>
              <p className="text-slate-500 mb-6">مناسبة للعيادات الفردية والأطباء المستقلين.</p>
              <div className="text-4xl font-extrabold text-slate-900 mb-6">
                999 ج.م <span className="text-sm font-normal text-slate-500">/ شهرياً</span>
              </div>
            </div>
            <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium py-3 rounded-lg transition duration-200">
              اشترك الآن
            </button>
          </div>

          {/* الباقة الثانية */}
          <div className="border-2 border-sky-600 p-8 rounded-2xl flex flex-col justify-between relative bg-sky-50/30">
            <div>
              <span className="bg-sky-600 text-white text-xs px-3 py-1 rounded-full absolute -top-3 right-8">الأكثر طلباً</span>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">باقة المستشفيات والمراكز</h3>
              <p className="text-slate-500 mb-6">مناسبة للمراكز الطبية الكبيرة والعيادات المتعددة التخصصات.</p>
              <div className="text-4xl font-extrabold text-slate-900 mb-6">
                2499 ج.م <span className="text-sm font-normal text-slate-500">/ شهرياً</span>
              </div>
            </div>
            <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 rounded-lg transition duration-200">
              اشترك الآن
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default PlansSection