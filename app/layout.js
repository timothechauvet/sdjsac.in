import { Epilogue, Inter } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "ಸುಮೇರು ದಿಗಂಬರ ಜೈನ ಸಭಾ | SUMERU DIGAMBARA JAIN SABHA",
  description:
    "Sumeru Digambara Jain Sabha, Adagalale-Chandolli — An 11-foot-tall statue of Bhagwan Shree 1008 Mallinath Tirthankara is currently under construction. Donate and support the temple project.",
  keywords: [
    "Sumeru Jain Sabha",
    "Digambara Jain",
    "Adagalale",
    "Chandolli",
    "Mallinath Tirthankara",
    "Jain Temple Fundraiser",
    "Karnataka",
  ],
  openGraph: {
    title: "ಸುಮೇರು ದಿಗಂಬರ ಜೈನ ಸಭಾ | SUMERU DIGAMBARA JAIN SABHA",
    description:
      "Support the construction of the 11ft Mallinath Tirthankara statue at Adagalale-Chandolli.",
    url: "https://sdjsac.in",
    siteName: "sdjsac.in",
    locale: "kn_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="kn" suppressHydrationWarning className={`${epilogue.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}

