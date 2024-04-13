import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from './header.styles'

import logoImg from '../../assets/vite.svg'
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="" />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}
