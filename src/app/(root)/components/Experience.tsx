import { ExperienceItem } from '@/app/components/ExperienceItem'
import { SectionHeader } from '@/app/components/SectionHeader'
import type { FC } from 'react'

export const Experience: FC = () => (
  <>
    <SectionHeader>Experiência</SectionHeader>
    <div>
      <ExperienceItem
        date={['Fev 2022', 'Mar 2023']}
        role="Front End Mobile Developer"
        key="hi"
        location={{
          uri: '#',
          label: 'Riderize/Santa Catarina - Brasil',
        }}
        description={['asdasd']}
      />
    </div>
  </>
)
