import Link, { type LinkProps } from 'next/link'
import type { ElementType, FC } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = LinkProps & {
  Icon: ElementType
  label: string
}

export const ContactItem: FC<Props> = ({ Icon, label, ...props }) => (
  <Link
    className={twMerge(
      'border border-subtitle rounded flex gap-x-3 py-3 self-start dark:text-subtitle',
      'items-center justify-center transition-all',
      'dark:hover:bg-white dark:hover:text-dark',
      'hover:bg-bg-dark hover:text-white',
    )}
    {...props}
    prefetch={false}
    target="_blank"
  >
    {<Icon className="w-5 h-5" />}
    <span className="font-light flex">{label}</span>
  </Link>
)

