"use client"
import { Navbar } from "../components/navbar";
import { DashboardPreview } from "../components/dashboardpreview";
import Link from "next/link";

export default function App() {
  return (
    <main className="w-full min-h-screen bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
      <Navbar />
      <div className="relative flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
            Your Personal AI-Powered Hospital Management
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12">
            Where YOU can manage your hospital operations with intelligent
            automation
          </p>
          <div className="flex gap-4">
            <Link href="/">
            <button className="px-8 py-4 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25">
              Demo
            </button>
            </Link>
            <button className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-lg text-lg font-semibold hover:bg-gray-800/80 transition-all">
              Start Now
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-end justify-center px-4 pb-8">
          <DashboardPreview />
        </div>
      </div>

    
    </main>
  );
}
