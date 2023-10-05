import { Scroll, Timer } from 'phosphor-react'
import { HeaderContainer } from './style'
import { NavLink } from 'react-router-dom'
import logoIgnite from '../../assets/Logo-Ignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}