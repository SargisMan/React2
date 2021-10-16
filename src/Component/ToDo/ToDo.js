import React from 'react'


class ToDo extends React.Component {
    state={
        tasks:['Task1','Task2','Task3']
    }
render(){
    const Tasks=this.state.tasks.map((task,index)=>{
        return(
            <p key={index} className="task">
                {task}
                </p>
        )
    })
    return (
      <div>
        <h1>To do component</h1>
        <div>
          <input 
          type="text" 
          placeholder="Add text"
          >
          </input>
        </div>
        <div className="task_wrapper">{Tasks}</div>
      </div>
    );
}
}

export default ToDo;