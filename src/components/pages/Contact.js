
import '../styles/style.css';
import { useState } from "react";
import validateEmail from '../../utils/helpers'




export default function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e)=>{
        const { target };
        const inputType = target.name;
        const inputValue = target.value;

        if(inputType === 'email'){
            setEmail(inputValue);
        } else if(inputType === 'name'){
            setName(inputValue);
        }else {
            setMessage(inputValue);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        
    };
};

    return(
    
        <div>
            <div > 
                <h1 style={{fontSize: 52}}>Contact Me</h1>
                <p>Do you have any questions for me? Please do not hesitate to reach out.👋🏼</p>
            </div>

            {/* Name */}
            <div class="form-group">
              <label class="col-md-3 control-label" for="name">Name</label>
              <div class="col-md-9">
                <input id="name" name="name" type="text" placeholder="Your name" class="form-control" onChange={handleChange}/>
              </div>
            </div>
            
            {/* Email */}
            <div class="form-group">
              <label class="col-md-3 control-label" for="email">Your E-mail</label>
              <div class="col-md-9">
                <input id="email" name="email" type="text" placeholder="Your email" class="form-control" onChange={handleChange}/>
              </div>
            </div>

            {/* Message */}
            <div class="form-group">
              <label class="col-md-3 control-label" for="message">Your message</label>
              <div class="col-md-9">
                <textarea class="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
              </div>
            </div>

            {/* Submit */}
            <div class="form-group">
              <div class="col-md-12 text-right">
                <button type="submit" class="btn btn-primary btn-lg">Submit</button>
              </div>
            </div>
        
        </div>
        
    
    );
}