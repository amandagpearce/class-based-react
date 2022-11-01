import classes from './User.module.css';
import { Component } from 'react';

// functional component

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

// class based component
class User extends Component { // extending Component gives access to the this.props
  render() { // the return goes in this specific render method
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
