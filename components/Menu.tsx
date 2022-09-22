import { FC } from 'react'
import { styled } from 'stitches.config'

const ImgNav = styled('img', {})

const MenuHTML = styled('nav', {
  background: '$purpleBlack',
  width: '100%',
  height: '50px',
  lineHeight: '50px',
  [`& ${ImgNav}`]: {
    width: '50px',
    margin: 4
  },
  textAlign: 'center'
})

const Link = styled('a', {
  color: '$white',
  fontFamily: 'Poppins',
  fontWeight: '600',
  textDecoration: 'none',
  margin: 20
})

const Menu: FC = () => {
  return (
    <MenuHTML>
      <Link href="">Início</Link>
      <Link href="">Categorias</Link>
      <Link href="">Contato</Link>
    </MenuHTML>
  )
}

export default Menu
