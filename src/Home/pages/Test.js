import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Data from "./Data";
//const Datachart = React.lazy(() => import("./Datachart"));

const routes = [
  { path: "/b", sidebar: () => <Data />, main: () => <h2>BOME</h2> },
  { path: "/c", sidebar: () => <div>come</div>, main: () => <h2>COME</h2> }
];
export default class Test extends Component {
  render() {
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <div style={{ background: "#f0f0f0" }}>
            <ul>
              <li>
                <Link to="/b">Bome</Link>
              </li>
              <li>
                <Link to="/c">Come</Link>
              </li>
            </ul>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>
          <div>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}
