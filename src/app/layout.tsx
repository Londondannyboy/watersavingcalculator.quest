import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Water Saving Calculator - Calculate How Much Water You Can Save",
  description: "Discover how much water and money you can save with our free water saving calculator. Get personalised tips to reduce your water consumption.",
  keywords: ["water saving calculator", "save water", "water consumption", "water bill savings", "reduce water usage"],
  openGraph: {
    title: "Water Saving Calculator - Calculate How Much Water You Can Save",
    description: "Discover how much water and money you can save with our free water saving calculator. Get personalised tips to reduce your water consumption.",
    url: "https://watersavingcalculator.quest",
    siteName: "Water Saving Calculator",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Saving Calculator - Calculate How Much Water You Can Save",
    description: "Discover how much water and money you can save with our free water saving calculator. Get personalised tips to reduce your water consumption.",
  },
  alternates: { canonical: "https://watersavingcalculator.quest" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Water Saving Calculator",
              url: "https://watersavingcalculator.quest",
              description: "Discover how much water and money you can save with our free water saving calculator. Get personalised tips to reduce your water consumption.",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
