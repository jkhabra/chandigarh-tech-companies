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

  public componentDidMount(){
    this.getCompany(this.props.match.params.id)
  }

  public componentDidUpdate(prevProps:any) {
    const companyId = this.props.match.params.id;

    if (companyId !== prevProps.match.params.id) {
      this.getCompany(companyId);
    }

  }

  public render(): any {
    if (!this.state.company) {
      console.log("in here"); // tslint:disable-line
      return null;
    }

    const company = this.state.company[0]
    return (
      <div className="detail-box">
        <div className='over-view'>Overview</div>
        <div className="d-frame">
          <div className="detail-item d-name">
            <span className='d-title'>Name : </span>
            {company.name}
          </div>
          <div className="detail-item d-web">
            <span className='d-title'>Website : </span>
            {company.website}
          </div>
          <div className="detail-item d-est">
            <span className='d-title'>Established : </span>
            {company.established}
          </div>
          <div className="detail-item d-type">
            <span className='d-title'>Type: </span> {company.type}
          </div>
        </div>
          <div className="d-logo">
            <img className="d-logo2" src={company.logo} alt="company's logo" />
          </div>
      </div>
    );
  }
}

export default CompanyDetails;
