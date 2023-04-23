# RISHI_FRONTEND
HAVE FIXED SOME CODE FOR ASSIGMENT

ALL ANSWER ARE README FILE ONLY

QUESTIONS
1.Explain what the simple List component does.
2.What problems / warnings are there with code?
3.Please fix, optimize, and/or modify the component as much as you think is necessary
_______________________________________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________________________________
ANSWER 1:

The List component is a simple and reusable component that lets you create a list of selectable items.
The List component is a component that shows a list of items where each item has some text. It lets you click on an item to choose it, and when you do that, its background color becomes green.

To create a list of items, you pass an array of items to the List component. Each item in the array is an object that has a text property. The List component then renders a SingleListItem component for each item.

The SingleListItem component is a special type of component that remembers what it previously rendered and only re-renders if its props have changed. It receives four props:

index: a number that tells the component which item it's rendering
isSelected: a boolean that tells the component if it's selected or not
onClickHandler: a function that's called when the component is clicked
text: the text that should be shown on the component
When an item is clicked, the handleClick function is called with the item's index as an argument. This function then updates the selectedIndex state with the index of the clicked item, which changes the background color of the item to green.
_______________________________________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________________________________
ANSWER 2

  ERROR 1
***-----***



In the WrappedSingleListItem component, the onClickHandler prop is being called directly instead of passing it as a function. This will cause the onClick event to be 
fired immediately on render, which is not the intended behavior. To fix this, the onClickHandler should be passed as a function So the changes required is



          --------------------------------------------------------------------------------
          |     onClick={onClickHandler(index)}                                           |
          |                                                                               |
          |                                                                               |
          |                             to                                               |
          |                                                                              |
          |                                                                              |
          |                                         onClick={handleClick}                |
          |                                                                              |
          |                                                                              |
          |                                                                              |
          ---------------------------------------------------------------------------------
          
          
          
              Error 2
          ***---------***
          
          
          
          In the WrappedListComponent, the useState hook is not being used correctly. The first element returned by useState should be the initial state value, but in
          this case, the setter function is being passed as the first element. This can be fixed by changing the useState declaration so the required changes are
          
         ---------------------------------------------------------------------------------
          |                                                                              |
          |                                                                              |
          |   const [setSelectedIndex, selectedIndex] = useState();                      |
          |                                     to                                       |
          |                                                                              |
          |                     const [selectedIndex, setSelectedIndex] = useState(null);|
          |                                                                              |
          |                                                                              |
          |                                                                              |
          --------------------------------------------------------------------------------
          
              Error 3
          ***---------***
          In the WrappedListComponent, the PropTypes for the items prop are not defined
          correctly. The PropTypes.array method should be passed a single argument, which is
          the PropTypes.shapeOf method. The correct PropTypes declaration for items is:
          
            --------------------------------------------------------------------------------
          |                                                                               |
          |      WrappedListComponent.propTypes = {                                       |
          |      items: PropTypes.array(PropTypes.shapeOf({                               |
          |        text: PropTypes.string.isRequired,                                     |
          |           })),                                                                |
          |               };                                                              |
          |             WrappedListComponent.defaultProps = {                             |
          |                items: null,                                                   |
          |                 };                                                            |
          |                                                                               |
          |                            to                                                 |
          |                                                                               |
          |                                                                               |
          |                                                                               |
          |        List.propTypes = {                                                     |
          |          items: PropTypes.arrayOf(                                            |
          |           PropTypes.shape({                                                   |
          |      text: PropTypes.string.isRequired,                                       |
          |           })                                                                  |
          |              ),                                                               |
          |               };                                                              |
          |                                                                               |
          |           List.defaultProps = {                                               |
          |              items: null, // set a default value for items                    |
          |                     };                                                        |
          ---------------------------------------------------------------------------------
          
 ____________________________________________________________________________________________________________________________________________________________________
 ______________________________________________________________________________________________________________________________________________________________________
               ANSWER 3
          ***____________***
          
          
          
          
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


  
  
  
  THEIR ARE MINOR CHANGES ALSO 
  __________________________________________________________________________________________________________________________________________________________________
  __________________________________________________________________________________________________________________________________________________________________

