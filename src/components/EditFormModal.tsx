import { FormEvent, useState, useContext, ChangeEvent } from 'react';
import classes from './EditFormModal.module.css';
import { TodosContext } from '../store/todos-context';

const EditFormModal = (): JSX.Element => {
  const { onSaveEdition, todoToEditText, setIsModalOpen } =
    useContext(TodosContext);
  const [inputEditValue, setInputEditValue] = useState<string>(todoToEditText);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = window.confirm('Are you sure to save changes?');
    if (result) {
      onSaveEdition(inputEditValue);
    }
  };

  const handleChange: (event: ChangeEvent<HTMLInputElement>) => void = (
    event
  ) => {
    setInputEditValue(event.currentTarget.value);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={classes.modal}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <h2 className={classes.title}>Edit your todo</h2>
        <div className={classes.container}>
          <div className={classes['input-container']}>
            <label htmlFor="edit-input">Edit here:</label>
            <input
              type="text"
              id="edit-input"
              value={inputEditValue}
              onChange={handleChange}
            />
          </div>

          <div className={classes['buttons-edit-container']}>
            <button type="submit" className="button">
              Save changes
            </button>
            <button className="button button--cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default EditFormModal;
