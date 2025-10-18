import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
      const iconStyle = {
    fontSize: '2rem',
    padding: '10px',
    borderRadius: '50%',
    backgroundColor: '#333', // dark background for GitHub
    color: 'white',
    transition: 'background-color 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const linkedInStyle = {
    ...iconStyle,
    backgroundColor: '#0A66C2', 
  };
  return (
    <footer className="py-4 bg-dark text-center">
      <div>
                        <a
                  href="https://github.com/Abdulkabeer555"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  style={iconStyle}
                  className="mx-3"
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#6e5494')} // GitHub purple on hover
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#333')}
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/yourlinkedinprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={linkedInStyle}
                  className="mx-3"
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#004182')} // Darker LinkedIn on hover
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0A66C2')}
                >
                  <FaLinkedin />
                </a>

      </div>
      

      <p className="mt-3 text-white">© {new Date().getFullYear()} Abdul Kabeer. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
