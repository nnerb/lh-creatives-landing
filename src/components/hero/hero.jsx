import TextOverlay from './_components/text-overlay'
import './hero.css'

const Hero = () => {
  return ( 
    <div className="hero-container" id="about">
      <div className="hero-background-container">
        <TextOverlay heading="Hero Text" paragraph="Sub Hero Text Sentence"/>
      </div>
    </div>
   )
}
 
export default Hero