import Card from "./components/card/card"
import Carousel from "./components/carousel/caroursel"
import Hero from "./components/hero/hero"
import Navbar from "./components/navbar/navbar"

function App() {

  return (
    <div className="container">
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '90px'}}>
        <Hero /> 
        <Carousel />
        <Card />
      </div>
      
    </div>
  )
}

export default App
