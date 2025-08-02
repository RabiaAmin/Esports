import Hero from "./components/Hero"
import Matches from "./components/Matches"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero/>
      <Matches/>
      <Footer/>
    </main>

  )
}

export default App