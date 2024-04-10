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
        <h1 className={styles.title}>Niko Salewski</h1>
        <div className={styles.subtitle}>
          <p>
            Hi, I'm Niko. This is my personal website where I share the things I
            work on and some words I write. This site is built using{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>
            , bootstrapped with{" "}
            <a
              href="https://github.com/vercel/next.js/tree/canary/packages/create-next-app"
              target="_blank"
            >
              create-next-app
            </a>
            , and deployed on{" "}
            <a href="https://vercel.com/" target="_blank">
              Vercel
            </a>
            .
          </p>
          <p>
            The <strong>Building</strong> section lists new things I'm working
            on. The <strong>Projects</strong> section lists projects that are
            established.
          </p>
        </div>

        <div className={styles.sections}>
          <div className={styles.section}>
            <h2>Building</h2>
            <ul>
              <li>
                <a
                  href="https://learnground.de"
                  target="_blank"
                  className={styles.link}
                >
                  Learnground
                </a>
                <p>Marketplace for cohort-based online courses for kids.</p>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Projects</h2>
            <ul>
              <li>
                <a
                  href="https://www.chess4u.de"
                  target="_blank"
                  className={styles.link}
                >
                  chess4u
                </a>
                <p>Online chess school for kids.</p>
              </li>
              <li>
                <a>Erudition</a>
                <p>My learning and reading.</p>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <div className={styles.headingWithLink}>
              <h2>Writing</h2>
              <Link href="/blog">
                <span className={styles.linkArrow}>→</span>
              </Link>
            </div>
            <ul>
              {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                  <Link href={`/blog/${id}`}>
                    <span className={styles.link}>{title}</span>{" "}
                  </Link>
                  <p>{formatDate(date)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.connect}>
          <h2>Connect</h2>
          <ul>
            <li>
              <a href="mailto:niko@chess4u.de" className={styles.link}>
                Email
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nsalewski"
                target="_blank"
                className={styles.link}
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://de.linkedin.com/in/niko-salewski"
                target="_blank"
                className={styles.link}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
