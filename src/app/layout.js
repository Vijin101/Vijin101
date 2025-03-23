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
  title: "Church App",
  description: "Church App Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
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
