import PageShell from '../../components/PageShell/PageShell.jsx'
import SectionHeader from '../../components/SectionHeader/SectionHeader.jsx'
import PredictionCard from '../../components/PredictionCard/PredictionCard.jsx'
import { predictionMatches } from '../../data/dummyData.js'
import styles from './Predictions.module.css'

function Predictions() {
  return (
    <PageShell activeKey="predictions">
      <SectionHeader title="Predictions" caption={`${predictionMatches.length} Matches`} />
      <div className={styles.list}>
        {predictionMatches.map((match) => (
          <PredictionCard key={match.id} match={match} />
        ))}
      </div>
    </PageShell>
  )
}

export default Predictions
