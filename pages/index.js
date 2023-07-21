import Layout from "@/components/Layout";
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Niko Salewski</h1>
        <p className={styles.subtitle}>Hi, I'm Niko. I try to be useful in this world by working on projects in fields I love. I'm interested in indie hacking, chess, philosophy and physics.</p>

        <div className={styles.sections}>
          <div className={styles.section}>
            <h2>Building</h2>
            <ul>
              <li>
                <a>Learnground</a>
                <p>Booking platform for cohort-based online classes for kids.</p>
              </li>
              <li>
                <a href="https://www.creatortowns.de" target="_blank" className={styles.link}>CreatorTowns</a>
                <p>Making a list of small towns for creators slowly.</p>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Projects</h2>
            <ul>
              <li>
                <a href="https://www.chess4u.de" target="_blank" className={styles.link}>chess4u</a>
                <p>Online chess school for kids.</p>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Writing</h2>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </div>

        <div className={styles.connect}>
          <h2>Connect</h2>
          <ul>
            <li><a href="https://de.linkedin.com/in/niko-salewski" target="_blank" className={styles.link}>LinkedIn</a></li>
            <li><a href="https://github.com/nsalewski" target="_blank" className={styles.link}>GitHub</a></li>
            <li><a href="mailto:niko@chess4u.de" className={styles.link}>Email</a></li>
          </ul>
        </div>

      </div>
    </Layout>
  );
}
