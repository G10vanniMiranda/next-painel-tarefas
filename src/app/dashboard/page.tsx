import Link from "next/link";

export default function Dashboard() {
    return (
        <div>
            <h1 className="text-3xl font-semibold">Dashboard</h1>

            <Link href="/dashboard/tarefa1" className="text-blue-600 underline">
                Tarefa 1 - Contador
            </Link>

            <Link href="/dashboard/tarefa2" className="text-blue-600 underline">
                Tarefa 2 - Contador
            </Link>

            <Link href="/dashboard/tarefa3" className="text-blue-600 underline">
                Tarefa 3 - Contador
            </Link>

            <Link href="/dashboard/tarefa4" className="text-blue-600 underline">
                Tarefa 4 - Contador
            </Link>
        </div>
    )
}