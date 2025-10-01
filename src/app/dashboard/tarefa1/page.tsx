"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MoonStar, Sun, PencilLine, Trash, CheckCircle2, XCircle, CalendarClock, Link } from "lucide-react";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface TarefaProps {
    id: number;
    nome: string;
    time: string;
    data: string;
    status: boolean;
}

export default function Tarefa1() {
    const [tarefas, setTarefas] = useState<TarefaProps[]>([]);
    const [nome, setNome] = useState("");
    const [time, setTime] = useState("");
    const [data, setData] = useState("");
    const [editandoId, setEditandoId] = useState<number | null>(null);

    const adicionarOuEditarTarefa = () => {
        if (!nome || !data) return;

        if (editandoId !== null) {
            const tarefasAtualizadas = tarefas.map((tarefa) =>
                tarefa.id === editandoId
                    ? { ...tarefa, nome, time, data }
                    : tarefa
            );
            setTarefas(tarefasAtualizadas);
            setEditandoId(null);
        } else {
            const novaTarefa: TarefaProps = {
                id: Date.now(),
                nome,
                time,
                data,
                status: false,
            };
            setTarefas([...tarefas, novaTarefa]);
        }

        setNome("");
        setTime("");
        setData("");
    };

    const excluirTarefa = (id: number) => {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    };

    const editarTarefa = (tarefa: TarefaProps) => {
        setNome(tarefa.nome);
        setTime(tarefa.time);
        setData(tarefa.data);
        setEditandoId(tarefa.id);
    };

    const alternarStatus = (id: number) => {
        const tarefasAtualizadas = tarefas.map((tarefa) =>
            tarefa.id === id ? { ...tarefa, status: !tarefa.status } : tarefa
        );
        setTarefas(tarefasAtualizadas);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 p-6">
            <div className="max-w-2xl mx-auto flex flex-col gap-8">
                <h1 className="font-extrabold text-center text-4xl md:text-5xl text-white flex items-center justify-center gap-2">
                    <MoonStar className="text-indigo-400" size={36} />
                    Cadastre uma Tarefa
                </h1>

                {/* Formulário */}
                <div className="bg-white/5 backdrop-blur rounded-xl p-4 flex flex-col md:flex-row gap-3 items-center shadow-lg">
                    <Input
                        type="text"
                        placeholder="Nome da tarefa"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="bg-gray-900/60 text-white border-gray-700"
                    />
                    <Input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="bg-gray-900/60 text-white border-gray-700"
                    />
                    <Input
                        type="date"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        className="bg-gray-900/60 text-white border-gray-700"
                    />
                    <Button
                        onClick={adicionarOuEditarTarefa}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white flex gap-1 items-center"
                    >
                        {editandoId !== null ? (
                            <>
                                <PencilLine size={18} /> Salvar
                            </>
                        ) : (
                            <>
                                <Sun size={18} /> Adicionar
                            </>
                        )}
                    </Button>
                </div>

                {/* Lista */}
                <div className="bg-white/5 backdrop-blur rounded-xl p-4 shadow-lg">
                    <h2 className="text-lg text-center font-semibold mb-2 text-indigo-200">Listando tarefas</h2>
                    {tarefas.length === 0 ? (
                        <p className="text-center mx-auto w-full p-2 px-3 bg-indigo-700/80 rounded-full text-white">
                            Nenhuma tarefa cadastrada.
                        </p>
                    ) : (
                        <ul>
                            {tarefas.map((tarefa) => (
                                <li
                                    key={tarefa.id}
                                    className="flex items-center justify-between border-b border-gray-700 py-2 last:border-b-0"
                                >
                                    <div>
                                        <p className={tarefa.status ? "line-through text-gray-400" : "text-white"}>
                                            <span className="font-bold">{tarefa.nome}</span>{" "}
                                            <span className="text-indigo-300">
                                                <CalendarClock size={16} className="inline mb-1 mr-1" />
                                                {tarefa.time || "--:--"}
                                            </span>{" "}
                                            <span className="text-indigo-300">
                                                {tarefa.data || "--/--/----"}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex gap-1">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => alternarStatus(tarefa.id)}
                                            className={tarefa.status ? "text-green-400" : "text-green-600"}
                                            title={tarefa.status ? "Desfazer" : "Concluir"}
                                        >
                                            {tarefa.status ? <XCircle size={18} /> : <CheckCircle2 size={18} />}
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => editarTarefa(tarefa)}
                                            className="text-yellow-400"
                                            title="Editar"
                                        >
                                            <PencilLine size={18} />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => excluirTarefa(tarefa.id)}
                                            className="text-red-500"
                                            title="Excluir"
                                        >
                                            <Trash size={18} />
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Contadores */}
                <div className="flex gap-3 mt-3">

                    <Tooltip>
                        <TooltipTrigger className="flex-1 bg-gradient-to-br from-green-700 via-green-800 to-green-900 justify-center items-center h-44 rounded-2xl flex flex-col-reverse shadow-lg border border-green-900">

                            <p className="text-white font-semibold">Total Concluídas</p>
                            <div className="text-5xl text-green-300">
                                {tarefas.filter((concluidas) => concluidas.status).length}
                            </div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white w-44 border-0 p-0">
                            <p className="font-semibold text-xl text-black text-center p-2">Total de registros no sistema.</p>
                        </TooltipContent>
                    </Tooltip>



                    <div className="flex-1 bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 justify-center items-center h-44 rounded-2xl flex flex-col-reverse shadow-lg border border-indigo-900">
                        <p className="text-white font-semibold">Total de Registros</p>
                        <div className="text-5xl text-indigo-200">
                            {tarefas.length}
                        </div>
                    </div>

                    <div className="flex-1 bg-gradient-to-br from-red-700 via-red-800 to-red-900 justify-center items-center h-44 rounded-2xl flex flex-col-reverse shadow-lg border border-red-900">
                        <p className="text-white font-semibold">Total Pendentes</p>
                        <div className="text-5xl text-red-200">
                            {tarefas.filter((pendentes) => !pendentes.status).length}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}