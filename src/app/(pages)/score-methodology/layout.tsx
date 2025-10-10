// app/score-methodology/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Score Methodology - ChoozPainters",
  description:
    "Get in touch with ChoozPainters. Contact us for support, questions about our painter directory, or assistance finding local Plumbers Contractors in your area.",
  keywords:
    "contact ChoozPainters, painter directory support, local painters contact, Plumbers Contractors help, ChoozPainters contact form",
  robots: "index, follow",
  openGraph: {
    title: "Score Methodology - ChoozPainters",
    description:
      "Get in touch with ChoozPainters. Contact us for support, questions about our painter directory, or assistance finding local Plumbers Contractors in your area.",
    url: "https://choozplumbers.com/score-methodology",
    siteName: "ChoozPainters",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Score Methodology - ChoozPainters",
    description:
      "Get in touch with ChoozPainters. Contact us for support, questions about our painter directory, or assistance finding local Plumbers Contractors in your area.",
  },
  alternates: {
    canonical: "https://choozplumbers.com/score-methodology",
  },
};

export default function ScoreMethodologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
