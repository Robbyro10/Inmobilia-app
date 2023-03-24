import { AuthProvider, UiProvider } from "@/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { EB_Garamond, Poppins, Roboto } from "next/font/google";

const customFont = Poppins({
  subsets: ["latin"],
  weight: [ "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UiProvider>
        <main className={customFont.className}>
          <Component {...pageProps} />
        </main>
      </UiProvider>
    </AuthProvider>
  );
}
