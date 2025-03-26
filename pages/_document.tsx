// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <noscript>
          Please enable JavaScript to view the{' '}
          <a href="https://marianatek.com/?ref_noscript" rel="nofollow">
            Web Integrations by Mariana Tek.
          </a>
        </noscript>
      </body>
    </Html>
  );
}
