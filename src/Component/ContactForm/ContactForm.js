import React, {createRef} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './ContactForm.module.css'

const inputsInfo =[
  {
    name:"name",
    controlId:"formBasicName",
    label:"Name",
    type:"text"
  },
  {
    name:"email",
    controlId:"formBasicEmail",
    label:"Email",
    type:"email"
  },
  {
    name:"phoneNumber",
    controlId:"formBasicNumber",
    label:"Phone number",
    type:"number"
  },
  {
    name:"message",
    controlId:"textAreaForContactPage",
    label:"Message",
    as:"textarea", // type:"textarea",
    rows:3,
    maxLength:100
  }
]

class ContactForm extends React.Component{
  constructor(props){
    super(props);
    this.inputRef=createRef()
    // console.log('ref props',props)
    this.state={
      name:"",
      email:"",
      phoneNumber:"",
      message:""
    }
  }

  handleChange=(event)=>{
    const {name, value}=event.target;
console.log(`
name:${name},
value:${value}`);

this.setState({
  [name]:value
})
  }

  componentDidMount(){
    // console.log('inputRef',this.inputRef)
    this.inputRef.current.focus()
  }

    render(){
      const inputs=inputsInfo.map((input,index)=>{
        return (
          <Form.Group 
          className="mb-3" 
          controlId={input.controlId} 
          className={styles.formGroup} 
          key={index}
          >
        <Form.Label>
          {input.label}
        </Form.Label>

        <Form.Control 
        name={input.name}
        type={input.type} 
        placeholder={input.label} 
        as={input.as} //եթե type-նա լինում,type-նա դնում, եթե as-նա լինում as-ը
        rows={input.rows}
        maxLength={input.maxLength}
        ref={!index?this.inputRef:null} //index-ը true-ով է գալիս, քանի որ 1-ին input-ի index-ը կլինի 0. !0 անում է true
        onChange={this.handleChange}
        value={this.state[input.name]}
        required
        // ref={this.inputRef}
        />
      </Form.Group>
        )
      })
        return(
        <div style={{width:"40%",margin:"0 auto"}}>
    <Form>
      {/* <Form.Group className="mb-3" controlId="formBasicName" className={styles.formGroup} >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" ref={this.inputRef}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail" className={styles.formGroup}>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber" className={styles.formGroup}>
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="number" placeholder="Phone number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="textAreaForContactPage" className={styles.formGroup}>
        <Form.Label>Message area</Form.Label>
        <Form.Control as="textarea" rows={3} maxLength={100}/>
      </Form.Group> */}
      {inputs}
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
        )
    }
}

export default ContactForm