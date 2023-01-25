import './App.css';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import EditFormModal from './components/EditFormModal';
import { useContext } from 'react';
import { TodosContext } from './store/todos-context';
import FilterTodo from './components/FilterTodo';

const App = (): JSX.Element => {
  const { items, isModalOpen, filteredTodos, inputSearchValue } =
    useContext(TodosContext);

  return (
    <div className="app">
      <h1>Todo App - TypeScript</h1>
      <NewTodo />
      <FilterTodo />
      {items?.length > 0 ? (
        <Todos />
      ) : (
        <p>
          <strong>You don't have todos yet</strong>{' '}
        </p>
      )}
      {items?.length > 0 &&
        filteredTodos.length === 0 &&
        inputSearchValue.trim() !== '' && (
          <p>
            <strong>No matching Todo's found with search criteria! </strong>{' '}
          </p>
        )}
      {isModalOpen && <EditFormModal />}
    </div>
  );
};

export default App;
