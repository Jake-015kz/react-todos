import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoList from "./assets/components/Todos/TodoList";
import TodoForm from "./assets/components/Todos/TodoForm";
import TodosActions from "./assets/components/Todos/TodosActions";

const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (text) => {
    const newTodos = {
      text,
      completed: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodos]);
  };
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const completeTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  const clearAllHandler = () => {
    setTodos([]);
  };
  const clearCompletedHandler = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  const completedTodos = todos.filter((todo) => todo.completed).length;
  return (
    <div className="App">
      <h1 className="app-title">Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          clearAll={clearAllHandler}
          clearCompleted={clearCompletedHandler}
          completedTodos={!!completedTodos}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        completeTodo={completeTodoHandler}
      />
      {completedTodos > 0 && (
        <p>
          You have completed {completedTodos}{" "}
          {completedTodos === 1 ? "todo" : "todos"}
        </p>
      )}
    </div>
  );
};

export default App;
