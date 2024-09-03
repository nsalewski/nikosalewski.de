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
            Hi, I'm Niko Salewski. I'm a [your profession/role] based in [your
            location].
          </p>
          <p>[Add a paragraph about your work, interests, or expertise]</p>
          <p>[Add another paragraph with more details about yourself]</p>
          <p>
            I also write about [topics you write about]. Here are my latest
            posts:
          </p>
          <ul className={styles.postList}>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href={`/blog/${id}`}>
                  <span className={styles.postTitle}>{title}</span>
                </Link>
                <span className={styles.postDate}>{formatDate(date)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
