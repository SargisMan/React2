import React, {Component} from 'react';
import Country from '../JSTests/Country'

class Counter extends Component {
// constructor(props){
//     super();
//     this.state={
//         counter: props.counter,
//         componentName:'Counter'
//     }
    
// }

    state={
        counter:this.props.counter,
        componentName:'Counter',
        isArmenia: true
    }


 setCounter=(SEvent)=>{
//         console.log(`SEvent`, SEvent)
// this.state.counter=this.state.counter+1;
// console.log(`state`, this.state)
this.setState({
    counter:this.state.counter+1
})
    }


toggleChangeCountry = () => {
this.setState({
    isArmenia:!this.state.isArmenia
})
}

    render(){
        // console.log(`state`, this.state)
        const {counter}=this.state;
        return (
          <div>
            <div>
              <p>{counter}</p>
              <button onClick={this.setCounter}>+</button>
            </div>
            <Country isArmenia={this.state.isArmenia} toggleChangeCountry={this.toggleChangeCountry}/>
          </div>
        );
    }
}

export default Counter;