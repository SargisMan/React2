import React from 'react';
import {Form, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

class AddTask extends React.Component {
  constructor(props){
    super(props);
    this.inputRef=React.createRef()
    this.state={
      inputValue:''
    }
  }
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

handleS = ({key, type}) => {
  
  if(type==='keypress'&& key!=='Enter') return;
  // console.log("input", this.inputRef.current.value);
const { inputValue } = this.state;
const { handleSubmit } = this.props;
        
handleSubmit(inputValue);
        this.setState({
          inputValue:''
        });
      }

      componentDidMount(){
      this.inputRef.current.focus();
      }

    render(){
      // console.log('ref', this.inputRef)
      const { inputValue } = this.state;
      const {disabled}=this.props
        return (
          <div className="d-flex justify-content-center mt-4">
            <Form.Control
              type="text"
              placeholder="Add text"
              onChange={this.handleChange}
              onKeyPress={this.handleS}
              value={inputValue}
              style={{width:"70%"}}
              disabled={disabled}
              ref={this.inputRef}
            />
            <Button 
            variant="primary"
            onClick={this.handleS}
            disabled={!!!inputValue}>
              Add
              </Button>
            {/* <button onClick={this.handleReset}>Reset</button> */}
          </div>
        );
    }
}

AddTask.propTypes={
  handleSubmit:PropTypes.func.isRequired,
  disabled:PropTypes.bool.isRequired
}
export default AddTask;