import { MouseEvent } from 'react';
import Todo from '../models/Todo';
import classes from './TodoItem.module.css';
import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';

type TodoItemProps = {
  item: Todo;
};

const TodoItem = ({ item }: TodoItemProps): JSX.Element => {
  const { setTodoToEdit, setIsModalOpen, onRemoveTodo } =
    useContext(TodosContext);
  return (
    <li className={classes.item} key={item.id}>
      <p className={classes['item-title']}>{item.text}</p>
      <div className={classes['buttons-container']}>
        <button
          onClick={() => {
            setTodoToEdit(item);
            setIsModalOpen(true);
          }}
          className={`button ${classes['item-actions']}`}
        >
          Edit
        </button>
        <button
          onClick={(event: MouseEvent<HTMLButtonElement>) =>
            onRemoveTodo(item.id)
          }
          className={`button ${classes['item-actions']} ${classes['item-actions--delete']}`}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
