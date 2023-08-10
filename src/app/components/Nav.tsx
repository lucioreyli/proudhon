import { ComponentProps, FC } from 'react'
import { ThemeButton } from './ThemeButton'

const NavItem: FC<ComponentProps<'a'>> = ({ children }) => {
  return <a>{children}</a>
}

export const Nav: FC = () => {
  return (
    <nav className="flex justify-between font-light">
      <p className="">LucioReyli</p>
      <div className="flex gap-7">
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Our Work</NavItem>
        <NavItem href="#">Services</NavItem>
        <NavItem href="#">Achievement</NavItem>
      </div>
      <ThemeButton />
    </nav>
  )
}
