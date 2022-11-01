import { Component } from "react";

class ErrorBoundary extends Component {
    // the ErrorBoundary is a normal class based component that implements the ComponentDidCatch method
    
    constructor() {
        super();
        this.state = { hasError: false }
    }
    // can be added to any class based component and makes the component an error boundary 
    componentDidCatch(error) { // will be triggered when one of its child components throws an error 
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>
        }
        return this.props.children; // so we can wrap any component with this ErrorBoundary component 
    }
}

export default ErrorBoundary; 