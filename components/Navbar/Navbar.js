import Image from 'next/image';
import styles from './Navbar.module.scss';
import Menu from "../Menu/Menu";

export default function Navbar() {
  return (
    <nav className={`${styles.Navbar} navbar navbar-expand-lg sticky-top navbar-light`}>
      <div className="container-fluid">
        <span className={styles.logoDesktop}>
          <Image src="/logo.svg" width="120" height="40" alt="Propel Logo"/>
        </span>
        <span className={styles.logoMobile}>
          <Image src="/logo_mobile.svg" width="44" height="44" alt="Propel Logo"/>
        </span>

        <Menu />
      </div>
    </nav>
  );
}
