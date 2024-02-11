"use client";

import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export default function MainNav() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              href="/"
              legacyBehavior
              passHref
              className="flex items-center space-x-2"
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="inline-block font-bold">CrashFire</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/profile"
              legacyBehavior
              passHref
              className="flex items-center space-x-2"
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="inline-block font-bold">Profile</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
