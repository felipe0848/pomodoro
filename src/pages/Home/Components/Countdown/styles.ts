import styled from 'styled-components'

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  font-weight: 700;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;
  span {
    padding: 2rem 1rem;
    background: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
  }
  @media (max-width: 630px) {
    line-height: 60%;
    span {
      font-size: 60%;
    }
  }
  @media (max-width: 405px) {
    line-height: 40%;
    span {
      font-size: 35%;
    }
  }
`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  overflow: hidden;

  display: flex;
  justify-content: center;

  @media (max-width: 630px) {
    padding: 1.5rem 0;
    width: 3rem;
  }
  @media (max-width: 405px) {
    font-size: 70%;
  }
`
