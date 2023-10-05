import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;

  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h1 {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.5rem;
    line-height: 1.6;
  }
`

export const TableContainer = styled.div`
  flex: 1;
  overflow: auto;
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    th {
      color: ${(props) => props.theme['gray-100']};
      background: ${(props) => props.theme['gray-600']};
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.6;
      padding: 1rem;
      text-align: left;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }
    td {
      background: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      font-size: 0.875rem;
      line-height: 1.6;
      padding: 1rem;
      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`
const colorStatus = {
  green: 'green-500',
  yellow: 'yellow-500',
  red: 'red-500',
}
interface StatusProps {
  Color: keyof typeof colorStatus
}
export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme[colorStatus[props.Color]]};
  }
`
