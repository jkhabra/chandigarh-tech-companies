import * as React from "react";
import { Component } from "react";
import CompanyForm from "../CompanyForm";
import CompanyList from "../CompanyList";
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
    const company = this.state.companies;

    return (
      <div className="container">
        <div className="topnav">
          <a className="active add" href="#home">
            Home
          </a>
          <a className="add" href="#news">
            Add Company
          </a>
          <a className="add" href="#contact">
            Add Employee
          </a>
        </div>

        <div className="c-title">Companies List</div>
        <div className="company-container">
          {company.map((c: any, index) => {
            return <CompanyList key={c.id} company={c} />;
          })}
        </div>

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
