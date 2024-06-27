import Image from "next/image";
import { Inter } from "next/font/google";
import LayoutComponent from "../Components/layoutComponent";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Index from "./homePage";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>wicaksono's portfolio</title>
        <meta name="description" content="By Wicaksonolxn " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Your Name" />
        <meta name="keywords" content="nextjs, homepage, meta tags" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Index />
    </>
  );
}
