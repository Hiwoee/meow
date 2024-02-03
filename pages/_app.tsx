  import type { AppProps } from "next/app";
  import { useEffect } from 'react';
  import { Analytics } from '@vercel/analytics/react';

  import "../styles/globals.css";

  import Head from "next/head";
  import Script from "next/script";

  import "@fontsource/jost/400.css";
  import "@fontsource/jost/500.css";
  import "@fontsource/jost/600.css";
  import "@fontsource/jost/700.css";
  import "@fontsource/sen/400.css";
  import "@fontsource/sen/700.css";

  function MyApp({ Component, pageProps }: AppProps) {
    // Umami Analytics
    useEffect(() => {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://analytics.eu.umami.is/script.js";
      script.dataset.websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID; // Mengambil nilai dari variabel lingkungan
      document.head.appendChild(script);
    }, []);

    return (
      <>
       <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-JVJ7735WX9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JVJ7735WX9');
        `}
      </Script>

        <Analytics />

        <Head>
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>

        <Component {...pageProps} />
      </>
    );
  }

  export default MyApp;
