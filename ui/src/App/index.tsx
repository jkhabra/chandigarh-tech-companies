import * as React from "react";
import { Component } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import CompanyForm from "../CompanyForm/";
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

  public render(): any {
    const company = this.state.companies;

    const ComList = () => (
      <div className="company-container">
        {company.map((c: any, index) => {
          return <CompanyList key={c.id} company={c} />;
        })}
      </div>
    );
    return (
      <Router>
        <div className="container">
          <div className="topnav">
            <NavLink
              exact={true}
              to="/"
              activeClassName="active"
              className="add home"
            >
              Home
            </NavLink>
            <NavLink
              to="/employee-form"
              activeClassName="active"
              className="add"
            >
              Add Employee
            </NavLink>
            <NavLink
              to="/company-form"
              activeClassName="active"
              className="add"
            >
              Add Company
            </NavLink>
          </div>

          <Route exact={true} path="/company-form" component={CompanyForm} />
          <Route exact={true} path="/employee-form" component={EmployeeForm} />
          <Route exact={true} path="/" component={ComList} />
        </div>
      </Router>
    );
  }
}
export default App;
