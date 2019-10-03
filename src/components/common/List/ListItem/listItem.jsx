import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './listItem.css';

const ListItem = props => {
  const { head, sub1, sub2, link } = props;

  return (
    <Link to={link}>
      <Card className='mb-3 text-left'>
        <Card.Body>
          <Card.Title>{head}</Card.Title>
          <Card.Subtitle>
            {sub1}, {sub2}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ListItem;
