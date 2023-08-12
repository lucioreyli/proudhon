import type { NextPage } from 'next'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'

const Home: NextPage = () => {
  return (
    <main className="px-4 sm:px-8 pb-40">
      <Header />
      <Projects />
      <Experience />
    </main>
  )
}

export default Home
