import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import General from '@/components/Cards/General'
import Calendar from '@/components/Cards/Calendar'
import Lines from '@/components/Cards/Lines'
import { TableDemo } from '@/components/Cards/Table'
import { DataTableDemo } from '@/components/Cards/DataTable'

export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid gap-[32px] xl:grid-cols-2">
        <General />
        <div className="grid gap-[32px]">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid gap-[32px] overflow-hidden xl:h-[400px] xl:grid-cols-3">
        <Lines />
        <Card className="overflow-y-scroll">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>
              These are the orders of this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TableDemo />
          </CardContent>
        </Card>
        <Card className="overflow-y-scroll">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>
              These are the users of this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTableDemo />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
