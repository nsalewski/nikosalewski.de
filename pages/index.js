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
            Hi, I'm Niko. I'm a guy from Germany that loves to build things for
            others.
          </p>
          <p>
            I'm the founder of <a href="https://www.chess4u.de/">chess4u</a>, an
            online chess school for kids. We're a team of 16 independent coaches
            who teach kids in small groups and through lectures. Some kids are
            just starting out, while others are already among the top in their
            age group nationwide. We also host tournaments and create learning
            apps.
          </p>
          <p>
            I work on various software projects.{" "}
            <a href="https://www.learnground.de/">Learnground</a> is a site
            where kids can find teachers and courses on topics they're curious
            about. I just started this project, and I'm trying to make it work.
          </p>
          <p>I also like to write about things I learn here and there.</p>
          <ul className={styles.postList}>
            {allPostsData.map(({ id, date, title }, index) => (
              <li key={id}>
                <Link href={`/blog/${id}`}>
                  <span className={styles.postTitle}>{title}</span>
                </Link>
                <span className={styles.postDate}>{formatDate(date)}</span>
                {index === 0 && <span className={styles.newTag}>NEW</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
