import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
        <header className="header">
            <h1>todo
                <img style={{ width: '60px', height: 'auto' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2zkkGaddGNVHRrel7Nr7m_LWdfhmyTrm7_94EuPf-w&s" alt="" />
            </h1>
            <CreateTodo saveTodo={onAddTodo}/>
        </header>
  )
}
