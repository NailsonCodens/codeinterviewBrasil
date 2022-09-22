import { FC } from 'react'
import { Props } from 'types/ChildrenString'
import { styled } from '@stitches/react'

const Titleleft = styled('h1', {
  fontFamily: 'Poppins',
  fontWeight: '900',
  fontSize: '1.5rem',
  color: '$grey',
  marginTop: 30,
  marginBottom: 0
})

const TitleLeft: FC<Props> = ({ children }) => {
  return <Titleleft>{children}</Titleleft>
}

export default TitleLeft
