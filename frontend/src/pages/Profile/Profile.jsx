import PageShell from '../../components/PageShell/PageShell.jsx'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader.jsx'
import StatTile from '../../components/StatTile/StatTile.jsx'
import ProfileActions from '../../components/ProfileActions/ProfileActions.jsx'
import { userProfile } from '../../data/dummyData.js'
import styles from './Profile.module.css'

function Profile() {
  const { points, ranking, totalPredictions, correctPredictions } = userProfile

  return (
    <PageShell activeKey="profile">
      <ProfileHeader profile={userProfile} />

      <div className={styles.statsGrid}>
        <StatTile label="Current Points" value={points.toLocaleString()} />
        <StatTile label="Current Ranking" value={`#${ranking}`} />
        <StatTile label="Total Predictions" value={totalPredictions} />
        <StatTile label="Correct Predictions" value={correctPredictions} />
      </div>

      <ProfileActions />
    </PageShell>
  )
}

export default Profile
