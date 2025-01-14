import SectionAbout from '@/components/home/SectionAbout';
import SectionContact from '@/components/home/SectionContact';
import SectionHire from '@/components/home/SectionHire';
import SectionHome from '@/components/home/SectionHome';
import SectionResume from '@/components/home/SectionResume';
import SectionTech from '@/components/home/SectionTech';
import SectionPortfolio from '@/components/home/SectionPortfolio';
import SectionSkills from '@/components/home/SectionSkills';
import SectionLink from '@/components/home/SectionLink';

export default function Home() {
  return (
    <div className="a">
      <SectionHome />
      <SectionAbout />
      <SectionSkills />
      <SectionPortfolio />
      <SectionHire />
      <SectionResume />
      <SectionTech />
      <SectionContact />
      <SectionLink />
    </div>
  );
}

