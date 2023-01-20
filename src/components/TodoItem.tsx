import { MouseEvent } from 'react';
import Todo from '../models/Todo';
import classes from './TodoItem.module.css';

type TodoItemProps = {
  item: Todo;
  onRemoveTodo: (id: string | undefined) => void;
  setIsModalOpen: (bool: boolean) => void;
  setTodoToEdit: (obj: Todo) => void;
};

const TodoItem = ({
  item,
  onRemoveTodo,
  setIsModalOpen,
  setTodoToEdit,
}: TodoItemProps): JSX.Element => {
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
