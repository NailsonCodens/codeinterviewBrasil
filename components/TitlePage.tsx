import { FC } from 'react'
import { Props } from 'types/ChildrenString'
import { styled } from 'stitches.config'

const H1title = styled('h1', {
  fontFamily: 'Poppins',
  fontWeight: '900',
  textAlign: 'center',
  fontSize: '3rem',
  color: '$purpleDark',
  marginTop: 70,
  marginBottom: 50
})

const TitlePage: FC<Props> = ({ children }) => {
  return <H1title>{children}</H1title>
}

export default TitlePage
