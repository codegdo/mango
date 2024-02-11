'use client';
import { Metadata } from 'next';
import pageLayout from './page.layout';
import styles from './page.module.css';

const metadata: Metadata = { title: 'Home', description: '' };

function Home() {
  return <main className={styles.main}>HOME</main>;
}

export default pageLayout(Home, {
  metadata,
});
