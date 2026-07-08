import Header from '../Header/Header.jsx'
import BottomNav from '../BottomNav/BottomNav.jsx'
import styles from './PageShell.module.css'

// Shared page frame (Header + content + BottomNav) used by every page
// except Dashboard, which already composes these itself.
function PageShell({ activeKey, children }) {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.content}>{children}</main>
      <BottomNav activeKey={activeKey} />
    </div>
  )
}

export default PageShell
