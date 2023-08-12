import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export type LinkProps = { externalLink?: boolean } & NextLinkProps &
  Omit<ComponentProps<'a'>, 'ref'>

export const Link: FC<PropsWithChildren<LinkProps>> = (props) => (
  <NextLink
    {...(props as LinkProps)}
    {...(props.externalLink && { prefetch: false, target: '_blank' })}
    className={twMerge(
      'link text-blue hover:underline underline-offset-[0.5px]',
      props.className,
    )}
  >
    {props.children}
  </NextLink>
)
