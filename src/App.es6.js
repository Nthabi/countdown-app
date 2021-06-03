import React, {Component} from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadline: 'December 25, 2021',
            newDeadline: ''
        }
    }
    updateDeadline = () => {
        this.setState({deadline: 'November 16. 2021'});
    }
    render() {
        return (
            <div>
                <h5>Countdown to {this.state.deadline}</h5>
                <input placeholder='New date'/>
                <button onClick={() => this.updateDeadline()}>Update</button>
            </div>
        )   
    }   
}
export default App;