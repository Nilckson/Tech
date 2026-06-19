import { login, signup } from './actions'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string }
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#04050a] p-4 text-white">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-gray-900/50 p-8 shadow-2xl border border-white/10 backdrop-blur-sm">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            System Access
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Authenticate to continue
          </p>
        </div>

        {searchParams.error && (
          <div className="rounded-md bg-red-900/50 p-4 text-sm text-red-400 border border-red-500/50">
            {searchParams.error}
          </div>
        )}

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-700 bg-black/50 px-3 py-2 text-white placeholder-gray-600 focus:border-[#22d3ee] focus:outline-none focus:ring-1 focus:ring-[#22d3ee] sm:text-sm"
                placeholder="admin@nilckson.tech"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full rounded-md border border-gray-700 bg-black/50 px-3 py-2 text-white placeholder-gray-600 focus:border-[#22d3ee] focus:outline-none focus:ring-1 focus:ring-[#22d3ee] sm:text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <button
              formAction={login}
              className="flex w-full justify-center rounded-md border border-transparent bg-[#22d3ee] px-4 py-2 text-sm font-bold text-black shadow-sm hover:bg-[#06b6d4] focus:outline-none transition-colors"
            >
              Initialize Login
            </button>
            <button
              formAction={signup}
              className="flex w-full justify-center rounded-md border border-white/20 bg-transparent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-white/10 focus:outline-none transition-colors"
            >
              Request Access
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}