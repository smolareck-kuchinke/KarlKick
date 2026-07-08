import SectionHeader from '../SectionHeader/SectionHeader.jsx'
import FriendRow from '../FriendRow/FriendRow.jsx'
import styles from './FriendsList.module.css'

function FriendsList({ friends }) {
  return (
    <section>
      <SectionHeader title="Friends" caption={`${friends.length} Friends`} />
      <div className={styles.list}>
        {friends.map((friend) => (
          <FriendRow key={friend.id} friend={friend} />
        ))}
      </div>
    </section>
  )
}

export default FriendsList
