import { useState } from 'react'
import styles from './PredictionCard.module.css'

// Match card with two score inputs and a save action. Predictions only
// ever live in this component's local state — nothing is persisted or
// sent to a backend.
function PredictionCard({ match }) {
  const { competition, status, homeTeam, homeAbbr, awayTeam, awayAbbr } = match
  const [homeScore, setHomeScore] = useState('')
  const [awayScore, setAwayScore] = useState('')
  const [savedPrediction, setSavedPrediction] = useState(null)

  function handleSave() {
    setSavedPrediction({
      home: homeScore === '' ? 0 : Number(homeScore),
      away: awayScore === '' ? 0 : Number(awayScore),
    })
  }

  return (
    <article className={styles.card}>
      <div className={styles.tagRow}>
        <span className={styles.competitionTag}>{competition}</span>
        <span className={styles.statusTag}>{status}</span>
      </div>

      <div className={styles.teamsRow}>
        <div className={styles.team}>
          <span className={styles.badge}>{homeAbbr}</span>
          <span className={styles.teamName}>{homeTeam}</span>
        </div>

        <div className={styles.scoreInputs}>
          <input
            type="number"
            min="0"
            inputMode="numeric"
            className={styles.scoreInput}
            value={homeScore}
            onChange={(event) => setHomeScore(event.target.value)}
            aria-label={`${homeTeam} predicted score`}
          />
          <span className={styles.scoreDivider}>-</span>
          <input
            type="number"
            min="0"
            inputMode="numeric"
            className={styles.scoreInput}
            value={awayScore}
            onChange={(event) => setAwayScore(event.target.value)}
            aria-label={`${awayTeam} predicted score`}
          />
        </div>

        <div className={styles.team}>
          <span className={styles.badge}>{awayAbbr}</span>
          <span className={styles.teamName}>{awayTeam}</span>
        </div>
      </div>

      <button type="button" className={styles.saveButton} onClick={handleSave}>
        Save Prediction
      </button>

      {savedPrediction && (
        <p className={styles.successMessage}>
          Saved: {homeAbbr} {savedPrediction.home} - {savedPrediction.away} {awayAbbr}
        </p>
      )}
    </article>
  )
}

export default PredictionCard
