import type { FC } from 'react'
import { ExperienceItem } from '@/app/components/ExperienceItem'
import { ElementContainer } from '@/app/components/ElementContainer'

export const Experience: FC = () => (
  <ElementContainer data-id="experience" label="Experiência">
    <div className="flex flex-col gap-y-14 w-full">
      <ExperienceItem
        date={['Fev 2022', 'Mar 2023']}
        role="Front End Mobile Developer"
        location={{
          uri: 'https://riderize.com',
          label: 'Riderize/Santa Catarina - Brasil',
        }}
        description={[
          'Responsável pela aplicação mobile e envio para as lojas',
          'Ajustes na aplicação, inserção de novas features e mudança de arquitetura',
          'Manutenção, refatoração de código e otimização da aplicação',
        ]}
      />
    </div>
  </ElementContainer>
)
