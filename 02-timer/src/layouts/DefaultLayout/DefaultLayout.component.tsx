import { Outlet } from 'react-router-dom'
import { Header } from '../../componets/Header.component'
import { LayoutContainer } from './DefaultLayout.styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}

