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
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {


    API.getArticles()
      .then(res => {

        this.setState({ articles: res.data })
        console.log("inside getArticles()")
        console.log(res)
        console.log("this is the articles []")
        console.log(this.state.articles);
      })
      .catch(err => console.log(err));
  };

  saveArticle = event => {
    console.log("saving");
    console.log(event)
    // event.preventDefault();

    API.saveArticle(event)
    // .then(res => this.loadArticles())
    // .catch(err => console.log(err));

  }




  render() {
    return (
      <Container fluid>

        <Jumbotron>
          <h1>Articles Results</h1>
          <Link to={"/"}>
            <strong>
              Back To Search
                    </strong>
          </Link>

        </Jumbotron>
        {this.state.articles.length ? (

          <ul>
            {this.state.articles.map(article => (
              <li key={article._id}>
                <button onClick={() => this.saveArticle(article)}>Save</button>
                {/* <DeleteBtn onClick={() => this.deleteArticle(article._id)} /> */}
                <div>{article.headline}</div>
                <div>{article.snippet}</div>
                <a href={article.url}> Link </a>
                <div>{article.pub_date}</div>
                <div>{article.source}</div>
                {/* <image src={article.image} /> */}


              </li>
            ))}
          </ul>

        ) : (
            <h3>No items to Display</h3>
          )}

      </Container>
    );
  }
}

export default Articles;
