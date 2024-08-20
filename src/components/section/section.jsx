import firstSectionImage from "../../assets/images/section-img1.png"
import secondSectionImage from "../../assets/images/section-img2.png"
import "./section.css"

const sectionImages = [firstSectionImage, secondSectionImage]

const Section = () => {
  return (
    <div className="section-container">
      {sectionImages.map((image, index) => (
        <div key={index} className="section-main">
          <img src={image} alt={`section-image-${index}`} />
            <div className="section-content">
              <h1>Card Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Section
