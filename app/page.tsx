import Chip from '@/components/Chip/Chip';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.card} ${styles.intro}`}>
        <Chip text='Intro' icon='👋' />
      </div>
      <div className={`${styles.card} ${styles.currentRole}`}>
        <Chip text='Current Role' icon='💼' />
      </div>
      <div className={`${styles.card} ${styles.location}`}>
        <Chip text='Location' icon='📍' />
      </div>
      <div className={`${styles.card} ${styles.stack}`}>
        <Chip text='Daily Stack' icon='💻' />
      </div>
      <div className={styles.four}>
        <div className={styles.card}>GitHub</div>
        <div className={styles.card}>LinkedIn</div>
        <div className={styles.card}>Instagram</div>
        <div className={styles.card}>Email</div>
      </div>
      <div className={`${styles.card} ${styles.experience}`}>
        <Chip text='Experience' icon='🚧' />
      </div>
      <div className={`${styles.card} ${styles.post}`}>
        <Chip text='Latest Post' icon='✒️' />
      </div>
      <div className={`${styles.card}`}>
        <Chip text='Resume' icon='📃' />
      </div>
      <div className={`${styles.card}`}>
        <Chip text='pets' icon='🐶' />
      </div>
    </main>
  );
}
