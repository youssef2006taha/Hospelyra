import React from 'react'

function CtaSection({data}) {
  return (
    <section className='py-section-padding bg-sky-600 text-white text-center'>
      <div className='cotainer'>
        
        <h2 className="text-3xl font-bold mb-4">
          جاهز تطور عيادتك وتسهل التواصل مع مرضاك؟
        </h2>
        
        <p className="text-sky-100 max-w-xl mx-auto mb-8">
          انضم لأكثر من 500 طبيب وعيادة بيستخدموا النظام يومياً لتسهيل إدارة الحجوزات والملفات الطبية.
        </p>
        
        <button className="bg-white text-sky-600 hover:bg-sky-50 font-bold py-3 px-8 rounded-lg shadow transition duration-200">
          ابدأ تجربة مجانية الآن
        </button>

      </div>
    </section>
  )
}

export default CtaSection