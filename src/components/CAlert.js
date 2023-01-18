import React from "react";
import '../style/CAlert.css';


class CAlert extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
      }

    render() {
        return (
            <div className="alert">
                <h1>My ALERT</h1>
                <h2>{new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default CAlert;