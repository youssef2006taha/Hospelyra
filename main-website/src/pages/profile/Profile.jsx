import React from "react";

function Profile() {
  return (
    <section className="py-section-padding">
      <div className="container">
        {/* Page Header */}
        <div className="mb-8 flex items-center gap-4">
          <button className="text-primary text-2xl">‹</button>

          <div>
            <h1 className="font-heading text-2xl font-bold text-text-main">
              Profile
            </h1>
            <p className="mt-1 text-sm text-text-muted">
              Manage your information and account settings
            </p>
          </div>
        </div>

        {/* Profile Content */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* User Profile */}
          <div className="rounded-lg border border-text-light/15 bg-bg-surface p-card-padding lg:col-span-2">
            <div className="flex flex-wrap items-center gap-5 border-b border-text-light/15 pb-6">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                alt="User"
                className="h-20 w-20 rounded-full object-cover"
              />

              <div className="flex-1">
                <h2 className="font-heading text-lg font-bold text-text-main">
                  Youssef Taha
                </h2>

                <span className="mt-2 inline-block rounded-full bg-primary-light px-3 py-1 text-xs text-primary">
                  User
                </span>

                <p className="mt-2 text-sm text-text-muted">
                  ✉ youssef.taha@example.com
                </p>

                <p className="mt-1 text-sm text-text-muted">
                  📍 Minya El Qamh, Sharqia
                </p>
              </div>

              <button className="rounded-md bg-primary-light px-4 py-2 text-sm text-primary transition hover:bg-primary hover:text-white">
                ✎ Edit Profile
              </button>
            </div>

            {/* Details */}
            <div className="pt-4">
              {[
                ["Full Name", "Youssef Taha"],
                ["Email", "youssef.taha@example.com"],
                ["Phone", "+20 123 456 7890"],
                ["Location", "Minya El Qamh, Sharqia"],
                ["Date of Birth", "March 12, 2006"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-1 gap-2 py-3 sm:grid-cols-[150px_1fr]"
                >
                  <span className="text-sm text-text-muted">
                    {label}
                  </span>

                  <span className="text-sm font-medium text-text-main">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Account Information */}
          <aside className="h-fit rounded-lg border border-text-light/15 bg-bg-surface p-card-padding">
            {/* Account Type */}
            <div className="flex items-center gap-4 rounded-lg bg-primary-light p-4">
              <div className="text-2xl text-primary">♙</div>

              <div>
                <p className="text-sm text-text-muted">
                  Account Type
                </p>
                <p className="mt-1 font-medium text-text-main">
                  User
                </p>
              </div>
            </div>

            {/* Role */}
            <div className="flex items-center gap-4 px-2 py-5">
              <div className="text-xl text-text-muted">♙</div>

              <div className="flex-1">
                <p className="text-sm text-text-muted">Role</p>
                <p className="mt-1 font-medium text-text-main">
                  User
                </p>
              </div>

              <span className="text-xl text-text-muted">›</span>
            </div>

            {/* Status */}
            <div className="flex items-center gap-4 px-2 py-3">
              <div className="text-xl text-primary">◈</div>

              <div>
                <p className="text-sm text-text-muted">
                  Account Status
                </p>

                <span className="mt-2 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                  Active
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Profile;