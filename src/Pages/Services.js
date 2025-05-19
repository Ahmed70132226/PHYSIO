import React from 'react';
import ServicesData from '../Data/ServicesData';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="container my-5">
      <h1 className="display-4 text-center mb-5 fw-bold">Our Services</h1>
      <div className="d-flex flex-column gap-5">
        {ServicesData.map((service, index) => (
         <div className="card mb-5 border-1 shadow-sm rounded-4 overflow-hidden" key={index}>
         <div className="row g-0 align-items-center">
          
           <div className="col-md-5">
             <img
               src={service.image}
               alt={service.title}
               className="img-fluid w-100 h-100"
               style={{ objectFit: 'cover', height: '100%' }}
             />
           </div>
       
          
           <div className="col-md-7 px-4 py-4">
             <h3 className="fw-bold text-dark mb-3">{service.title}</h3>
             <p className="text-muted mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
               {service.description}
             </p>
             <Link to="/Appointments" className="btn btn-outline-dark rounded-pill px-4 py-2">
              Book Appointment 
             </Link>
           </div>
         </div>
       </div>
       
        ))}
      </div>
    </div>
  );
};

export default Services;
