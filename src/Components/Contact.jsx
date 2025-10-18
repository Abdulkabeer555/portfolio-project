import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4 text-center">Contact Me</h2>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Write your message here..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>

            <div className="text-center mt-4">
              <p>
                Or email me directly at: <a href="mailto:ak1234@gmail.com">akgct123@gmail.com</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
