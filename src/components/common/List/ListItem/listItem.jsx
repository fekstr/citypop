import React from 'react';
import { Card } from 'react-bootstrap';
import './listItem.css';

const ListItem = props => {
  const { head, sub1, sub2 } = props;

  return (
    <Card className='mb-3 text-left'>
      <Card.Body>
        <Card.Title>{head}</Card.Title>
        <Card.Subtitle>
          {sub1}, {sub2}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default ListItem;
