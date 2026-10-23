

export const ar = {
  // layout

  layout : {
    navLinks: [
      { path: 'home', label: 'الرئيسية' },
      { path: 'faqs', label: 'الأسئلة الشائعة' },
      { path: 'contact', label: "تواصل معنا" },
      { path: 'profile', label: "حسابك" },

      { path: 'login', label: 'تسجيل الدخول' },
      { path: 'register', label: 'إنشاء حساب' },
      { path: 'forget-password', label: 'هل نسيت كلمه المرور ؟' },
      { path: 'sendOTP', label: 'أرسال OTP' },
    ],

    header : {
      brand: 'هوسبيليرا',
      language: 'English',
    },
    
    footer : {
      brand: 'هوسبيليرا',
      description: 'طريقة أسهل للعثور على الرعاية والتواصل مع مقدمي الخدمات والاهتمام بصحتك.',
      explore: 'استكشف',
      support: 'هل تحتاج إلى مساعدة؟',
      supportText: 'اعثر على إجابات للأسئلة الشائعة في مركز المساعدة.',
      faq: 'الأسئلة الشائعة',
      copyright: 'جميع الحقوق محفوظة.',
      statement: "رعايتك، بطريقة أفضل."
    },
  },
  
  // home

  home : {
    hero : {},

    features : {},

    preview : {},

    plans : {},

    cta : {}
  },

  //  Auth

  auth : {
    sendOtp : {},

    forgetPassword : {},

    login : {
      welcome:'مرحبا بعودتك الي Hospelyra',
      login: 'تسجيل الدخول',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      register: 'إنشاء حساب جديد',
      forgotPassword: 'نسيت كلمة المرور؟',
      enter: 'دخول',
      dontHaveAccount: 'ليس لديك حساب؟',
      createAccount:'إنشاء حساب جديد',
      
    },

    register : {
      createNewAccount:'إنشاء حساب جديد',
      join:'انضم إلى هوسبيليرا وابدأ تجربتك اليوم',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      login: 'تسجيل الدخول',
      fullName:'الاسم الكامل',
      exmName: 'يوسف طه عبدالعزيز',
      confirmPassword: 'تأكيد كلمة المرور',
      createAccount: 'إنشاء الحساب',
      haveAccount: 'لديك حساب بالفعل؟',

    },
  },

  // pages

  contact : {

  },

  faqs : {

  },

  profile : {
    title: 'حسابك',
    subtitle: 'إدارة معلوماتك وإعدادات حسابك',
    back: 'العودة للرئيسية',
    editProfile: 'تعديل الحساب',
    user: {
      name: 'يوسف شحاتة',
      role: 'مستخدم',
      email: 'youssef.shehata@example.com',
      phone: '+20 123 456 7890',
      location: 'منيا القمح، الشرقية',
      birthDate: '12 مارس 2006',
    },
    details: {
      fullName: 'الاسم بالكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      location: 'الموقع',
      birthDate: 'تاريخ الميلاد',
    },
    account: {
      type: 'نوع الحساب',
      role: 'الدور',
      status: 'حالة الحساب',
      active: 'نشط',
    },
  }
};

