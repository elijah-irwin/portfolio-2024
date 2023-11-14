import Chip from '../Chip/Chip';
import styles from './ExperienceCard.module.css';

export default function ExperienceCard() {
  return (
    <div className={`card ${styles.experience}`}>
      <Chip text='Experience' icon='🚧' />
    </div>
  );
}
