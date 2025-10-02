import { Component } from "./_components/example-chart";


export default function Dashboard() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex flex-wrap justify-center gap-10 w-[1080px] mx-auto pt-10">


                <div className="w-[40%] bg-slate-700 p-5 rounded-xl">
                    <Component />
                </div>

                <div className="w-[40%] bg-amber-600 p-5 rounded-xl">
                    <Component />
                </div>

                <div className="w-[40%] bg-sky-400 p-5 rounded-xl">
                    <Component />
                </div>

                <div className="w-[40%] bg-violet-500 p-5 rounded-xl">
                    <Component />
                </div>

            </div>
        </div>
    )
}