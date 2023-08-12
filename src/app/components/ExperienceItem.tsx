import type { FC } from 'react'
import { Link } from './Link'
import type { LinkType } from '../types'

type Props = {
  role: string
  location: LinkType
  description: string[]
  date: [startDate: string, endDate?: string]
}

export const ExperienceItem: FC<Props> = (props) => {
  const {} = props
  return (
    <>
      <div className="flex justify-between">
        <h4 className="font-light text-2xl">{props.role}</h4>
        <div>
          {props.date.map<JSX.Element>((date) => (
            <span key={date}>{date}</span>
          ))}
        </div>
      </div>
      <Link className="block" href={props.location.uri} externalLink>
        {props.location.label}
      </Link>
    </>
  )
}
