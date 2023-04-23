import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const SingleListItem = memo(({ index, isSelected, onClickHandler, text }) => {
  const handleClick = () => {
    onClickHandler(index); // pass index to onClickHandler
  };

  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red'}}
      onClick={handleClick} //  is pass handleClick as onClick event handler
    >
      {text}
    </li>
  );
});

SingleListItem.propTypes = {
  index: PropTypes.number.isRequired, // make index a required prop
  isSelected: PropTypes.bool.isRequired, // make isSelected a required prop
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

// List Component
const List = memo(({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: 'left' }}>
      {items && items.map((item, index) => ( // add a check for the items array before mapping
        <SingleListItem
          key={index} // add a unique key prop for each item
          onClickHandler={handleClick}
          text={item.text}
          index={index}
          isSelected={selectedIndex === index} // compare selectedIndex with index
        />
      ))}
    </ul>
  );
});

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

List.defaultProps = {
  items: null, // set a default value for items
};

export default List;
