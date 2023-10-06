import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'
import { useForm } from 'react-hook-form'

interface newCicleFormSchema {
  task: string
  minutesAmount: number
}

export function Home() {
  const { register, handleSubmit, reset, watch } = useForm<newCicleFormSchema>({
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const taskTitle = watch('task')
  const isSubmitDisable = !taskTitle
  const handleCreateNewCicle = (data: newCicleFormSchema) => {
    console.log(data)
    reset()
  }
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCicle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option>Projeto 1</option>
            <option>Projeto 2</option>
            <option>Projeto 3</option>
            <option>Projeto 4</option>
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <StartCountDownButton type="submit" disabled={isSubmitDisable}>
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
