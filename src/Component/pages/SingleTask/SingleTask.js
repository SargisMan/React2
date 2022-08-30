import React from 'react';
import styles from '../SingleTask/singleTask.module.css';
import dateFommatter from '../../../helpers/date';
import {Button} from 'react-bootstrap';
import TaskActionsModal from '../../TaskActionsModal/TaskActionsModal'

class SingleTask extends React.Component{
state={
    singleTask:null,
    isEditModal:false
}

toggleEditModal=()=>{
    this.setState({
        isEditModal:!this.state.isEditModal
    })
}

handleEditTask=(formData)=>{
    fetch("http://localhost:3001/task/" + formData._id,{
        method:"PUT",
        body:JSON.stringify(formData),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.error)
        throw data.error;
        // console.log('singleTask Edit data',data)
       this.setState({
        singleTask:data
        })
        this.props.history.push('/')
    })
    .catch(error=>{
        console.error('Edit task data error', error)
    })
}

handleDeleteTask=(id)=>{
fetch(`http://localhost:3001/task/${id}`,{
    method:"DELETE"
})
.then(res=>res.json())
.then(data=>{
    if(data.error)
    throw data.error;
    this.props.history.push('/')
})
.catch(error=>{
    console.error('DELETE singleTask error',error)
})
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
    render(){
        // console.log('props',props);   
        const {singleTask, isEditModal}=this.state;
        if(!singleTask){
            return <div>
                <span>Loading...</span>
            </div>
        }     

        return(
            <>
        <div className={styles.singleTask}>
            <div>
                <button onClick={()=>this.props.history.goBack()}>
                    Go Back
                </button>
            </div>
            {/* <h1>SingleTask page</h1> */}
            <div className={styles.task}>
                <h2>{singleTask.title}</h2>
                <p>{singleTask.description}</p>
                <p>Date:   <span className={styles.date}>{dateFommatter(singleTask.date)}</span></p>
                <p>Created_at:   <span className={styles.created_at}>{dateFommatter(singleTask.created_at)}</span></p>
                <div>
                    <Button variant="danger"
                    style={{backgroundColor:"#962e2e", border:0}}
                    onClick={()=>this.handleDeleteTask(singleTask._id)}
                    >
                        Delete
                    </Button>
                    <Button 
                    variant="warning"
                    style={{backgroundColor:"#64a0eb", border:0, marginLeft:50}}
                    onClick={this.toggleEditModal}
                    // className="ml-5"
                    >
                        Edit
                    </Button>
                </div>
            </div>
        </div>
        {
            isEditModal && <TaskActionsModal
            editableTask={singleTask}
            onHide={this.toggleEditModal}
            onSubmit={this.handleEditTask}
            />
        }
        </>
        )
    }
}
    

export default SingleTask;