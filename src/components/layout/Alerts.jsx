import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { selectedMessages } from "../../redux/reducers/message/messageSelector";
import { createStructuredSelector } from "reselect";
export class Alerts extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
  };
  componentDidUpdate(prevProps) {
    //instead of wrinting this.props.error we have distructured the code
    const { alert, message } = this.props;

    //inputdata
    if (message !== prevProps.message) {
      if (message.dataReceived) alert.success(message.dataReceived);
      if (message.periodEmpty) alert.error(message.periodEmpty);
      if (message.timeElapse) alert.error(message.timeElapse);
      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
      if (message.pupulation) alert.error(message.pupulation);
      if (message.reportedCases) alert.error(message.reportedCases);
      if (message.totalHospitalBeds) alert.error(message.totalHospitalBeds);
    }
  }

  render() {
    return (
      <div>
        <Fragment />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  message: selectedMessages,
});

export default connect(mapStateToProps, {})(withAlert()(Alerts));
//
