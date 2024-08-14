import styles from './landing.module.scss'

import LandingBackdrop from '@/components/Landing/Backdrop/Backdrop';
import Grunge from '@/components/Landing/Backdrop/Grunge';
import LandingPage from '@/components/Landing/LandingPage/LandingPage';

export default function Home() {
  return (
    <main className={styles.page}>
      <LandingBackdrop />
      <div className={styles.overlay}>
        <Grunge />
        {/* <h1 className={styles.mainTitle}>Oasis 2024</h1> */}
        <LandingPage />
      </div>
    </main>
  );
}