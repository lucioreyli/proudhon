import { ExperienceItem } from '@/app/components/ExperienceItem'
import { SectionHeader } from '@/app/components/SectionHeader'
import type { FC } from 'react'

export const Experience: FC = () => (
  <>
    <SectionHeader>Experiência</SectionHeader>
    <div>
      <ExperienceItem />
    </div>
  </>
)
