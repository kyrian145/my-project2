import Todo from './Todos'


const TodoList = ({todos}) => {
  return (
    <div>
        {todos.map(
            (todo)=>{
                <Todo todo={todo} key={todo.id}  />
            }
        )}
    </div>
  )
}

export default TodoList