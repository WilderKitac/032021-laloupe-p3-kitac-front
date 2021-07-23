import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="body">
      <div className="zoom">
        <li>
          <a href="http://localhost:3000/shop">
            <img
              className="grandePhoto"
              src="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/images/illustrations/device_task_2.svg"
              alt="photo"
              onClick="http://localhost:3000/shop"
            />
          </a>
        </li>
        <h3 className="text">Contact</h3>
      </div>
    </section>
  );
}

export default Contact;
