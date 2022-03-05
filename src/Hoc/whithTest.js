import React from 'react';

const whithTest = (Component) => {
return class extends React.Component{
    state = {
        test:true,
    }
    render(){
return <Component test={this.state.test}/>
    }
}
}

export default whithTest;
