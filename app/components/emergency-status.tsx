import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function EmergencyStatus() {
  const status = {
    waitingPatients: 12,
    averageWaitTime: "45 minutes",
    availableStaff: 8,
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Emergency Room Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-2xl font-bold text-gray-800">{status.waitingPatients}</p>
            <p className="text-sm text-gray-400">Waiting Patients</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">{status.averageWaitTime}</p>
            <p className="text-sm text-gray-400">Average Wait Time</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">{status.availableStaff}</p>
            <p className="text-sm text-gray-400">Available Staff</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

