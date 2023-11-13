import Buscador from "./Buscador";
import Filtros from "./Filtros";

import styles from "./Cardapio.module.scss";
import { useState } from "react";

import { ReactComponent as Logo } from "assets/logo.svg";
import Ordenador, { OpcoesOrdenador } from "./Ordenador";
import Itens from "./Itens";

export default function Cardapio() {
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState<OpcoesOrdenador>("");
    const [menu, setMenu] = useState(false);
    return (
        <main>
            <nav className={styles.menu}>
                <Logo className="Teste" width="152" height="64" title="Logo Aluroni" />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa dos códigos e massas!
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>
                    Cardápio
                </h3>
                <Buscador busca={busca} setBusca={setBusca} />
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro} />
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                </div>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
            </section>
        </main>
    )
}