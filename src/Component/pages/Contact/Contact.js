import React from 'react';
import ContactForm from '../../ContactForm/ContactForm';
// import {ContactContext} from '../../../Context/ContactPageContext'
// import {useContext} from 'react';


const Contact =()=>{
    // const context=useContext(ContactContext);
    // console.log('contactContextTest',context)
        return(
        <div>
            <h1>Contact page</h1>
            <ContactForm />
        </div>
        )
}

export default Contact;