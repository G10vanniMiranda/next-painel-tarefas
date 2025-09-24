/**
 * Esse Melhorei a interface Usando Google Gemini
*/

"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BadgeCheck, Undo2, Edit, Trash2, PlusCircle, Save } from "lucide-react";

interface TarefaProps {
    id: number;
    nome: string;
    time: string;
    data: string;
    status: boolean;
}

export default function Tarefa2() {
    const [tarefas, setTarefas] = useState<TarefaProps[]>([]);
    const [nome, setNome] = useState("");
    const [time, setTime] = useState("");
    const [data, setData] = useState("");
    const [editandoId, setEditandoId] = useState<number | null>(null);

    const adicionarOuEditarTarefa = () => {
        if (!nome || !data) return;

        if (editandoId !== null) {
            // Editar tarefa existente
            const tarefasAtualizadas = tarefas.map((tarefa) =>
                tarefa.id === editandoId
                    ? { ...tarefa, nome, time, data }
                    : tarefa
            );
            setTarefas(tarefasAtualizadas);
            setEditandoId(null);
        } else {
            // Adicionar nova tarefa
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
        setEditandoId(tarefa.id)
    };

    const alternarStatus = (id: number) => {
        const tarefasAtualizadas = tarefas.map((tarefa) =>
            tarefa.id === id ? { ...tarefa, status: !tarefa.status } : tarefa
        );
        setTarefas(tarefasAtualizadas);
    };

    return (
        <div className="p-4 max-w-xl mx-auto flex flex-col gap-7 mt-3">
            <h1 className="font-bold mb-2 text-center text-5xl">Cadastre uma tarefa</h1>

            {/* Formulário */}
            <div className="mb-4 flex justify-center items-center gap-2">
                <Input
                    type="text"
                    placeholder="Nome da tarefa"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="max-w-[140px]"
                />
                <Input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="max-w-[100px]"
                />
                <Input
                    type="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    className="max-w-[130px]"
                />
                <Button
                    onClick={adicionarOuEditarTarefa}
                    className="flex gap-1 items-center"
                >
                    {editandoId !== null ? (
                        <>
                            <Save size={18} /> Salvar
                        </>
                    ) : (
                        <>
                            <PlusCircle size={18} /> Adicionar
                        </>
                    )}
                </Button>
            </div>

            {/* Nossa Lista */}
            <h2 className="text-lg text-center font-semibold mb-2">Listando tarefas</h2>
            {tarefas.length === 0 ? (
                <p className="text-center mx-auto w-full p-2 px-3 bg-sky-600 rounded-full text-white">Nenhuma tarefa cadastrada.</p>
            ) : (
                <ul>
                    {tarefas.map((tarefa) => (
                        <li
                            key={tarefa.id}
                            className="flex items-center justify-between border-b py-2"
                        >
                            <div>
                                <p className={tarefa.status ? "line-through text-gray-500" : ""}>
                                    <strong>{tarefa.nome} </strong> -
                                    <strong>{tarefa.time}</strong> -
                                    <strong>{tarefa.data}</strong>
                                </p>
                            </div>
                            <div className="flex gap-1">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => alternarStatus(tarefa.id)}
                                    className={tarefa.status ? "text-green-600" : "text-green-700"}
                                    title={tarefa.status ? "Desfazer" : "Concluir"}
                                >
                                    {tarefa.status ? <Undo2 size={18} /> : <BadgeCheck size={18} />}
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => editarTarefa(tarefa)}
                                    className="text-yellow-600"
                                    title="Editar"
                                >
                                    <Edit size={18} />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => excluirTarefa(tarefa.id)}
                                    className="text-red-600"
                                    title="Excluir"
                                >
                                    <Trash2 size={18} />
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {/* Contadores */}
            <div className="flex gap-3 mt-3">
                <div className="flex-1 bg-green-600 justify-center items-center h-44 rounded-full flex flex-col-reverse shadow-lg">
                    <p className="text-white font-semibold">Total Concluídas</p>
                    <div className="text-5xl">
                        {tarefas.filter((concluidas) => concluidas.status).length}
                    </div>
                </div>
                <div className="flex-1 bg-yellow-600 justify-center items-center h-44 rounded-full flex flex-col-reverse shadow-lg">
                    <p className="text-white font-semibold">Total de Registros</p>
                    <div className="text-5xl">
                        {tarefas.length}
                    </div>
                </div>
                <div className="flex-1 bg-red-500 justify-center items-center h-44 rounded-full flex flex-col-reverse shadow-lg">
                    <p className="text-white font-semibold">Total Pendentes</p>
                    <div className="text-5xl">
                        {tarefas.filter((pendentes) => !pendentes.status).length}
                    </div>
                </div>
            </div>
        </div>
    );
}