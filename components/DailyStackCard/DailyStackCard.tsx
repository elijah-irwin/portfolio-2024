import Chip from '../Chip/Chip';
import styles from './DailyStackCard.module.css';

export default function DailyStackCard() {
  return (
    <div className={`card ${styles.stack}`}>
      <Chip text='Daily Stack' icon='💻' />
    </div>
  );
}
