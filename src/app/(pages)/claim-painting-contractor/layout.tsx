// app/contact/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claim Your Plumbers Contractor Listing - ChoozPainters",
  description:
    "Claim your Plumbers Contractor listing on ChoozPainters. Get in touch with ChoozPainters. Contact us for support, questions about our painter directory, or assistance finding local Plumbers Contractors in your area.",
  keywords:
    "contact ChoozPainters, painter directory support, local painters contact, Plumbers Contractors help, ChoozPainters contact form",
  robots: "index, follow",
  openGraph: {
    title: "Claim Your Plumbers Contractor Listing - ChoozPainters",
    description:
      "Claim your Plumbers Contractor listing on ChoozPainters. Get in touch with ChoozPainters. Contact us for support, questions about our painter directory, or assistance finding local Plumbers Contractors in your area.",
    url: "https://choozplumbers.com/contact",
    siteName: "ChoozPainters",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Claim Your Plumbers Contractor Listing - ChoozPainters",
    description:
      "Claim your Plumbers Contractor listing on ChoozPainters. Get in touch with ChoozPainters. Contact us for support, questions about our painter directory, or assistance finding local Plumbers Contractors in your area.",
  },
  alternates: {
    canonical: "https://choozplumbers.com/claim-plumbers-contractor",
  },
};

export default function ClaimPlumbersContractorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
