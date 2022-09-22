import { FC } from 'react'
import { styled } from 'stitches.config'

const ImgNav = styled('img', {})

const MenuHTML = styled('nav', {
  background: '$purpleBlack',
  width: '100%',
  height: '100%',
  [`& ${ImgNav}`]: {
    width: '50px',
    margin: 4
  }
})

const Menu: FC = () => {
  return (
    <MenuHTML>
      <a href="">
        <ImgNav src="https://cdn-icons-png.flaticon.com/512/234/234633.png" />
      </a>
      <a href="">Início</a>
      <a href="">Categorias</a>
      <a href="">Contato</a>
    </MenuHTML>
  )
}

export default Menu
