import Link from "next/link";
import { getSortedPostsData } from "../../lib/blog";
import styles from "@/styles/Posts.module.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getFullYear()}`;
};

export default function Posts({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backToHome}>
        ←
      </Link>
      <h1 className={styles.title}>Blog</h1>
      <ul className={styles.postList}>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className={styles.postListItem}>
            <Link href={`/blog/${id}`}>{title}</Link>
            <br />
            <span className={styles.postDate}>{formatDate(date)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
