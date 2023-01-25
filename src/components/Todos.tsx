import TodoItem from './TodoItem';
import classes from './Todos.module.css';
import { useContext, useEffect } from 'react';
import { TodosContext } from '../store/todos-context';

const Todos = (): JSX.Element => {
  const { items, inputSearchValue, setFilteredTodos, filteredTodos } =
    useContext(TodosContext);

  useEffect(() => {
    const filteredItems = items.filter((item) =>
      item.text.includes(inputSearchValue)
    );
    setFilteredTodos(filteredItems);
  }, [items, inputSearchValue, setFilteredTodos]);

  return (
    <ul className={classes.todos}>
      {filteredTodos.map((item) => {
        const { id } = item;
        return <TodoItem key={id} item={item} />;
      })}
    </ul>
  );
};

export default Todos;
