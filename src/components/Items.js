import React from 'react';

import { Card, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


class Items extends React.Component {

  handleClick = (idx) => {
    const item = this.props.itemsList[idx]
    this.props.handleDeleteItem(item)
  }
    render() {
    return (
      <section>
      <h2>Items...</h2>
        <div>
        <Accordion defaultActiveKey="0">
          {
            this.props.itemsList.map((item, idx)  =>
                <Card key={idx}>
                <Card.Header eventKey="0">
                <h3>Name: {item.name}</h3>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <h4><Card.Body>Description: {item.description} <Button key={idx} onClick={() => this.handleClick(idx)} data-testid={`delete-button-${item.name}`}>Delete Item</Button></Card.Body></h4>
                </Accordion.Collapse>
                </Card>
            )
          }
          </Accordion>
          </div>
    </section>
    )};
}


export default Items;
