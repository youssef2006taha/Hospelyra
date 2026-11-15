export const en = {
  layout: {
    navLinks: [
      { path: 'home', label: 'Home' },
      { path: 'faqs', label: 'FAQs' },
      { path: 'contact', label: 'Contact' },
      { path: 'profile', label: 'Profile' },
      { path: 'login', label: 'Sign in' },
      { path: 'register', label: 'Sign up' },
      { path: 'forget-password', label: 'Forgot your password?' },
      { path: 'sendOTP', label: 'Send OTP' },
    ],

    header: {
      brand: 'Hospelyra',
      language: 'العربية',
    },

    footer: {
      brand: 'Hospelyra',
      description: 'A simpler way to find care, connect with providers, and put your wellbeing first.',
      explore: 'Explore',
      support: 'Need a hand?',
      supportText: 'Find answers to common questions in our help center.',
      faq: 'Visit FAQs',
      copyright: 'All rights reserved.',
      statement: 'Your care, made simpler.',
    },
  },

  home: {
    hero: {
      eyebrow: 'Healthcare platform',
      title: 'Connect patients and care teams with',
      highlight: 'better care experiences',
      description: 'A connected care ecosystem for digital bookings, patient records, follow-ups, and smarter coordination across every healthcare touchpoint.',
      primaryCta: 'Book a demo',
      secondaryCta: 'Learn more',
    },
    features: {
      eyebrow: 'Why choose Hospelyra',
      title: 'Everything your care journey needs, in one place',
      items: [
        {
          title: 'Smart booking flow',
          description: 'Enable patients to book consultations and follow-ups without the friction of traditional scheduling.',
        },
        {
          title: 'Unified patient records',
          description: 'Centralize medical histories, visits, notes, and plans for better decisions and continuity of care.',
        },
        {
          title: 'Automated care reminders',
          description: 'Reduce no-shows and keep patients engaged with timely reminders across every treatment stage.',
        },
      ],
    },
    preview: {
      eyebrow: 'Platform preview',
      title: 'A clear operational dashboard for care teams',
      description: 'Bring appointment management, patient engagement, and medical workflows together in a single experience built for clarity and speed.',
      cardTitle: 'Operations overview',
      metrics: [
        { label: 'Appointments', value: '2.4K' },
        { label: 'Active patients', value: '1.1K' },
        { label: 'Satisfaction', value: '97%' },
      ],
    },
    plans: {
      eyebrow: 'Flexible pricing',
      title: 'Plans that scale with your clinics and teams',
      items: [
        {
          name: 'Clinic starter',
          description: 'Built for small practices and independent specialists.',
          price: '$79',
          suffix: '/month',
          featured: false,
          button: 'Get started',
          features: ['Smart appointment management', 'Patient portal access', 'Care reminder automation'],
        },
        {
          name: 'Care network',
          description: 'Perfect for multi-specialty clinics and growing health centers.',
          price: '$179',
          suffix: '/month',
          featured: true,
          badge: 'Most popular',
          button: 'Start now',
          features: ['Smart appointment management', 'Patient portal access', 'Care reminder automation'],
        },
      ],
    },
    cta: {
      eyebrow: 'Built for modern care',
      title: 'Ready to create a smoother patient journey?',
      description: 'Join healthcare teams that want faster scheduling, richer patient communication, and better care coordination.',
      button: 'Start your free trial',
    },
  },

  auth: {
    sendOtp: {
      title: 'Verify your code',
      subtitle: 'Enter the 6-digit code we sent to your email or phone number.',
      resend: 'Resend code',
      countdown: 'Resend in 00:30',
      verify: 'Verify code',
      label: 'OTP code',
    },
    forgetPassword: {
      title: 'Reset your password',
      subtitle: 'Type the email associated with your account and we will send a reset link.',
      email: 'Email address',
      send: 'Send reset link',
      back: 'Back to login',
    },
    login: {
      welcome: 'Welcome back to Hospelyra',
      login: 'Login',
      email: 'Email',
      password: 'Password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password?',
      enter: 'Login',
      dontHaveAccount: 'Don’t have an account?',
      createNewAccount: 'Create a new account',
      showPassword: 'Show password',
      hidePassword: 'Hide password',
    },
    register: {
      createNewAccount: 'Create an account',
      join: 'Join Hospelyra and begin your care experience today',
      fullName: 'Full name',
      exmName: 'Youssef Taha Abdulaziz',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm password',
      createAccount: 'Create account',
      login: 'Login',
      haveAccount: 'Already have an account?',
      agree: 'I agree to the terms and conditions',
      showPassword: 'Show password',
      hidePassword: 'Hide password',
    },
  },

  contact: {
    title: 'Contact us',
    subtitle: 'We would love to hear from you and help with your care journey.',
    info: {
      title: 'Talk to our team',
      emailLabel: 'Email',
      email: 'care@hospelyra.com',
      phoneLabel: 'Phone',
      phone: '+966 500 123 456',
      locationLabel: 'Location',
      location: 'Riyadh, Kingdom of Saudi Arabia',
      hoursLabel: 'Hours',
      hours: 'Mon - Fri | 9:00 AM - 6:00 PM',
    },
    form: {
      fullName: 'Full name',
      email: 'Email address',
      phone: 'Phone number',
      subject: 'Subject',
      message: 'How can we help?',
      send: 'Send message',
    },
  },

  faqs: {
    title: 'Frequently asked questions',
    subtitle: 'Everything you need to know about using Hospelyra.',
    items: [
      {
        question: 'How do patients book appointments?',
        answer: 'Patients can browse available physicians, choose a specialty, and reserve a consultation directly from the portal in a few simple steps.',
      },
      {
        question: 'Can the platform manage several clinics?',
        answer: 'Yes. Hospelyra is designed for clinics, medical groups, and multi-location centers that need a shared digital workflow.',
      },
      {
        question: 'Does the platform support patient follow-ups?',
        answer: 'Yes. You can track visits, care plans, reminders, and follow-up actions in one streamlined environment.',
      },
      {
        question: 'Is there a patient portal for self-service?',
        answer: 'Yes. Patients can manage bookings, access information, and receive updates through a dedicated portal experience.',
      },
    ],
  },

  profile: {
    title: 'Profile',
    subtitle: 'Manage your information and account settings',
    back: 'Back to home',
    editProfile: 'Edit profile',
    user: {
      name: 'Youssef Shehata',
      role: 'User',
      email: 'youssef.shehata@example.com',
      phone: '+20 123 456 7890',
      location: 'Minya El Qamh, Sharqia',
      birthDate: 'March 12, 2006',
    },
    details: {
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      birthDate: 'Date of Birth',
    },
    account: {
      type: 'Account Type',
      role: 'Role',
      status: 'Account Status',
      active: 'Active',
    },
  },
};