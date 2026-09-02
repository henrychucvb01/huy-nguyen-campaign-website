import './App.css'
import Endorsements from './components/Endorsements'
import ExperienceStrip from './components/ExperienceStrip'
import Footer from './components/Footer'
import GetInvolved from './components/GetInvolved'
import Header from './components/Header'
import Hero from './components/Hero'
import ThreeFs from './components/ThreeFs'
import WhyHuy from './components/WhyHuy'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ThreeFs />
        <WhyHuy />
        <ExperienceStrip />
        <Endorsements />
        <span className="anchor-target" id="news" aria-hidden="true" />
        <GetInvolved />
      </main>
      <Footer />
    </>
  )
}

export default App
