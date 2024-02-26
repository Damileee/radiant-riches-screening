import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Page.module.scss";
import Features from "@/components/Features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.heading_text}>Best Website builders in the US</h1>
        <div className={styles.main_span_container}>
          <div className={styles.main_span}>
            <span className={styles.main_first_span}>
              <img src="lastUpdateIcon.svg" alt="updated icon" />
              <span>Last Updated - February 22,2020</span>
            </span>
            <span className={styles.main_second_span}>
              <img src="advertIcon.svg" alt="advert icon" />
              <span>Advertising Disclosure</span>
            </span>
          </div>
          <div className={styles.main_third_span}>
            <span>Top Relevant</span>
            <img src="arrowIcon.svg" alt="tuggle icon" />
          </div>
        </div>
        <div className={styles.main_second_span_section}>
          <span>Tools</span>
          <span>AWS Builder</span>
          <span>Start Build</span>
          <span>Build Supplies</span>
          <span>Tooling</span>
          <span>BlueHosting</span>
        </div>
        <div className={styles.main_third_span_section}>
          <span>
            <p>Home</p>
            <img src="nextArrowIcon.svg" alt="next arrow icon" />
          </span>
          <span>
            <span>Hosting for all</span>
            <img src="nextArrowIcon.svg" alt="next arrow icon" />
          </span>
          <span>
            <span>Hosting</span>
            <img src="nextArrowIcon.svg" alt="next arrow icon" />
          </span>
          <span>
            <span>Hosting6</span>
            <img src="nextArrowIcon.svg" alt="next arrow icon" />
          </span>
          <span>
            <span>Hosting5</span>
          </span>
        </div>
        <div>
          <Features />
        </div>
      </main>
    </>
  );
}
