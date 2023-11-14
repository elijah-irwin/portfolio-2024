import Chip from '../Chip/Chip';
import styles from './ResumeCard.module.css';

export default function ResumeCard() {
  return (
    <div className={`card`}>
      <Chip text='Resume' icon='📃' />
    </div>
  );
}
