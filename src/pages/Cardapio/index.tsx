import Buscador from "./Buscador";
import styles from "./Cardapio.module.scss";
import { useState } from "react";

import { ReactComponent as Logo } from "assets/logo.svg";

export default function Cardapio() {
    const [busca, setBusca] = useState("");

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
            </section>
        </main>
    )
}