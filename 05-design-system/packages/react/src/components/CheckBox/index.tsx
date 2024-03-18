import { ComponentProps } from 'react'
import { CheckboxIndicator, CheckboxContainer } from './styles'
import { Check } from 'phosphor-react'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> { }

export function CheckBox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}
