"use client";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 p-8 font-sans">
     <div className="max-w-4xl mx-auto relative z-10">
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Control Panel</h1>
          <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-800/50">
            Secure Session Active
          </span>
        </div>
        
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 shadow-2xl">
          <h2 className="text-xl font-semibold text-white mb-6 border-b border-gray-800 pb-4">
            Deploy New Hardware
          </h2>
          
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">System / Product Name</label>
                <input type="text" className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-3 text-white focus:border-cyan-500 focus:outline-none" placeholder="e.g. Lenovo ThinkPad T14" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Price (Ksh / USD)</label>
                <input type="number" className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-3 text-white focus:border-cyan-500 focus:outline-none" placeholder="1299" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Hardware Category</label>
              <select className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-3 text-white focus:border-cyan-500 focus:outline-none">
                <option>Hardware</option>
                <option>Offensive Sec</option>
                <option>Defensive Sec</option>
                <option>Networking</option>
              </select>
            </div>

            <button type="button" className="w-full mt-6 bg-white hover:bg-gray-200 text-black font-semibold py-3 px-4 rounded-xl transition-colors">
              Initialize Database Insertion
            </button>
          </form>
        </div>

      </div>
    </div>
  );
} 