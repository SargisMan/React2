import React, {Fragment} from 'react';
import Task from '../Task/task';
import AddTask from '../AddTask/AddTask';
import idGenerator from '../../helpers/idGenerator';
import {Container, Row, Col, Button} from 'react-bootstrap'
// import Button from '@restart/ui/esm/Button';
// import withTest from '../../Hoc/whithTest';
// import withScreenSizes from '../../Hoc/withScreenSizes';
import Confirm from '../Confirm/Confirm';
import EditTaskModal from '../EditTaskModal/EditTaskModal'


class ToDo extends React.Component {
  state = {
    tasks: [
      {
        _id: idGenerator(),
        title: "Income tax ",
        description: `An income tax is a tax imposed on individuals or entities 
        (taxpayers) in respect of the income or profits earned by them (commonly called taxable income). 
        Income tax generally is computed as the product of a tax rate times the taxable income. 
        Taxation rates may vary by type or characteristics of the taxpayer and the type of income.`,
      },
      {
        _id: idGenerator(),
        title: "Corporate tax",
        description: `A corporate tax, also called corporation tax or company tax, is a direct 
        tax imposed by a jurisdiction on the income or capital of corporations or analogous legal entities. 
        Many countries impose such taxes at the national level, and a similar tax may be imposed at state 
        or local levels. The taxes may also be referred to as income tax or capital tax.`,
      },
      {
        _id: idGenerator(),
        title: "Value-added tax",
        description: `A value-added tax (VAT), known in some countries as a goods and services
         tax (GST), is a type of tax that is assessed incrementally. It is levied on the price of a product 
         or service at each stage of production, distribution, or sale to the end consumer.`,
      },
    ],
    removeTasks: new Set(),
    isAllChecked: false,
    isConfirmModal: false,
    editableTask: null,
  };

  handleSubmit = (formData) => {
    if (!formData.title || !formData.description) return;
    // console.log(`value`, value);
    const tasks = [...this.state.tasks];
    tasks.push({
      _id: idGenerator(),
      title: formData.title,
      description: formData.description,
    });
    this.setState({
      tasks,
    });
  };

  handleDeleteOneTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((item) => item._id !== id);
    this.setState({
      tasks,
    });
    // const idx=tasks.findIndex(item=>item._id===id);
    // tasks.splice(idx,1);
  };

  toggleSetRemoveTaskIds = (_id) => {
    let removeTasks = new Set(this.state.removeTasks);
    if (removeTasks.has(_id)) {
      removeTasks.delete(_id);
    } else {
      removeTasks.add(_id);
    }

    this.setState({
      removeTasks,
    });
  };

  removeSelectedTasks = () => {
    let tasks = [...this.state.tasks];
    const { removeTasks } = this.state;
    tasks = tasks.filter((item) => !removeTasks.has(item._id));

    this.setState({
      tasks,
      removeTasks: new Set(),
      isAllChecked: false,
    });
  };

  handleToggleCheckAll = () => {
    const { tasks, isAllChecked } = this.state;
    let removeTasks = new Set();
    if (!isAllChecked) {
      removeTasks = new Set(this.state.removeTasks);
      tasks.forEach((task) => {
        removeTasks.add(task._id);
      });
    }
    this.setState({
      removeTasks,
      isAllChecked: !isAllChecked,
    });
  };

  handleToggleOpenModal = () => {
    this.setState({
      isConfirmModal: !this.state.isConfirmModal,
    });
  };

  handleSetEditTask = (task) => {
    this.setState({
      editableTask: task,
    });
  };

  setEditableTaskNull=()=>{
    this.setState({
      editableTask:null
    })
  }

  handleEditTask = (editTask) => {
        const tasks = [...this.state.tasks];
        const idx = tasks.findIndex((task) => task._id === editTask._id);
        tasks[idx] = editTask;
        this.setState({
            tasks
        });
    }
  render() {
    // console.log('props ToDo',this.props)
    const { tasks, removeTasks, isAllChecked, isConfirmModal, editableTask } =
      this.state;
    const Tasks = this.state.tasks.map((task, index) => {
      // սարքում ենք Tasks-ը, որ return անենք
      return (
        <Col
          key={task._id}
          className="d-flex justify-content-center mt-3"
          xs={12} //ամենափոքր չափի դեպքում կերևա 1 հատ
          md={6} //կերևա 2 հատ
          xl={3} //ամենաշատը 3 հատ կերևա
        >
          <Task
            task={task}
            handleDeleteOneTask={this.handleDeleteOneTask}
            toggleSetRemoveTaskIds={this.toggleSetRemoveTaskIds}
            disabled={!!removeTasks.size}
            checked={removeTasks.has(task._id)}
            handleSetEditTask={this.handleSetEditTask}
          />
        </Col>
      );
    });
    // console.log("test",this.props.test)
    return (
      <Fragment>
        <div>
          <Container>
            <Row className="mt-4">
              <Col>
                <h1>To do component</h1>
                <AddTask
                  handleSubmit={this.handleSubmit}
                  disabled={!!removeTasks.size}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              {!tasks.length && <div>This is Empty</div>}
              {Tasks} {/* դնում ենք վերևում սարքած Tasks-ը */}
            </Row>
            <Row>
              <Col>
                <Button
                  variant="danger"
                  // onClick={this.removeSelectedTasks}
                  onClick={this.handleToggleOpenModal}
                  disabled={!!!removeTasks.size}
                >
                  Remove Selected
                </Button>
                <Button
                  variant="primary"
                  className="ml-5"
                  onClick={this.handleToggleCheckAll}
                  disabled={!!!tasks.length}
                >
                  {isAllChecked ? "RemoveAllSelected" : "Select All"}
                </Button>
              </Col>
            </Row>
          </Container>
          {isConfirmModal && (
            <Confirm
              onHide={this.handleToggleOpenModal}
              onSubmit={this.removeSelectedTasks}
              // count={removeTasks.size}
              massage={`Do you want delet ${removeTasks.size} task ?`}
            />
          )}
          {editableTask && 
            <EditTaskModal
              editableTask={editableTask}
              onHide={this.setEditableTaskNull}
              onSubmit={this.handleEditTask}
            />
          }
        </div>
      </Fragment>
    );
  }
}

export default ToDo;