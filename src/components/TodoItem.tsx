import { MouseEvent, MouseEventHandler } from 'react';
import Todo from '../models/Todo';
import classes from './TodoItem.module.css';

type TodoItemProps = {
  item: Todo;
  onRemoveTodo: (id: string) => void;
};

const TodoItem = ({ item, onRemoveTodo }: TodoItemProps): JSX.Element => {
  return (
    <li
      className={classes.item}
      key={item.id}
      onClick={(event: MouseEvent<HTMLLIElement>) => onRemoveTodo(item.id)}
    >
      {item.text}
    </li>
  );
};

export default TodoItem;
