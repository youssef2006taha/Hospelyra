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
    overview: {},
    hospitals: {
      title: 'Hospitals',
      subtitle: 'Manage and review all registered hospitals.',
      stats: [
        { label: 'Total Hospitals', value: '48', type: 'total' },
        { label: 'Pro Plan', value: '18', type: 'pro' },
        { label: 'Basic Plan', value: '22', type: 'basic' },
        { label: 'Pending Approval', value: '5', type: 'pending' },
        { label: 'Inactive / Expired', value: '3', type: 'inactive' },
      ],
      filters: {
        searchPlaceholder: 'Search by name, email or ID...',
        allPlans: 'All Plans',
        allStatuses: 'All Statuses',
      },
      table: {
        columns: {
          name: 'Hospital Name',
          id: 'ID',
          email: 'Email',
          plan: 'Plan',
          status: 'Status',
          actions: 'Actions',
        },
        rows: [
          {
            id: 'HOS-001',
            name: 'Al Noor Hospital',
            email: 'alnoor@hospital.com',
            plan: 'Pro',
            status: 'Active',
            statusLabel: 'Active',
          },
          {
            id: 'HOS-002',
            name: 'Dar Al Shifa',
            email: 'shifa@hospital.com',
            plan: 'Basic',
            status: 'Pending',
            statusLabel: 'Pending',
          },
          {
            id: 'HOS-003',
            name: 'Care Plus',
            email: 'care@hospital.com',
            plan: 'Pro',
            status: 'Active',
            statusLabel: 'Active',
          },
          {
            id: 'HOS-004',
            name: 'El Amal Hospital',
            email: 'amal@hospital.com',
            plan: 'Basic',
            status: 'Active',
            statusLabel: 'Active',
          },
          {
            id: 'HOS-005',
            name: 'New Life Hospital',
            email: 'newlife@hospital.com',
            plan: 'Pro',
            status: 'Inactive',
            statusLabel: 'Inactive',
          },
        ],
      },
      pagination: {
        showingText: 'Showing 1 - 5 of 48',
      },
    },
    plans: {},
    settings: {},
    profile: {},
    login: {},
    sendOtp: {},
  },
};
