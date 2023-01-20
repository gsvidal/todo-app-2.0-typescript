import { ReactNode } from 'react';
import Todo from '../models/Todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

type TodosProps = {
  items: Todo[];
  children?: ReactNode;
  onRemoveTodo: (id: string) => void;
};

const Todos = ({ items, onRemoveTodo }: TodosProps): JSX.Element => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => {
        const { id } = item;
        return <TodoItem onRemoveTodo={onRemoveTodo} key={id} item={item} />;
      })}
    </ul>
  );
};

export default Todos;
