import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div style={{ border: "1px solid black" }}>
        <h1>Company Name</h1>

        <h1>{this.props.cardnumber}</h1>
        <p>{this.props.date} </p>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
export default Card;
