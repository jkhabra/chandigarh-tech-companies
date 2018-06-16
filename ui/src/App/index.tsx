import * as React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
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
            <Link to={`/`} className="active add">
              Home
            </Link>
            <Link to={`/employee-form`} className="add">
              Add Employee
            </Link>
            <Link to={`/company-form`} className="add">
              Add Company
            </Link>
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
