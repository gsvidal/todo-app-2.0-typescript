import { ReactNode } from 'react';
import Todo from '../models/Todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

type TodosProps = {
  items: Todo[];
  children?: ReactNode;
  onRemoveTodo: (id: string | undefined) => void;
  setIsModalOpen: (bool: boolean) => void;
  setTodoToEdit: (obj: Todo) => void;
};

const Todos = ({
  items,
  onRemoveTodo,
  setIsModalOpen,
  setTodoToEdit,
}: TodosProps): JSX.Element => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => {
        const { id } = item;
        console.log(id);
        return (
          <TodoItem
            onRemoveTodo={onRemoveTodo}
            key={id}
            item={item}
            setIsModalOpen={setIsModalOpen}
            setTodoToEdit={setTodoToEdit}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
