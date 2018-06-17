import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { ICompany } from "../types";
import "./style.css";

interface ICompanyListProps {
  company: ICompany;
}

class CompanyCard extends Component<ICompanyListProps> {
  public render() {
    const c = this.props.company;

    return (
      <Link to={`/company/${c.id}`}>
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
            <img className="c-logo2" src={c.logo} alt="company's logo" />
          </div>
        </div>
      </Link>
    );
  }
}

export default CompanyCard;
