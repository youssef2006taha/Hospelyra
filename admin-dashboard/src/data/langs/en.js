export const en = {
  layout: {
    navLinks: [
      { path: 'overview', label: 'Overview' },
      { path: 'hospitals', label: 'Hospitals' },
      { path: 'plans', label: 'Plans' },
      { path: 'settings', label: 'Settings' },
      { path: 'profile', label: 'Profile' },
    ],
    header: {
      brand: 'Hospelyra',
      language: 'العربية',
    },
  },
  pages: {
    overview: {
      eyebrow: 'Dashboard',
      title: 'Overview',
      status: {
        dark: 'Dark mode enabled',
        light: 'Light mode enabled',
      },
      stats: [
        { key: 'total', label: 'Total hospitals', value: '184', trend: '+12%', tint: 'bg-primary-light' },
        { key: 'pro', label: 'Pro hospitals', value: '96', trend: '+8%', tint: 'bg-success/15' },
        { key: 'basic', label: 'Basic hospitals', value: '54', trend: '+4%', tint: 'bg-warning/15' },
        { key: 'pending', label: 'Pending', value: '21', trend: '-3%', tint: 'bg-bg-hover' },
        { key: 'inactive', label: 'Inactive / expired', value: '13', trend: '-1%', tint: 'bg-danger/15' },
      ],
    },
    hospitals: {
      eyebrow: 'Operations',
      title: 'Hospitals',
      summary: 'Monitoring hospital lifecycle and network health',
      searchPlaceholder: 'Search hospitals by name, ID or email',
      columns: ['Hospital Name', 'Hospital ID', 'Email', 'Plan', 'Status', 'Actions'],
      actions: { view: 'View', edit: 'Edit' },
      emptyState: 'No hospitals match the current filters.',
      stats: [
        { key: 'total', label: 'Total hospitals', value: '184' },
        { key: 'pro', label: 'Pro hospitals', value: '96' },
        { key: 'basic', label: 'Basic hospitals', value: '54' },
        { key: 'pending', label: 'Pending', value: '21' },
        { key: 'inactive', label: 'Inactive / expired', value: '13' },
      ],
      hospitals: [
        { id: 'H-1024', name: 'Riyadh Wellness Hospital', email: 'info@riyadhwellness.sa', plan: 'Pro', status: 'Active' },
        { id: 'H-2031', name: 'Al Noor Clinic', email: 'admin@alnoor.sa', plan: 'Basic', status: 'Pending' },
        { id: 'H-3044', name: 'Careline Center', email: 'care@careline.sa', plan: 'Pro', status: 'Active' },
        { id: 'H-4708', name: 'Noura Pediatrics', email: 'hello@nourapediatrics.sa', plan: 'Basic', status: 'Inactive' },
        { id: 'H-5519', name: 'Madinah Dental Care', email: 'support@madinahdental.sa', plan: 'Pro', status: 'Pending' },
        { id: 'H-6690', name: 'Prime Health Hub', email: 'contact@primehealth.sa', plan: 'Basic', status: 'Active' },
      ],
      modal: {
        eyebrow: 'Hospital record',
        viewTitle: 'Hospital details',
        editTitle: 'Edit hospital',
        fields: {
          name: 'Hospital name',
          id: 'Hospital ID',
          email: 'Email address',
          plan: 'Plan',
          status: 'Status',
        },
        cancel: 'Close',
        save: 'Save changes',
      },
    },
    plans: {
      eyebrow: 'Subscriptions',
      title: 'Plans',
      summary: 'Current platform subscription options',
      status: {
        active: 'Active',
        inactive: 'Inactive',
      },
      actions: {
        edit: 'Edit',
        manage: 'Manage',
      },
      plans: [
        {
          id: 'starter',
          tier: 'Starter',
          name: 'Basic plan',
          price: '$49',
          period: '/month',
          active: true,
          features: ['Single hospital access', 'Basic patient dashboard', 'Email support'],
        },
        {
          id: 'professional',
          tier: 'Professional',
          name: 'Pro plan',
          price: '$99',
          period: '/month',
          active: true,
          features: ['Multi-location support', 'Advanced analytics', 'Priority support'],
        },
        {
          id: 'enterprise',
          tier: 'Enterprise',
          name: 'Enterprise plan',
          price: '$199',
          period: '/month',
          active: false,
          features: ['Custom onboarding', 'Dedicated account manager', 'Advanced integrations'],
        },
      ],
    },
    settings: {
      eyebrow: 'Preferences',
      title: 'Settings',
      groups: [
        {
          key: 'general',
          title: 'General',
          subtitle: 'Dashboard defaults',
          options: [
            { label: 'Auto-save drafts', helper: 'Save progress automatically while editing', type: 'switch', value: true },
            { label: 'Default landing page', helper: 'Overview', type: 'select', values: ['Overview', 'Hospitals', 'Plans'] },
          ],
        },
        {
          key: 'theme',
          title: 'Theme',
          subtitle: 'Appearance preferences',
          options: [
            { label: 'Dark mode', helper: 'Use the dark dashboard theme', type: 'switch', value: true },
            { label: 'Accent color', helper: 'Primary purple', type: 'select', values: ['Purple', 'Blue', 'Orange'] },
          ],
        },
        {
          key: 'language',
          title: 'Language',
          subtitle: 'Interface language',
          options: [
            { label: 'Platform language', helper: 'English', type: 'select', values: ['English', 'Arabic'] },
            { label: 'Date format', helper: 'M/D/YYYY', type: 'select', values: ['M/D/YYYY', 'DD/MM/YYYY'] },
          ],
        },
        {
          key: 'security',
          title: 'Security',
          subtitle: 'Access and protection',
          options: [
            { label: 'Two-factor authentication', helper: 'Extra security layer', type: 'switch', value: true },
            { label: 'Session timeout', helper: '90 minutes', type: 'select', values: ['30 minutes', '60 minutes', '90 minutes'] },
          ],
        },
      ],
    },
    profile: {
      eyebrow: 'Account',
      title: 'Profile',
      user: {
        name: 'Noura Al-Harbi',
        role: 'Platform Admin',
        email: 'noura@hospelyra.com',
        bio: 'Responsible for platform quality, hospital onboarding, and subscription operations across the network.',
      },
      form: {
        name: 'Full name',
        role: 'Role',
        email: 'Email address',
        bio: 'About you',
      },
      security: {
        title: 'Change password',
        subtitle: 'Keep your account protected',
        current: 'Current password',
        new: 'New password',
        confirm: 'Confirm password',
        button: 'Update password',
      },
      actions: {
        save: 'Save changes',
      },
    },
    login: {
      title: 'Admin login',
      subtitle: 'Access the Hospelyra platform dashboard',
      fields: {
        email: 'Email address',
        password: 'Password',
      },
      actions: {
        remember: 'Remember me',
        forgot: 'Forgot password?',
        login: 'Login',
        showPassword: 'Show password',
        hidePassword: 'Hide password',
        helpText: 'Need OTP verification?',
        verifyOtp: 'Verify code',
      },
    },
    forgotPassword: {
      eyebrow: 'Account recovery',
      title: 'Forgot password',
      subtitle: 'Enter your email to receive a secure reset code.',
      fields: {
        email: 'Email address',
      },
      actions: {
        submit: 'Send reset code',
        back: 'Back to login',
      },
    },
    sendOtp: {
      eyebrow: 'Verification',
      title: 'Verify OTP',
      subtitle: 'Enter the six-digit code sent to your email or mobile number.',
      actions: {
        verify: 'Verify code',
        resend: 'Resend code',
        timer: 'Resend in {time}s',
        back: 'Back to login',
      },
    },
    resetPassword: {
      eyebrow: 'Security',
      title: 'Reset password',
      subtitle: 'Create a new password for your admin account.',
      fields: {
        newPassword: 'New password',
        confirmPassword: 'Confirm password',
      },
      actions: {
        submit: 'Save new password',
        back: 'Back to login',
      },
    },
  },
};
