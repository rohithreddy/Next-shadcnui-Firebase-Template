"use client";

import Image from "next/image";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <div className="flex flex-row items-center">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl ">
              Beautifully designed Application{" "}
              <br className="hidden sm:inline" />
              Powered by shadcnUI + next.js + Firebase
            </h1>
            <Image
              src={"/hydra.jpeg"}
              width={333}
              height={333}
              alt="Hydra"
              className="relative "
            ></Image>
          </div>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://github.com/rohithreddy"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            {"Rohith's GitHub"}
          </Link>
          <Link
            href="https://github.com/rohithreddy"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            {"Rohith's GitHub"}
          </Link>
        </div>
        <div className="flex max-w-[980px] flex-col items-start gap-2"></div>
      </section>
    </>
  );
}
