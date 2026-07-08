import PageShell from '../../components/PageShell/PageShell.jsx'
import LeagueCard from '../../components/LeagueCard/LeagueCard.jsx'
import FriendsList from '../../components/FriendsList/FriendsList.jsx'
import { currentLeague, friendsList } from '../../data/dummyData.js'

function Friends() {
  return (
    <PageShell activeKey="friends">
      <LeagueCard league={currentLeague} />
      <FriendsList friends={friendsList} />
    </PageShell>
  )
}

export default Friends
