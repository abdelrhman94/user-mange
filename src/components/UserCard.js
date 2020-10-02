import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const UserCard = ({ avatar, firstName, lastName, email }) => (
  <Card>
    <Card.Content>
      <Image floated="left" size="mini" src={avatar} />
      <Card.Header>{firstName + ' ' + lastName}</Card.Header>
      <Card.Meta>{email}</Card.Meta>
    </Card.Content>
  </Card>
);

export default UserCard;
