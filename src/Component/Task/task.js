import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Task=({task})=>{
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>Title: {task.text.slice(0,15)}</Card.Title>
          <Card.Text>Description: {task.text}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
}

export default Task;