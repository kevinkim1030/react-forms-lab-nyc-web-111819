import React from "react";

class TwitterMessage extends React.Component {
  
  state = {
    message: ""
  }

  changeHandler = (e) => {
    this.setState({
      message: e.target.value
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
          onChange={this.changeHandler}
          value={this.state.message}
        />
        <br />
        Letter count limit: {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
