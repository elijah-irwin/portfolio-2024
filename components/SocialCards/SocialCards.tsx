import styles from './SocialCards.module.css';

export default function SocialCards() {
  return (
    <div className={styles.cards}>
      <div className='card'>GitHub</div>
      <div className='card'>LinkedIn</div>
      <div className='card'>Instagram</div>
      <div className='card'>Email</div>
    </div>
  );
}
