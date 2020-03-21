import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import Landing from './Components/Landing';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Interests from './Components/Interests';
import Acknowledgement from './Components/Acknowledgement';
import profileData from './profileData.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData : profileData.landing,
      Projects : profileData.Projects,
      education : profileData.education,
      skills : profileData.skills,
      interests : profileData.interests,
      Acknowledgement : profileData.Acknowledgement
    }
  }
  render() {
    return (
      <div className="App">
        <Sidebar sidebarData={this.state.landingData} />
        <div className="container-fluid p-0">
          <Landing landingData={this.state.landingData} />
          <hr className="m-0" />
          <Education education={this.state.education}/>
          <hr className="m-0" />
          <Projects Projects={this.state.Projects} />
          <hr className="m-0" />
          <Skills skills={this.state.skills} />
          <hr className="m-0" />
          <Interests interests={this.state.interests} />
          <hr className="m-0" />
          <Acknowledgement Acknowledgement={this.state.Acknowledgement} />
        </div>
      </div>
    );
  }
}

export default App;