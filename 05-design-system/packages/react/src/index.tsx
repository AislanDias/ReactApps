import { styled } from '@stitches/react'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$andromeda500',
  borderRadius: '$md',
  padding: '$4',
})

export function App() {
  return <Button>Hello World</Button>
}
