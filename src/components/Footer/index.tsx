import styles from './Footer.module.scss';
import Logo from '@assets/logo.svg?react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
}
