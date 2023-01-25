import { useState, createContext } from 'react';
import Todo from '../models/Todo';

type TodosContextObj = {
  items: Todo[];
  todoToEditText: string;
  isModalOpen: boolean;
  setIsModalOpen: (bool: boolean) => void;
  setTodoToEdit: (todo: Todo) => void;
  onAddTodo: (todoText: string) => void;
  onRemoveTodo: (id: string | undefined) => void;
  onSaveEdition: (newTodoText: string) => void;
  inputSearchValue: string;
  setInputSearchValue: (val: string) => void;
  filteredTodos: Todo[];
  setFilteredTodos: (todos: Todo[]) => void;
};

type TodosContextProviderProps = {
  children: JSX.Element;
};

export const TodosContext = createContext<TodosContextObj>(
  {} as TodosContextObj
);

export const TodosContextProvider = ({
  children,
}: TodosContextProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);

  const [todoToEdit, setTodoToEdit] = useState<Todo>({} as Todo);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputSearchValue, setInputSearchValue] = useState<string>('');

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

  const contextValue: TodosContextObj = {
    items: todos,
    todoToEditText: todoToEdit!.text,
    isModalOpen: isModalOpen,
    setIsModalOpen: setIsModalOpen,
    setTodoToEdit: setTodoToEdit,
    onAddTodo: handleAddTodo,
    onRemoveTodo: handleRemoveTodo,
    onSaveEdition: handleSaveEdition,
    inputSearchValue: inputSearchValue,
    setInputSearchValue: setInputSearchValue,
    filteredTodos: filteredTodos,
    setFilteredTodos: setFilteredTodos,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};
