import fourColImage1 from '../../../assets/images/card-4col-img1.png'
import fourColImage2 from '../../../assets/images/card-4col-img2.png'
import fourColImage3 from '../../../assets/images/card-4col-img3.png'
import fourColImage4 from '../../../assets/images/card-4col-img4.png'

const fourColumnImages = [fourColImage1, fourColImage2, fourColImage3, fourColImage4]

const FourColumnCard = () => {
  return ( 
    <div className='four-col-card-container'> 
    {fourColumnImages.map((image, index) => (
      <div className='four-col-card' key={index}> 
        <img src={image} alt={`four-col-card-${index}`} />
        <div className='four-col-card-content'> 
          <h2 className='four-col-card-title'>Card Title</h2> 
          <p className='four-col-card-text'>Lorem ipsum dolor sit amet, no quando populo qui</p> 
        </div>
      </div>
    ))}
  </div>
   );
}
 
export default FourColumnCard;