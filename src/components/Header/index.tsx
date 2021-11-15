import styles from './styles.module.scss'

import Link from 'next/link';

import { ActiveLink } from '../ActiveLink';


export function Header() {


  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
              <img src="/images/logo_flr.svg" alt="logo FLR"></img>               
        <nav>                    
            <ActiveLink activeClassName={styles.active} href="/Contabilidade"><a>Contabilidade</a></ActiveLink>

            <ActiveLink activeClassName={styles.active}  href="/Pericia"><a>Pericia</a></ActiveLink>

            <ActiveLink activeClassName={styles.active}href="/Obras"><a>Regularização Obras</a></ActiveLink>

            <ActiveLink activeClassName={styles.active}href="/Curso"><a >Curso / Mentoria</a></ActiveLink>

            <ActiveLink activeClassName={styles.active}href="/Downloads"><a>Downloads</a></ActiveLink>

            <ActiveLink activeClassName={styles.active}href="/Contato"><a>Contato</a></ActiveLink>

            <ActiveLink activeClassName={styles.active}href="/QuemSou"><a>Quem Sou</a></ActiveLink>
        </nav>
      </div>
    </header>
  );
}
