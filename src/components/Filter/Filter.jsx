import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/slice';
import { getFilter } from 'redux/filter/selectors';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className="inputForm">
      <label className="inputLabel">
        Find contacts by name
        <input
          className="inputField"
          type="text"
          value={filter}
          onChange={onChange}
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Roman Kovalchuk"
          required
        />
      </label>
    </div>
  );
}
