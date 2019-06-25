import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import messages from '../../Components/data/messages';
import axios from "axios";
import Button from "components/CustomButtons/Button.jsx";
import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import styled from 'styled-components';

const Input = styled.input`
  width: 90%;
  padding: 8px 16px;
  margin: 5px 0;
  box-sizing: border-box;
`

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
    const name = this.state.name
    const email = this.state.email
    const message = this.state.message
    console.log(messages);
    axios.post('/t/rib7k-1561470398/post', { name, email, message })
          .then((response) => {
              console.log(response);
             
          });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <Input type="text" name="name" placeholder="Name" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          <Input type="text" name="email" placeholder="Email" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          <Input type="text" name="message" placeholder="Message" value={this.state.value} onChange={this.handleChange} />
        </label>
        <Button color="facebook" type="submit" value="Submit">Submit</Button>
      </form>
    );
  }
}
export default withStyles(workStyle)(WorkSectionTriple);
