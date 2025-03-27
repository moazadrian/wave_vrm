import AvellanasOffer from './components/AvellanasOffer';
import Footer from './components/Footer';
import HeroSec from './components/HeroSec';
import InfoSec from './components/InfoSec';
import InstagramGrid from './components/InstagramGrid';
import Navbar from './components/Navbar';

export default function Home() {
 
  return (
   <>
   <Navbar />
   <HeroSec />
   <InfoSec />
   <AvellanasOffer />
   {/* <h4>Reviews Section</h4> */}
   <InstagramGrid />
   <Footer />
   </>
  );
}
