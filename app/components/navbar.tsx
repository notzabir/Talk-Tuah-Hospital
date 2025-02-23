import { Headphones } from "lucide-react";
export const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-10">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center relative z-10">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -inset-0.5 bg-blue-400 blur-sm rounded-xl" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-white text-xl font-bold">Talk Tuah</span>
          <span className="text-blue-400 text-sm">Hospital Dashboard</span>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
          Login
        </button>
        <button className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/50 text-white rounded-lg hover:bg-blue-500/30 transition-all">
          Sign Up
        </button>
      </div>
    </nav>
  );
};
