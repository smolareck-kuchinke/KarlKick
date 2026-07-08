import SectionHeader from '../SectionHeader/SectionHeader.jsx'
import LeaderboardRow from '../LeaderboardRow/LeaderboardRow.jsx'
import styles from './LeaderboardPreview.module.css'

function LeaderboardPreview({ entries, caption = 'Top 3' }) {
  return (
    <section>
      <SectionHeader title="Leaderboard" caption={caption} />
      <div className={styles.list}>
        {entries.map((entry) => (
          <LeaderboardRow key={entry.rank} entry={entry} />
        ))}
      </div>
    </section>
  )
}

export default LeaderboardPreview
