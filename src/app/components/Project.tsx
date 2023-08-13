import type { FC } from 'react'
import { DevIcon } from './DevIcon'
import { Link } from './Link'
import { LucideIcon } from './LucideIcon'
import Image, { type ImageProps } from 'next/image'

type Tech = { name: string; uri: string }

export type ProjectProps = {
  name: string
  description: string
  image: ImageProps['src']
  githubUrl: string
  deployUrl: string
  techs: Tech[]
}

export const Project: FC<ProjectProps> = (props) => {
  return (
    <div className="flex flex-col">
      <Link
        href={props.deployUrl}
        externalLink
        className="flex bg-white items-center justify-center hover:opacity-70 transition-all"
      >
        <Image className="h-48 rounded-sm" src={props.image} alt={props.name} />
      </Link>
      <div className="flex mt-7 mb-3 justify-between">
        <h4 className="font-normal text-md">{props.name}</h4>
        <div className="flex gap-5">
          <Link href={props.githubUrl} externalLink>
            <DevIcon
              name="github"
              className="w-5 h-5 dark:fill-white"
              color="white"
              flag
            />
          </Link>
          <Link href={props.deployUrl} externalLink>
            <LucideIcon
              name="link-2"
              className="w-5 h-5 text-dark dark:text-white"
            />
          </Link>
        </div>
      </div>
      <p className="font-light text-sm">{props.description}</p>
      <div className="flex font-light gap-x-1 w-ful flex-wrap">
        {props.techs.map<JSX.Element>((tech) => (
          <Link key={tech.name} href={tech.uri} externalLink>
            {tech.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
