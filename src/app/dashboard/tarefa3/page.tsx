"use client"

import { useState, useEffect } from "react";

// Interface para Cliente
interface Cliente {
    nome: string;
    email: string;
    telefone: string;
}

export default function Tarefa3() {
    const [hidden, setHidden] = useState<string>("hidden");

    const [clientes, setClientes] = useState<Cliente[]>([]);

    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [telefone, setTelefone] = useState<string>("");
    const [editIndex, setEditIndex] = useState<number | null>(null);

    // Simula carregamento inicial (poderia vir de API)
    useEffect(() => {
        const clientesIniciais: Cliente[] = [
            { nome: "Cliente 1", email: "cliente1@example.com", telefone: "123456789" },
            { nome: "Cliente 2", email: "cliente2@example.com", telefone: "987654321" }
        ];
        setClientes(clientesIniciais);
    }, []);

    const handleToggle = (): void => {
        setHidden("");
        setNome("");
        setEmail("");
        setTelefone("");
        setEditIndex(null);
    };

    const handleSave = (): void => {
        if (!nome || !email) {
            alert("Preencha todos os campos!");
            return;
        }

        if (editIndex !== null) {
            // Update
            const novos: Cliente[] = [...clientes];
            novos[editIndex] = { nome, email, telefone };
            setClientes(novos);
        } else {
            // Create
            setClientes([...clientes, { nome, email, telefone }]);
        }

        setHidden("hidden");
    };

    const handleEdit = (index: number): void => {
        const cliente = clientes[index];
        setNome(cliente.nome);
        setEmail(cliente.email);
        setTelefone(cliente.telefone);
        setEditIndex(index);
        setHidden("");
    };

    const handleDelete = (index: number): void => {
        if (confirm("Deseja realmente excluir?")) {
            const novos = clientes.filter((_, i) => i !== index);
            setClientes(novos);
        }
    };

    return (
        <div className="flex flex-col items-center mt-5 min-h-screen bg-slate-100">
            <div className="w-96 h-16 bg-slate-200 rounded-2xl p-3 flex justify-between items-center mb-5">
                <h1>Tarefa 3 - CRUD</h1>
                <button
                    className="bg-blue-600 h-10 w-10 text-white rounded-full cursor-pointer"
                    onClick={handleToggle}
                >+</button>
            </div>

            <div className="flex items-center justify-center gap-3">
                {/* MODAL */}
                <div className={`w-96 h-96 bg-slate-300 rounded-2xl p-3 flex flex-col justify-center items-center ${hidden}`}>
                    <h2>{editIndex !== null ? "Editar Cliente" : "Cadastrar Cliente"}</h2>
                    <div className="flex flex-col gap-3 px-3 mt-3 w-full">
                        <input
                            type="text"
                            className="p-2 border-2 border-slate-700 rounded-2xl"
                            placeholder="Digite seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <input
                            type="email"
                            className="p-2 border-2 border-slate-700 rounded-2xl"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            className="p-2 border-2 border-slate-700 rounded-2xl"
                            placeholder="Digite seu telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                        <button
                            className="bg-black rounded-full cursor-pointer hover:bg-slate-900 text-white p-2 px-3"
                            onClick={handleSave}
                        >
                            {editIndex !== null ? "Salvar Alterações" : "Cadastrar"}
                        </button>
                        <button
                            className="bg-red-500 rounded-full cursor-pointer hover:bg-red-600 text-white p-2 px-3"
                            onClick={() => setHidden("hidden")}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>

                {/* LISTA */}
                <div className="w-96 h-96 bg-slate-300 rounded-2xl p-3 flex flex-col items-center overflow-y-auto">
                    <h2 className="mt-3 mb-3">Lista de Clientes</h2>
                    {clientes.map((c: Cliente, index: number) => (
                        <div
                            key={index}
                            className="flex items-center justify-between gap-2 bg-blue-400 w-full p-3 rounded-md mb-2 hover:scale-105 duration-300"
                        >
                            <div>
                                <p><strong>{c.nome}</strong></p>
                                <p>{c.email}</p>
                                <p>{c.telefone}</p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    className="bg-green-600 text-white px-3 py-1 rounded-lg"
                                    onClick={() => handleEdit(index)}
                                >
                                    Editar
                                </button>
                                <button
                                    className="bg-red-600 text-white px-3 py-1 rounded-lg"
                                    onClick={() => handleDelete(index)}
                                >
                                    Excluir
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
