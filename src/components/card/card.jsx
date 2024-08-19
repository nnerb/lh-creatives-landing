import FourColumnCard from './_components/four-column-card';
import ThreeColumnCard from './_components/three-column-card';
import './card.css';

const Card = () => {
  return (
    <div className='card-main'>
      <FourColumnCard />
      <ThreeColumnCard />
    </div>       
  );
}
 
export default Card;
