import '../styles/globals.scss';
import { RecoilRoot, useRecoilState } from 'recoil';
import { useRouter } from 'next/router';




function MyApp({ Component, pageProps }) {


  return (

    <RecoilRoot>
      <div data-scroll-container className=" big items-center bg-black justify-center flex w-full h-full overflow-hidden">
        <Component {...pageProps}/>
      </div>
      </RecoilRoot>
  )
}

export default MyApp;
