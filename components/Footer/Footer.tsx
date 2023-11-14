import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div>Designed by Mak</div>
        <div className={styles.dot} />
        <div>Also developed by Mak</div>
      </div>
      <div>
        <button>Star on Github</button>
      </div>
    </div>
  );
}
