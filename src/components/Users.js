import { Component, useState } from 'react';
import User from './User';

import classes from './Users.module.css';

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
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

class Users extends Component {
  // 1- initialize and define state 
  constructor() {
    super(); // when you add a constructor to a class that extends another class, you need to call super 
    this.state = { // with class based components the state is ALWAYS an object; with function based it can be anything 
      showUsers: true
    };
  }

  // 2- update state when needed 
  // methods should be written outside of render 
  toggleUsersHandler () {
    this.setState( // always use this.setState() and never this.state.property = something
                  // setState will not override but MERGE the object you pass with the existing state 
        (curState) => { // receives the current state 
          return {showUsers: !curState.showUsers}; // you always need to return an object
        }
    );
  };

  // error boundaries
  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error('No users found!'); // will crash the app if not treated, an alternative would be to wrap it in a try catch 
                                          // but if you want to handle the error in the parent component, then it wouldnt work because the error would be generated inside JSX and not regular JS
    }
  }

  render() {
    const usersList = ( // helper variables go inside the render method
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}> {/* binding this to the class, bc default this here would refer to the click event */}
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
