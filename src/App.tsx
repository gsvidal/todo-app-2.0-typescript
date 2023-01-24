import './App.css';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import EditFormModal from './components/EditFormModal';
import { useContext } from 'react';
import { TodosContext } from './store/todos-context';

const App = (): JSX.Element => {
  const { items, isModalOpen } = useContext(TodosContext);
  return (
    <div className="app">
      <h1>Todo App - TypeScript</h1>
      <NewTodo />
      {items?.length > 0 ? (
        <Todos />
      ) : (
        <p>
          <strong>You don't have todos yet</strong>{' '}
        </p>
      )}
      {isModalOpen && <EditFormModal />}
    </div>
  );
};

export default App;
