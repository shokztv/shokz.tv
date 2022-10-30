import PlausibleProvider from "next-plausible";
import type { AppProps } from "next/app";
import "../styles/style.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="dota2.shokz.tv">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}
