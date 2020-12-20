import React, { Component } from 'react';
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class Table extends Component {
    render() {
        const items = this.props.items;
        return (
            <div>
                <div className="Tabel">
                    <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className="excel"
                        table="Skills"
                        filename="excel"
                        sheet="tablexls"
                        buttonText="Download in form of Excel"
                    />
                </div>
                
                    <div id="Table">
                        <table id="Skills">
                            <thead>


                                <tr>
                                    <th>Username</th>
                                    <th>Objective</th>
                                    <th>location</th>
                                    <th>Education</th>
                                    <th>Education_School</th>
                                    <th>Technical_Skills</th>
                                    <th>Projects</th>
                                    <th>certifications</th>
                                    <th>Strengths</th>
                                    <th>Weakness</th>
                                    <th>FatherName</th>
                                    <th>MotherName</th>
                                    <th>Dob</th>
                                    <th>Nationality</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(item => {
                                    return (
                                        <tr>
                                            <td>{item.username}</td>
                                            <td>{item.objective}</td>
                                            <td>{item.location}</td>
                                            <td>{item.Education}</td>
                                            <td>{item.Education_School}</td>
                                            <td>{item.Technical_Skills}</td>
                                            <td>{item.Projects}</td>
                                            <td>{item.certifications}</td>
                                            <td>{item.Strengths}</td>
                                            <td>{item.Weakness}</td>
                                            <td>{item.FatherName}</td>
                                            <td>{item.MotherName}</td>
                                            <td>{item.Dob}</td>
                                            <td>{item.Nationality}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
      
    );
  }
}

export default Table;