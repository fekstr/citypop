import React from 'react';
import { Card } from 'react-bootstrap';
import './listItem.css';

const ListItem = props => {
  const { head, sub1, sub2, link } = props;

  return (
    <a href={link}>
      <Card className='mb-3 text-left'>
        <Card.Body>
          <Card.Title>{head}</Card.Title>
          <Card.Subtitle>
            {sub1}, {sub2}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </a>
  );
};

export default ListItem;
