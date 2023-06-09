import { type AppType } from "next/app";
import Head from "next/head";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
      <PWAMeta />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

const PWAMeta = () => {
  return (
    <Head>
      <meta name="application-name" content="MuseSync" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="MuseSync" />
      <meta
        name="viewport"
        content="viewport-fit=cover, user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"
      ></meta>
      <meta name="description" content="MuseSync PWA" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />

      {/* Prettier is making all this shit so ugly :( */}
      <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/icons/touch-icon-ipad.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/touch-icon-iphone-retina.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="/icons/touch-icon-ipad-retina.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      {/* <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=optional"
      /> */}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://musesync.tylerjay.dev" />
      <meta name="twitter:title" content="MuseSync" />
      <meta name="twitter:description" content="MuseSync PWA" />
      <meta
        name="twitter:image"
        content="https://musesync.tylerjay.dev/icons/android-chrome-192x192.png"
      />
      <meta name="twitter:creator" content="@TylerJayKeys" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="MuseSync" />
      <meta property="og:description" content="MuseSync PWA" />
      <meta property="og:site_name" content="MuseSync" />
      <meta property="og:url" content="https://musesync.tylerjay.dev" />
      <meta
        property="og:image"
        content="https://musesync.tylerjay.dev/icons/apple-touch-icon.png"
      />
    </Head>
  );
};

export default api.withTRPC(MyApp);
