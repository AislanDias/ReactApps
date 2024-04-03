import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './History.styles'
import { CyclesContext } from '../../contexts/CyclesContext'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <pre>{JSON.stringify(cycles)}</pre>

      <HistoryList>
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
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>{cycle.startDate.toISOString()}</td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}
                  </td>
                  <td>
                    {cycle.interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                  </td>

                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <Status statusColor="yellow">Em andamento</Status>
                  )}
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
