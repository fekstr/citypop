import React from 'react';
import ListItem from './ListItem/listItem';

const List = props => {
  const { items } = props;
  console.log(items);

  return (
    <ul>
      {items.map(item => (
        <ListItem key={item.id} head={item.head} sub1={item.sub1} sub2={item.sub2} link={item.link} />
      ))}
      ;
    </ul>
  );
};

export default List;
