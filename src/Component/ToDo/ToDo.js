import React from 'react';
import Task from '../Task/task';
import AddTask from '../AddTask/AddTask';
import idGenerator from '../../helpers/idGenerator';


class ToDo extends React.Component {
    state={
        tasks:['Task1','Task2'],
    }

handleSubmit=(value)=>{
  if(!value) return ;
  console.log(`value`, value);
  const tasks = [...this.state.tasks];
  tasks.push(value);
  this.setState({
    tasks
  })
}

render(){
  const {tasks}=this.state;
    const Tasks=this.state.tasks.map((task,index)=>{
        return(
            <Task task={task} key={idGenerator()}/>
        )
    })
    return (
      <div>
        <h1>To do component</h1>
        <AddTask 
        handleSubmit={this.handleSubmit}
        />
         <div className="task_wrapper">
          {!tasks.length && <div>This is Empty</div>}
          {Tasks}
        </div>
      </div>
    );
}
}

export default ToDo;