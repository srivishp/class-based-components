import { Component } from "react";
import classes from "./User.module.css";

// We import Component and use this.props, to create class based components
// Class based components can work together with functional components
class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
