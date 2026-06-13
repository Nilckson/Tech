import { createHardware } from "./actions";
import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';
import { redirect } from 'next/navigation';

export default async function AdminDashboard() {
  const cookieStore = await cookies();

  // Initialize secure connection
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
      },
    }
  );

  // Fetch current user
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen p-8 font-sans bg-black">
      <div className="max-w-4xl mx-auto relative z-50">
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Control Panel</h1>
          <div className="flex flex-col items-end">
            <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-800/50 mb-1">
              Secure Session Active
            </span>
            {/* Displays the email you just used to log in! */}
            <span className="text-xs text-gray-400 font-mono">{user.email}</span>
          </div>
        </div>
        
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 shadow-2xl">
          <h2 className="text-xl font-semibold text-white mb-6 border-b border-gray-800 pb-4">
            Deploy New Hardware
          </h2>
          
          <form action={createHardware} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">System / Product Name</label>
                <input type="text" name="name" required className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-3 text-white focus:border-cyan-500 focus:outline-none relative z-50" placeholder="e.g. Lenovo ThinkPad T14" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Price (Ksh / USD)</label>
                <input type="number" name="price" required className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-3 text-white focus:border-cyan-500 focus:outline-none relative z-50" placeholder="1299" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Hardware Category</label>
              <select name="category" className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-3 text-white focus:border-cyan-500 focus:outline-none relative z-50">
                <option value="Hardware">Hardware</option>
                <option value="Offensive Sec">Offensive Sec</option>
                <option value="Defensive Sec">Defensive Sec</option>
                <option value="Networking">Networking</option>
              </select>
            </div>

            <button type="submit" className="w-full mt-6 bg-white hover:bg-gray-200 text-black font-semibold py-3 px-4 rounded-xl transition-colors relative z-50">
              Initialize Database Insertion
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}