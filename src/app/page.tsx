import SectionHome from '@/components/home/SectionHome';
import SectionAbout from '@/components/home/SectionAbout';
import SectionSkills from '@/components/home/SectionSkills';
import SectionPortfolio from '@/components/home/SectionPortfolio';
import SectionHire from '@/components/home/SectionHire';
import SectionResume from '@/components/home/SectionResume';
export default function Home() {
  return (
    <div className="a">
      <SectionHome />
      <SectionAbout />
      <SectionSkills />
      <SectionPortfolio />
      <SectionHire />
      <SectionResume />
    </div>
  );
}

