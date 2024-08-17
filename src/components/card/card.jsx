import FourColumnCard from './_components/four-column-card';
import ThreeColumnCard from './_components/three-column-card';
import './card.css'; // Import the CSS file


const Card = () => {
  return (
    <section style={{ padding: "0 15px" }}>
      <div className='card-main'>
       <FourColumnCard />
       <ThreeColumnCard />
      </div>       
    </section>
  );
}
 
export default Card;
