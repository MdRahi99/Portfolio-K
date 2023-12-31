import Banner from '@/app/components/Banner';
import Contact from '@/app/contact/page';
import Projects from '@/app/projects/page';
import Process from '@/app/process/page';
import Expertise from '@/app/expertise/page';

export default function Home() {
  return (
    <div className='divide-y-2'>
      <Banner />
      <Projects />
      <Process />
      <Expertise />
      <Contact />
    </div>
  )
}
