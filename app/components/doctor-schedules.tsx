import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function DoctorSchedules() {
  const doctors = [
    { id: 1, name: "Dr. Smith", specialty: "Cardiology", officeHours: "9:00 AM - 5:00 PM" },
    { id: 2, name: "Dr. Johnson", specialty: "Pediatrics", officeHours: "8:00 AM - 4:00 PM" },
    { id: 3, name: "Dr. Williams", specialty: "Neurology", officeHours: "10:00 AM - 6:00 PM" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Doctor Schedules</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Specialty</TableHead>
              <TableHead>Office Hours</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {doctors.map((doctor) => (
              <TableRow key={doctor.id}>
                <TableCell>{doctor.name}</TableCell>
                <TableCell>{doctor.specialty}</TableCell>
                <TableCell>{doctor.officeHours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

