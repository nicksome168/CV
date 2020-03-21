import React, { Component } from 'react';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.Projects = props.Projects;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="Projects">
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>
          {
            this.Projects.map((exp, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">
                    <a href={exp.link}>{exp.position} &#128279;</a>
                  </h3>
                  <div className="subheading mb-3">{exp.organization}</div>    
                  <li>{exp.aboutWork1}</li>
                  <li>{exp.aboutWork2}</li>
                  <li>{exp.aboutWork3}</li>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{exp.fromDate} - {exp.toDate}</span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Projects;
