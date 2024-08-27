// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {title, id} = todo
  const onDeleting = () => {
    deleteTodo(id)
  }
  return (
    <li className="listItem">
      <p>{title}</p>
      <button type="button" className="button" onClick={onDeleting}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
