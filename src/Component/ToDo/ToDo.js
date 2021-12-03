import React from 'react';
import Task from '../Task/task';
import AddTask from '../AddTask/AddTask';
import idGenerator from '../../helpers/idGenerator';
import {Container, Row, Col} from 'react-bootstrap'


class ToDo extends React.Component {
  state = {
    tasks: [
      {
        _id: idGenerator(),
        text: `Income tax     ։ An income tax is a tax imposed on individuals or entities 
        (taxpayers) in respect of the income or profits earned by them (commonly called taxable income). 
        Income tax generally is computed as the product of a tax rate times the taxable income. 
        Taxation rates may vary by type or characteristics of the taxpayer and the type of income.`,
      },
      {
        _id: idGenerator(),
        text: `Corporate tax   ։ A corporate tax, also called corporation tax or company tax, is a direct 
        tax imposed by a jurisdiction on the income or capital of corporations or analogous legal entities. 
        Many countries impose such taxes at the national level, and a similar tax may be imposed at state 
        or local levels. The taxes may also be referred to as income tax or capital tax. `,
      },
      {
        _id: idGenerator(),
        text: `Value-added tax ։ A value-added tax (VAT), known in some countries as a goods and services
         tax (GST), is a type of tax that is assessed incrementally. It is levied on the price of a product 
         or service at each stage of production, distribution, or sale to the end consumer.`,
      },
    ],
  };

  handleSubmit = (value) => {
    if (!value) return;
    console.log(`value`, value);
    const tasks = [...this.state.tasks];
    tasks.push({
      _id: idGenerator(),
      text: value,
    });
    this.setState({
      tasks,
    });
  };

  render() {
    const { tasks } = this.state;
    const Tasks = this.state.tasks.map((task) => {
      return (
        <Col
          key={task._id}
          className="d-flex justify-content-center mt-3"
          xs={12} //ամենափոքր չափի դեպքում կերևա 1 հատ
          md={6} //կերևա 2 հատ
          xl={3} //ամենաշատը 3 հատ կերևա
        >
          <Task task={task} />
        </Col>
      );
    });
    return (
      <div>
        <Container>
          <Row className="mt-4">
            <Col>
              <h1>To do component</h1>
              <AddTask handleSubmit={this.handleSubmit} />
            </Col>
          </Row>
          <Row className="mt-4">
            {!tasks.length && <div>This is Empty</div>}
            {Tasks}
          </Row>
        </Container>
      </div>
    );
  }
}

export default ToDo;