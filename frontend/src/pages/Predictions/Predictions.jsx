import PageShell from '../../components/PageShell/PageShell.jsx'
import PlaceholderPage from '../../components/PlaceholderPage/PlaceholderPage.jsx'

function Predictions() {
  return (
    <PageShell activeKey="predictions">
      <PlaceholderPage
        title="Predictions"
        description="Submit your match score predictions here soon."
      />
    </PageShell>
  )
}

export default Predictions
