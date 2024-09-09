import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input
        type="text"
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Todo..."
      />
      <Button type="submit" title="Add">
        <IoMdAdd />
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
