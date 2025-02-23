import {
    Activity,
    Users,
    Calendar,
    MessageSquare,
    Search,
  } from "lucide-react";
  export const DashboardPreview = () => {
    return (
      <div className="relative w-full max-w-5xl aspect-[16/9] rounded-xl overflow-hidden border border-gray-800/50 bg-gray-900/50 backdrop-blur">
        {/* Window Controls */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800/50 flex items-center px-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
        </div>
        {/* Dashboard Content */}
        <div className="h-full pt-8 p-4 flex gap-4">
          {/* Left Side - Stats */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Total Patients</div>
                    <div className="text-xl font-bold text-white">1,234</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Activity className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Active Cases</div>
                    <div className="text-xl font-bold text-white">426</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gray-800/50 rounded-lg border border-gray-700/50 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Todays Appointments</h3>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-3">
                {[
                  {
                    time: "09:00 AM",
                    patient: "John Smith",
                    type: "Check-up",
                  },
                  {
                    time: "10:30 AM",
                    patient: "Sarah Johnson",
                    type: "Follow-up",
                  },
                  {
                    time: "02:00 PM",
                    patient: "Mike Wilson",
                    type: "Consultation",
                  },
                ].map((apt, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 bg-gray-700/20 rounded"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400">{apt.time}</span>
                      <span className="text-white">{apt.patient}</span>
                    </div>
                    <span className="text-sm text-gray-400">{apt.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Side - Chat */}
          <div className="w-[380px] bg-gray-800/50 rounded-lg border border-gray-700/50 flex flex-col">
            <div className="p-4 border-b border-gray-700/50">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                <h3 className="text-white font-semibold">AI Assistant</h3>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg py-2 px-4 text-gray-300 text-sm"
                />
                <Search className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="flex-1 p-4 space-y-4 overflow-auto">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3 text-gray-300 text-sm max-w-[80%]">
                  Hello! How can I assist you with hospital management today?
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="bg-blue-500/20 rounded-lg p-3 text-gray-300 text-sm max-w-[80%]">
                  I need help with patient admission procedures
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3 text-gray-300 text-sm max-w-[80%]">
                  I will guide you through the admission process. First, please
                  verify if there are available beds in the required ward...
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-700/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-900/50 border border-gray-700/50 rounded-lg py-2 px-4 text-gray-300 text-sm"
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  