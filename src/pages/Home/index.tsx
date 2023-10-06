import { HandPalm, Play } from 'phosphor-react'
import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from './styles'
import { FormProvider, useForm } from 'react-hook-form'
import { NewCycleForm } from './Components/NewCycleForm'
import { Countdown } from './Components/Countdown'
import { CyclesContext, newCycleFormSchema } from '../../contexts/CyclesContext'
import { useContext } from 'react'

export function Home() {
  const { activeCycle, createNewCicle, interruptCurrentCycle } =
    useContext(CyclesContext)
  const CycleForm = useForm<newCycleFormSchema>({
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, reset, watch } = CycleForm

  const handleCreateNewCicle = (data: newCycleFormSchema) => {
    createNewCicle(data)
    reset()
  }

  const taskTitle = watch('task')
  const isSubmitDisable = !taskTitle

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCicle)}>
        <FormProvider {...CycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountDownButton onClick={interruptCurrentCycle} type="submit">
            <HandPalm size={24} />
            Interromper
          </StopCountDownButton>
        ) : (
          <StartCountDownButton type="submit" disabled={isSubmitDisable}>
            <Play size={24} />
            Começar
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  )
}
