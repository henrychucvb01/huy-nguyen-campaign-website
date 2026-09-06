import './App.css'
import './hero-reference.css'
import AboutPage from './components/AboutPage'
import Endorsements from './components/Endorsements'
import EndorsementsPage from './components/EndorsementsPage'
import ExperienceStrip from './components/ExperienceStrip'
import Footer from './components/Footer'
import GetInvolved from './components/GetInvolved'
import GetInvolvedPage from './components/GetInvolvedPage'
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
  const isEndorsementsPage =
    window.location.pathname === '/endorsements' || window.location.pathname === '/endorsements/'
  const isGetInvolvedPage =
    window.location.pathname === '/get-involved' || window.location.pathname === '/get-involved/'

  let page = <HomePage />
  if (isAboutPage) page = <AboutPage />
  if (isEndorsementsPage) page = <EndorsementsPage />
  if (isGetInvolvedPage) page = <GetInvolvedPage />

  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  )
}

export default App
