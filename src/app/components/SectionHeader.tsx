import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export const SectionHeader: FC<PropsWithChildren<ComponentProps<'h3'>>> = (
  props,
) => (
  <h3
    className={twMerge(
      'font-extralight uppercase mt-24 mb-12 pt-28 border-t border-[#c6c6c6]',
      props.className,
    )}
    {...props}
  >
    {props.children}
  </h3>
)
