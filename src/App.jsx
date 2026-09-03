import './App.css'
import './hero-reference.css'
import AboutPage from './components/AboutPage'
import Endorsements from './components/Endorsements'
import ExperienceStrip from './components/ExperienceStrip'
import Footer from './components/Footer'
import GetInvolved from './components/GetInvolved'
import Header from './components/Header'
import Hero from './components/Hero'
import ThreeFs from './components/ThreeFs'
import WhyHuy from './components/WhyHuy'

function HomePage() {
  return (
    <main>
      <Hero />
      <ThreeFs />
      <WhyHuy />
      <ExperienceStrip />
      <Endorsements />
      <span className="anchor-target" id="news" aria-hidden="true" />
      <GetInvolved />
    </main>
  )
}

function App() {
  const isAboutPage = window.location.pathname === '/about' || window.location.pathname === '/about/'

  return (
    <>
      <Header />
      {isAboutPage ? <AboutPage /> : <HomePage />}
      <Footer />
    </>
  )
}

export default App
