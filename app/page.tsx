import Chip from '@/components/Chip/Chip';
import styles from './page.module.css';
import IntroCard from '@/components/IntroCard/IntroCard';
import LocationCard from '@/components/LocationCard/LocationCard';
import CurrentRoleCard from '@/components/CurrentRoleCard/CurrentRoleCard';

export default function Home() {
  return (
    <main className={styles.main}>
      <IntroCard />
      <CurrentRoleCard />
      <LocationCard />
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
