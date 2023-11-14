import Chip from '../Chip/Chip';
import styles from './LocationCard.module.css';

export default function LocationCard() {
  return (
    <div className={`card ${styles.location}`}>
      <Chip text='Location' icon='📍' />
    </div>
  );
}
