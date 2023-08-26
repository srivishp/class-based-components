import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

// We cannot not use hooks with class based components
class Users extends Component {
  // Constructor() is used to initialize state
  constructor() {
    // Whenever you use a constructor and extend another class, you have to use super()
    super();
    // state always is an object in class based components
    // all states must be grouped into the same object
    this.state = {
      showUsers: true,
    };
  }

  //Defining method
  toggleUsersHandler() {
    // ! this.state.showUsers = false; --> WRONG WAY
    // setState merges/overrides the old state
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
