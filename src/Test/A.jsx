import React from "react";
import B from '../Test/B';
import C from './C'

class A extends React.Component {
    state={
        inputValue:''
    }

    handleCatchValue=(inputValue)=>{
        this.setState((prevState)=>{
          return {
            inputValue:prevState.inputValue+inputValue
          }
        })
            // inputValue:inputValue
        //     inputValue
        // }, ()=>{
        //   console.log(`inputValue`, this.state.inputValue)
        // })
    }
  render() {
      const {inputValue}=this.state;
    return (
      <div>
        <h1>A Component</h1>
        <div>
            <B onSubmit={this.handleCatchValue}/>
        </div>
        <div>
            <C inputValue={inputValue}/>
        </div>
      </div>
    );
  }
}

export default A;
