import NextLink, { type LinkProps } from 'next/link'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export const Link: FC<PropsWithChildren<LinkProps & ComponentProps<'a'>>> = (
  props,
) => (
  <NextLink
    {...(props as LinkProps)}
    className={twMerge(
      'link text-blue hover:underline underline-offset-[0.5px]',
      props.className,
    )}
  >
    {props.children}
  </NextLink>
)
