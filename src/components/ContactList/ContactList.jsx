import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactAction } from 'redux/contacts/slice';
import { useSelector } from 'react-redux';

import { getContacts, getFilteredContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const listedContacts = getFilteredContacts(contacts, filter);
  return (
    <ul className="list">
      {listedContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className="listContact">
            <p>
              {name}: {number}
            </p>
            <button
              className="listButton"
              type="button"
              id={id}
              onClick={() => dispatch(deleteContactAction(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
