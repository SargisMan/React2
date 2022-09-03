import React from 'react';
import styles from '../SingleTask/singleTask.module.css';
import dateFommatter from '../../../helpers/date';
import {Button} from 'react-bootstrap';
import TaskActionsModal from '../../TaskActionsModal/TaskActionsModal';
import Preloader from '../../Preloader/Preloader';

class SingleTask extends React.Component{
state={
    singleTask:null,
    isEditModal:false,
    loading:false
}

toggleEditModal=()=>{
    this.setState({
        isEditModal:!this.state.isEditModal
    })
}

handleEditTask=(formData)=>{
    this.setState({loading:true}) //loading started
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
        singleTask:data,
        isEditModal:false,
        })
        // this.props.history.push('/')
    })
    .catch(error=>{
        console.error('Edit task data error', error)
    })
    .finally(()=>{this.setState({loading:false})}) //loading ended
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
    this.setState({loading:true}) //loading started
    const {id}=this.props.match.params;
    fetch(`http://localhost:3001/task/${id}`)
    .then(res=>res.json())
    .then(data=>{
        console.log('data',data);
        if(data.error)
            throw data.error;
            this.setState({
                singleTask: data,
                loading:false //loading ended
            });
    })
    .catch(error=>{
        const {history}=this.props;
        history.push("/404");
        console.error('Get singleTask data Error', error)
    })
}
    render(){
        // console.log('props',props);   
        const {
            singleTask, 
            isEditModal, 
            loading
            }=this.state;
        // if(!singleTask){
        //     return <div>
        //         <span>Loading...</span>
        //     </div>
        // }     

          if(!singleTask) return <Preloader/>

        return(
            <>
        <div className={styles.singleTask}>
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
        {
            loading && <Preloader/>
        }
        </>
        )
    }
}
    

export default SingleTask;