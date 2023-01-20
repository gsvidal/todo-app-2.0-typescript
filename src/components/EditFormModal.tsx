import { FormEvent, useState } from 'react';
import classes from './EditFormModal.module.css';

type EditFormProps = {
  onSaveEdition: (newText: string) => void;
  todoToEditText: string;
};

const EditFormModal = ({
  onSaveEdition,
  todoToEditText,
}: EditFormProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(todoToEditText);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = window.confirm('Are you sure to save changes?');
    if (result) {
      onSaveEdition(inputValue);
    }
  };
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };
  return (
    <section className={classes.modal}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <h2 className={classes.title}>Edit your todo</h2>
        <div className={classes.container}>
          <label htmlFor="edit-input">Edit here:</label>
          <input
            type="text"
            id="edit-input"
            value={inputValue}
            onChange={handleChange}
          />
          <button className="button">Save changes</button>
        </div>
      </form>
    </section>
  );
};

export default EditFormModal;
