import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'
import {
  createNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { differenceInSeconds } from 'date-fns'

export interface newCycleFormSchema {
  task: string
  minutesAmount: number
}
interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCicle: (data: newCycleFormSchema) => void
  interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}
export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispath] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem('Pomodoro-Cycles-State')

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('Pomodoro-Cycles-State', stateJSON)
  }, [cyclesState])

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }
    return 0
  })

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds)
  }

  const markCurrentCycleAsFinished = () => {
    dispath(markCurrentCycleAsFinishedAction())

    document.title = `Pomodoro | Timer`
  }

  const createNewCicle = (data: newCycleFormSchema) => {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispath(createNewCycleAction(newCycle))

    setAmountSecondsPassed(0)
  }

  const interruptCurrentCycle = () => {
    dispath(interruptCurrentCycleAction())

    document.title = `Pomodoro | Timer`
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCicle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
