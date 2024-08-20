import { useState, useRef, useEffect } from "react"

import "./accordion.css"
import arrowDown from "../../assets/images/accordion-arrow-pc.svg"

const initialAccordionItems = [
  {
    id: 0,
    title: "Accordion Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 1,
    title: "Accordion Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 2,
    title: "Accordion Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 3,
    title: "Accordion Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 4,
    title: "Accordion Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
]

const Accordion = () => {
  const [accordionItems, setAccordionItems] = useState(initialAccordionItems)
  const [contentHeights, setContentHeights] = useState({})
  const contentRefs = useRef([])

  const toggleAccordion = (id) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    )
  }

  useEffect(() => {
    const updateHeights = () => {
      const heights = {}
      contentRefs.current.forEach((ref, index) => {
        if (ref) {
          heights[index] = ref.scrollHeight
        }
      })
      setContentHeights(heights)
    }
    updateHeights()
    window.addEventListener("resize", updateHeights)

    return () => window.removeEventListener("resize", updateHeights)
    
  }, [])

  return (
    <div className="accordion-container" id="access">
      {accordionItems.map((item, index) => (
        <div key={item.id} className="accordion-main">
          <div className="accordion-header" onClick={() => toggleAccordion(item.id)}>
            <h3>{item.title}</h3>
            <img
              src={arrowDown}
              className={`accordion-icon ${item.isOpen ? "open" : ""}`}
              alt="Toggle Accordion"
            />
          </div>
          <div
            className={`accordion-content ${item.isOpen ? "open": ""}`}
            style={{ maxHeight: item.isOpen ? `${contentHeights[index]}px` : 0}}
            ref={(element) => (contentRefs.current[index] = element)}
          >
            <hr />
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
