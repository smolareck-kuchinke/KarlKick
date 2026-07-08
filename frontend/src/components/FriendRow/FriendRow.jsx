import styles from './FriendRow.module.css'

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function FriendRow({ friend }) {
  const { name, club, isOnline } = friend

  return (
    <div className={styles.row}>
      <span className={styles.avatarWrapper}>
        <span className={styles.avatar}>{initials(name)}</span>
        <span className={isOnline ? styles.statusDotOnline : styles.statusDotOffline} />
      </span>

      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.club}>{club}</span>
      </div>

      <span className={isOnline ? styles.statusLabelOnline : styles.statusLabelOffline}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  )
}

export default FriendRow
