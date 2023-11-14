import { ReactNode } from 'react';

import styles from './Chip.module.css';

interface props {
  text: string;
  icon: ReactNode;
}

export default function Chip({ text, icon }: props) {
  return (
    <div className={styles.chip}>
      <div className={styles.text}>{text}</div>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
}
