import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  @media (max-width: 1024px) {
    margin: 5rem 2rem;
  }
  @media (max-width: 425px) {
    height: max-content;
    gap: 4rem;
  }
`
