import type { FC } from 'react'
import { Nav } from '../../components/Nav'
import { gtWalsheim } from '../../fonts'
import { DevIcon } from '../../components/DevIcon'
import { Link } from '@/app/components/Link'

export const Header: FC = () => (
  <>
    <Nav />
    <p className="font-light mt-24 dark:text-white">Olá, eu sou o</p>
    <h1
      className={[
        'bg-clip-text text-transparent bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] text-6xl md:text-8xl',
        gtWalsheim.className,
        'mt-4 mb-8',
      ].join(' ')}
    >
      Lucio Andrade
    </h1>
    <p className="font-light inline-block text-justify">
      Eu sou um engenheiro de software fullstack do Amazonas, Brasil 🇧🇷 e também
      entusiasta de jogos e segurança da informação. Gosto de criar aplicações
      web utilizando{' '}
      <Link href="https://nextjs.org" target="_blank">
        Next
        <DevIcon name="nextjs" className="w-6 mx-2 inline-block" />
      </Link>
      , aplicativos com{' '}
      <Link href="https://reactnative.dev" target="_blank">
        React Native
        <DevIcon name="react" className="w-6 mx-2 inline-block" />
      </Link>
      ,{' '}
      <Link href="https://swift.org" target="_blank">
        Swift
        <DevIcon name="swift" className="w-6 mx-2 inline-block" />
      </Link>
      . Nos tempos livres gosto de <strong>contribuir</strong> em projetos{' '}
      <strong>open source</strong> no{' '}
      <Link href="https://github.com" target="_blank">
        GitHub
        <DevIcon name="github" className="w-6 mx-2 inline-block" />
      </Link>
      .
    </p>
    <div className="mt-10 mb-22">
      <Link href="#contact" role="button">
        Dizer oi! {'-->'}
      </Link>
    </div>
  </>
)
