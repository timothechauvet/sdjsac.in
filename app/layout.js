import "./globals.css";

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
    <html lang="kn" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
