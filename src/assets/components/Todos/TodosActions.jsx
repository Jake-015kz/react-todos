import { MdOutlineAutoDelete } from "react-icons/md";
import { RiDeleteBin3Fill } from "react-icons/ri";
import styles from "./TodosActions.module.css";
import Button from "../UI/Button";
const TodosActions = ({ clearAll, clearCompleted, completedTodos }) => {
  return (
    <div className={styles.actions}>
      <Button title="Clear completed" onClick={clearCompleted} disabled={!completedTodos}>
        <MdOutlineAutoDelete /> Clear completed
      </Button>
      <Button title="Clear all" onClick={clearAll}>
        <RiDeleteBin3Fill /> Clear All
      </Button>
    </div>
  );
};

export default TodosActions;
