import type { FC } from 'react'
import type { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'

type IconName = keyof typeof dynamicIconImports

type Props = { name: IconName } & Omit<LucideProps, 'name'>

export const LucideIcon: FC<Props> = (props) => {
  const Icon = dynamic(dynamicIconImports[props.name])
  return <Icon {...props} />
}
