
import '../styles/style.css';
import { useState } from "react";
import {validateEmail} from '../../utils/helpers'




export default function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


 


    const handleChange = (e)=>{
        const { target }= e;
        const inputType = target.name;
        const inputValue = target.value;

    

        if(inputType === 'email'){
                setEmail(inputValue);
        

        } else if(inputType === 'name'){
            setName(inputValue);
        }else if (inputType ==='message'){
            setMessage(inputValue);
        }else{
            return 
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            alert('Email is invalid');
            return;
        }
        
        if(name.trim().length === 0){
            alert('Name is a required field')
        }else if(message.trim().length === 0){
            alert('Please enter a message')
        }else{
            alert('🎉 Thank you for reaching out! You will hear from me soon!')
            setName('');
            setEmail('');
            setMessage('');

        }
        
    };


    return(
    
        <div className='container contact'>
            <div > 
                <h1 style={{fontSize: 52}}>Contact Me</h1>
                <p className='contact'>Have you any questions? Please do not hesitate to contact me.👋🏼</p>
            </div>

            {/* Name */}
            <div class="form-group">
              <label class="col-md-3 control-label" for="name">Name</label>
              <div class="col-md-9">
                <input id="name" 
                name="name" 
                style={{background:'var(--accent1)'}}
                value={name}
                type="text" 
                placeholder="Your name" 
                class="form-control" 
                pattern="((.|\n)*)"
                onChange={handleChange}/>
              </div>
            </div>
            
            {/* Email */}
            <div class="form-group">
              <label class="col-md-3 control-label" for="email">Your E-mail</label>
              <div class="col-md-9">
                <input style={{background:'var(--accent1)'}} id="email" 
                name="email" 
                value={email}
                type="text" 
                placeholder="Your email" 
                class="form-control" 
                onChange={handleChange}/>
              </div>
            </div>

            {/* Message */}
            <div class="form-group">
              <label class="col-md-3 control-label" for="message">Your message</label>
              <div class="col-md-9">
                <textarea class="form-control" 
                style={{background:'var(--accent1)'}}
                id="message" 
                name="message" 
                value={message}
                placeholder="Please enter your message here..." 
                rows="5"
                onChange={handleChange}
                ></textarea>
              </div>
            </div>

            {/* Submit */}
            <div class="form-group">
              <div class="col-md-12 text-right">
                <button type="submit" 
                onClick={handleSubmit}
                class="btn btn-primary btn-lg">Submit</button>
              </div>
            </div>
        
        </div>
        
    
    );
}