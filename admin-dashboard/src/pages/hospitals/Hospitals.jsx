import { 
  HiOutlineBuildingOffice2, 
  HiOutlineMagnifyingGlass, 
  HiOutlineEye, 
  HiOutlinePencilSquare, 
  HiOutlineChevronLeft, 
  HiOutlineChevronRight 
} from "react-icons/hi2";

function Hospitals({ staticData }) {
  // للتحقق من وجود البيانات لتجنب الأخطاء
  const data = staticData || {};

  return (
    <section className="py-section-padding bg-bg-layout min-h-screen">
      <div className="container">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-text-main">{data.title}</h1>
          <p className="text-sm text-text-muted mt-1">{data.subtitle}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {data.stats?.map((stat, index) => (
            <div
              key={index}
              className="bg-bg-surface p-4 rounded-2xl shadow-sm flex items-center gap-3"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  stat.type === 'total'
                    ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                    : stat.type === 'pro'
                    ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'
                    : stat.type === 'basic'
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                    : stat.type === 'pending'
                    ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'
                    : 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400'
                }`}
              >
                <HiOutlineBuildingOffice2 size={24} />
              </div>
              <div>
                <p className="text-xs text-text-muted font-medium">{stat.label}</p>
                <h3 className="text-xl font-bold text-text-main mt-0.5">{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Table & Filters Card Container */}
        <div className="bg-bg-surface rounded-2xl shadow-sm p-card-padding">
          {/* Filters Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <span className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-text-muted">
                <HiOutlineMagnifyingGlass size={16} />
              </span>
              <input
                type="text"
                disabled
                placeholder={data.filters?.searchPlaceholder}
                className="w-full ps-10 pe-4 py-2.5 bg-bg-layout border border-primary-light text-text-main text-sm rounded-xl focus:outline-none placeholder:text-text-light"
              />
            </div>

            {/* Select Dropdowns */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <select
                disabled
                className="w-full md:w-auto px-4 py-2.5 bg-bg-layout border border-primary-light text-text-main text-sm rounded-xl focus:outline-none cursor-pointer"
              >
                <option>{data.filters?.allPlans}</option>
              </select>
              <select
                disabled
                className="w-full md:w-auto px-4 py-2.5 bg-bg-layout border border-primary-light text-text-main text-sm rounded-xl focus:outline-none cursor-pointer"
              >
                <option>{data.filters?.allStatuses}</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-start border-collapse">
              <thead>
                <tr className="text-text-muted border-b border-primary-light text-start">
                  <th className="py-3 px-4 text-start font-semibold">{data.table?.columns?.name}</th>
                  <th className="py-3 px-4 text-start font-semibold">{data.table?.columns?.id}</th>
                  <th className="py-3 px-4 text-start font-semibold">{data.table?.columns?.email}</th>
                  <th className="py-3 px-4 text-start font-semibold">{data.table?.columns?.plan}</th>
                  <th className="py-3 px-4 text-start font-semibold">{data.table?.columns?.status}</th>
                  <th className="py-3 px-4 text-center font-semibold">{data.table?.columns?.actions}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary-light">
                {data.table?.rows?.map((row) => (
                  <tr key={row.id} className="hover:bg-bg-layout/50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-text-main">{row.name}</td>
                    <td className="py-4 px-4 text-text-muted font-mono">{row.id}</td>
                    <td className="py-4 px-4 text-text-muted">{row.email}</td>
                    <td className="py-4 px-4 font-semibold text-primary">{row.plan}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          row.status === 'Active'
                            ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400'
                            : row.status === 'Pending'
                            ? 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400'
                            : 'bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400'
                        }`}
                      >
                        {row.statusLabel}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center gap-2">
                        {/* View Button */}
                        <button className="w-8 h-8 rounded-lg border border-primary-light text-primary hover:bg-primary hover:text-primary-inverse flex items-center justify-center transition cursor-pointer">
                          <HiOutlineEye size={16} />
                        </button>
                        {/* Edit Button */}
                        <button className="w-8 h-8 rounded-lg border border-primary-light text-primary hover:bg-primary hover:text-primary-inverse flex items-center justify-center transition cursor-pointer">
                          <HiOutlinePencilSquare size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-primary-light">
            <span className="text-xs text-text-muted">{data.pagination?.showingText}</span>
            <div className="flex items-center gap-1.5">
              <button className="w-8 h-8 rounded-lg bg-bg-layout text-text-muted hover:bg-primary-light hover:text-primary flex items-center justify-center text-xs transition cursor-pointer">
                <HiOutlineChevronLeft size={16} className="rtl:rotate-180" />
              </button>
              <button className="w-8 h-8 rounded-lg bg-primary text-primary-inverse flex items-center justify-center text-xs font-semibold cursor-pointer">
                1
              </button>
              <button className="w-8 h-8 rounded-lg bg-bg-layout text-text-main hover:bg-primary-light hover:text-primary flex items-center justify-center text-xs transition cursor-pointer">
                2
              </button>
              <button className="w-8 h-8 rounded-lg bg-bg-layout text-text-main hover:bg-primary-light hover:text-primary flex items-center justify-center text-xs transition cursor-pointer">
                3
              </button>
              <button className="w-8 h-8 rounded-lg bg-bg-layout text-text-main hover:bg-primary-light hover:text-primary flex items-center justify-center text-xs transition cursor-pointer">
                4
              </button>
              <button className="w-8 h-8 rounded-lg bg-bg-layout text-text-main hover:bg-primary-light hover:text-primary flex items-center justify-center text-xs transition cursor-pointer">
                5
              </button>
              <button className="w-8 h-8 rounded-lg bg-bg-layout text-text-muted hover:bg-primary-light hover:text-primary flex items-center justify-center text-xs transition cursor-pointer">
                <HiOutlineChevronRight size={16} className="rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hospitals;