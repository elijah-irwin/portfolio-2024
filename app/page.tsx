import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.card} ${styles.intro}`}>Intro Card</div>
      <div className={`${styles.card} ${styles.currentRole}`}>
        Current Role Card
      </div>
      <div className={`${styles.card}`}>Location Card</div>
      <div className={`${styles.card} ${styles.stack}`}>Daily Stack</div>
      <div className={styles.four}>
        <div className={styles.card}>GitHub</div>
        <div className={styles.card}>LinkedIn</div>
        <div className={styles.card}>Instagram</div>
        <div className={styles.card}>Resume</div>
      </div>
      <div className={`${styles.card} ${styles.experience}`}>Experience</div>
      <div className={`${styles.card} ${styles.post}`}>Latest Post</div>
      <div className={`${styles.card}`}>Email</div>
      <div className={`${styles.card}`}>Photo</div>
    </main>
  );
}
