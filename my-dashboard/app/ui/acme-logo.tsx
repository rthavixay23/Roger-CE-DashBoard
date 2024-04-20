import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row justify-content center align-items center text-white `}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]  " />
      <p className="text-[30px]  ">Currency Exchange Dashboard </p>
      
       
      
    </div>
  );
}
