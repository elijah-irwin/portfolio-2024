import Chip from '../Chip/Chip';
import styles from './IntroCard.module.css';

export default function IntroCard() {
  return (
    <div className={`card ${styles.intro}`}>
      <Chip text='Intro' icon='👋' />
      <div className={styles.bottom}>
        <p>Hello, I’m Eli. </p>
        <p>A developer passionate about simplifying workflows.</p>
        <p>
          Currently developing tools to streamline the creation of new web apps.
        </p>
      </div>
    </div>
  );
}
