import * as React from 'react';
import "./Contact.css";

export const Contact = () => {
  return (
    <form className="contactform"  method="POST">
      <div className="form-group">
        <label className= "name "htmlFor="name">Your Name</label>
        <input placeholder="Name"type="text" className="form-control1" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Your e-mail address</label>
        <input placeholder="example@example.com" type="email" className="form-control" aria-describedby="emailHelp" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Your Message</label>
        <textarea placeholder="I wanted to reach out to ask.." className="form-control" rows="5"></textarea>
      </div>
      <button type="submit" className="button">Submit</button>
    </form>
  )
}

