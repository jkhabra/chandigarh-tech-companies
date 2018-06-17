import * as React from "react";
import { Component } from "react";
import { RouteComponentProps } from "react-router";
import { ICompany } from "../types";
import "./style.css";

interface IRouteParams {
  id: number;
}

interface IProps extends RouteComponentProps<IRouteParams> {}

class CompanyDetails extends Component<IProps> {
  public state: { company?: ICompany } = {};

  public getCompany = (companyId: number) => {
    const url = "http://localhost:5000/companies/" + companyId;

    fetch(url, { method: "GET" })
      .then(res => res.json())
      .then(res => {
        const company = res.data;
        this.setState({ company });
      })
      .catch(err => {
        console.warn("Error while featching", err); //tslint:disable-line
      });
  };

  public componentDidMount() {
    const companyId = this.props.match.params.id;

    this.getCompany(companyId);
  }

  public render(): any {
    if (!this.state.company) {
      console.log("in here"); // tslint:disable-line
      return null;
    }

    return (
      <div className="detail-box">
        <div className="c-frame">
          <div className="c-name">
            <span>Name : </span>
            {this.state.company.name}
          </div>
          <div className="c-web">
            <span>Website : </span>
            {this.state.company.website}
          </div>
          <div className="c-est">
            <span>Established : </span>
            {this.state.company.established}
          </div>
          <div className="c-type">
            <span>Type : </span>
            {this.state.company.type}
          </div>
          <div className="c-logo">
            <img className="c-logo2" src="logog.png" alt="company's logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyDetails;
