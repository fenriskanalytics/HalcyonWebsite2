// pages/_app.tsx
import type { AppProps } from 'next/app';
import { PlasmicRootProvider } from '@plasmicapp/react-web';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider>
      {/* Load Mariana scripts AFTER hydration */}
      <Script id="mariana-tek-loader" strategy="afterInteractive">
        {`
          (function () {
            var TENANT_NAME = 'halcyonstudio';
            var d = document;
            var sA = ['polyfills', 'js'];
            for (var i = 0; i < sA.length; i++) {
              var s = d.createElement('script');
              s.src = 'https://' + TENANT_NAME + '.marianaiframes.com/' + sA[i];
              s.setAttribute('data-timestamp', +new Date());
              (d.head || d.body).appendChild(s);
            }
          })();
        `}
      </Script>

      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
