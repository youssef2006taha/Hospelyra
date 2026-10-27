import { HiBuildingOffice2, HiClipboardDocumentCheck, HiClock, HiDocumentMinus ,HiArrowPath , } from "react-icons/hi2";

function Overview({ staticData }) {
  return (
    <div className="w-full overflow-hidden p-4">
      <div>
        <h2 className="text-2xl font-bold">{staticData.overview}</h2>
        <p className="text-gray-500">{staticData.quickLook}</p>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-1">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
            <HiBuildingOffice2 size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">{staticData.totalH}</p>
            <h3 className="text-xl font-bold ">48</h3>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-1">
            <div className="p-3 bg-blue-50 text-green-600 rounded-full flex items-center justify-center">
            <HiClipboardDocumentCheck size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">{staticData.activeS}</p>
              <h3 className="text-xl font-bold">42</h3>
            </div>
          </div> 
        </div>
        <div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-1">
            <div className="p-3 bg-blue-50 text-orange-400 rounded-full flex items-center justify-center">
            <HiClock size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">{staticData.pendingH}</p>
              <h3 className="text-xl font-bold">5</h3>
            </div>
          </div> 
        </div>
        <div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-1">
            <div className="p-3 bg-blue-50 text-red-600 rounded-full flex items-center justify-center">
            <HiDocumentMinus size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">{staticData.expiredS}</p>
              <h3 className="text-xl font-bold">8</h3>
            </div>
          </div> 
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold">{staticData.recentH}</h3>
            <a href="#" className="text-indigo-600 font-semibold text-xs hover:underline">{staticData.view}</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-xs font-medium">
                  <th className="py-3 px-4 rounded-l-lg">{staticData.hName}</th>
                  <th className="py-3 px-4">{staticData.email}</th>
                  <th className="py-3 px-4">{staticData.plan}</th>
                  <th className="py-3 px-4 rounded-r-lg">{staticData.status}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs text-gray-600">
              <tr className="hover:bg-gray-200/50 transition-colors ">
                  <td className="py-4 px-4 font-semibold">Hospital 1</td>
                  <td className="py-4 px-4">1@hospital.com</td>
                  <td className="py-4 px-4 ">Pro</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-600">Active</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-200/50 transition-colors">
                  <td className="py-4 px-4 font-semibold">Hospital 2</td>
                  <td className="py-4 px-4">2@hospital.com</td>
                  <td className="py-4 px-4">Basic</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-600">Active</span>
                  </td>
                </tr>  
                <tr className="hover:bg-gray-200/50 transition-colors">
                  <td className="py-4 px-4 font-semibold">Hospital 3</td>
                  <td className="py-4 px-4">3@hospital.com</td>
                  <td className="py-4 px-4">Pro</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-600">Active</span>
                  </td>
                </tr>
              <tr className="hover:bg-gray-200/50 transition-colors">
                  <td className="py-4 px-4 font-semibold">Hospital 4</td>
                  <td className="py-4 px-4">4@hospital.com</td>
                  <td className="py-4 px-4">Basic</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-600">Active</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-200/50 transition-colors">
                  <td className="py-4 px-4 font-semibold text-gray-700">Hospital 5</td>
                  <td className="py-4 px-4">5@hospital.com</td>
                  <td className="py-4 px-4">Pro</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-600">Active</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold">{staticData.recent}</h3>
            <a href="#" className="text-indigo-600 font-semibold text-xs hover:underline">{staticData.view}</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody className="divide-y divide-gray-50"></tbody>
            <tr className="hover:bg-gray-200/50 transition-colors">
                  <td className="py-3.5 pr-3 w-10">
                    <div className="p-2.5 rounded-full flex items-center justify-center bg-indigo-50 text-indigo-600">
                      <HiBuildingOffice2 size={20} />
                    </div>
                  </td>
                  <td className="py-3.5 px-2">
                    <p className="text-xs font-semibold">New hospital registered</p>
                    <p className="text-[11px] text-gray-400 mt-1">
                    Hospital 1 <span className="mx-1">•</span> 2 hours ago
                    </p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-200/50 transition-colors">
                  <td className="py-3.5 pr-3 w-10">
                    <div className="p-2.5 rounded-full flex items-center justify-center bg-orange-50 text-orange-400">
                      <HiClipboardDocumentCheck size={20} />
                    </div>
                  </td>
                  <td className="py-3.5 px-2">
                    <p className="text-xs font-semibold">Subscription activated</p>
                    <p className="text-[11px] text-gray-400 mt-1">
                    Hospital 2<span className="mx-1">•</span> 5 hours ago
                    </p>
                  </td>
                </tr>
                  <tr className="hover:bg-gray-200/50 transition-colors">
                  <td className="py-3.5 pr-3 w-10">
                    <div className="p-2.5 rounded-full flex items-center justify-center bg-blue-50 text-blue-600">
                      <HiArrowPath size={20} />
                    </div>
                  </td>
                  <td className="py-3.5 px-2">
                    <p className="text-xs font-semibold">Plan updated</p>
                    <p className="text-[11px] text-gray-400 mt-1">
                      Hospital 3 <span className="mx-1">•</span> 1 day ago
                    </p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-200/50 transition-colors">
                  <td className="py-3.5 pr-3 w-10">
                    <div className="p-2.5 rounded-full flex items-center justify-center bg-emerald-50 text-emerald-600">
                      <HiClipboardDocumentCheck size={20} />
                    </div>
                  </td>
                  <td className="py-3.5 px-2">
                    <p className="text-xs font-semibold ">Hospital approved</p>
                    <p className="text-[11px] text-gray-400 mt-1">
                      Hospital 4<span className="mx-1">•</span> 1 day ago
                    </p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-200/50 transition-colors">
                  <td className="py-3.5 pr-3 w-10">
                    <div className="p-2.5 rounded-full flex items-center justify-center bg-rose-50 text-rose-500">
                      <HiDocumentMinus size={20} />
                    </div>
                  </td>
                  <td className="py-3.5 px-2">
                    <p className="text-xs font-semibold">Subscription expired</p>
                    <p className="text-[11px] text-gray-400 mt-1">
                      Hospital 5<span className="mx-1">•</span> 2 days ago
                    </p>
                  </td>
                </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    
  ) 
}


export default Overview