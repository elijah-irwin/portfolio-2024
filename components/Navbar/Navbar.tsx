import Image from 'next/image';
import headshot from '@/assets/clean-profile.png';
import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Image
          width={50}
          height={50}
          quality={100}
          src={headshot}
          alt='headshot of Mak Irwin'
          className={styles.image}
        />
        <div className={styles.text}>
          <div className={styles.name}>Mak Irwin</div>
          <div className={styles.job}>Software Engineer</div>
        </div>
      </div>

      <div className={styles.links}>
        <Link href='/'>About</Link>
        <Link href='/blog'>Blog</Link>
      </div>
    </nav>
  );
}
