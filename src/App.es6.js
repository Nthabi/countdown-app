import React, {Component} from 'react';
import Clock from './Clock.es6';
import {FormControl, Button} from 'react-bootstrap';


class App extends Component {
    // constructor allows us to have local state in our class
    constructor(props){
        // props pass down data from parent to child components to update the state in the child component
        super(props);
        this.state = {
            deadline: 'December 25, 2021',
            newDeadline: ''
        }
    }
    updateDeadline = () => {
        // We never change state directly so we use this setState method instead of saying this.state.deadline = x
        this.setState({deadline: this.state.newDeadline});
    }
    render() {
        return (
            <div>
                <h5>Countdown to {this.state.deadline}</h5>
                <Clock deadline={this.state.deadline}/>
                <input placeholder='New date' onChange={e => this.setState({newDeadline: e.target.value})}/>
                <Button variant="outline-dark" onClick={() => this.updateDeadline()}>Update</Button>
               
            </div>
        )   
    }   
}
export default App;