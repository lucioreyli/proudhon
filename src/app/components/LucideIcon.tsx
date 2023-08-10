import type { FC } from 'react'
import { type LucideProps, type icons } from 'lucide-react'
// @ts-ignore
import * as Icons from 'lucide-react/dist/esm/icons/index'

type IconName = keyof typeof icons

type Props = { name: IconName } & Omit<LucideProps, 'name'>

export const LucideIcon: FC<Props> = (props) => {
  const Icon = Icons[props.name]
  return <Icon {...props} />
}
