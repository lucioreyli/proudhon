import type { FC } from 'react'
import { Link } from './Link'
import type { LinkType } from '../types'

type Props = {
  role: string
  location: LinkType
  description: string[]
  date: [startDate: string, endDate?: string]
}

export const ExperienceItem: FC<Props> = (props) => (
  <div className="flex flex-col gap-y-3 w-full">
    <div className="w-full md:flex justify-between items-center">
      <h4 className="font-light text-2xl">{props.role}</h4>
      <span className="font-light text-base dark:text-subtitle">
        {props.date.join(' - ')}
      </span>
    </div>
    <Link
      className="self-start font-light text-sm"
      href={props.location.uri}
      externalLink
    >
      {props.location.label}
    </Link>
    <ul role="list" className="flex flex-col gap-y-3 font-thin">
      {props.description.map<JSX.Element>((description, i) => (
        <li key={i.toString()} className="font-light dark:text-subtitle">
          {description}
        </li>
      ))}
    </ul>
  </div>
)
