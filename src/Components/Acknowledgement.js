import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from "@fortawesome/free-solid-svg-icons";


class Acknowledgement extends Component {
  constructor(props) {
    super(props);

    this.Acknowledgement = props.Acknowledgement;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="Acknowledgement">
        <div className="w-100">
        <br/>
          <h2 className="mb-5">Acknowledgement</h2>
          {
            this.Acknowledgement.map((data, index) => (
              <ul>
              <div key={index} >
              <li><a href={data.link}>{data.name}</a></li>
              </div>
              </ul>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Acknowledgement;
