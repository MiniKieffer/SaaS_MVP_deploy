import HomepageBar from '@/components/homepage/homepageBar';
import Divider from '@mui/material/Divider';
import Hero from '@/components/homepage/hero';
import Highlights from '@/components/homepage/highlights';
import Pricing from '@/components/homepage/pricing';
import Footer from '@/components/homepage/footer';

export default function Home() {
  return (
    <>
      <HomepageBar />
      <Hero />
      <div>
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <Divider />
        <Footer />
      </div>
    </>
  );
}
