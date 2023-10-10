import { useContext } from 'react'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      {activeCycle ? (
        <TaskInput id="task" defaultValue={activeCycle.task} disabled />
      ) : (
        <TaskInput
          type="text"
          id="task"
          placeholder="Dê um nome para o seu projeto"
          list="task-suggestions"
          {...register('task')}
        />
      )}

      <label htmlFor="minutesAmount">durante</label>
      {activeCycle ? (
        <MinutesAmountInput
          id="minutesAmount"
          defaultValue={activeCycle.minutesAmount}
          disabled
        />
      ) : (
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          {...register('minutesAmount', { valueAsNumber: true })}
        />
      )}
      <span>minutos.</span>

      <datalist id="task-suggestions">
        <option>Projeto 1</option>
        <option>Projeto 2</option>
        <option>Projeto 3</option>
        <option>Projeto 4</option>
      </datalist>
    </FormContainer>
  )
}
