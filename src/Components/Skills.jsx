import React from 'react';

function Skills() {
  return (
    <section id="skills" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h2 className="mb-5 text-center fw-bold text-primary">My Skills</h2>

        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 bg-white p-4 shadow rounded">

            {/* Skill Item */}
            {[
              { name: 'HTML', percent: 90, color: 'success' },
              { name: 'CSS', percent: 85, color: 'info' },
              { name: 'JavaScript', percent: 80, color: 'warning', textColor: 'text-dark' },
              { name: 'React.js', percent: 75, color: 'primary' },
            ].map((skill, index) => (
              <div className="mb-4" key={index}>
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-semibold">{skill.name}</span>
                  <span className="fw-semibold">{skill.percent}%</span>
                </div>
                <div className="progress" style={{ height: '20px' }}>
                  <div
                    className={`progress-bar bg-${skill.color} ${skill.textColor || 'text-white'}`}
                    role="progressbar"
                    style={{ width: `${skill.percent}%` }}
                    aria-valuenow={skill.percent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
