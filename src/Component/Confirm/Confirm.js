import {Modal,Button} from 'react-bootstrap';

const Confirm=(props)=>{
    // const handleClose=()=>{
    //     console.log('Modal Close');
    // };
const {onHide, onSubmit,massage}=props;
const handleSubmit = () => {
  onSubmit();
  onHide();
};
    return (
      <Modal show={true} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{massage}</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSubmit}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default Confirm;