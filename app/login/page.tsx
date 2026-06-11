"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate a secure network request
    setTimeout(() => {
      setIsLoading(false);
      // For now, redirect back to the storefront after "logging in"
      router.push("/merch");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 font-sans text-gray-200">
      <div className="max-w-md w-full bg-[#111111] border border-gray-800 rounded-2xl p-8 shadow-2xl">
        
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">N</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">System Access</h1>
          <p className="text-gray-400 text-sm">Authenticate to manage your storefront.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Admin Identifier
            </label>
            <input
              type="text"
              required
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              placeholder="admin@nilckson.tech"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Security Protocol
            </label>
            <input
              type="password"
              required
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-white hover:bg-gray-200 text-black font-semibold py-3 px-4 rounded-xl transition-colors flex justify-center items-center"
          >
            {isLoading ? "Authenticating..." : "Initialize Session"}
          </button>
        </form>

      </div>
    </div>
  );
}