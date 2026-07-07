import { HomeIcon, PredictIcon, LeaderboardIcon, FriendsIcon, ProfileIcon } from '../icons/Icons.jsx'
import styles from './BottomNav.module.css'

const NAV_ITEMS = [
  { key: 'dashboard', label: 'Dashboard', Icon: HomeIcon },
  { key: 'predictions', label: 'Predictions', Icon: PredictIcon },
  { key: 'leaderboard', label: 'Leaderboard', Icon: LeaderboardIcon },
  { key: 'friends', label: 'Friends', Icon: FriendsIcon },
  { key: 'profile', label: 'Profile', Icon: ProfileIcon },
]

function BottomNav({ activeKey }) {
  return (
    <nav className={styles.nav}>
      {NAV_ITEMS.map(({ key, label, Icon }) => {
        const isActive = key === activeKey
        return (
          <button
            key={key}
            type="button"
            className={isActive ? styles.itemActive : styles.item}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon width={20} height={20} />
            <span className={styles.label}>{label}</span>
          </button>
        )
      })}
    </nav>
  )
}

export default BottomNav
