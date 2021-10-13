import React from 'react'
// import {Component} from 'react'


// class D extends from Compnent {...}
class D extends React.Component {
    // constructor(this.props){
    //     this.props=props
    // }
    render() {
        // console.log(`this.props`, this.props)
        const {name, username}=this.props;
        return(
            <div>
                <h1>I am the D class Component</h1>
                <p>Name={name}</p>
                <p>Username={username} </p>
            </div>
        )
    }
}

export default D;