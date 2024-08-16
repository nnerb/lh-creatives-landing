
import TextOverlay from './_components/text-overlay';
import './hero.css'

const Hero = () => {
  return ( 
    <div className="hero-container">
      <div className="hero-background-container">
        <TextOverlay heading="Hero Text" paragraph="Sub Hero Text Here"/>
      </div>
    </div>
   );
}
 
export default Hero;