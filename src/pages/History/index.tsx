import { HistoryContainer, Status, TableContainer } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status Color="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status Color="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status Color="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status Color="green">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status Color="green">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status Color="green">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status Color="green">Em andamento</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
    </HistoryContainer>
  )
}