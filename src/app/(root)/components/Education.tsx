import type { FC } from 'react'
import { ExperienceItem } from '@/app/components/ExperienceItem'
import { ElementContainer } from '@/app/components/ElementContainer'

export const Education: FC = () => (
  <ElementContainer label="Educação">
    <div className="flex flex-col gap-y-14 w-full">
      <ExperienceItem
        date={['2019', '2021']}
        role="Técnico de informática"
        location={{
          uri: '',
          label: 'Amazonas - Brasil',
        }}
        description={[
          'Ensino técnico com foco em desenvolvimento de aplicações, hardwares e banco de dados.',
        ]}
      />
      <ExperienceItem
        date={['2019']}
        role="GoStack - Rocketseat"
        location={{
          uri: 'https://rocketseat.com',
          label: 'Santa Catarina - Brasil',
        }}
        description={[
          'Bootcamp direcionado ao desenvolvimento de aplicações com as principais tecnologias do mercado, como NodeJS, React, React Native, MongoDB, MySQL e Postgres.',
        ]}
      />
    </div>
  </ElementContainer>
)

