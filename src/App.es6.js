import React, {Component} from 'react';

class App extends Component {
    // constructor allows us to have local state in our class
    constructor(props){
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
                <input placeholder='New date' onChange={e => this.setState({newDeadline: e.target.value})}/>
                <button onClick={() => this.updateDeadline()}>Update</button>
            </div>
        )   
    }   
}
export default App;