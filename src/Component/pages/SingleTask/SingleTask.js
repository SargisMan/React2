import React from 'react';
import styles from '../SingleTask/singleTask.module.css';
import dateFommatter from '../../../helpers/date';
import {Button} from 'react-bootstrap'

class SingleTask extends React.Component{
state={
    singleTask:null
}
componentDidMount(){
    const {id}=this.props.match.params;
    fetch(`http://localhost:3001/task/${id}`)
    .then(res=>res.json())
    .then(data=>{
        console.log('data',data);
        if(data.error)
            throw data.error;
            this.setState({
                singleTask: data
            });
    })
    .catch(error=>{
        console.error('Get singleTask data Error', error)
    })
}

handleHistoryTest=()=>{
    // console.log('singleTask',this.props);
    const {history}=this.props;
    // history.goBack();
    // history.goForward()
    history.push('/')
}

    render(){
        // console.log('props',props);   
        const {singleTask}=this.state;
        if(!singleTask){
            return <div>
                <span>Loading...</span>
            </div>
        }     

        return(
        <div className={styles.singleTask}>
            {/* <h1>SingleTask page</h1> */}
            <div className={styles.task}>
                <div>
                    <button onClick={this.handleHistoryTest}>
                        History test
                    </button>
                </div>
                <h2>{singleTask.title}</h2>
                <p>{singleTask.description}</p>
                <p>Date:   <span className={styles.date}>{dateFommatter(singleTask.date)}</span></p>
                <p>Created_at:   <span className={styles.created_at}>{dateFommatter(singleTask.created_at)}</span></p>
                <div>
                    <Button variant="danger"
                    style={{backgroundColor:"#962e2e", border:0}}
                    >
                        Delete
                    </Button>
                    <Button 
                    variant="warning"
                    style={{backgroundColor:"#64a0eb", border:0, marginLeft:50}}
                    // className="ml-5"
                    >
                        Edit
                    </Button>
                </div>
            </div>
        </div>
        )
    }
}
    

export default SingleTask;