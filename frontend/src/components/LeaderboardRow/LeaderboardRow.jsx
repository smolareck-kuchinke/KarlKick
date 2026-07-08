import { TrendUpIcon, TrendDownIcon, TrendFlatIcon } from '../icons/Icons.jsx'
import styles from './LeaderboardRow.module.css'

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function TrendIndicator({ trend }) {
  if (trend === 'up') {
    return (
      <span className={`${styles.trend} ${styles.trendUp}`} aria-label="Trending up">
        <TrendUpIcon width={16} height={16} />
      </span>
    )
  }
  if (trend === 'down') {
    return (
      <span className={`${styles.trend} ${styles.trendDown}`} aria-label="Trending down">
        <TrendDownIcon width={16} height={16} />
      </span>
    )
  }
  return (
    <span className={`${styles.trend} ${styles.trendFlat}`} aria-label="No change">
      <TrendFlatIcon width={16} height={16} />
    </span>
  )
}

// `trend` and `isCurrentUser` are optional. The Dashboard's Top 3 preview
// doesn't pass them, so that usage keeps rendering exactly as before.
function LeaderboardRow({ entry }) {
  const { rank, name, points, trend, isCurrentUser } = entry
  const isTopRank = rank === 1

  return (
    <div className={isCurrentUser ? `${styles.row} ${styles.rowHighlight}` : styles.row}>
      <span className={isTopRank ? styles.rankGold : styles.rank}>#{rank}</span>
      <span className={styles.avatar}>{initials(name)}</span>
      <span className={styles.name}>
        {name}
        {isCurrentUser && <span className={styles.youTag}>You</span>}
      </span>
      <span className={styles.points}>{points.toLocaleString()} pts</span>
      {trend && <TrendIndicator trend={trend} />}
    </div>
  )
}

export default LeaderboardRow
