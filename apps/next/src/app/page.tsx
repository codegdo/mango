import { Metadata } from 'next';
import pageLayout from './page.layout';

const metadata: Metadata = { title: 'Home', description: '' };

function Home() {
  return <>HOME</>;
}

export default pageLayout(Home, {
  metadata,
});
