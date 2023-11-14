// Component Cards.
import IntroCard from '@/components/IntroCard/IntroCard';
import LocationCard from '@/components/LocationCard/LocationCard';
import CurrentRoleCard from '@/components/CurrentRoleCard/CurrentRoleCard';
import DailyStackCard from '@/components/DailyStackCard/DailyStackCard';
import ExperienceCard from '@/components/ExperienceCard/ExperienceCard';
import LatestPostCard from '@/components/LatestPostCard/LatestPostCard';
import ResumeCard from '@/components/ResumeCard/ResumeCard';
import SocialCards from '@/components/SocialCards/SocialCards';
import MiscCard from '@/components/MiscCard/MiscCard';

// Styles.
import styles from './page.module.css';

// Home Page.
export default function Home() {
  return (
    <main className={styles.main}>
      <IntroCard />
      <CurrentRoleCard />
      <LocationCard />
      <DailyStackCard />
      <SocialCards />
      <ExperienceCard />
      <LatestPostCard />
      <ResumeCard />
      <MiscCard />
    </main>
  );
}
