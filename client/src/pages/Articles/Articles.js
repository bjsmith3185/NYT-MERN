import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
 
  state = {
    articles: [],
    search: "",
    start: "",
    end: "",
    qty: ""
  };
  
  // componentDidMount() {
  //   this.loadArticles();
  // }

  loadArticles = () => {

   
    API.getArticles()
      .then(res => {
        
        this.setState({ articles: res.data, search: "", start: "", end: "", qty: "" })
        console.log("inside getArticles()")
        console.log(res)
        console.log("this is the articles []")
        console.log(this.state.articles);
      })
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
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
      API.saveArticle({
        search: this.state.search,
        start: this.state.start,
        end: this.state.end,
        qty: this.state.qty
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    // }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What article Should I Read?</h1>
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
              />
              
              <FormBtn
                disabled={!(this.state.search && this.state.start && this.state.end && this.state.qty)}
                onClick={this.handleFormSubmit}
              >
                Add item
              </FormBtn>
            </form>
          </Col>

          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Articles On My List</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <h1>this is the result</h1>
              // <List>
              //   {this.state.articles.map(article => (
              //     <ListItem key={article._id}>
              //       <Link to={"/lists/" + article._id}>
              //         <strong>
              //           {article.search} by {article.start}
              //         </strong>
              //       </Link>
              //       <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
              //     </ListItem>
              //   ))}
              // </List>
            ) : (
              <h3>No items to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
