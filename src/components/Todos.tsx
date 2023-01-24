import TodoItem from './TodoItem';
import classes from './Todos.module.css';
import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';

const Todos = (): JSX.Element => {
  const { items } = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {items.map((item) => {
        const { id } = item;
        return <TodoItem key={id} item={item} />;
      })}
    </ul>
  );
};

export default Todos;
