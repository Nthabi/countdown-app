import React, {Component} from 'react';
import './App.css';
import App from './App.es6';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount(){
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval( () => this.getTimeUntil(this.props.deadline), 1000);
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));
        // this line does the same thing as the one below, it's shorthand for instances where the key and value have the same name
        // this.setState(days, hours, minutes, seconds)
        this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds});
    }

    render() {
        return (
            <div>
                <span>{this.state.days} days</span>
                <span>{this.state.hours} hours</span>
                <span>{this.state.minutes} minutes</span>
                <span>{this.state.seconds} seconds</span>
            </div>
        )
    }
}
export default Clock;

// Components have different methods you can run at different points of the lifecyle of a Component
// ComponentDidMount is called when the component is constructed
// COmponentDidUpdate takes the previous props, the previous state and snapshot as arguments. 
