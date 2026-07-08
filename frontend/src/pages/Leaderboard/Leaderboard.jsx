import PageShell from '../../components/PageShell/PageShell.jsx'
import LeaderboardPreview from '../../components/LeaderboardPreview/LeaderboardPreview.jsx'
import { leaderboardTop10 } from '../../data/dummyData.js'

function Leaderboard() {
  return (
    <PageShell activeKey="leaderboard">
      <LeaderboardPreview entries={leaderboardTop10} caption="Top 10" />
    </PageShell>
  )
}

export default Leaderboard
