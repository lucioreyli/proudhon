import { ComponentProps, FC } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: 'font-medium rounded-md px-3 py-2 text-sm',
  variants: {
    color: {
      primary: 'bg-blue-500 hover:bg-blue-400 text-white',
      white: 'bg-white hover:bg-gray-100 text-black',
    },
  },
})

type Props = ComponentProps<'button'> & VariantProps<typeof button>

export const Button: FC<Props> = ({ children, color }) => (
  <button className={button({ color })}>{children}</button>
)
