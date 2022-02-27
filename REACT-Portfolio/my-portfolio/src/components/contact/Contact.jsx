import React, { useContext } from 'react'
import "./contact.css"
import addres from "../../images/addres.png"
import phone from "../../images/phone.png"
import email from "../../images/email.png"

/*Alusar el hook useRef, se importa solo*/
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react'
import { ThemeContext } from '../../context'

const Contact = () => {

    const formRef = useRef()
    const [done, setDone] = useState(false) // para agregar un mensaje luego del click
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
        e.preventDefault() //previene la actualizacion del sitio al hacer click en submit
    
       emailjs.sendForm('service_4mio0oc', 'template_77evkea', formRef.current, 'DH1v2biKt8-t1Pnw9')
      .then((result) => {
          console.log(result.text);
          setDone(true) // para agregar un mensaje luego del click
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div className='contact'>
        <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Ask me anything</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={phone} alt="" className='contact-icon'/>
                            +33 0601135376
                        </div>
                        <div className="contact-info-item">
                            <img src={email} alt="" className='contact-icon'/>
                            contacr@contact.com
                        </div>
                        <div className="contact-info-item">
                            <img src={addres} alt="" className='contact-icon'/>
                            57 Lesson Street, Rochefort 17300 France
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-description">
                        <b>Lorem, ipsum dolor.</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, vel?
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor:darkMode && '#333'}} type="text" placeholder='Name' name='user_name'/>
                        <input style={{backgroundColor:darkMode && '#333'}} type="text" placeholder='Subject' name='user_subject'/>
                        <input style={{backgroundColor:darkMode && '#333'}} type="text" placeholder='Email' name='user_email'/>
                        <textarea style={{backgroundColor:darkMode && '#333'}} name="message" id="" cols="" rows="5" placeholder='Message'></textarea>
                        <button>Submit</button>
                        {done && "Thank you /*mensaje*/"} 
                    </form>
                </div>
            </div>
        
    </div>
  )
}

export default Contact