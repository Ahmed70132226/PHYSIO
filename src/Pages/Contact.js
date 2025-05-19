import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')


    const signupHandler = (e) => {

        e.preventDefault()

        console.log(name , email , subject, message)
         alert("Done successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");

    }

  return (
    <div className="container my-5 text-dark">
      <section className="bg-light p-5 rounded shadow-sm mb-5 text-center">
        <h1 className="h4 mb-3">Contact Us</h1>
        <p className="lead">
          Have questions about content usage, managing your profile, career opportunities, or contributing content? 
          Feel free to reach out to us using the form below.
        </p>
        <p className="lead">
          Please complete the form, and we'll get back to you as soon as possible.
        </p>
      </section>

      <section className="bg-light p-5 rounded shadow-sm">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="form-label"  >Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name"/>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="form-label"  >Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="form-label" >Subject</label>
            <select className="form-select" id="subject" aria-label="Select subject" value={subject} onChange={(e) => setSubject(e.target.value)} >
              <option value="" disabled selected>Select a topic</option>
              <option value="Services">Services</option>
              <option value="Career">Career</option>
              <option value="Content usage">Content Usage</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="form-label" >Message</label>
            <textarea className="form-control" id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)}  placeholder="Write your message here..."></textarea>
          </div>

          <div className="form-check mb-4">
            <input type="checkbox" className="form-check-input" id="consentCheck"/>
            <label className="form-check-label" htmlFor="consentCheck">
              I agree to the terms and conditions
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100" onClick={signupHandler}>Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
