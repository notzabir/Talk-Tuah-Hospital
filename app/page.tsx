"use client"
import Dashboard from "./components/dashboard"
import Link from "next/link"
export default function Home() {
  return (
    <div>
      <Dashboard />
      <Link href="./hero" > <button className="relative px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
        Home
        </button>
      </Link>
    </div>
  )
}

