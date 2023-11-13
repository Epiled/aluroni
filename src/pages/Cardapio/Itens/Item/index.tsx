import styles from "./Item.module.scss";
import logo from "assets/logo.svg"
import itens from "../itens.json";
import classNames from "classnames";
import { useEffect, useState } from "react";

type Props = typeof itens[0]

export default function Item(props: Props) {
    const { title, description, category, size, serving, price, photo } = props;

    const [imageDimesions, setImageDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const imagem = new Image();
        imagem.src = photo;

        imagem.onload = () => {
            // Quando a imagem é carregada, você pode acessar as dimensões
            const larguraDaImagem = imagem.width;
            const alturaDaImagem = imagem.height;

            // Atualize o estado com as dimensões
            setImageDimensions({ width: larguraDaImagem, height: alturaDaImagem });
        };
    }, [photo]);

    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={photo} alt={title} width={imageDimesions.width} height={imageDimesions.height} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2> {title} </h2>
                    <p> {description} </p>
                </div>
                <div className={styles.item__tags}>
                    <div
                        className={classNames(
                            styles.item__tipo,
                            styles[`item__tipo__${category.label.toLowerCase()}`]
                        )}>
                        {category.label}
                    </div>
                    <div className={styles.item__porcao}>
                        {size}g
                    </div>
                    <div className={styles.item__qtdpessoas}>
                        {serving} pessoa{serving === 1 ? "" : "s"}
                    </div>
                    <div className={styles.item__valor}>
                        R$: {price.toFixed(2).replace(".", ",")}
                    </div>
                </div>
            </div>
        </div>
    )
}