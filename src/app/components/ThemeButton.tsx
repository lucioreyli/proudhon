import type { ComponentProps, FC } from 'react'
import { LucideIcon } from './LucideIcon'
import { cookies } from 'next/headers'

export const ThemeButton: FC<ComponentProps<'button'>> = () => {
  const serverAction = async () => {
    'use server'

    const previousTheme = cookies().get('theme')?.value ?? 'light'
    cookies().set('theme', previousTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <form action={serverAction}>
      <button type="submit">
        <LucideIcon name="Sun" />
      </button>
    </form>
  )
}
