import "../styles/style.css";
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
          alert('🎉 Thank you for reaching out. You will hear from me soon!')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };



  return (
    <div id="contact" className="container contact">
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
        <input class="btn1" type="submit" value="Connect"/>
        </div>
        </div>
      </form>
    </div>
  );
}
