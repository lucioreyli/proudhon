import type { NextPage } from 'next'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Contact } from './components/Contact'

const Home: NextPage = () => (
  <main className="px-4 sm:px-8 md:px-12 pb-40">
    <Header />
    <Projects />
    <Experience />
    <Education />
    <Contact />
  </main>
)

export default Home
