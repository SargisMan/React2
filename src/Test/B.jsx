import React from "react";

class B extends React.Component {
  state = {
    inputValue: ''
  };

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit=(e)=>{
    //   console.log(`Event`, this.props.onSubmit)
    const {onSubmit}=this.props;
    const {inputValue}=this.state;
    onSubmit(inputValue)
  }

  render() {
    const { inputValue } = this.state;

    return (
      <div>
        <h1>B Component: Input</h1>
        <input
          type="text"
          placeholder="input"
          onChange={this.handleChange}
          value={inputValue}
        />
        <button 
        onClick={this.handleSubmit}
        >Transfer</button>
      </div>
    );
  }
}

export default B;
