'use client'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import type { LinkProps } from 'next/link'
import { Link } from './Link'

const NavItem: FC<PropsWithChildren<LinkProps>> = ({ children, ...props }) => (
  <Link
    {...(props as LinkProps & ComponentProps<'a'>)}
    className="font-extralight hidden sm:block text-dark dark:text-white hover:text-blue"
  >
    {children}
  </Link>
)

export const Nav: FC = () => {
  return (
    <nav className="flex justify-between font-light py-11">
      <p className="font-normal">LucioReyli</p>
      <div className="flex gap-7">
        <NavItem href="/#projects">Projetos</NavItem>
        <NavItem href="#">Resumo</NavItem>
        <NavItem href="#">Contato</NavItem>
      </div>
    </nav>
  )
}
