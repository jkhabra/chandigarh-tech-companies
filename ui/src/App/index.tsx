import * as React from "react";
import { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route
} from "react-router-dom";
import CompanyCard from "../CompanyCard";
import CompanyForm from "../CompanyForm/";
import EmployeeForm from "../EmployeeForm";
import "./style.css";

class App extends Component {
  public render(): any {
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
          <Route exact={true} path="/" component={CompanyCard} />
          <Route exact={true} path="/company/:id" component={CompanyCard} />
        </div>
      </Router>
    );
  }
}
export default App;
