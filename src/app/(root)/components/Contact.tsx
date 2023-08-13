import type { FC } from 'react'
import { ElementContainer } from '@/app/components/ElementContainer'
import { ContactItem } from '@/app/components/ContactItem'
import { LucideIcon } from '@/app/components/LucideIcon'

export const Contact: FC = () => (
  <ElementContainer data-id="contact" label="Contato">
    <div className="grid sm:grid-cols-3 gap-3 w-full">
      <ContactItem
        href="https://linkedin.com/in/lucioandradejr"
        Icon={(props) => <LucideIcon name="linkedin" {...props} />}
        label="LinkedIn"
      />
      <ContactItem
        href="mailto:lucioandradejr@gmail.com"
        Icon={(props) => <LucideIcon name="mail" {...props} />}
        label="Enviar E-mail"
      />
      <ContactItem
        href="https://github.com/lucioroadtoglory"
        Icon={(props) => <LucideIcon name="github" {...props} />}
        label="GitHub"
      />
    </div>
  </ElementContainer>
)
