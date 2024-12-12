import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import { getSortedPostsData } from "@/lib/blog";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData().slice(0, 3);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}.${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}.${date.getFullYear()}`;
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>About</h1>

        <div className={styles.content}>
          <p>
            Hi, I'm Niko. I'm a guy from Germany who loves building things for
            others.
          </p>
          <p>
            I started{" "}
            <a
              href="https://www.chess4u.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              chess4u
            </a>
            , an online chess school for kids. We're a team of 16 independent
            coaches who teach kids in small groups and through lectures. Some
            kids are just starting out, while others are already among the top
            in their age group nationwide. We also host tournaments and create
            learning apps.
          </p>
          <p>
            You can reach me via mail at{" "}
            <a href="mailto:niko@hey.com">niko@hey.com</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
}
