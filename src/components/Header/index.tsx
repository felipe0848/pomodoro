import { Scroll, Timer } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import logoTimer from '../../assets/logo-Timer.png'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img width={60} src={logoTimer} alt="" />
        <strong>pomodoro</strong>
      </span>

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
