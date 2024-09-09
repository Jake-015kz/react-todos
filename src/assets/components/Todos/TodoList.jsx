import styled from "./TodoList.module.css";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <div className={styled.todoList}>
      {!todos.length ? (
        <h2 className={styled.text}>No todos</h2>
      ) : (
        todos.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
        ))
      )}
    </div>
  );
};

export default TodoList;
