"use client"

import { useState } from "react"
import { Sidebar } from "./sidebar"
import { PatientAdmissions } from "./patient-admissions"
import { Appointments } from "./appointments"
import { DoctorSchedules } from "./doctor-schedules"
import { BedAvailability } from "./bed-availibility"
import { EmergencyStatus } from "./emergency-status"
import { NearbyHospitals } from "./nearby-hospitals"
import ImageChat from "./imagechat"
import Chatwidget from "./chat-widget"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("admissions")

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-y-auto p-8 bg-gray-900">
        <h1 className="text-3xl font-bold mb-8">Hospital Management Dashboard</h1>
        {activeTab === "admissions" && <PatientAdmissions />}
        {activeTab === "appointments" && <Appointments />}
        {activeTab === "doctors" && <DoctorSchedules />}
        {activeTab === "beds" && <BedAvailability />}
        {activeTab === "emergency" && <EmergencyStatus />}
        {activeTab === "nearby" && <NearbyHospitals />}
        {activeTab === "imagechat" && <ImageChat />}
        <Chatwidget />
      </main>
    </div>
  )
}

