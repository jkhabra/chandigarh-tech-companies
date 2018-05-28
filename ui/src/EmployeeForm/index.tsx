import * as React from "react";
import { Component } from "react";

class EmployeeForm extends Component {
  public render() {
    return (
      <form className="create-company-form">
        <h2 className="title">Add Employee</h2>
        <div className="row form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
          />
        </div>

        <div className="row form-group">
          <label className="form-label">Status</label>
          <input
            type="status"
            name="status"
            className="form-control"
            placeholder="Status"
          />
        </div>
        <div className="row form-group">
          <label className="form-label">Salary</label>
          <input
            type="text"
            name="salary"
            className="form-control"
            placeholder="Salary"
          />
        </div>
        <div className="row form-group">
          <label className="form-label">Role</label>
          <input
            type="text"
            name="website"
            className="form-control"
            placeholder="Role"
          />
        </div>

        <div className="row form-group">
          <label className="form-label">Possible Roles</label>
          <select name="roles" className="form-control select">
            <option value="IT Services">Developer</option>
            <option value="IT Product">HR</option>
            <option value="Other">CEO</option>
            <option value="Other">CTO</option>
          </select>
        </div>

        <div className="row form-group">
          <label className="form-label">Rating</label>
          <input
            type="url"
            name="website"
            className="form-control"
            placeholder="Rating"
          />
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

export default EmployeeForm;
