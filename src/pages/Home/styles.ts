import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: 700;
  flex-wrap: wrap;
`
const BaseInput = styled.input`
  background: transparent;
  border: none;
  font-size: 1.125rem;
  font-weight: 700;
  height: 2.5rem;
  padding: 0 0.5rem;

  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-bottom: 2px solid ${(props) => props.theme['green-500']};
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

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
`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
`

const BaseCountDownButton = styled.button`
  width: 100%;
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  border-radius: 8px;

  color: ${(props) => props.theme['gray-100']};
  cursor: pointer;
`
export const StartCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme['green-500']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`
export const StopCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme['red-500']};
  &:hover {
    background: ${(props) => props.theme['red-700']};
  }
`
