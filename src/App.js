import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null,
      display: false,
      id: ""
    };

    this.setTime = this.setTime.bind(this);
    this.decTime = this.decTime.bind(this);
    this.callDecTime = this.callDecTime.bind(this);
  }
  setTime(e) {
    const setTime = e.target.value;
    this.setState({ time: setTime });
    e.preventDefault();
  }
  decTime() {
    const tempTime = this.state.time;
    this.setState({ time: tempTime - 1 });
    const curTime = this.state.time;
    if (curTime === 0) {
      clearInterval(this.state.id);
    }
  }
  callDecTime(e) {
    this.setState({ display: true });
    const tempid = setInterval(this.decTime, 1000);
    this.setState({ id: tempid });

    e.preventDefault();
  }
  render() {
    return (
      <div>
        {this.state.display ? <p>{this.state.time}</p> : <p>0</p>}
        <form>
          <input type="text" onChange={this.setTime} />
          <button onClick={this.callDecTime}>Start</button>
        </form>
      </div>
    );
  }
}

export default App;
