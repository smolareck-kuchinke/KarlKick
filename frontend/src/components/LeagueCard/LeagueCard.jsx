import styles from './LeagueCard.module.css'

// Shows the current private prediction league and its invite code.
// The "Invite Friend" button is intentionally non-functional for now.
function LeagueCard({ league }) {
  const { name, inviteCode } = league

  return (
    <section className={styles.card}>
      <span className={styles.label}>Private League</span>
      <span className={styles.name}>{name}</span>

      <div className={styles.codeRow}>
        <span className={styles.codeLabel}>Invite Code</span>
        <span className={styles.code}>{inviteCode}</span>
      </div>

      <button type="button" className={styles.inviteButton}>
        Invite Friend
      </button>
    </section>
  )
}

export default LeagueCard
