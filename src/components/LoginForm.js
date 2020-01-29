import React from "react";

class LoginForm extends React.Component {
  
  state = {
    username: "",
    password: ""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.username && this.state.password){
    this.props.handleLogin(e)
    }
    // this.setState({
    //   [e.target.name]: e.target.value
    // })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text"
              value={this.state.username}
              onChange={this.changeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={this.state.password}
              onChange={this.changeHandler}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
