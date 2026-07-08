import PageShell from '../../components/PageShell/PageShell.jsx'
import PlaceholderPage from '../../components/PlaceholderPage/PlaceholderPage.jsx'

function Profile() {
  return (
    <PageShell activeKey="profile">
      <PlaceholderPage
        title="Profile"
        description="View and manage your KarlKick account soon."
      />
    </PageShell>
  )
}

export default Profile
