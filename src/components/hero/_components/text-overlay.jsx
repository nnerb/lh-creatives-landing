/* eslint-disable react/prop-types */
const TextOverlay = ({ heading, paragraph}) => {
  return ( 
    <div className="hero-overlay">
      <h1>{heading}</h1>
      <p>{paragraph}</p>
    </div>
   );
}
 
export default TextOverlay;