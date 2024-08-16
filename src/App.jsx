import Carousel from "./components/carousel/caroursel"
import Hero from "./components/hero/hero"
import Navbar from "./components/navbar/navbar"

function App() {

  return (
    <div className="container">
      <Navbar />
      <Hero /> 
      <Carousel />
    </div>
  )
}

export default App
