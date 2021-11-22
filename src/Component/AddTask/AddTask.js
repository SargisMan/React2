import React from 'react';

class AddTask extends React.Component {
state = {
    inputValue:''
}
handleChange=(event)=>{
    const {value}=event.target;
    this.setState({
        inputValue: value
    }
    // ,()=>{
    //   console.log(`Render`, this.state.inputValue)
    // }
    )
}

    render(){
      const {inputValue}=this.state;
      const {handleSubmit}=this.props;
      const handleS=()=>{
        handleSubmit(inputValue);
        this.setState({
          inputValue:''
        });
      }
        return (
          <div>
            <input
              type="text"
              placeholder="Add text"
              onChange={this.handleChange}
              value={inputValue}
            ></input>
            <button
            onClick={handleS}
            >Add</button>
            {/* <button onClick={this.handleReset}>Reset</button> */}
          </div>
        );
    }
}

export default AddTask;