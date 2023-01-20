import './App.css';
import Todos from './components/Todos';
import Todo from './models/Todo';
import NewTodo from './components/NewTodo';
import { useState } from 'react';

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAddTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  const handleRemoveTodo = (id: string) => {
    const updatedTodosAfterRemoving = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodosAfterRemoving);
  };

  return (
    <div>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos items={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default App;
