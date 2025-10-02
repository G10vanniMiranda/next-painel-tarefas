"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "January", entrada: 186, saida: 80 },
    { month: "February", entrada: 305, saida: 200 },
    { month: "March", entrada: 237, saida: 120 },
    { month: "April", entrada: 73, saida: 190 },
    { month: "May", entrada: 209, saida: 130 },
    { month: "June", entrada: 214, saida: 140 },
]

const chartConfig = {
    entrada: {
        label: "Entrada",
        color: "#2563eb", // azul
    },
    saida: {
        label: "Saída",
        color: "#ef4444", // vermelho
    },
} satisfies ChartConfig

export function Component() {
    return (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="entrada" fill="var(--color-entrada)" radius={4} />
                <Bar dataKey="saida" fill="var(--color-saida)" radius={4} />
            </BarChart>
        </ChartContainer>
    )
}