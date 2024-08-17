import { useState, useEffect } from 'react'
import './carousel.css'

import image1 from '../../assets/images/carousel-img05.png'
import image2 from '../../assets/images/carousel-img06.png'
import image3 from '../../assets/images/carousel-img01.png'
import image4 from '../../assets/images/carousel-img02.png'
import image5 from '../../assets/images/carousel-img03.png'
import image6 from '../../assets/images/carousel-img04.png'

import prevArrow from "../../assets/images/carousel-arrow-prev.svg"
import nextArrow from "../../assets/images/carousel-arrow-next.svg"

const images = [image1, image2, image3, image4, image5, image6]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [imagesToShow, setImagesToShow] = useState(4)
  const [imageWidth, setImageWidth] = useState(302)
  const [imageHeight, setImageHeight] = useState(170)
  const gap = 16
  const totalImages = images.length

  useEffect(() => {
    const handleResize = () => {
      let newImagesToShow = 4
      let newImageWidth = 302
      let newImageHeight = 170

      if (window.innerWidth < 642) {
        newImagesToShow = 1
        newImageWidth = 280
        newImageHeight = 160
      } else if (window.innerWidth < 970) {
        newImagesToShow = 2
      } else if (window.innerWidth < 1290) {
        newImagesToShow = 3
      } else {
        newImagesToShow = 4
        newImageWidth = 302
        newImageHeight = 170
      }

      setImagesToShow(newImagesToShow)
      setImageWidth(newImageWidth)
      setImageHeight(newImageHeight)

      // Reset the currentIndex to ensure it's within bounds
      setCurrentIndex(prevIndex => {
        const maxIndex = totalImages - newImagesToShow
        if (prevIndex > maxIndex) {
          return maxIndex
        }
        return prevIndex
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Call on initial render

    return () => window.removeEventListener('resize', handleResize)
  }, [totalImages])

  // Calculate carousel and container widths
  const carouselWidth = (imageWidth + gap) * imagesToShow - gap // Total width to show images minus the gap on the right
  const containerWidth = (imageWidth + gap) * totalImages - gap // Total width including gaps

  const handlePrev = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex === 0) return totalImages - imagesToShow // Go to the last set
      return prevIndex - 1
    })
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex >= totalImages - imagesToShow) return 0 // Go back to the start
      return prevIndex + 1
    })
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      <div className="carousel-container" style={{ width: `${carouselWidth}px` }}>
        <div
          className="carousel-images-container"
          style={{
            width: `${containerWidth}px`,
            transform: `translateX(-${currentIndex * (imageWidth + gap)}px)`,
            display: 'flex',
            transition: 'transform 0.3s ease-in-out', // Smooth transition
          }}
        >
          {images.map((image, index) => (
            <div className="carousel-image-wrapper" key={index} style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}>
              <img src={image} alt={`carousel-img-${index}`} />
            </div>
          ))}
        </div>
        <img src={prevArrow} alt='previous-arrow' className="arrow left-arrow" onClick={handlePrev}/>
        <img src={nextArrow} alt='next-arrow' className="arrow right-arrow" onClick={handleNext}/>
      </div>
    </div>
  )
}

export default Carousel
