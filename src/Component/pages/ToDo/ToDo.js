import React, {Fragment} from 'react';
import Task from '../../Task/task';
// import idGenerator from '../../helpers/idGenerator';
import dateFommatter from '../../../helpers/date';
import {Container, Row, Col, Button} from 'react-bootstrap'
// import Button from '@restart/ui/esm/Button';
// import withTest from '../../Hoc/whithTest';
// import withScreenSizes from '../../Hoc/withScreenSizes';
import Confirm from '../../Confirm/Confirm';
// import EditTaskModal from '../EditTaskModal/EditTaskModal';
import TaskActionsModal from '../../TaskActionsModal/TaskActionsModal';
import Preloader from '../../Preloader/Preloader';


class ToDo extends React.Component {
  state = {
    tasks: [],
    removeTasks: new Set(),
    isAllChecked: false,
    isConfirmModal: false,
    editableTask: null,
    isOpenAddTaskModal: false,
    loading:false
  };

  handleSubmit = (formData) => {
    if (!formData.title || !formData.description) return;
    formData.date=dateFommatter(formData.date);
    // console.log(`value`, value);
    const tasks = [...this.state.tasks];
    this.setState({
      loading:true
    }) //loading started
    fetch("http://localhost:3001/task/",{
      method:"POST",
      body:JSON.stringify(formData),
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.error){
        throw data.error
      };
      tasks.push(data);
      this.state.isOpenAddTaskModal && this.toggleOpenAddTaskModal()
      // this.state.editableTask && this.handleSetEditTask()
      this.setState({
        tasks,
      });     
    })
    .catch(error=>{
      console.log("Catch error",error)
    })
    .finally(()=>{
    this.setState({
      loading:false
    }) //loading finished
    })
  };

  handleDeleteOneTask = (_id) => {
    this.setState({loading:true}) //loading started
    console.log("http://localhost:3001/task/"+_id)
fetch("http://localhost:3001/task/"+_id,{
  method:"DELETE",
})
.then(res=>res.json())
.then(data=>{
  if(data.error){
    throw data.error
  }
  let tasks = [...this.state.tasks];
  tasks = tasks.filter((item) => item._id !== _id);
  this.setState({
    tasks,
  });
})
.catch(error=>{
  console.log('DELETE task request error',error)
})
.finally(()=>{
  this.setState({loading:false}) //loading ended
})
   
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
    this.setState({loading:true}) //loading started
    fetch("http://localhost:3001/task",{
      method:"PATCH",
      body:JSON.stringify({tasks:Array.from(this.state.removeTasks)}),
      headers:{
        "Content-Type":"Application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.error){
        throw data.error
      }

    let tasks = [...this.state.tasks];
        const { removeTasks } = this.state;
        tasks = tasks.filter((item) => !removeTasks.has(item._id));

        this.setState({
          tasks,
          removeTasks: new Set(),
          isAllChecked: false,
        });
      console.log('data',data)
    })
    .catch(error=>{
return console.error('Delete any task request error',error)
    })
    .finally(()=>{
      this.setState({loading:false})
    })
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

  setEditableTaskNull = () => {
    this.setState({
      editableTask: null,
    });
  };

  handleEditTask = (editTask) => {
    this.setState({loading:true}) //loading started
    fetch("http://localhost:3001/task/"+editTask._id,{
      method:"PUT",
      body:JSON.stringify(editTask),
      headers:{
        "Content-Type":"Application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.error){
        throw data.error
      }
      const tasks = [...this.state.tasks];
      const idx = tasks.findIndex((task) => task._id === data._id);
      tasks[idx] = data;
      this.state.editableTask && this.handleSetEditTask();
      this.setState({
        tasks,
      });
    })
   .catch(error=>{
    console.log('Edit request data error',error)
   })
   .finally(()=>{
    this.setState({loading:false}) //loading ended
   })
  };

  toggleOpenAddTaskModal = () => {
    this.setState({
      isOpenAddTaskModal: !this.state.isOpenAddTaskModal
    });
  };

  // componentDidUpdate(prevProps,prevState){
  //   console.log('prevState', prevState);
  // }

  componentDidMount(){
    this.setState({
      loading:true
    })
    fetch("http://localhost:3001/task")
    .then(res=>res.json())
    .then(data=>{
      if(data.error){
        throw data.error
      }
      this.setState({
        tasks:data,
      })
      // console.log('data',data)
    })
    .catch(error=>{
      console.log('Get tasks request data error',error)
    })
    .finally(()=>{
      this.setState({
        loading:false
      })
    })

    // console.log('this-props',this.props)
  }

  render() {
    // console.log('props ToDo',this.props)
    const {
      tasks,
      removeTasks,
      isAllChecked,
      isConfirmModal,
      editableTask,
      isOpenAddTaskModal,
      loading
    } = this.state;


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
                <Button variant="primary" onClick={this.toggleOpenAddTaskModal}>
                  Add Task
                </Button>
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
          {editableTask && (
            <TaskActionsModal
              editableTask={editableTask}
              onHide={this.setEditableTaskNull}
              onSubmit={this.handleEditTask}
            />
          )}
          {isOpenAddTaskModal && (
            <TaskActionsModal
              // onHide={this.toggleOpenAddTaskModal}
              // handleSubmit={this.handleSubmit}
              onHide={this.toggleOpenAddTaskModal}
              onSubmit={this.handleSubmit}
            />
          )}

          {
            loading && <Preloader/>
          }
        </div>
      </Fragment>
    );
  }
}

export default ToDo;