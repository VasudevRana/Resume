// import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import { browserHistory } from 'react-router';
// import { NavLink } from 'react-router-dom';

class Form extends Component {
    // onNavigate() {
    //     createBrowserHistory.push("/table");

    // }
    render() {
        return (
            <div id="Form">
                <h3>write Data in to the form:</h3>
                
                <form>
                    <label htmlFor="username">
                        Username:
          <input id="username" value={this.props.newUsername}
                            type="text" name="username" required
                            onChange={this.props.handleInputChange} />
                    </label><br></br>
                    <label for="Objective">
                        Objective:
          <input id="Objective" value={this.props.newObjective}
                            type="text" name="Objective" required
                            onChange={this.props.handleInputChange} />
                    </label><br></br>
                    <label for="location">
                        location:
          <input id="location" value={this.props.newlocation}
                            type="text" name="location" required
                            onChange={this.props.handleInputChange} />
                    </label><br></br>
                    <label for="Education">
                        Education:
          <input id="education" value={this.props.newEducation}
                            type="text" name="Education" required
                            onChange={this.props.handleInputChange} />
                    </label><br></br>
                    <label for="Education_School">
                        Education School:
          <input id="Education_School" value={this.props.newEducation_School}
                            type="text" name="Education_School" required
                            onChange={this.props.handleInputChange} />
                    </label><br></br>


                    <label for="newTechnical_Skills">
                        Technical_Skills:
          <input id="Technical_Skills" value={this.props.newTechnical_Skills}
                            type="text" name="Technical_Skills" required
                            onChange={this.props.handleInputChange} />
                    </label><br></br>


                    <label for="Projects">
                        projects:
          <input id="Projects" value={this.props.newProjects}
                            type="text" name="Projects" required
                            onChange={this.props.handleInputChange} />
                    </label><br></br>


                    <label for="certifications">
                        certifications:
          <input id="certifications" value={this.props.newcertifications}
                            type="text" name="certifications" required
                            onChange={this.props.handleInputChange} />
                    </label><br></br>


                    <label for="Strengths">
                        Strength:
          <input id="Strengths" value={this.props.newStrengths}
                            type="text" name="Strengths" required
                            onChange={this.props.handleInputChange} />
                    </label><br></br>


                    <label for="Weakness">
                        Weakness:
          <input id="Weakness" value={this.props.newWeakness}
                            type="text" name="Weakness" required
                            onChange={this.props.handleInputChange} />
                    </label><br></br>

                    <label for="FatherName">
                        FatherName:
          <input id="FatherName" value={this.props.newFatherName}
                            type="text" name="FatherName" required
                            onChange={this.props.handleInputChange} />
                    </label><br></br>

                    <label for="MotherName">
                        MotherName:
          <input id="MotherName" value={this.props.newMotherName}
                            type="text" name="MotherName" required
                            onChange={this.props.handleInputChange} />
                    </label><br></br>

                    <label for="Dob">
                        Dob:
          <input id="Dob" value={this.props.newDob}
                            type="text" name="Dob" required
                            onChange={this.props.handleInputChange} />
                    </label><br></br>

                    <label for="Nationality">
                        Nationality:
          <input id="Nationality" value={this.props.newNationality}
                            type="text" name="Nationality" required
                            onChange={this.props.handleInputChange} />
                    </label><br></br>
                    {/* <Link to={`/table`}> */}
                    
                       
                       {/* <NavLink exact to="/table">  */}
                       
                       <button type="submit" value="Submit" onClick={this.props.handleFormSubmit} 
                        // onClick={this.onNavigate}
                        >Submit</button>
                        
                        {/* </NavLink> */}
                    {/* </Link> */}
                </form>
            </div>
        );
    }
}

export default Form;
