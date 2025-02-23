"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, HeartPulse, Users, Brain, TreesIcon as Lungs, Pill } from "lucide-react"

type ChatbaseFunction = {
  (action: "getState"): string
  (action: string, ...args: unknown[]): void
  q?: Array<unknown[]>
}

declare global {
  interface Window {
    chatbase: ChatbaseFunction
  }
}

const ChatAnalytics = () => {
  useEffect(() => {
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = ((...args: unknown[]) => {
        if (!window.chatbase.q) {
          window.chatbase.q = []
        }
        window.chatbase.q.push(args)
      }) as ChatbaseFunction

      window.chatbase = new Proxy(window.chatbase, {
        get(target: ChatbaseFunction, prop: string | symbol) {
          if (prop === "q") return target.q
          return (...args: unknown[]) => {
            return target(prop.toString(), ...args)
          }
        },
      })
    }

    const script = document.createElement("script")
    script.src = "https://www.chatbase.co/embed.min.js"
    script.id = "JNItlLIZRBboe-2uTxstI"
    script.setAttribute("data-domain", "www.chatbase.co")
    document.body.appendChild(script)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">US Health Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Users */}
        <Card className="bg-[#1c2b49] border border-gray-700 text-white hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-400" />
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">12,345</CardContent>
        </Card>

        {/* Obesity Rate */}
        <Card className="bg-[#1c2b49] border border-gray-700 text-white hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="w-6 h-6 text-yellow-400" />
              Obesity Rate
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">42.4%</CardContent>
        </Card>

        {/* Heart Disease Rate */}
        <Card className="bg-[#1c2b49] border border-gray-700 text-white hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HeartPulse className="w-6 h-6 text-red-400" />
              Heart Disease Rate
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">10.6%</CardContent>
        </Card>

        {/* Did You Know - Brain */}
        <Card className="bg-[#1c2b49] border border-gray-700 text-white hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-6 h-6 text-purple-400" />
              Did You Know?
            </CardTitle>
          </CardHeader>
          <CardContent>The human brain processes about 70,000 thoughts per day.</CardContent>
        </Card>

        {/* US Health Fact - Life Expectancy */}
        <Card className="bg-[#1c2b49] border border-gray-700 text-white hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-6 h-6 text-green-400" />
              US Life Expectancy
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">78.7 years</CardContent>
        </Card>

        {/* Did You Know - Lungs */}
        <Card className="bg-[#1c2b49] border border-gray-700 text-white hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lungs className="w-6 h-6 text-blue-400" />
              Did You Know?
            </CardTitle>
          </CardHeader>
          <CardContent>Your lungs contain about 1,500 miles of airways.</CardContent>
        </Card>

        {/* US Health Fact - Healthcare Spending */}
        <Card className="bg-[#1c2b49] border border-gray-700 text-white hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pill className="w-6 h-6 text-pink-400" />
              US Healthcare Spending
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">$3.8 trillion</CardContent>
        </Card>

        {/* Did You Know - Heart */}
        <Card className="bg-[#1c2b49] border border-gray-700 text-white hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HeartPulse className="w-6 h-6 text-red-400" />
              Did You Know?
            </CardTitle>
          </CardHeader>
          <CardContent>Your heart beats about 115,000 times each day.</CardContent>
        </Card>

        {/* US Health Fact - Diabetes */}
        <Card className="bg-[#1c2b49] border border-gray-700 text-white hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="w-6 h-6 text-orange-400" />
              Diabetes Rate in US
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">10.5%</CardContent>
        </Card>
      </div>

      {/* Chat Bubble */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-white text-gray-800 rounded-full p-4 shadow-lg hover:bg-gray-100 transition">💬</button>
      </div>
    </div>
  )
}

export default ChatAnalytics

