import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";



class App extends React.Component {
  state = {
    cardnumber: "",
    date: "",
    name: ""
  };

  render() {
    return (
      <div className="App">
        <h1>Hello watch the credit card</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Card
          cardnumber={this.state.cardnumber}
          date={this.state.date}
          name={this.state.name}
        />

        <input
          placeholder="card number"
          onChange={e => {
            this.setState({ cardnumber: e.target.value });
          }}
          value={this.state.cardnumber}
        />
        <input
          placeholder="name"
          onChange={e => {
            this.setState({ name: e.target.value });
          }}
          value={this.state.name}
        />
        <input
          placeholder="validity"
          onChange={e => {
            this.setState({ date: e.target.value });
          }}
          value={this.state.date}
        />
      </div>
    );
  }
}



export default App;
