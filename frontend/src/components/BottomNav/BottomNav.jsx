import { Link } from 'react-router-dom'
import { HomeIcon, PredictIcon, LeaderboardIcon, FriendsIcon, ProfileIcon } from '../icons/Icons.jsx'
import styles from './BottomNav.module.css'

const NAV_ITEMS = [
  { key: 'dashboard', label: 'Dashboard', Icon: HomeIcon, path: '/' },
  { key: 'predictions', label: 'Predictions', Icon: PredictIcon, path: '/predictions' },
  { key: 'leaderboard', label: 'Leaderboard', Icon: LeaderboardIcon, path: '/leaderboard' },
  { key: 'friends', label: 'Friends', Icon: FriendsIcon, path: '/friends' },
  { key: 'profile', label: 'Profile', Icon: ProfileIcon, path: '/profile' },
]

function BottomNav({ activeKey }) {
  return (
    <nav className={styles.nav}>
      {NAV_ITEMS.map(({ key, label, Icon, path }) => {
        const isActive = key === activeKey
        return (
          <Link
            key={key}
            to={path}
            className={isActive ? styles.itemActive : styles.item}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon width={20} height={20} />
            <span className={styles.label}>{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export default BottomNav
