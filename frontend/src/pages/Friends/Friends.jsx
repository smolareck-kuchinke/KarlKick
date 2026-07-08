import PageShell from '../../components/PageShell/PageShell.jsx'
import PlaceholderPage from '../../components/PlaceholderPage/PlaceholderPage.jsx'

function Friends() {
  return (
    <PageShell activeKey="friends">
      <PlaceholderPage
        title="Friends"
        description="Connect with friends and compare predictions soon."
      />
    </PageShell>
  )
}

export default Friends
