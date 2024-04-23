//Create Routes Here

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    //These are Tailwind Classes
    <main className="flex min-h-screen flex-col p-9 ">
      <div className="shrink-0 items-end rounded-lg bg-blue-500">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col flex items-center justify-center gap-6 rounded-lg bg-gray-50 md:w-2/5 md:px-20">
        <Image
          src="/RGS-new-bird.png"
          width={200}
          height={200}
          className="flex flex-row justify-content right align-items center"
          alt="Screenshots of the dashboard project showing desktop version"
          />  
          <div className={` text-xl text-gray-800 md:text-3xl md:leading-normal text-center`}>
          <div className="flex flex-wrap">
  <p><strong className="mr-2">Roger's</strong><br/>Web App Here.</p>
</div>
           

            {/* <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel. */}

            {/**Different Method of Incorporating Styles (CSS or Tailwind) */}

            {/* <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"/>

            <div className={styles.shape} />

            <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"/> */}
          </div>
          <Link
            href="/dashboard"
            className="flex items-center gap-10 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            Log in <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
        src="/roger-ce-logo.png"
        width={750}
        height={500}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
        />  


        </div>
      </div>
    </main>
  );
}
