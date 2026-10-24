import React from 'react'

function FeaturesSections({data}) {
  const features = [
    { title: "حجز موعد أونلاين", desc: "احجز كشفك أو استشارتك مع أفضل الأطباء بضغطة زر واحدة." },
    { title: "الملف الطبي الشامل", desc: "سجل مرضي متكامل ومحدث لحظياً، متاح للطبيب والمريض في أي وقت." },
    { title: "تنبيهات ومتابعة", desc: "إشعارات تلقائية بمواعيد الأدوية والاستشارات القادمة." }
  ];

  return (
    <section className='py-section-padding bg-slate-50'>
      <div className='cotainer'>
        
        {/* عنوان القسم */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">ليه تختار النظام بتاعنا؟</h2>
          <div className="w-16 h-1 bg-sky-600 mx-auto rounded"></div>
        </div>

        {/* كروت المميزات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeaturesSections