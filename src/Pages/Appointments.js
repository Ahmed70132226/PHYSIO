import React, { useState } from "react";

const Appointments = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");

  const services = [
    "First Time Physiotherapy Appointment",
    "Follow Up Physiotherapy Appointment",
  ];

  const handleSelect = (service) => {
    setSelectedService(service);
  };

  const bookAppointmentHandler = (e) => {
    e.preventDefault();

    const appointmentData = {
      name,
      email,
      mobile,
      date,
      service: selectedService,
      comment,
    };

    console.log("Appointment booked:", appointmentData);
    alert("Appointment booked successfully!");

    setSelectedService(null);
    setName("");
    setEmail("");
    setMobile("");
    setDate("");
    setComment("");
  };

  return (
    <div className="container my-5 text-dark">
      <section className="bg-light p-5 rounded shadow-sm mb-5 text-center">
        <h1 className="h4 mb-3">BOOK APPOINTMENT</h1>
        
        <p className="lead"> Select a Physiotherapy Service</p>
        <p className="lead">Choose the type of appointment you'd like to book.</p>
      </section>

      {services.map((service, index) => (
        <div key={index} className="bg-light p-4 rounded shadow-sm mb-4">
          <h5 className="mb-2">{service}</h5>
          <p className="text-muted">Duration: 30 mins</p>
          <button
            className="btn btn-success"onClick={() => handleSelect(service)}>
            Select
          </button>
        </div>
      ))}

      {selectedService && (
        <section className="bg-light p-5 rounded shadow-sm mt-4">
          <h2 className="h5 mb-4">Book Appointment - {selectedService}</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control"id="name" value={name} onChange={(e) => setName(e.target.value)}placeholder="Your Name"required/>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email"className="form-control"id="email"value={email}onChange={(e) => setEmail(e.target.value)}placeholder="name@example.com"required/>
            </div>

            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">Mobile</label>
              <input type="tel" className="form-control" id="mobile"value={mobile}onChange={(e) => setMobile(e.target.value)}placeholder="Your mobile number"required />
            </div>

            <div className="mb-3">
              <label htmlFor="date" className="form-label">Date</label>
              <input type="date" className="form-control" id="date" value={date}onChange={(e) => setDate(e.target.value)} required/>
            </div>

            <div className="mb-3">
              <label htmlFor="service" className="form-label">Service</label>
              <input type="text" className="form-control" id="service" value={selectedService}readOnly />
            </div>

            <div className="mb-3">
              <label htmlFor="comment" className="form-label">Comment</label>
              <textarea className="form-control" id="comment" rows="4" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Any additional details..." ></textarea>
            </div>

            <button
              type="submit" className="btn btn-primary w-100" onClick={bookAppointmentHandler}>
              Book Appointment
            </button>
          </form>
        </section>
      )}
    </div>
  );
};

export default Appointments;
