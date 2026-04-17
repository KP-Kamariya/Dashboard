"use client"
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
export const description = "A multiple line chart"
const chartData = [
  { month: "January", This_year: 42000, last_year: 38000 },
  { month: "February", This_year: 53000, last_year: 45000 },
  { month: "March", This_year: 48000, last_year: 47000 },
  { month: "April", This_year: 61000, last_year: 56000 },
  { month: "May", This_year: 72000,last_year: 65000 },
  { month: "June",This_year:69000, last_year: 63000 },
  { month: "Jul",This_year: 74000, last_year:68000 },
  { month: "Aug",This_year: 82000, last_year: 70000 },
  { month: "Sep",This_year: 78000, last_year: 69000 },
  { month: "Oct",This_year: 85000, last_year: 75000 },
  { month: "Nov",This_year: 91000, last_year: 80000 },
  { month: "Dec",This_year: 97000, last_year: 84000 },
]
const chartConfig = {
  This_year: {
    label: "This_year",
    color: "var(--chart-1)",
  },
  last_year: {
    label: "last_year",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig
const Sale_overview = () => {
  return (
    <>
    <Card>
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
        <CardDescription>January - dec 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            className="text-red-700"
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />}  />
            <Line
              dataKey="This_year"
              type="monotone"
              stroke="var(--color-This_year)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="last_year"
              type="monotone"
              stroke="var(--color-last_year)"
              strokeWidth={2}
              dot={false}
            
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
    </>
  )
}

export default Sale_overview