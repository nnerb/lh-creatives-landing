import Accordion from "./components/accordion/accordion"
import Card from "./components/card/card"
import Carousel from "./components/carousel/caroursel"
import Footer from "./components/footer/footer"
import Form from "./components/form/form"
import Hero from "./components/hero/hero"
import Navbar from "./components/navbar/navbar"
import Section from "./components/section/section"

function App() {

  return (
    <div className="container">
      <Navbar />
      <div className="first-main-content">
        <Hero /> 
        <Carousel />
      <div style={{ padding: "0 15px"}}>
        <div className="second-main-content">
          <Card />
          <Section />
          <Accordion />
          <Form />
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
