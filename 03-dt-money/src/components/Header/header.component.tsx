import { HeaderContainer, HeaderContent, NewTransactionButton } from "./header.styles";

import logoImg from '../../assets/vite.svg'

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="" />
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}
