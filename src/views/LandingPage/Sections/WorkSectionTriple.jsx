import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import messages from '../../Components/data/messages';
import axios from "axios";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSectionTriple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email:"", 
      message:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
   
    const { name, email, message } = this.state;
    fetch('https://jsonplaceholder.typicode.com/todos/1',{name , email, message})
       .then(response => response.json())
        .then(json => console.log(json))
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Message:
          <input type="text" name="message" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default withStyles(workStyle)(WorkSectionTriple);
