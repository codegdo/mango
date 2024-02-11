'use client';
import { Metadata } from 'next';
import layoutTemplate from './layout.template';
import styles from './page.module.css';

const metadata: Metadata = { title: 'Home', description: '' };

function Home() {
  return <main className={styles.main}>HOME</main>;
}

export default layoutTemplate(Home, {
  metadata,
});
