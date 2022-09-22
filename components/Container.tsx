import { FC } from 'react'
import { styled } from 'stitches.config'

type Props = {
  children: JSX.Element
}

const ContainerHTML = styled('div', {
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'auto',
  alignItems: 'center',
  justifyContent: 'center',
  '&.containers-blog': {
    marginTop: '4rem'
  }
})

const Container: FC<Props> = ({ children }) => {
  return <ContainerHTML>{children}</ContainerHTML>
}

export default Container
