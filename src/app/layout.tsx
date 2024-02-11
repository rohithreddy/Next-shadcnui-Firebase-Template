import { Metadata } from "next";

import { fontMono, fontSans } from "@/components/common/fonts";
import SiteHeader from "@/components/layout/site-header";
import CommonProviders from "@/components/providers/common-providers";
import { env } from "@/lib/config/environment";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "CrashFire",
  description: "A Template for starting with Firebase and Shadcn UI + Next.js",
  metadataBase: new URL(env.url),
  robots: env.isProduction ? "all" : "noindex,nofollow",
  openGraph: {
    type: "website",
    locale: "en",
    url: env.url,
    siteName: "Dostu",
    images: [
      {
        url: "/hydra.jpeg",
        width: 666,
        height: 666,
      },
    ],
  },
  twitter: {
    site: "@chaoscrashx",
    creator: "@chaoscrashx",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <CommonProviders>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
          </div>
        </CommonProviders>
      </body>
    </html>
  );
}
