import React from 'react';
import {Form, Button, Modal} from 'react-bootstrap';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker"


class TaskActionsModal extends React.Component {
  constructor(props){
    super(props);
    this.inputRef=React.createRef()
    this.state={
      title:'',
      description:'',
      ...props.editableTask,
      date:props.editableTask? new Date(props.editableTask.date):new Date()
    }
  }
state = {
    inputValue:''
}
handleChange=(event)=>{
    const {name, value}=event.target;
    this.setState({
        [name]: value
    }
    );
}

handleS = ({key, type}) => {
const { title,description, date } = this.state;
const { onSubmit, onHide } = this.props;
  if(
    (type==='keypress'&& key!=='Enter')||(!title && !description)
    ) return;
  // console.log("input", this.inputRef.current.value);

const formData={
  title,
  description,
  date
}
 onSubmit(formData);
        onHide();
      }

handleSetDate=(date)=>{
  this.setState({
    date
  });
}
      

      componentDidMount(){
      this.inputRef.current.focus();
      }

    render(){
    const { title, description, date } = this.state;
    const {onHide}=this.props
      return(
      <Modal
        show={true}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Task Modal
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex flex-column align-items-center">
          <Form.Control
            name="title"
            type="text"
            placeholder="Title"
            onChange={this.handleChange}
            onKeyPress={this.handleS}
            value={title}
            style={{ width: "70%" }}
            //   disabled={disabled}
            ref={this.inputRef}
          />
          <Form.Control
            name="description"
            placeholder="Description"
            onChange={this.handleChange}
            className="my-3 mb-3"
            as="textarea"
            rows={3}
            style={{ width: "70%", resize: "none" }}
            value={description}
          />
          <DatePicker 
          selected={date} 
          onChange={(date:Date) => this.handleSetDate(date)
          } />
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onHide} variant="secondary">
            Close
          </Button>
          <Button 
          onClick={this.handleS} 
          variant="primary"
          disabled={!!!title||!!!description}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
        );
    }
}

TaskActionsModal.propTypes={
  onSubmit:PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  editableTask:PropTypes.object
}
export default TaskActionsModal;