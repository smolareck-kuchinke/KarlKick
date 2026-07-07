import styles from './LeaderboardRow.module.css'

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function LeaderboardRow({ entry }) {
  const { rank, name, points } = entry
  const isTopRank = rank === 1

  return (
    <div className={styles.row}>
      <span className={isTopRank ? styles.rankGold : styles.rank}>#{rank}</span>
      <span className={styles.avatar}>{initials(name)}</span>
      <span className={styles.name}>{name}</span>
      <span className={styles.points}>{points.toLocaleString()} pts</span>
    </div>
  )
}

export default LeaderboardRow
