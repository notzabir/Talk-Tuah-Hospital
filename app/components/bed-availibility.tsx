import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BedAvailability() {
  const floors = [
    { floor: 1, total: 20, available: 5 },
    { floor: 2, total: 25, available: 8 },
    { floor: 3, total: 30, available: 12 },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {floors.map((floor) => (
        <Card key={floor.floor}>
          <CardHeader>
            <CardTitle>Floor {floor.floor}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-gray-800">
              {floor.available} / {floor.total}
            </p>
            <p className="text-sm text-gray-800">Available Beds</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

