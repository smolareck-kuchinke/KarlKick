import { MenuIcon, BellIcon } from '../icons/Icons.jsx'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <button type="button" className={styles.iconButton} aria-label="Menu">
        <MenuIcon />
      </button>
      <span className={styles.logo}>KarlKick</span>
      <button type="button" className={styles.iconButton} aria-label="Notifications">
        <BellIcon />
      </button>
    </header>
  )
}

export default Header
