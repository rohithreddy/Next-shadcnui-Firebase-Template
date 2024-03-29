"use client";

import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/layout/theme-button";
// import WalletButton from "@/components/layout/wallet-button";
import { buttonVariants } from "@/components/ui/button";

import FireLoginButton from "../login";
import MainNav from "./main-nav";

export default function SiteHeader() {
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav></MainNav>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <ThemeToggle></ThemeToggle>
            <FireLoginButton></FireLoginButton>
          </div>

          {/* <WalletButton></WalletButton> */}
        </div>
      </header>
    </>
  );
}
