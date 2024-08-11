import Banner from '@/app/components/Banner';
import Contact from '@/app/contact/page';
import Projects from '@/app/projects/page';
import Process from '@/app/process/page';
import Expertise from '@/app/expertise/page';
import { getResume } from './hooks/getResume';
import { getProfile } from './hooks/getProfile';

export default async function Home() {
  const profile = await getProfile();
  const resume = await getResume();
  return (
    <div className='flex flex-col gap-12'>
      <Banner resume={resume} profile={profile} />
      <Projects />
      <Process />
      <Expertise />
      <Contact />
    </div>
  )
}
