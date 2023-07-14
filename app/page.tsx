import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Projects />
    </div>
  )
}
