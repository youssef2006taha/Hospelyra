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
    overview: {},
    hospitals: {
      title: 'المستشفيات',
      subtitle: 'إدارة ومراجعة جميع المستشفيات المسجلة.',
      stats: [
        { label: 'إجمالي المستشفيات', value: '48', type: 'total' },
        { label: 'الخطة الاحترافية', value: '18', type: 'pro' },
        { label: 'الخطة الأساسية', value: '22', type: 'basic' },
        { label: 'في انتظار الموافقة', value: '5', type: 'pending' },
        { label: 'غير نشط / منتهي', value: '3', type: 'inactive' },
      ],
      filters: {
        searchPlaceholder: 'البحث بالإسم، البريد الإلكتروني أو المعرف...',
        allPlans: 'جميع الخطط',
        allStatuses: 'جميع الحالات',
      },
      table: {
        columns: {
          name: 'اسم المستشفى',
          id: 'المعرف',
          email: 'البريد الإلكتروني',
          plan: 'الخطة',
          status: 'الحالة',
          actions: 'الإجراءات',
        },
        rows: [
          {
            id: 'HOS-001',
            name: 'مستشفى النور',
            email: 'alnoor@hospital.com',
            plan: 'Pro',
            status: 'Active',
            statusLabel: 'نشط',
          },
          {
            id: 'HOS-002',
            name: 'دار الشفاء',
            email: 'shifa@hospital.com',
            plan: 'Basic',
            status: 'Pending',
            statusLabel: 'قيد الانتظار',
          },
          {
            id: 'HOS-003',
            name: 'كير بلس',
            email: 'care@hospital.com',
            plan: 'Pro',
            status: 'Active',
            statusLabel: 'نشط',
          },
          {
            id: 'HOS-004',
            name: 'مستشفى الأمل',
            email: 'amal@hospital.com',
            plan: 'Basic',
            status: 'Active',
            statusLabel: 'نشط',
          },
          {
            id: 'HOS-005',
            name: 'مستشفى الحياة الجديدة',
            email: 'newlife@hospital.com',
            plan: 'Pro',
            status: 'Inactive',
            statusLabel: 'غير نشط',
          },
        ],
      },
      pagination: {
        showingText: 'عرض 1 - 5 من 48',
      },
    },
    plans: {},
    settings: {},
    profile: {},
    login: {},
    sendOtp: {},
  },
};
