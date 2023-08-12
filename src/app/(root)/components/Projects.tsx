import { Project } from '@/app/components/Project'
import { SectionHeader } from '@/app/components/SectionHeader'
import { projects } from '@/app/constants/projects'
import type { FC } from 'react'

export const Projects: FC = () => (
  <>
    <SectionHeader id="projects">Projetos</SectionHeader>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-12">
      {projects.map<JSX.Element>((projectProps) => (
        <Project key={projectProps.name} {...projectProps} />
      ))}
    </div>
  </>
)
