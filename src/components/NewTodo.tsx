import { FormEvent, useRef } from 'react';
import classes from './NewTodo.module.css';

type NewTodoProps = {
  onAddTodo: (text: string) => void;
};

const NewTodo = ({ onAddTodo }: NewTodoProps): JSX.Element => {
  const todoTextInputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim() === '') {
      // throw error
      return;
    }
    onAddTodo(enteredText);
    // Resetting the form
    formRef.current!.reset();
  };
  return (
    <form
      ref={formRef}
      action=""
      onSubmit={handleSubmit}
      className={classes.form}
    >
      <label htmlFor="text">Write a todo</label>
      <input
        className={classes['text-input']}
        type="text"
        id="text"
        ref={todoTextInputRef}
      />
      <button className="button">Add todo</button>
    </form>
  );
};

export default NewTodo;
