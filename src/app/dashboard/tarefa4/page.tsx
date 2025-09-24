"use client"

import { useState } from "react"

export default function Tarefa4() {
    const [produto, setProduto] = useState('')
    const [qtd, setQtd] = useState(0)
    const [preco, setPreco] = useState(18)
    const [total, setTotal] = useState(0)

    const adicionarProduto = () => {
        setQtd(qtd + 1)
        setTotal(total + preco)
    }

    const removerProduto = () => {
        if (qtd > 0) {
            setQtd(qtd - 1)
            setTotal(total - preco)
        }

        if (qtd === 0) {
            alert('Quantidade já está em 0')
        }
    }

    const calcularTotal = () => {
        return qtd * preco
    }

    const atualizarTotal = () => {
        setTotal(calcularTotal())
    }

    return (
        <div>
            <h1>Tarefa 4</h1>

            <div className="flex gap-3">
                <input
                    type="text"
                    value={produto}
                    className="border border-gray-300 rounded px-2 py-1"
                    onChange={(e) => setProduto(e.target.value)}
                />

                <input
                    type="number"
                    value={preco}
                    className="border border-gray-300 rounded px-2 py-1 w-16"
                    onChange={(e) => setPreco(Number(e.target.value))}
                />

                <input type="text" placeholder="total" className="border w-20 border-gray-300 rounded px-2 py-1" value={total} readOnly />

            </div>

            <div className="mt-3">
                <button className="bg-green-500 text-white rounded px-2 py-1" onClick={adicionarProduto}>+</button>
                <span className="mx-2">{qtd}</span>
                <button className="bg-red-500 text-white rounded px-2 py-1" onClick={removerProduto}>-</button>
            </div>


        </div>
    )
}
