import * as React from "react";
import { Component } from "react";
import CompanyForm from "../CompanyForm";
import EmployeeForm from "../EmployeeForm";
import "./style.css";

class App extends Component {
  public state = {
    companies: []
  };

  public componentDidMount() {
    this.getData();
  }

  public getData = () => {
    const url = "http://localhost:5000/companies";

    fetch(url, { method: "GET" })
      .then(res => res.json())
      .then(res => {
        const companies = res.data;

        this.setState({ companies });
      })
      .catch(err => {
        console.warn("Error while featching", err); // tslint:disable-line
      });
  };

  public render() {
    console.log(this.state.companies); // tslint:disable-line
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
