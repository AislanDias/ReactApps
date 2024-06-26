import { globalStyles } from "@/styles/global"
// import logoImg from '../assets/logo.svg'
import homeImg from '../assets/home.png'

import Image from "next/image";
import { Container, Header } from "@/styles/pages/app.styles";

globalStyles();

export default function App({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <Container>
          <Header>
            <Image src={homeImg} alt="" />
          </Header>
          {children}
        </Container>
      </body>
    </html>
  )
}
