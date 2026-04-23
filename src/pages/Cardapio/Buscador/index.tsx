import React, { type RefObject, memo, useEffect, useMemo, useRef } from 'react';
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

function Buscador({ busca, setBusca }: Props) {
  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    if (inputRef) {
      inputRef?.current?.focus();
    }
  }, [inputRef]);

  const elemento = useMemo(() => <CgSearch size={20} color="#4C4D5E" />, []);

  return (
    <div className={styles.buscador}>
      <input
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
        placeholder="Buscar"
        ref={inputRef}
      />
      {elemento}
    </div>
  );
}

export default memo(Buscador);
