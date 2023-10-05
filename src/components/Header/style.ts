import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;

      color: ${(props) => props.theme['gray-100']};

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme['green-500']};
      }
      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
