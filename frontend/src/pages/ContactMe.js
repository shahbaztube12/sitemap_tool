import React from 'react';

const ContactMe = () => {
  return (
    <main>
      <section>
        <h1>Contact Us</h1>
        <p>We are here to assist you. Reach out to us through any of the following methods.</p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p>Email: support@example.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Main Street, City, Country</p>
      </section>

      <section>
        <h2>Contact Form</h2>
        <form>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" /><br />
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" /><br />
          <label htmlFor="message">Message:</label><br />
          <textarea id="message" name="message" rows="4"></textarea><br />
          <button type="submit">Send</button>
        </form>
      </section>

      <section>
        <h3>Our Commitment</h3>
        <p>We value your feedback and will respond promptly to your inquiries.</p>
      </section>
    </main>
  );
};

export default ContactMe;
