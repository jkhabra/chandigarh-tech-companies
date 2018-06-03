import * as React from "react";
import { Component } from "react";

class CompanyForm extends Component {
  public state = {
    established: "",
    logo: "",
    name: "",
    type: "other",
    website: ""
  };

  public changeFieldValue = (name: string) => (event: any) =>
    this.setState({
      [name]: event.target.value
    });

  public handleSubmit = (e: any) => {
    e.preventDefault();

    this.sendData();

    this.setState({
      established: "",
      logo: "",
      name: "",
      type: "other",
      website: ""
    });

    console.log(this.state); // tslint:disable-line
  };

  public sendData = () => {
    const url = "http://localhost:5000/companies";

    fetch(url, {
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(res => res.json())
      .then(response => console.log("Success:", response)) // tslint:disable-line
      .catch(error => console.error("Error:", error)); // tslint:disable-line
  };

  public render() {
    return (
      <form className="create-company-form" onSubmit={this.handleSubmit}>
        <h2 className="title">Add Company</h2>
        <div className="row form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            value={this.state.name}
            onChange={this.changeFieldValue("name")}
          />
        </div>

        <div className="row form-group">
          <label className="form-label">Logo</label>
          <input
            type="text"
            name="logo"
            value={this.state.logo}
            className="form-control"
            onChange={this.changeFieldValue("logo")}
            placeholder="Logo"
          />
        </div>
        <div className="row form-group">
          <label className="form-label">Established</label>
          <input
            type="text"
            name="established"
            className="form-control"
            value={this.state.established}
            onChange={this.changeFieldValue("established")}
            placeholder="Established In"
          />
        </div>
        <div className="row form-group">
          <label className="form-label">Website</label>
          <input
            type="text"
            name="website"
            className="form-control"
            value={this.state.website}
            onChange={this.changeFieldValue("website")}
            placeholder="Website"
          />
        </div>

        <div className="row form-group">
          <label className="form-label">Type</label>
          <select
            name="type"
            className="form-control select"
            onChange={this.changeFieldValue("type")}
          >
            <option value="IT Services">IT Services</option>
            <option value="IT Product">IT Product</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="row form-group">
          <input
            type="submit"
            value="Submit"
            className="form-control submit-but"
          />
        </div>
      </form>
    );
  }
}

export default CompanyForm;
