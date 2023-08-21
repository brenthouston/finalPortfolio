import "../styles/style.css";
// import { useState } from "react";
// import {validateEmail} from '../../utils/helpers'

// export default function Contact(){
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleChange = (e)=>{
//         const { target }= e;
//         const inputType = target.name;
//         const inputValue = target.value;

//         if(inputType === 'email'){
//                 setEmail(inputValue);

//         } else if(inputType === 'name'){
//             setName(inputValue);
//         }else if (inputType ==='message'){
//             setMessage(inputValue);
//         }else{
//             return
//         }
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if(!validateEmail(email)) {
//             alert('Email is invalid');
//             return;
//         }

//         if(name.trim().length === 0){
//             alert('Name is a required field')
//         }else if(message.trim().length === 0){
//             alert('Please enter a message')
//         }else{
//             alert('🎉 Thank you for reaching out! You will hear from me soon!')
//             setName('');
//             setEmail('');
//             setMessage('');

//         }

//     };

//     return(

//         <div className='container contact'>
// <div >
//     <h1 style={{fontSize: 52}}>Contact Me</h1>
//     <p className='contact'>Have you any questions? Please do not hesitate to contact me.👋🏼</p>
// </div>

//             {/* Name */}
//             <div class="form-group">
//               <label class="col-md-3 control-label" for="name">Name</label>
//               <div class="col-md-9">
//                 <input id="name"
//                 name="name"
//                 style={{background:'var(--accent1)'}}
//                 value={name}
//                 type="text"
//                 placeholder="Your name"
//                 class="form-control"
//                 pattern="((.|\n)*)"
//                 onChange={handleChange}/>
//               </div>
//             </div>

//             {/* Email */}
//             <div class="form-group">
//               <label class="col-md-3 control-label" for="email">Your E-mail</label>
//               <div class="col-md-9">
//                 <input style={{background:'var(--accent1)'}} id="email"
//                 name="email"
//                 value={email}
//                 type="text"
//                 placeholder="Your email"
//                 class="form-control"
//                 onChange={handleChange}/>
//               </div>
//             </div>

//             {/* Message */}
//             <div class="form-group">
//               <label class="col-md-3 control-label" for="message">Your message</label>
//               <div class="col-md-9">
//                 <textarea class="form-control"
//                 style={{background:'var(--accent1)'}}
//                 id="message"
//                 name="message"
//                 value={message}
//                 placeholder="Please enter your message here..."
//                 rows="5"
//                 onChange={handleChange}
//                 ></textarea>
//               </div>
//             </div>

//             {/* Submit */}
//             <div class="form-group">
              // <div class="col-md-12 text-right">
              //   <button type="submit"
              //   onClick={handleSubmit}
              //   class="btn btn-primary btn-lg">Submit</button>
              // </div>
//             </div>

//         </div>

//     );
// }

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3ef9pe4",
        "template_7kmto7f",
        form.current,
        "yyhPRoHyAalEO1fRR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Thank you for reaching out. You will hear from me soon!")
  }

  return (
    <div className="container contact">
      <div>
        <h1 style={{ fontSize: 52 }}>Contact Me</h1>
        <p className="contact">
          Have you any questions? Please do not hesitate to contact me.👋🏼
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div class="form-group">
          <label class="col-md-3 control-label">Name</label>
          <div class="col-md-9">
            <input
              class="form-control"
              style={{ background: "var(--accent1)" }}
              type="text"
              name="user_name"
              placeholder="Your email"
              pattern="((.|\n)*)"
            />
          </div>
        </div>

        <div class="form-group">
        <label class="col-md-3">Email</label>
        <div class="col-md-9">
        <input type="email" name="user_email" placeholder="Your email"
                 class="form-control" style={{background:'var(--accent1)'}} /></div>
</div>

<div class="form-group">
        <label class="col-md-3 control-label">Message</label>
        <div class="col-md-9">
        <textarea name="message" class="form-control" style={{background:'var(--accent1)'}}placeholder="Please enter your message here..." rows="5"/>
        </div>
</div>

<div class="form-group">
  <div class="col-md-12 text-right">
        <input class="btn btn-primary btn-lg" type="submit" value="Send" style={  {backgroundColor: "var(--accent3) !important",
  marginTop: "15px",
  color: "var(--accent2) !important",
  border: "none !important"}} onClick={handleSubmit}/>
        </div>
        </div>
      </form>
    </div>
  );
}
