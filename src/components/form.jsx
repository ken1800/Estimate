import React, { Component } from "react";
import { connect } from "react-redux";
import { getInputedata } from "../redux/actions/estimator/estimatorAction";
import { createMessage } from "../redux/actions/messages";

class SignUp extends Component {
  state = {
    pupulation: "",
    period: "",
    timeElapse: "",
    reportedCases: "",
    totalHospitalBeds: "",
    dissable: false,
  };

  onChange = (e) => this.setState({ [e.target.id]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const {
      pupulation,
      timeElapse,
      reportedCases,
      totalHospitalBeds,
      period,
    } = this.state;

    if (!period) {
      this.props.createMessage({ periodEmpty: "Select Period Type" });
    } else if (Number(timeElapse) < 1 || timeElapse.length < 1) {
      this.props.createMessage({
        timeElapse: "Time elapsed must be greater than 1",
      });
      this.setState({
        timeElapse: "",
      });
    } else if (Number(pupulation) < 10 || pupulation.length < 2) {
      this.props.createMessage({
        pupulation: "population should be greater than 10",
      });
      this.setState({
        pupulation: "",
      });
    } else if (Number(reportedCases) < 1 || reportedCases.length < 1) {
      this.props.createMessage({
        reportedCases: "Reported cases should be greater than 1",
      });
      this.setState({
        reportedCases: "",
      });
    } else if (Number(totalHospitalBeds) < 10 || pupulation.length < 2) {
      this.props.createMessage({
        totalHospitalBeds: "Total Hospital Beds can't be less than 10",
      });
      this.setState({
        totalHospitalBeds: "",
      });
    } else {
      const dataEstimator = {
        pupulation,
        timeElapse,
        reportedCases,
        totalHospitalBeds,
        period,
      };

      this.props.getInputedata(dataEstimator);
      this.setState({
        pupulation: "",
        period: "",
        timeElapse: "",
        reportedCases: "",
        totalHospitalBeds: "",
        disabled: true,
      });

      setTimeout(() => this.props.history.push({ pathname: "/result" }), 1000);
    }
  };
  render() {
    const {
      pupulation,
      timeElapse,
      reportedCases,
      totalHospitalBeds,
      period,
    } = this.state;
    return (
      <form xs="10" onSubmit={this.onSubmit}>
        <h3
          style={{
            color: "blue",
          }}
        >
          {" "}
          Estimator{" "}
        </h3>{" "}
        <div className="form-group">
          <label> Population </label>{" "}
          <input
            type="number"
            className="form-control"
            placeholder="Enter your pupulation"
            id="pupulation"
            value={pupulation}
            onChange={this.onChange}
            required
          />
        </div>{" "}
        <div className="form-group">
          <label> Period Type </label>{" "}
          <select
            // required
            id="period"
            name="period"
            value={period}
            onChange={this.onChange}
            className="form-control"
            placeholder="Choose Period Type"
          >
            <option value=""> Select the period type </option>{" "}
            <option value="days"> Days </option>{" "}
            <option value="weeks"> weeks </option>{" "}
            <option value="months"> months </option>{" "}
          </select>{" "}
        </div>{" "}
        <div className="form-group">
          <label> Time To Elapse </label>{" "}
          <input
            type="number"
            className="form-control"
            placeholder="Enter time to elapse"
            id="timeElapse"
            onChange={this.onChange}
            value={timeElapse}
            required
          />
        </div>{" "}
        <div className="form-group">
          <label> Reported Cases </label>{" "}
          <input
            type="number"
            className="form-control"
            placeholder="Enter the number of reported cases"
            id="reportedCases"
            onChange={this.onChange}
            value={reportedCases}
            required
          />
        </div>{" "}
        <div className="form-group">
          <label> Total Hospital Beds </label>{" "}
          <input
            type="number"
            className="form-control"
            placeholder="Enter the total hospital bed in your country"
            id="totalHospitalBeds"
            onChange={this.onChange}
            value={totalHospitalBeds}
            required
          />
        </div>{" "}
        <button
          disabled={this.state.dissable}
          type="submit"
          className="btn btn-primary btn-block"
        >
          {" "}
          Data Go Estimate{" "}
        </button>{" "}
      </form>
    );
  }
}
export default connect(null, { getInputedata, createMessage })(SignUp);
