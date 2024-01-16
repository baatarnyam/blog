import "@/styles/globals.css";
import {
  Work_Sans,
  Source_Serif_4,
  Plus_Jakarta_Sans,
} from "@next/font/google";
import Header from "./components/Header";

const WorkSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const asd = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});
const PlusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-Jakarta",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${WorkSans.variable} ${asd.variable} ${PlusJakarta.variable}`}
    >
      <Header>
        <Component {...pageProps} />;
      </Header>
    </main>
  );
}
