import React from 'react'

function PreviewSection({data}) {
  return (
    <section className='py-section-padding bg-slate-50 text-center'>
      <div className='cotainer'>
        
        <h2 className="text-3xl font-bold text-slate-900 mb-4">شاهد النظام من الداخل</h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-8">
          واجهة مستخدم بسيطة وسريعة لإدارة المواعيد والملفات الطبية بكل سهولة دون تعقيد.
        </p>
        
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-64 flex items-center justify-center text-slate-400">
          [صورة توضيحية لجدولة المواعيد وإدارة المرضى بالسيستم]
        </div>

      </div>
    </section>
  )
}

export default PreviewSection