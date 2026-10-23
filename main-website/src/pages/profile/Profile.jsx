
function Profile({data}) {
  return (
    <section className='py-section-padding bg-bg-layout min-h-screen'>
      <div className='container'>

        {/* Header */}
        <div className='flex items-start gap-4 mb-8'>
          <button className='w-10 h-10 shrink-0 rounded-full bg-primary-light text-primary flex items-center justify-center cursor-pointer'>
            <svg className='w-5 h-5 rtl:rotate-180' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
              <path d='M15 18l-6-6 6-6' />
            </svg>
          </button>
          <div>
            <h1 className='text-2xl font-bold text-text-main' title={data.back}>{data.title}</h1>
            <p className='text-sm text-text-muted mt-1'>{data.subtitle}</p>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

          {/* Main Card */}
          <div className='lg:col-span-2 bg-bg-surface rounded-2xl shadow-sm p-card-padding'>

            <div className='flex flex-col sm:flex-row sm:items-start gap-5 pb-6 border-b border-primary-light'>

              {/* Avatar */}
              <div className='w-24 h-24 shrink-0 rounded-full bg-primary-light text-primary border-4 border-bg-surface shadow flex items-center justify-center'>
                <svg className='w-12 h-12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
                  <circle cx='12' cy='8' r='4' />
                  <path d='M4 21c0-4 4-6 8-6s8 2 8 6' />
                </svg>
              </div>

              <div className='flex-1'>
                <h2 className='text-xl font-bold text-text-main'>{data.user.name}</h2>
                <span className='inline-block mt-2 px-3 py-0.5 rounded-full bg-primary-light text-primary text-xs font-medium'>
                  {data.user.role}
                </span>

                <div className='flex items-center gap-2 mt-3 text-sm text-text-muted'>
                  <svg className='w-4 h-4 shrink-0' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                    <rect x='3' y='5' width='18' height='14' rx='2' />
                    <path d='M3 7l9 6 9-6' />
                  </svg>
                  <span>{data.user.email}</span>
                </div>

                <div className='flex items-center gap-2 mt-2 text-sm text-text-muted'>
                  <svg className='w-4 h-4 shrink-0' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                    <path d='M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z' />
                    <circle cx='12' cy='10' r='2.5' />
                  </svg>
                  <span>{data.user.location}</span>
                </div>
              </div>

              <button className='flex items-center justify-center gap-2 self-start px-4 py-2 rounded-lg bg-primary-light text-primary text-sm font-medium hover:bg-primary hover:text-primary-inverse transition cursor-pointer'>
                <svg className='w-4 h-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                  <path d='M12 20h9' />
                  <path d='M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z' />
                </svg>
                {data.editProfile}
              </button>
            </div>

            {/* Details */}
            <div className='pt-6 flex flex-col gap-5 text-sm'>
              <div className='grid grid-cols-3 gap-4'>
                <span className='text-text-muted'>{data.details.fullName}</span>
                <span className='col-span-2 text-text-main'>{data.user.name}</span>
              </div>
              <div className='grid grid-cols-3 gap-4'>
                <span className='text-text-muted'>{data.details.email}</span>
                <span className='col-span-2 text-text-main break-all'>{data.user.email}</span>
              </div>
              <div className='grid grid-cols-3 gap-4'>
                <span className='text-text-muted'>{data.details.phone}</span>
                <span className='col-span-2 text-text-main' dir='ltr' style={{textAlign: 'start'}}>{data.user.phone}</span>
              </div>
              <div className='grid grid-cols-3 gap-4'>
                <span className='text-text-muted'>{data.details.location}</span>
                <span className='col-span-2 text-text-main'>{data.user.location}</span>
              </div>
              <div className='grid grid-cols-3 gap-4'>
                <span className='text-text-muted'>{data.details.birthDate}</span>
                <span className='col-span-2 text-text-main'>{data.user.birthDate}</span>
              </div>
            </div>
          </div>

          {/* Account Card */}
          <div className='bg-bg-surface rounded-2xl shadow-sm p-card-padding self-start flex flex-col gap-3'>

            {/* Account Type */}
            <div className='flex items-center gap-4 p-4 rounded-xl bg-primary-light'>
              <svg className='w-7 h-7 text-primary shrink-0' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
                <circle cx='12' cy='8' r='4' />
                <path d='M4 21c0-4 4-6 8-6s8 2 8 6' />
              </svg>
              <div>
                <p className='text-sm font-semibold text-text-main'>{data.account.type}</p>
                <p className='text-sm font-semibold text-text-main mt-1'>{data.user.role}</p>
              </div>
            </div>

            {/* Role */}
            <div className='flex items-center gap-4 p-4'>
              <div className='w-10 h-10 shrink-0 rounded-full bg-bg-layout text-primary flex items-center justify-center'>
                <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
                  <circle cx='12' cy='8' r='4' />
                  <path d='M4 21c0-4 4-6 8-6s8 2 8 6' />
                </svg>
              </div>
              <div className='flex-1'>
                <p className='text-sm text-text-muted'>{data.account.role}</p>
                <p className='text-sm font-semibold text-text-main mt-1'>{data.user.role}</p>
              </div>
              <svg className='w-4 h-4 text-text-light rtl:rotate-180' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M9 18l6-6-6-6' />
              </svg>
            </div>

            {/* Status */}
            <div className='flex items-center gap-4 p-4'>
              <div className='w-10 h-10 shrink-0 rounded-full bg-bg-layout text-primary flex items-center justify-center'>
                <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
                  <path d='M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z' />
                  <path d='M9 12l2 2 4-4' />
                </svg>
              </div>
              <div>
                <p className='text-sm text-text-muted'>{data.account.status}</p>
                <span className='inline-block mt-1 px-3 py-0.5 rounded-full bg-green-100 text-green-600 text-xs font-medium dark:bg-green-500/20 dark:text-green-400'>
                  {data.account.active}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Profile