import { Edit3, Eye, Search, SlidersHorizontal, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

const badgeStyles = {
  Active: 'bg-success/15 text-success',
  Pending: 'bg-warning/15 text-warning',
  Inactive: 'bg-danger/15 text-danger',
  Pro: 'bg-primary/10 text-primary',
  Basic: 'bg-bg-hover text-text-secondary',
};

const planOptions = ['All Plans', 'Pro', 'Basic'];
const statusOptions = ['All Status', 'Active', 'Pending', 'Inactive'];

function Hospitals({ staticData }) {
  const [search, setSearch] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('All Plans');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const dir = useSelector((state) => state.lang.dir);

  const filteredHospitals = useMemo(() => {
    return staticData.hospitals.filter((hospital) => {
      const matchesSearch = [hospital.name, hospital.email, hospital.id]
        .join(' ')
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesPlan = selectedPlan === 'All Plans' || hospital.plan === selectedPlan;
      const matchesStatus = selectedStatus === 'All Status' || hospital.status === selectedStatus;

      return matchesSearch && matchesPlan && matchesStatus;
    });
  }, [search, selectedPlan, selectedStatus, staticData.hospitals]);

  const openHospital = (hospital) => {
    setSelectedHospital(hospital);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6" dir={dir}>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{staticData.eyebrow}</p>
          <h1 className="mt-2 text-3xl font-black text-text-primary md:text-4xl">{staticData.title}</h1>
        </div>
        <div className="rounded-full border border-border bg-bg-surface px-4 py-2 text-sm font-medium text-text-secondary">
          {staticData.summary}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {staticData.stats.map((stat) => (
          <div key={stat.key} className="rounded-[24px] border border-border bg-bg-surface p-5 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-text-muted">{stat.label}</p>
            <p className="mt-4 text-3xl font-black text-text-primary">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-[28px] border border-border bg-bg-surface p-5 shadow-sm">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="relative w-full xl:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={staticData.searchPlaceholder}
              className="w-full rounded-2xl border border-border bg-bg-secondary py-3 pl-10 pr-4 text-sm text-text-primary outline-none transition focus:border-primary"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="flex items-center gap-2 rounded-2xl border border-border bg-bg-secondary px-3 py-2 text-sm text-text-secondary">
              <SlidersHorizontal size={16} className="text-primary" />
              <select
                value={selectedPlan}
                onChange={(event) => setSelectedPlan(event.target.value)}
                className="bg-transparent pr-2 text-text-primary outline-none"
              >
                {planOptions.map((plan) => (
                  <option key={plan} value={plan} className="bg-bg-surface text-text-primary">
                    {plan}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-2 rounded-2xl border border-border bg-bg-secondary px-3 py-2 text-sm text-text-secondary">
              <SlidersHorizontal size={16} className="text-primary" />
              <select
                value={selectedStatus}
                onChange={(event) => setSelectedStatus(event.target.value)}
                className="bg-transparent pr-2 text-text-primary outline-none"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status} className="bg-bg-surface text-text-primary">
                    {status}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3 text-left">
            <thead>
              <tr className="text-xs uppercase tracking-[0.2em] text-text-muted">
                {staticData.columns.map((column) => (
                  <th key={column} className="px-3 py-2 font-semibold">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredHospitals.map((hospital) => (
                <tr key={hospital.id} className="rounded-2xl bg-bg-secondary text-sm text-text-primary">
                  <td className="rounded-l-2xl px-3 py-4 font-semibold">{hospital.name}</td>
                  <td className="px-3 py-4 text-text-secondary">{hospital.id}</td>
                  <td className="px-3 py-4 text-text-secondary">{hospital.email}</td>
                  <td className="px-3 py-4">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badgeStyles[hospital.plan] || 'bg-bg-hover text-text-secondary'}`}>
                      {hospital.plan}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badgeStyles[hospital.status] || 'bg-bg-hover text-text-secondary'}`}>
                      {hospital.status}
                    </span>
                  </td>
                  <td className="rounded-r-2xl px-3 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => openHospital(hospital)}
                        className="inline-flex items-center gap-1 rounded-xl bg-bg-surface px-2.5 py-2 text-xs font-semibold text-primary hover:bg-primary-light"
                      >
                        <Eye size={14} />
                        {staticData.actions.view}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedHospital(hospital);
                          setIsEditing(true);
                        }}
                        className="inline-flex items-center gap-1 rounded-xl bg-primary px-2.5 py-2 text-xs font-semibold text-text-inverse hover:bg-primary-hover"
                      >
                        <Edit3 size={14} />
                        {staticData.actions.edit}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredHospitals.length === 0 && (
          <div className="mt-6 rounded-2xl border border-dashed border-border bg-bg-secondary px-4 py-10 text-center text-text-secondary">
            {staticData.emptyState}
          </div>
        )}
      </div>

      {selectedHospital && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-primary/10 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-[28px] border border-border bg-bg-surface p-6 shadow-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{staticData.modal.eyebrow}</p>
                <h2 className="mt-2 text-2xl font-black text-text-primary">
                  {isEditing ? staticData.modal.editTitle : staticData.modal.viewTitle}
                </h2>
              </div>
              <button type="button" onClick={() => setSelectedHospital(null)} className="rounded-xl border border-border p-2 text-text-secondary hover:bg-bg-secondary">
                <X size={16} />
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="block text-sm font-medium text-text-secondary">
                {staticData.modal.fields.name}
                <input
                  defaultValue={selectedHospital.name}
                  readOnly={!isEditing}
                  className="mt-2 w-full rounded-2xl border border-border bg-bg-secondary px-4 py-3 outline-none focus:border-primary"
                />
              </label>

              <label className="block text-sm font-medium text-text-secondary">
                {staticData.modal.fields.id}
                <input
                  defaultValue={selectedHospital.id}
                  readOnly={!isEditing}
                  className="mt-2 w-full rounded-2xl border border-border bg-bg-secondary px-4 py-3 outline-none focus:border-primary"
                />
              </label>

              <label className="block text-sm font-medium text-text-secondary md:col-span-2">
                {staticData.modal.fields.email}
                <input
                  defaultValue={selectedHospital.email}
                  readOnly={!isEditing}
                  className="mt-2 w-full rounded-2xl border border-border bg-bg-secondary px-4 py-3 outline-none focus:border-primary"
                />
              </label>

              <label className="block text-sm font-medium text-text-secondary">
                {staticData.modal.fields.plan}
                <select
                  defaultValue={selectedHospital.plan}
                  disabled={!isEditing}
                  className="mt-2 w-full rounded-2xl border border-border bg-bg-secondary px-4 py-3 outline-none focus:border-primary disabled:cursor-not-allowed"
                >
                  <option value="Pro">Pro</option>
                  <option value="Basic">Basic</option>
                </select>
              </label>

              <label className="block text-sm font-medium text-text-secondary">
                {staticData.modal.fields.status}
                <select
                  defaultValue={selectedHospital.status}
                  disabled={!isEditing}
                  className="mt-2 w-full rounded-2xl border border-border bg-bg-secondary px-4 py-3 outline-none focus:border-primary disabled:cursor-not-allowed"
                >
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </label>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button type="button" onClick={() => setSelectedHospital(null)} className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-text-secondary hover:bg-bg-secondary">
                {staticData.modal.cancel}
              </button>
              {isEditing && (
                <button type="button" onClick={() => setSelectedHospital(null)} className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-text-inverse hover:bg-primary-hover">
                  {staticData.modal.save}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hospitals;