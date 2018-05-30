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
    const company = this.state.companies;

    return (
      <div className="container">
        <div className="c-title">Companies List</div>
        <div className="company-container">
          {company.map((c: any, index) => {
            return (
              <div className="c-frame" key={c.id}>
                <div className="c-name">
                  <span>Name : </span>
                  {c.name}
                </div>
                <div className="c-web">
                  <span>Website : </span>
                  {c.website}
                </div>
                <div className="c-est">
                  <span>Established : </span>
                  {c.established}
                </div>
                <div className="c-type">
                  <span>Type : </span>
                  {c.type}
                </div>
                <div className="c-logo">
                  <img className="c-logo" src={c.logo} alt="company's logo" />
                </div>
              </div>
            );
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
