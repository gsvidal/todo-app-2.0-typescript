import { FormEvent, useState } from 'react';
import classes from './EditFormModal.module.css';

type EditFormProps = {
  onSaveEdition: (newText: string) => void;
  todoToEditText: string;
  setIsModalOpen: (bool: boolean) => void;
};

const EditFormModal = ({
  onSaveEdition,
  todoToEditText,
  setIsModalOpen,
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
              value={inputValue}
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
