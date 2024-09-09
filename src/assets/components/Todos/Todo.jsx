import styles from "./Todo.module.css";
import { RiTodoFill, RiDeleteBin7Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
const Todo = ({ todo, deleteTodo, completeTodo }) => {
  return (
    <div
      className={`${styles.todoItem} ${
        todo.completed ? styles.completedTodo : ""
      }`}
    >
      <div className={styles.icon}>
        <RiTodoFill className={styles.todoIcon} />
        <p className={styles.text}>{todo.text}</p>
      </div>
      <div className={styles.icon}>
        <RiDeleteBin7Fill
          className={styles.delete}
          onClick={() => deleteTodo(todo.id)}
        />
        <FaCheck
          className={styles.check}
          onClick={() => completeTodo(todo.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
