import "./globals.css";
import { Roboto, Poppins } from "next/font/google";
import Header from "../Components/Header/Header";
import Head from "next/head";
import Footer from "../Components/Footer/Footer";
import CustomCursor from "../Components/CustomeCursor/CustomCursor";
import LayoutContextProvider from "../context/LayoutContext";
import LoadingLineReveal from "../Components/Loading/LoadingLineReveal";
import FloatingContactButtons from "../Components/Buttons/FloatingContactButtons";
import PageScrollUpButton from '../Components/Buttons/ScrollUp/PageScrollUpButton';

const raleway = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata = {
  title: "CEA Church",
  description: "Christian Evangelical Assembly - Vision for Harvest",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#1a1a1a'
      }
    ]
  },
  manifest: '/site.webmanifest',
  themeColor: '#1a1a1a',
  backgroundColor: '#1a1a1a'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1a1a1a" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
      </head>
      <body className={raleway.className}>
        {/* hi */}
        <LayoutContextProvider>
          <LoadingLineReveal delay={0.5} >
            <Header />
            <CustomCursor />
            {children}
            <FloatingContactButtons />
            <PageScrollUpButton />
            <Footer />

          </LoadingLineReveal>
        </LayoutContextProvider>
      </body>
    </html>
  );
}
