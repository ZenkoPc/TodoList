import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoTitle, type FilterValues, type TodoId, type Todo as TodoType } from './types'
import { TODO_FILTERS } from './const'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mockTodos = [
  {
    id: '1',
    title: 'Sacar la',
    completed: false
  },
  {
    id: '2',
    title: 'No jodas',
    completed: false
  },
  {
    id: '3',
    title: 'La madres q',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValues>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((ob) => {
      if (ob.id === id) {
        return {
          ...ob,
          completed
        }
      }
      return ob
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValues): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length

  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo}/>
      <Todos todos={filteredTodos} onRemoveTodo={handleRemove} onToggleCompleted={handleCompleted} />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
