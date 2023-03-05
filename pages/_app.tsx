import { AuthProvider, UiProvider } from "@/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["600", "400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UiProvider>
        <main className={garamond.className}>
          <Component {...pageProps} />
        </main>
      </UiProvider>
    </AuthProvider>
  );
}
