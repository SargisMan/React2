import React from 'react';
import {HooksContext} from '../Context/ContextDemo'

class Lifecycle2 extends React.Component{
    constructor(props){
        super(props);
        console.log('Constructor');
        this.state={
            count:0
        }
    }
    static getDerivedStateFromProps(nextProps,nextState){
        // console.log("getDerivedStateFromProps");
        // console.log("1 arg",nextProps);
        // console.log("2 arg",nextState);
        return null
    }

    // componentDidMount(){
    //     console.log("Component Did Mount");
    // }

    // componentDidUpdate(){
    //     console.log("Component Did Update")
    // }
    // componentWillUnmount(){
    //     console.log("ComponentWillUnmount");
    // }
render(){
   return <HooksContext.Consumer>
        
    {(data2)=>{
        console.log('data2',data2)
        return(
            <div>
                <h1>Lifecycle2</h1> 
                <p>{data2.name}</p>  
                {this.state.count}  
                <div>
                    <button onClick={()=>this.setState({count: this.state.count+1})}>Plus</button>
                    </div>       
            </div>
            )
    }
}

    </HooksContext.Consumer>
}
}

export default Lifecycle2;