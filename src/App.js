import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/header";
import Alerts from "./components/layout/Alerts";
// import Result from "./components/results";
import Results from "./components/hooks";
import SignUp from "./components/form";
import Kenny from "./components/kenny";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectIsLoading } from "./redux/reducers/estimates/estimatorSelectors";
// import { getInputedata } from "./redux/actions/estimator/estimatorAction";
import WithSpinner from "./components/with-spinner/withSpinner";

const SignUpWithSpinner = WithSpinner(SignUp);
const ResultWithSpinner = WithSpinner(Results);

class App extends React.Component {
  render() {
    const { isLoading } = this.props;
    return (
      <Router>
        <div className="App">
          <div>
            <Header />
          </div>{" "}
          <Alerts />
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <SignUpWithSpinner isLoading={isLoading} {...props} />
                  )}
                />{" "}
                <Route
                  exact
                  path="/result"
                  render={(props) => (
                    <ResultWithSpinner isLoading={isLoading} {...props} />
                  )}
                />{" "}
                {/* <Route exact path="/kenny" component={Kenny} />{" "} */}
              </Switch>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </Router>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});
export default connect(mapStateToProps, {})(App);
