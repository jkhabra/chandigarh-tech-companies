import * as React from "react";
import { Component } from "react";
import "./style.css";

class App extends Component {
  public render() {
    return (
      <form className="create-company-form">
        <h2 className="title">Add Company</h2>
        <div className="row form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="field1"
            className="form-control"
            placeholder="Name"
          />
        </div>

        <div className="row form-group">
          <label className="form-label">Logo</label>
          <input
            type="email"
            name="field2"
            className="form-control"
            placeholder="Logo"
          />
        </div>
        <div className="row form-group">
          <label className="form-label">Established</label>
          <input
            type="text"
            name="field3"
            className="form-control"
            placeholder="Established In"
          />
        </div>
        <div className="row form-group">
          <label className="form-label">Website</label>
          <input
            type="url"
            name="website"
            className="form-control"
            placeholder="Website"
          />
        </div>

        <div className="row form-group">
          <label className="form-label">Type</label>
          <select name="field3" className="form-control select">
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
export default App;
