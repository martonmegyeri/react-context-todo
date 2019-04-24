import React, { useState, useContext } from 'react';

import { StateContext } from '../context';
import { addItem, completeItem, deleteItem } from '../context/list/actions';
import './List.scss';
import ListItem from './list/ListItem';

const List = () => {
  const [text, setText] = useState('');
  const [{ list }, dispatch ] = useContext(StateContext);

  const onTextChange = e => {
    setText(e.target.value);
  }

  const onInputEnterKeyPress = e => {
    if (e.key === 'Enter') {
      this.onSubmit();
    }
  }

  const onSubmit = () => {
    if (text.length === 0) return;

    const item = {
      id: list.items.length,
      completed: false,
      name: text
    }

    setText('');
    addItem(item, dispatch);
  }

  const onComplete = item => {
    completeItem(item, dispatch);
  }

  const onDelete = item => {
    deleteItem(item, dispatch);
  }

  const renderList = () => {
    return list.items.map((item, index) => (
      <ListItem
        key={index}
        item={item}
        onComplete={onComplete}
        onDelete={onDelete}
      />
    ));
  }

  return (
    <div className="list">
      <div className="list__input-wrap">
        <input
          type="text"
          name="text"
          value={text}
          onChange={onTextChange}
          onKeyPress={onInputEnterKeyPress}
        />
        <button onClick={onSubmit}>Add</button>
      </div>
      <ul>
        {renderList()}
      </ul>
    </div>
  );
}

export default List;