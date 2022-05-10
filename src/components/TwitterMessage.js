import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      remainChars: 280,
      message: ""
    };
  }

  remainingChars = event => {
    console.log(event.value)
    this.setState({
      remainChars:  this.state.remainChars -1,
      message: event.target.value
    })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        maxLength={this.props.maxChars} 
        onChange={event => this.remainingChars(event)} 
        value={this.state.message}
        />
        <h1>{this.state.remainChars}</h1>
      </div>
    );
  }
}

export default TwitterMessage;

