import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';
//  import { BrowserRouter as Router, Route,Switch } from "react-router-dom";




class App extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      Objective: '',
      location: '',
      Education: '',
      Education_School: '',
      Technical_Skills: '',
      Projects: '',
      certifications: '',
      Strengths: '',
      Weakness: '',
      FatherName: '',
      MotherName: '',
      Dob: '',
      Nationality: '',

      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();



    let items = [...this.state.items];

    items.push({
      username: this.state.username,
      Objective: this.state.Objective,
      location: this.state.location,
      Education: this.state.Education,
      Education_School: this.state.Education_School,
      Technical_Skills: this.state.Technical_Skills,
      Projects: this.state.Projects,
      certifications: this.state.certifications,
      Strengths: this.state.Strengths,
      Weakness: this.state.Weakness,
      FatherName: this.state.FatherName,
      MotherName: this.state.MotherName,
      Dob: this.state.Dob,
      Nationality: this.state.Nationality

    });

    this.setState({
      items,
      username: '',
      Objective: '',
      location: '',
      Education: '',
      Education_School: '',
      Technical_Skills: '',
      Projects: '',
      certifications: '',
      Strengths: '',
      Weakness: '',
      FatherName: '',
      MotherName: '',
      Dob: '',
      Nationality: '',


    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
        // <Router>
      <div className="App">
        {/* <Switch> */}
        {/* <Route exact path="/" render={(prams)=> */}
        <Form  handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          newUsername={this.state.username}
          newObjective={this.state.Objective}
          newlocation={this.state.location}
          newEducation={this.state.Education}
          newEducation_School={this.state.Education_School}
          newTechnical_Skills={this.state.Technical_Skills}
          newProjects={this.state.Projects}
          newcertifications={this.state.certifications}
          newStrengths={this.state.Strengths}
          newWeakness={this.state.Weakness}
          newFatherName={this.state.FatherName}
          newMotherName={this.state.MotherName}
          newDob={this.state.Dob}
          newNationality={this.state.Nationality} />
        
        {/* </Route> */}


        {/* <Route path="/table" render={(prams)=> */}
        <Table items={this.state.items} />
        
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      //  </Router> 
    );
  }
}

export default App;