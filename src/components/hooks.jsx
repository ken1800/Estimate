import React, { useEffect, useState } from "react";
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

const Results = (props) => {
  const [cuurrentlyInfected, setCuurrentlyInfected] = useState(0);
  const [infectionsByRequestedTime, setInfectionsByRequestedTime] = useState(0);
  const [severeCasesByRequestedTime, setSevereCasesByRequestedTime] = useState(
    0
  );
  const [
    hospitalBedsByRequestedImpact,
    setHospitalBedsByRequestedImpact,
  ] = useState(0);
  const [availableBeds, setAvailableBeds] = useState(0);
  const [casesForICUByRequestedTime, setCasesForICUByRequestedTime] = useState(
    0
  );
  const [
    casesForVentilatorsByRequestedTime,
    setCasesForVentilatorsByRequestedTime,
  ] = useState(0);

  useEffect(() => {
    if (props.Estimates) {
      setAvailableBeds(props.Estimates.impact.hospitalBedsByRequestedImpact);
      setCasesForICUByRequestedTime(
        props.Estimates.impact.casesForICUByRequestedTime
      );
      setCuurrentlyInfected(props.Estimates.impact.cuurrentlyInfected);
      setInfectionsByRequestedTime(
        props.Estimates.impact.infectionsByRequestedTime
      );
      setSevereCasesByRequestedTime(
        props.Estimates.impact.severeCasesByRequestedTime
      );
      setHospitalBedsByRequestedImpact(
        props.Estimates.impact.casesForICUByRequestedTime
      );
      setCasesForVentilatorsByRequestedTime(
        props.Estimates.impact.casesForVentilatorsByRequestedTime
      );
      console.log("Hooks rendering");
      setTimeout(
        () =>
          props.createMessage({
            dataReceived:
              "Hey !! Check on the severe cases  clicking the link on the top of the form",
          }),

        6000
      );
      return () => {
        // setAvailableBeds(props.Estimates.impact.hospitalBedsByRequestedImpact);
        // setCasesForICUByRequestedTime(
        //   props.Estimates.impact.casesForICUByRequestedTime
        // );
        // setCuurrentlyInfected(props.Estimates.impact.cuurrentlyInfected);
        // setInfectionsByRequestedTime(
        //   props.Estimates.impact.infectionsByRequestedTime
        // );
        // setSevereCasesByRequestedTime(
        //   props.Estimates.impact.severeCasesByRequestedTime
        // );
        // setHospitalBedsByRequestedImpact(
        //   props.Estimates.impact.casesForICUByRequestedTime
        // );
        // setCasesForVentilatorsByRequestedTime(
        //   props.Estimates.impact.casesForVentilatorsByRequestedTime
        // );
        console.log("hook cleaning up");
      };
    }
  }, [props.Estimates]);

  if (!props.Estimates) {
    return <Redirect to="/" />;
  }

  const severe = () => {
    if (props.Estimates.impact) {
      setAvailableBeds(props.Estimates.severe.hospitalBedsByRequestedImpact);
      setCasesForICUByRequestedTime(
        props.Estimates.severe.casesForICUByRequestedTime
      );
      setCuurrentlyInfected(props.Estimates.severe.cuurrentlyInfected);
      setInfectionsByRequestedTime(
        props.Estimates.severe.infectionsByRequestedTime
      );
      setSevereCasesByRequestedTime(
        props.Estimates.severe.severeCasesByRequestedTime
      );
      setHospitalBedsByRequestedImpact(
        props.Estimates.severe.casesForICUByRequestedTime
      );
      setCasesForVentilatorsByRequestedTime(
        props.Estimates.severe.casesForVentilatorsByRequestedTime
      );
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
              {cuurrentlyInfected}
            </ListGroupItem>
            <ListGroup>Infections By Requested Time</ListGroup>
            <ListGroupItem style={{ color: "green" }}>
              {infectionsByRequestedTime}
            </ListGroupItem>
            <ListGroup>Severe Cases By Requested Time</ListGroup>
            <ListGroupItem style={{ color: "green" }}>
              {severeCasesByRequestedTime}
            </ListGroupItem>
            <ListGroup>Hospital Beds By Requested Time</ListGroup>
            <ListGroupItem style={{ color: "green" }}>
              {hospitalBedsByRequestedImpact}
            </ListGroupItem>
            <ListGroup>Cases For ICU By Requested Time</ListGroup>
            <ListGroupItem style={{ color: "red" }}>
              {casesForICUByRequestedTime}
            </ListGroupItem>
            <ListGroup>Cases For Ventilators By Requested Time</ListGroup>
            <ListGroupItem style={{ color: "red" }}>
              {casesForVentilatorsByRequestedTime}
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
};

const mapStateToProps = createStructuredSelector({
  Estimates: impactEstimatedData,
});
export default connect(mapStateToProps, { createMessage })(Results);
