import styles from './ProfileActions.module.css'

// Both buttons are intentionally non-functional for now — no onClick handlers.
function ProfileActions() {
  return (
    <div className={styles.actions}>
      <button type="button" className={styles.editButton}>
        Edit Profile
      </button>
      <button type="button" className={styles.logoutButton}>
        Logout
      </button>
    </div>
  )
}

export default ProfileActions
