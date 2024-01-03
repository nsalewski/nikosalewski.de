import { getPostData, getAllPostIds } from "../../lib/blog";
import styles from "@/styles/Post.module.css";
import Link from "next/link";

export default function Post({ postData }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className={styles.container}>
      <Link href="/blog" className={styles.backToHome}>
        ←
      </Link>
      <h1 className={styles.title}>{postData.title}</h1>
      <p className={styles.date}>{formatDate(postData.date)}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
