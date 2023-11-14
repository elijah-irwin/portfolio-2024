import Chip from '../Chip/Chip';
import styles from './LatestPostCard.module.css';

export default function LatestPostCard() {
  return (
    <div className={`card ${styles.post}`}>
      <Chip text='Latest Post' icon='✒️' />
    </div>
  );
}
