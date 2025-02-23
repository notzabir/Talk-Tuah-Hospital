"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Appointments() {
  const [activeTab, setActiveTab] = useState("active")

  const activeAppointments = [
    { id: 1, patient: "Alice Brown", doctor: "Dr. Smith", time: "10:00 AM" },
    { id: 2, patient: "Charlie Davis", doctor: "Dr. Johnson", time: "11:30 AM" },
  ]

  const pastAppointments = [
    { id: 3, patient: "Eve Green", doctor: "Dr. Williams", time: "2:00 PM", date: "2023-05-10" },
    { id: 4, patient: "Frank White", doctor: "Dr. Davis", time: "3:30 PM", date: "2023-05-09" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-gray-700">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeAppointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.patient}</TableCell>
                    <TableCell>{appointment.doctor}</TableCell>
                    <TableCell>{appointment.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="past">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pastAppointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.patient}</TableCell>
                    <TableCell>{appointment.doctor}</TableCell>
                    <TableCell>{appointment.date}</TableCell>
                    <TableCell>{appointment.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

