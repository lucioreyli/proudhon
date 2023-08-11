import type { NextPage } from 'next'
import { Header } from './components/Header'
import { Projects } from './components/Projects'

const Home: NextPage = () => {
  return (
    <main className="px-4 sm:px-8">
      <Header />
      <Projects />
    </main>
  )
}

export default Home
