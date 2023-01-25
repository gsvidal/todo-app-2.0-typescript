import classes from './FilterTodo.module.css';
import { ChangeEvent, useState, useContext } from 'react';
import { TodosContext } from '../store/todos-context';

const FilterTodo = () => {
  const { inputSearchValue, setInputSearchValue } = useContext(TodosContext);

  const handleChange: (event: ChangeEvent<HTMLInputElement>) => void = (
    event
  ) => {
    setInputSearchValue(event.currentTarget.value);
  };

  return (
    <form className={classes.form}>
      <label htmlFor="search-input">Search:</label>
      <input
        type="text"
        id="search-input"
        className={classes['search__input']}
        value={inputSearchValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default FilterTodo;
