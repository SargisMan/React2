import React , {memo} from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import styles from './task.module.css';
import PropTypes from 'prop-types'

const Task = ({ 
  task, //object
  disabled, //boolean
  handleDeleteOneTask, //function
  toggleSetRemoveTaskIds,
  checked 
}) => {
  console.log(`render`)
  return (
    <Card className={`${styles.card} ${checked && styles.checked}`}>
      <Card.Body className="cardBody">
        <input
          type="checkbox"
          onChange={() => {
            toggleSetRemoveTaskIds(task._id);
          }}
          // onKeyPress={()=>console.log("key Press")}
          checked={checked}
        />
        <Card.Title>Title: {task.text.slice(0, 15)}</Card.Title>
        <Card.Text>Description: {task.text}</Card.Text>
        <div>
          <Button
            disabled={disabled}
            variant="danger"
            onClick={() => {
              handleDeleteOneTask(task._id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button variant="warning" className="ml-3">
            <FontAwesomeIcon icon={faEdit} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

// class Task extends React.PureComponent{
//   shouldComponentUpdate(nextProps,nextState){
// console.log(`prevProps`, this.props);
// console.log(`nextProps`, nextProps);
// return true
//   }


// shouldComponentUpdate(nextProps){
//   console.log('nextProps',nextProps);
//   if(
//     nextProps.checked===this.props.checked &&
//     nextProps.disabled===this.props.disabled
//   )
//   return false;
//   return true
// }

//   render(){
//     const{
//   task, 
//   disabled,
//   handleDeleteOneTask, 
//   toggleSetRemoveTaskIds,
//   checked 
//     }=this.props;

//     console.log(`render`)

//     return(
//     <Card className={`${styles.card} ${checked && styles.checked}`}>
//       <Card.Body className="cardBody">
//         <input
//           type="checkbox"
//           onClick={() => {
//             toggleSetRemoveTaskIds(task._id);
//           }}
//         />
//         <Card.Title>Title: {task.text.slice(0, 15)}</Card.Title>
//         <Card.Text>Description: {task.text}</Card.Text>
//         <div>
//           <Button
//             disabled={disabled}
//             variant="danger"
//             onClick={() => {
//               handleDeleteOneTask(task._id);
//             }}
//           >
//             <FontAwesomeIcon icon={faTrash} />
//           </Button>
//           <Button variant="warning" className="ml-3">
//             <FontAwesomeIcon icon={faEdit} />
//           </Button>
//         </div>
//       </Card.Body>
//     </Card>
//     )
//   }
// }

Task.propTypes={
  task:PropTypes.shape({
    _id:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired
  }),
  disabled:PropTypes.bool.isRequired,
  handleDeleteOneTask:PropTypes.func.isRequired,
  toggleSetRemoveTaskIds:PropTypes.func.isRequired,
  checked:PropTypes.bool.isRequired

}

export default memo(Task);