import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function PatientAdmissions() {
  const patients = [
    { id: 1, name: "John Doe", floor: 2, room: "201" },
    { id: 2, name: "Jane Smith", floor: 3, room: "315" },
    { id: 3, name: "Bob Johnson", floor: 1, room: "105" },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Current Patient Admissions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-black">{patients.length}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Patient Locations</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Floor</TableHead>
                <TableHead>Room</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.floor}</TableCell>
                  <TableCell>{patient.room}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

