import Chip from '../Chip/Chip';
import styles from './MiscCard.module.css';

export default function MiscCard() {
  return (
    <div className={`card`}>
      <Chip text='pets' icon='🐶' />
    </div>
  );
}
