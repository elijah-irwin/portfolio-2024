import Image from 'next/image';
import Chip from '../Chip/Chip';
import styles from './CurrentRoleCard.module.css';
import logo from '@/assets/td-logo-smol.png';

export default function CurrentRoleCard() {
  return (
    <div className={`card ${styles.currentRole}`}>
      <Chip text='Current Role' icon='💼' />
      <div className={styles.bottom}>
        <div className={styles.text}>
          <p>Lead Software Engineer</p>
          <p className={styles.location}>@ TD Securities</p>
        </div>
        <Image
          src={logo}
          alt='TD Bank Logo'
          width={45}
          height={45}
          quality={100}
          className={styles.image}
        />
      </div>
    </div>
  );
}
