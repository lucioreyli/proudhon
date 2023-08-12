import type { FC } from 'react'
import { Link } from './Link'
import { LinkType } from '../types'

type Props = {
  role: string
  location: LinkType
  description: string[]
  date: [startDate: string, endDate?: string]
}

export const ExperienceItem: FC<Props> = () => (
  <>
    <div className="flex justify-between">
      <h4 className="font-light text-2xl">
        Desenvolvedor Mobile - React Native
      </h4>
      <span>Dia 12</span>
    </div>
    <Link
      className="block"
      href="https://pt.wikipedia.org/wiki/Santa_Catarina"
      externalLink
    >
      Santa Catarina - BR
    </Link>
  </>
)
