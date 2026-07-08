import PageShell from '../../components/PageShell/PageShell.jsx'
import PlaceholderPage from '../../components/PlaceholderPage/PlaceholderPage.jsx'

function Leaderboard() {
  return (
    <PageShell activeKey="leaderboard">
      <PlaceholderPage
        title="Leaderboard"
        description="See how you rank against other predictors soon."
      />
    </PageShell>
  )
}

export default Leaderboard
