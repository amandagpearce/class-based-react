import { Component } from 'react';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';
import classes from './UserFinder.module.css';
import Users from './Users';

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <input type='search' onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

class UserFinder extends Component {
    
    static contextType = UsersContext; // initializing the context
    
    constructor() {
        super();
        
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        };
    }

    componentDidUpdate(prevProps, prevState) { // the method receives the previous props and the previous state automagically
        if (prevState.searchTerm !== this.state.searchTerm) { // if check needed to prevent infinite loop (setState changes the state <=> componentDidUpdate runs)
            this.setState({
                    filteredUsers: this.context.users.filter((user) => 
                    user.name.includes(this.state.searchTerm)
                )
            })
        }
    }

    componentDidMount() {
        this.setState({
            filteredUsers: this.context.users
        })
    }

    searchChangeHandler(event){
        this.setState({
            searchTerm: event.target.value
        });
    };
        
    render(){
        return (
            <div className={classes.finder}>
                <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </div>
        );
    }
}

export default UserFinder;