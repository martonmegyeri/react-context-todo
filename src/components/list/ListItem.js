import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './ListItem.scss';

const ListItem = ({ item, onComplete, onDelete }) => {
  return (
    <li
      className={classnames('list__item', {
        'completed': item.completed
      })}
      key={item.id}
    >
      <input
        type="checkbox"
        className="list__item__checkbox"
        checked={item.completed}
        onChange={() => onComplete(item)}
      />
      <span className="list__item__name">{item.name}</span>
      <span className="list__item__close" onClick={() => onDelete(item)}>&times;</span>
    </li>
  )
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ListItem;
