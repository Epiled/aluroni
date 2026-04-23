import load from './assets/load.svg';
import styles from './Carregando.module.scss';

export default function Carregando() {
  return (
    <div className={styles.carregando}>
      <div className={styles.carregando__container}>
        <img className={styles.carregando__imagem} src={load} alt="#" />
        <span className={styles.carregando__txt}>Carregando!</span>
      </div>
    </div>
  );
}
