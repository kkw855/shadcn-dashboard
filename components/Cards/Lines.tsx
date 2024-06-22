'use client'

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from '@nivo/line'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type Data = {
  id: string
  color: string
  data: {
    x: string
    y: number
  }[]
}

// make sure the parent container has a defined height when using
// responsive component, otherwise the height will be 0, and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }: { data: Data[] }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 10, right: 20, bottom: 40, left: 50 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    curve="basis"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'transportation',
      legendOffset: 36,
      legendPosition: 'middle',
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle',
      truncateTickAt: 0,
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabel="data.yFormatted"
    pointLabelYOffset={-12}
    enableTouchCrosshair={true}
    useMesh={true}
  />
)

export default function Lines() {
  const data = [
    {
      id: 'japan',
      color: 'hsl(77, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 12,
        },
        {
          x: 'helicopter',
          y: 184,
        },
        {
          x: 'boat',
          y: 203,
        },
        {
          x: 'train',
          y: 293,
        },
        {
          x: 'subway',
          y: 182,
        },
        {
          x: 'bus',
          y: 289,
        },
        {
          x: 'car',
          y: 146,
        },
        {
          x: 'moto',
          y: 40,
        },
        {
          x: 'bicycle',
          y: 261,
        },
        {
          x: 'horse',
          y: 93,
        },
        {
          x: 'skateboard',
          y: 75,
        },
        {
          x: 'others',
          y: 36,
        },
      ],
    },
    {
      id: 'france',
      color: 'hsl(297, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 35,
        },
        {
          x: 'helicopter',
          y: 68,
        },
        {
          x: 'boat',
          y: 253,
        },
        {
          x: 'train',
          y: 211,
        },
        {
          x: 'subway',
          y: 59,
        },
        {
          x: 'bus',
          y: 231,
        },
        {
          x: 'car',
          y: 214,
        },
        {
          x: 'moto',
          y: 285,
        },
        {
          x: 'bicycle',
          y: 99,
        },
        {
          x: 'horse',
          y: 106,
        },
        {
          x: 'skateboard',
          y: 292,
        },
        {
          x: 'others',
          y: 287,
        },
      ],
    },
    {
      id: 'us',
      color: 'hsl(356, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 36,
        },
        {
          x: 'helicopter',
          y: 116,
        },
        {
          x: 'boat',
          y: 26,
        },
        {
          x: 'train',
          y: 105,
        },
        {
          x: 'subway',
          y: 70,
        },
        {
          x: 'bus',
          y: 233,
        },
        {
          x: 'car',
          y: 170,
        },
        {
          x: 'moto',
          y: 219,
        },
        {
          x: 'bicycle',
          y: 15,
        },
        {
          x: 'horse',
          y: 98,
        },
        {
          x: 'skateboard',
          y: 21,
        },
        {
          x: 'others',
          y: 283,
        },
      ],
    },
    {
      id: 'germany',
      color: 'hsl(201, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 14,
        },
        {
          x: 'helicopter',
          y: 45,
        },
        {
          x: 'boat',
          y: 11,
        },
        {
          x: 'train',
          y: 294,
        },
        {
          x: 'subway',
          y: 113,
        },
        {
          x: 'bus',
          y: 164,
        },
        {
          x: 'car',
          y: 137,
        },
        {
          x: 'moto',
          y: 217,
        },
        {
          x: 'bicycle',
          y: 13,
        },
        {
          x: 'horse',
          y: 82,
        },
        {
          x: 'skateboard',
          y: 60,
        },
        {
          x: 'others',
          y: 21,
        },
      ],
    },
    {
      id: 'norway',
      color: 'hsl(90, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 201,
        },
        {
          x: 'helicopter',
          y: 109,
        },
        {
          x: 'boat',
          y: 207,
        },
        {
          x: 'train',
          y: 251,
        },
        {
          x: 'subway',
          y: 154,
        },
        {
          x: 'bus',
          y: 268,
        },
        {
          x: 'car',
          y: 162,
        },
        {
          x: 'moto',
          y: 83,
        },
        {
          x: 'bicycle',
          y: 184,
        },
        {
          x: 'horse',
          y: 213,
        },
        {
          x: 'skateboard',
          y: 53,
        },
        {
          x: 'others',
          y: 213,
        },
      ],
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lines</CardTitle>
        <CardDescription>These are the states of this year.</CardDescription>
      </CardHeader>
      <CardContent className="flex h-[264px] w-full items-center">
        <MyResponsiveLine data={data} />
      </CardContent>
    </Card>
  )
}
