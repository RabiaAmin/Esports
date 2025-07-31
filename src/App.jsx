import Hero from "./components/Hero"
import Matches from "./components/Matches"
import Live from "./components/Live"

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero/>
      <Matches/>
      <Live/>
    </main>

  )
}

export default App