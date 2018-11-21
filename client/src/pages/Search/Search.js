import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

import {withRouter} from "react-router-dom";

class Search extends Component {
 
  state = {
    search: "",
    start: "",
    end: "",
    qty: ""
  };
  
  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    console.log(`
    search: ${this.state.search}
    qty: ${this.state.qty}
    `)
    event.preventDefault();

    // if (this.state.title && this.state.author) {
      API.findArticle({
        search: this.state.search,
        start: this.state.start,
        end: this.state.end,
        qty: this.state.qty
      })
        .then(res => {
          this.setState({ search: "", start: "", end: "", qty: "" });
          this.redirectArticles();
        }
          )
        .catch(err => console.log(err));
    };

    redirectArticles = () => {
      this.props.history.push("/articles");
  }
 

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What article Should I Read?</h1>
              <Link to={"/articles/saved"}>
                <strong>Saved Articles</strong>
              </Link>
              <Link to={"/articles/articles"}>
                <strong>Article Results</strong>
              </Link>
            </Jumbotron>
            <form>
            <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="search term (required)"
              />
              <Input
                value={this.state.start}
                onChange={this.handleInputChange}
                name="start"
                placeholder="start date (required YYYYMMDD)"
              />

              <Input
                value={this.state.end}
                onChange={this.handleInputChange}
                name="end"
                placeholder="end date (required YYYYMMDD)"
              />

              <Input
                value={this.state.qty}
                onChange={this.handleInputChange}
                name="qty"
                placeholder="Qty (required)"
                // defaultValue={this.state.qty || "5"}
              />
              
              <FormBtn
                disabled={!(this.state.search && this.state.start && this.state.end)}
                onClick={this.handleFormSubmit}
              >
                Add item
              </FormBtn>
            </form>

          </Col>

         
        </Row>
      </Container>
    );
  }
}

// export default Search;
export default withRouter(Search);
