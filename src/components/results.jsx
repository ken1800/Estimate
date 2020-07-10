import React from "react";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardFooter,
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { impactEstimatedData } from "../redux/reducers/estimates/estimatorSelectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { createMessage } from "../redux/actions/messages";
class results extends React.Component {
  state = {
    cuurrentlyInfected: 0,
    infectionsByRequestedTime: 0,
    severeCasesByRequestedTime: 0,
    availableBeds: 0,
    hospitalBedsByRequestedImpact: 0,
    casesForICUByRequestedTime: 0,
    casesForVentilatorsByRequestedTime: 0,
  };

  componentDidMount() {
    if (this.props.Estimates) {
      this.setState({
        cuurrentlyInfected: this.props.Estimates.impact.cuurrentlyInfected,
        infectionsByRequestedTime: this.props.Estimates.impact
          .infectionsByRequestedTime,
        severeCasesByRequestedTime: this.props.Estimates.impact
          .severeCasesByRequestedTime,
        availableBeds: this.props.Estimates.impact
          .hospitalBedsByRequestedImpact,
        hospitalBedsByRequestedImpact: this.props.Estimates.impact
          .casesForICUByRequestedTime,
        casesForICUByRequestedTime: this.props.Estimates.impact
          .casesForICUByRequestedTime,
        casesForVentilatorsByRequestedTime: this.props.Estimates.impact
          .casesForVentilatorsByRequestedTime,
      });
      setTimeout(
        () =>
          this.props.createMessage({
            dataReceived:
              "Hey !! Check on the severe cases  clicking the link on the top of the form",
          }),

        6000
      );
    }
  }
  render() {
    if (!this.props.Estimates) {
      return <Redirect to="/" />;
    }

    const severe = () => {
      if (this.props.Estimates.impact) {
        this.setState({
          cuurrentlyInfected: this.props.Estimates.severe.cuurrentlyInfected,
          infectionsByRequestedTime: this.props.Estimates.severe
            .infectionsByRequestedTime,
          severeCasesByRequestedTime: this.props.Estimates.severe
            .severeCasesByRequestedTime,
          availableBeds: this.props.Estimates.severe
            .hospitalBedsByRequestedImpact,
          hospitalBedsByRequestedImpact: this.props.Estimates.severe
            .casesForICUByRequestedTime,
          casesForICUByRequestedTime: this.props.Estimates.severe
            .casesForICUByRequestedTime,
          casesForVentilatorsByRequestedTime: this.props.Estimates.severe
            .casesForVentilatorsByRequestedTime,
        });
      }
    };
    return (
      <div>
        <Container>
          <Card>
            <CardHeader>
              <p className="btn btn-warning btn-block">
                {" "}
                This is the estimate of the Impact given your data
              </p>
              <p className="forgot-password text-right">
                Click here to see the{" "}
                <a href="#" onClick={() => severe()}>
                  {" "}
                  severe
                </a>{" "}
                case
              </p>{" "}
            </CardHeader>
            <CardBody>
              <ListGroup>Cuurrently Infected</ListGroup>
              <ListGroupItem style={{ color: "green" }}>
                {this.state.cuurrentlyInfected}
              </ListGroupItem>
              <ListGroup>Infections By Requested Time</ListGroup>
              <ListGroupItem style={{ color: "green" }}>
                {this.state.infectionsByRequestedTime}
              </ListGroupItem>
              <ListGroup>Severe Cases By Requested Time</ListGroup>
              <ListGroupItem style={{ color: "green" }}>
                {this.state.severeCasesByRequestedTime}
              </ListGroupItem>
              <ListGroup>Hospital Beds By Requested Time</ListGroup>
              <ListGroupItem style={{ color: "green" }}>
                {this.state.hospitalBedsByRequestedImpact}
              </ListGroupItem>
              <ListGroup>Cases For ICU By Requested Time</ListGroup>
              <ListGroupItem style={{ color: "red" }}>
                {this.state.casesForICUByRequestedTime}
              </ListGroupItem>
              <ListGroup>Cases For Ventilators By Requested Time</ListGroup>
              <ListGroupItem style={{ color: "red" }}>
                {this.state.casesForVentilatorsByRequestedTime}
              </ListGroupItem>
            </CardBody>
            <CardFooter>
              {/* <Spinner color="primary" /> */}
              {/* <button className="btn btn-primary btn-block"> New </button>{" "} */}
              <p className="forgot-password text-right">
                Wanna try with another data ? <Link to={"/"}> New </Link>{" "}
              </p>{" "}
            </CardFooter>
          </Card>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  Estimates: impactEstimatedData,
});
export default connect(mapStateToProps, { createMessage })(results);
