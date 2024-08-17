
import threeColImage1 from '../../../assets/images/card-3col-img1.png'
import threeColImage2 from '../../../assets/images/card-3col-img2.png'
import threeColImage3 from '../../../assets/images/card-3col-img3.png'


const threeColumnImages = [threeColImage1, threeColImage2, threeColImage3]

const ThreeColumnCard = () => {
  return ( 
    <div className='three-col-card-container'>
      {threeColumnImages.map((image, index) => (
        <div className='three-col-card' key={index}>
          <img src={image} alt={`three-col-card-${index}`} />
          <div className='three-col-card-content'>
            <h2 className='three-col-card-title'>Card Title</h2>
            <p className='three-col-card-text'>Lorem ipsum dolor sit amet, no quando populo qui</p>
        </div>
        </div>
      ))}
    </div>
  );
}
 
export default ThreeColumnCard;