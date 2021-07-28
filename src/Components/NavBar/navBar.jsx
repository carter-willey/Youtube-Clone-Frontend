import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.getSearchResults(this.state.searchQuery)
  }

  render() {
    return (
      <Navbar style={{backgroundColor: '#16181b'}} expand="lg">
        <Navbar.Brand style={{color: '#fff'}}>Youtube Clone</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link style={{color: '#fff', marginRight: '10px'}} as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={this.handleSubmit}>
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              onChange={this.handleChange}
              name="searchQuery"
            />
            <Link to="/search/">
            <Button  style={{color: '#fff', marginLeft: '10px'}} type='submit' onClick={() => {this.props.getSearchResults(this.state.searchQuery)}} variant="outline-light">Search</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
