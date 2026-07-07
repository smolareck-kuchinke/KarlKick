import Header from '../../components/Header/Header.jsx'
import WelcomeBanner from '../../components/WelcomeBanner/WelcomeBanner.jsx'
import MatchdayCard from '../../components/MatchdayCard/MatchdayCard.jsx'
import SectionHeader from '../../components/SectionHeader/SectionHeader.jsx'
import MatchCard from '../../components/MatchCard/MatchCard.jsx'
import LeaderboardPreview from '../../components/LeaderboardPreview/LeaderboardPreview.jsx'
import BottomNav from '../../components/BottomNav/BottomNav.jsx'
import { currentUser, currentMatchday, upcomingMatches, leaderboardPreview } from '../../data/dummyData.js'
import styles from './Dashboard.module.css'

function Dashboard() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.content}>
        <WelcomeBanner name={currentUser.name} subtitle="Ready to dominate today's fixtures?" />

        <MatchdayCard matchday={currentMatchday} />

        <section>
          <SectionHeader title="Next Matches" />
          <div className={styles.matchList}>
            {upcomingMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </section>

        <LeaderboardPreview entries={leaderboardPreview} />
      </main>

      <BottomNav activeKey="dashboard" />
    </div>
  )
}

export default Dashboard
