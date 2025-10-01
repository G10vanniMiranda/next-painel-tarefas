"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";

export default function Tarefa5() {
    return (
        <div>
            <h1>Tarefa 5</h1>

            <Accordion type="single" collapsible className="w-64">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="flex flex-col gap-3">
                        <Image src="https://m.media-amazon.com/images/I/71yPeAoEWoL._AC_SX679_.jpg" alt="PS5" width={300} height={300} />
                        <p>
                            <span>PlayStation®5 Slim Digital </span>
                            <span>R$. 4999,00</span>
                        </p>
                    </AccordionTrigger>
                    <AccordionContent className="w-64">
                        <div>
                            Sobre este item
                            PlayStation 5 Aproveite o carregamento extremamente rápido com o SSD de altíssima velocidade, uma imersão mais profunda com suporte a resposta tátil, gatilhos adaptáveis e áudio em 3D2, além de uma geração inédita de jogos incríveis para PlayStation. O PS5 Edição Digital é uma versão totalmente digital do console PS5 sem unidade de disco. Entre em sua conta da PlayStationNetwork e acesse a PlayStationStore para comprar e baixar jogos.
                            Na velocidade da luz domine o poder de uma CPU e GPU personalizadas e o SSD com E/S integradas que redefinem as regras do que o console PlayStation pode fazer.
                            Jogos impressionantes maravilhe-se com os gráficos incríveis e experimente os recursos do novo PS5. Jogue o catálogo de jogos compatíveis com o PS4.
                            Imersão de tirar o fôlego Descubra uma experiência de jogos mais profunda com compatibilidade com feedback tátil, gatilhos adaptáveis e tecnologia de áudio em 3D2.
                            1TB de armazenamento Tenha seus jogos favoritos prontos e esperando para você começar a jogar com 1TB de armazenamento SSD integrado.3
                            SSD extremamente rápido Aproveite mais horas jogando com uma inicialização quase instantânea dos jogos de PS5 instalados.
                            Inclui ASTRO’S Playroom Explore quatro mundos, cada um apresentando uma gameplay inovadora usando os recursos versáteis do controle sem fio DualSense, neste jogo incluído para todos os usuários do console PS5.
                            Retrocompatibilidade e Game Boost O console PS5 pode reproduzir mais de 4.000 jogos do PS4. Com o recurso Game Boost, você pode aproveitar as taxas de quadros mais rápidas e suaves em alguns dos melhores jogos do console PS4.
                            Relatar um problema com este p
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
