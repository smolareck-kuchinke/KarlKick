import styles from './ProfileHeader.module.css'

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function ProfileHeader({ profile }) {
  const { fullName, favoriteClub, memberSince } = profile

  return (
    <section className={styles.header}>
      <span className={styles.avatar}>{initials(fullName)}</span>
      <h1 className={styles.name}>{fullName}</h1>
      <span className={styles.club}>{favoriteClub}</span>
      <span className={styles.memberSince}>Member since {memberSince}</span>
    </section>
  )
}

export default ProfileHeader
