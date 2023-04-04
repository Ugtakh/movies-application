import Head from "next/head";
import { Inter } from "next/font/google";
import Count from "../components/Count";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Welcome our website by next.js</h1>
        <Link
          href="/about"
          style={{ color: "violet", textDecoration: "none", fontSize: 20 }}
        >
          about
        </Link>
        <Count />
      </div>
    </>
  );
}
