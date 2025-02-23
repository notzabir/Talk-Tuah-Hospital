import { Home, Calendar, UserIcon as UserMd, Bed, Ambulance, Image } from "lucide-react"

export function Sidebar({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const menuItems = [
    { icon: Home, label: "Admissions", tab: "admissions" },
    { icon: Calendar, label: "Appointments", tab: "appointments" },
    { icon: UserMd, label: "Doctors", tab: "doctors" },
    { icon: Bed, label: "Bed Availability", tab: "beds" },
    { icon: Ambulance, label: "Emergency Status", tab: "emergency" },
    { icon: Home, label: "Nearby Hospitals", tab: "nearby" },
    { icon: Image, label: "Talk-Tuah Doctah", tab: "imagechat" },
  ]

  return (
    <aside className="bg-gray-800 w-64 h-full shadow-md">
      <nav className="p-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.tab} className="mb-4">
              <button
                onClick={() => setActiveTab(item.tab)}
                className="flex items-center text-gray-300 hover:text-blue-400 w-full p-2 rounded transition-colors"
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

