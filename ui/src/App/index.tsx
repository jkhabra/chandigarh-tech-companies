import * as React from "react";
import { Component } from "react";
import CompanyForm from "../CompanyForm";
import EmployeeForm from "../EmployeeForm";
import "./style.css";

class App extends Component {
  public render() {
    return (
      <div className="container">
        <div className="company-form">
          <CompanyForm />
        </div>
        <div className="employee-form">
          <EmployeeForm />
        </div>
      </div>
    );
  }
}
export default App;
