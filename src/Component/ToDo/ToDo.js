import React from 'react';
import Task from '../Task/task';
import AddTask from '../AddTask/AddTask'


class ToDo extends React.Component {
    state={
        tasks:['Task1','Task2'],
        inputValue:''
    }

    handleChange=(event)=>{
      console.log(`event`, event.target.value);
      this.setState({
        inputValue: event.target.value,
      });
    }

    handleReset=()=>{
      this.setState({
        inputValue:''
      })
    }

render(){
  const {tasks, inputValue}=this.state;
    const Tasks=this.state.tasks.map((task,index)=>{
        return(
            <Task task={task} key={index}/>
        )
    })
    return (
      <div>
        <h1>To do component</h1>
        <AddTask />
        <div>
          <input
            type="text"
            placeholder="Add text"
            onChange={this.handleChange}
            value={inputValue}
          ></input>
          <button>Add</button>
          <button
          onClick={this.handleReset}
          >Reset</button>
        </div>
        <div>
          <p>{inputValue}</p>
        </div>
        <div className="task_wrapper">
          {!tasks.length && <div>This is Empty</div>}
          {Tasks}
        </div>
      </div>
    );
}
}

export default ToDo;