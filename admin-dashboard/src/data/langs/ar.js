export const ar = {
  layout: {
    navLinks: [
      { path: 'overview', label: 'نظرة عامة' },
      { path: 'hospitals', label: 'المستشفيات' },
      { path: 'plans', label: 'الخطط' },
      { path: 'settings', label: 'الإعدادات' },
      { path: 'profile', label: 'الملف الشخصي' },
    ],
    header: {
      brand: 'هوسبيليرا',
      language: 'English',
    },
  },
  pages: {
    overview: {
      eyebrow: 'لوحة التحكم',
      title: 'نظرة عامة',
      status: {
        dark: 'الوضع الداكن مفعّل',
        light: 'الوضع الفاتح مفعّل',
      },
      stats: [
        { key: 'total', label: 'إجمالي المستشفيات', value: '184', trend: '+12%', tint: 'bg-primary-light' },
        { key: 'pro', label: 'مستشفيات برو', value: '96', trend: '+8%', tint: 'bg-success/15' },
        { key: 'basic', label: 'مستشفيات أساسية', value: '54', trend: '+4%', tint: 'bg-warning/15' },
        { key: 'pending', label: 'قيد الانتظار', value: '21', trend: '-3%', tint: 'bg-bg-hover' },
        { key: 'inactive', label: 'غير نشطة / منتهية', value: '13', trend: '-1%', tint: 'bg-danger/15' },
      ],
    },
    hospitals: {
      eyebrow: 'العمليات',
      title: 'المستشفيات',
      summary: 'مراقبة دورة حياة المستشفيات وصحة الشبكة',
      searchPlaceholder: 'ابحث عن المستشفيات بالاسم أو المعرف أو البريد الإلكتروني',
      columns: ['اسم المستشفى', 'معرف المستشفى', 'البريد الإلكتروني', 'الخطة', 'الحالة', 'الإجراءات'],
      actions: { view: 'عرض', edit: 'تعديل' },
      emptyState: 'لا توجد مستشفيات تطابق الفلاتر الحالية.',
      stats: [
        { key: 'total', label: 'إجمالي المستشفيات', value: '184' },
        { key: 'pro', label: 'مستشفيات برو', value: '96' },
        { key: 'basic', label: 'مستشفيات أساسية', value: '54' },
        { key: 'pending', label: 'قيد الانتظار', value: '21' },
        { key: 'inactive', label: 'غير نشطة / منتهية', value: '13' },
      ],
      hospitals: [
        { id: 'H-1024', name: 'مستشفى الرياض للت Wellness', email: 'info@riyadhwellness.sa', plan: 'Pro', status: 'Active' },
        { id: 'H-2031', name: 'عيادة النور', email: 'admin@alnoor.sa', plan: 'Basic', status: 'Pending' },
        { id: 'H-3044', name: 'مركز كيرلاين', email: 'care@careline.sa', plan: 'Pro', status: 'Active' },
        { id: 'H-4708', name: 'نورا للأطفال', email: 'hello@nourapediatrics.sa', plan: 'Basic', status: 'Inactive' },
        { id: 'H-5519', name: 'مركز المدينة للأسنان', email: 'support@madinahdental.sa', plan: 'Pro', status: 'Pending' },
        { id: 'H-6690', name: 'مركز برايم هيلث', email: 'contact@primehealth.sa', plan: 'Basic', status: 'Active' },
      ],
      modal: {
        eyebrow: 'سجل المستشفى',
        viewTitle: 'تفاصيل المستشفى',
        editTitle: 'تعديل المستشفى',
        fields: {
          name: 'اسم المستشفى',
          id: 'معرف المستشفى',
          email: 'البريد الإلكتروني',
          plan: 'الخطة',
          status: 'الحالة',
        },
        cancel: 'إغلاق',
        save: 'حفظ التغييرات',
      },
    },
    plans: {
      eyebrow: 'الاشتراكات',
      title: 'الخطط',
      summary: 'خيارات الاشتراك الحالية لمنصة هوسبيليرا',
      status: {
        active: 'نشط',
        inactive: 'غير نشط',
      },
      actions: {
        edit: 'تعديل',
        manage: 'إدارة',
      },
      plans: [
        {
          id: 'starter',
          tier: 'أساسي',
          name: 'الخطة الأساسية',
          price: '٤٩$',
          period: '/شهر',
          active: true,
          features: ['وصول لمستشفى واحد', 'لوحة معلومات أساسية', 'دعم عبر البريد الإلكتروني'],
        },
        {
          id: 'professional',
          tier: 'احترافي',
          name: 'الخطة برو',
          price: '٩٩$',
          period: '/شهر',
          active: true,
          features: ['دعم مواقع متعددة', 'تحليلات متقدمة', 'دعم أولوية'],
        },
        {
          id: 'enterprise',
          tier: 'مؤسسي',
          name: 'الخطة المؤسسية',
          price: '١٩٩$',
          period: '/شهر',
          active: false,
          features: ['إعداد مخصص', 'مدير حساب مخصص', 'تكاملات متقدمة'],
        },
      ],
    },
    settings: {
      eyebrow: 'التفضيلات',
      title: 'الإعدادات',
      groups: [
        {
          key: 'general',
          title: 'عام',
          subtitle: 'الإعدادات الافتراضية',
          options: [
            { label: 'الحفظ التلقائي', helper: 'حفظ التقدم تلقائيًا أثناء التحرير', type: 'switch', value: true },
            { label: 'الصفحة الافتراضية', helper: 'نظرة عامة', type: 'select', values: ['نظرة عامة', 'المستشفيات', 'الخطط'] },
          ],
        },
        {
          key: 'theme',
          title: 'الثيم',
          subtitle: 'تفضيلات المظهر',
          options: [
            { label: 'الوضع الداكن', helper: 'استخدم ثيم اللوحة الداكن', type: 'switch', value: true },
            { label: 'لون التمييز', helper: 'الأرجواني الأساسي', type: 'select', values: ['أرجواني', 'أزرق', 'برتقالي'] },
          ],
        },
        {
          key: 'language',
          title: 'اللغة',
          subtitle: 'لغة الواجهة',
          options: [
            { label: 'لغة المنصة', helper: 'العربية', type: 'select', values: ['العربية', 'English'] },
            { label: 'تنسيق التاريخ', helper: 'يوم/شهر/سنة', type: 'select', values: ['يوم/شهر/سنة', 'DD/MM/YYYY'] },
          ],
        },
        {
          key: 'security',
          title: 'الأمان',
          subtitle: 'إدارة الوصول والحماية',
          options: [
            { label: 'التحقق الثنائي', helper: 'طبقة أمان إضافية', type: 'switch', value: true },
            { label: 'مهلة الجلسة', helper: '90 دقيقة', type: 'select', values: ['30 دقيقة', '60 دقيقة', '90 دقيقة'] },
          ],
        },
      ],
    },
    profile: {
      eyebrow: 'الحساب',
      title: 'الملف الشخصي',
      user: {
        name: 'نورة الحربي',
        role: 'مديرة المنصة',
        email: 'noura@hospelyra.com',
        bio: 'مسؤولة عن جودة المنصة، انضمام المستشفيات، وإدارة الاشتراكات في الشبكة الطبية.',
      },
      form: {
        name: 'الاسم الكامل',
        role: 'الدور',
        email: 'البريد الإلكتروني',
        bio: 'نبذة عنك',
      },
      security: {
        title: 'تغيير كلمة المرور',
        subtitle: 'حافظ على أمان حسابك',
        current: 'كلمة المرور الحالية',
        new: 'كلمة المرور الجديدة',
        confirm: 'تأكيد كلمة المرور',
        button: 'تحديث كلمة المرور',
      },
      actions: {
        save: 'حفظ التغييرات',
      },
    },
    login: {
      title: 'تسجيل دخول المشرف',
      subtitle: 'الدخول إلى لوحة تحكم هوسبيليرا',
      fields: {
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
      },
      actions: {
        remember: 'تذكرني',
        forgot: 'نسيت كلمة المرور؟',
        login: 'تسجيل الدخول',
        showPassword: 'إظهار كلمة المرور',
        hidePassword: 'إخفاء كلمة المرور',
        helpText: 'هل تحتاج إلى التحقق عبر OTP؟',
        verifyOtp: 'تحقق من الرمز',
      },
    },
    forgotPassword: {
      eyebrow: 'استعادة الحساب',
      title: 'نسيت كلمة المرور',
      subtitle: 'أدخل بريدك الإلكتروني لاستلام رمز استعادة آمن.',
      fields: {
        email: 'البريد الإلكتروني',
      },
      actions: {
        submit: 'إرسال رمز الاستعادة',
        back: 'العودة لتسجيل الدخول',
      },
    },
    sendOtp: {
      eyebrow: 'التحقق',
      title: 'تحقق من الرمز',
      subtitle: 'أدخل الرمز المكون من 6 أرقام الذي تم إرساله إلى بريدك أو هاتفك.',
      actions: {
        verify: 'تحقق من الرمز',
        resend: 'إعادة إرسال الرمز',
        timer: 'إعادة الإرسال خلال {time} ث',
        back: 'العودة لتسجيل الدخول',
      },
    },
    resetPassword: {
      eyebrow: 'الأمان',
      title: 'إعادة تعيين كلمة المرور',
      subtitle: 'أنشئ كلمة مرور جديدة لحسابك الإداري.',
      fields: {
        newPassword: 'كلمة المرور الجديدة',
        confirmPassword: 'تأكيد كلمة المرور',
      },
      actions: {
        submit: 'حفظ كلمة المرور الجديدة',
        back: 'العودة لتسجيل الدخول',
      },
    },
  },
};
