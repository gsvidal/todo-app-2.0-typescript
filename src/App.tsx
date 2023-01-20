import './App.css';
import Todos from './components/Todos';
import Todo from './models/Todo';
import NewTodo from './components/NewTodo';
import { useState } from 'react';
import EditFormModal from './components/EditFormModal';

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoToEdit, setTodoToEdit] = useState<Todo>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleAddTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleRemoveTodo = (id: string | undefined) => {
    const result = window.confirm('This item will be deleted for good');
    if (result) {
      const updatedTodosAfterRemoving = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodosAfterRemoving);
    }
  };

  const handleSaveEdition = (newTodoText: string) => {
    const updatedTodo = new Todo(newTodoText, todoToEdit?.id);
    const updatedTodos = todos.map((todo) =>
      todo.id === todoToEdit?.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    //Finally modal is closed;
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <h1>Todo App - TypeScript</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      {todos.length > 0 ? (
        <Todos
          items={todos}
          onRemoveTodo={handleRemoveTodo}
          setIsModalOpen={setIsModalOpen}
          setTodoToEdit={setTodoToEdit}
        />
      ) : (
        <p>
          <strong>You don't have any todos yet</strong>{' '}
        </p>
      )}
      {isModalOpen && (
        <EditFormModal
          onSaveEdition={handleSaveEdition}
          todoToEditText={todoToEdit!.text}
        />
      )}
    </div>
  );
};

export default App;
