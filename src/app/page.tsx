import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/ComingSoon.module.css'; // Import the CSS module

// If you had props, you would define their types here
// interface ComingSoonProps {}

const ComingSoon: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kart24 Store - Coming Soon</title>
        <meta name="description" content="Something exciting is coming soon!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.imageWrapper}>
          {/* Replace 'your_image_path' with the path to your image */}
          <Image src="/images/coming-soon-logo.jpeg" alt="Kart24 Logo" layout="fill" objectFit="cover" />
        </div>

        <p className={styles.description}>
          Work Hard, Shopping Harder! Find the Best Quality Products!
        </p>

        <h2 className={styles.comingSoon}>
          Something Exciting Coming Soon!
        </h2>

        <div className={styles.socialLinks}>
          {/* Update href with your social media links */}
          <a href="https://www.facebook.com/kart24store" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/facebook.svg" alt="Facebook" width={36} height={36} />
          </a>
          <a href="https://www.instagram.com/kart24store" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/instagram.svg" alt="Instagram" width={36} height={36} />
          </a>
          <a href="https://www.youtube.com/@kart24store" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/youtube.svg" alt="Youtube" width={36} height={36} />
          </a>
          {/* <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        Kart24 Store
        <br/>
        Copyright © 2024 Kart24 Store - All Rights Reserved.
      </footer>
    </div>
  );
}

export default ComingSoon;
