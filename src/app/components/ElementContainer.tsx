import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = PropsWithChildren<ComponentProps<'div'>> & {
  label: string
  ['data-id']?: string
}

export const ElementContainer: FC<Props> = (props) => (
  <div
    id={props['data-id']}
    className={twMerge(
      'sm:flex border-t border-[#c6c6c6] gap-x-24 w-full',
      'mt-28 pt-28',
      props.className,
    )}
  >
    <h3 className="font-extralight uppercase text-base max-md:pb-12">
      {props.label}
    </h3>
    {props.children}
  </div>
)
