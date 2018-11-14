import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Saved extends Component {

  state = {
    savedArticles: [],
  };

  componentDidMount() {
    this.loadSavedArticles();
  }

  loadSavedArticles = () => {
    console.log("running loadSavedArticles()")
    API.getSavedArticles()
      .then(res => {
        console.log("this is the retrun from get saved articles res.data")
        console.log(res.data);
        this.setState({ savedArticles: res.data })
        // console.log("inside getArticles()")
        // console.log(res)
        console.log("this is the savedArticles []")
        console.log(this.state.savedArticles);
      })
      .catch(err => console.log(err));
  };

  removeArticle = event => {
    console.log("removing");
    console.log(event)
    
    API.removeArticle(event)
    // .then(res => this.loadArticles())
    .then(function(data) {
      console.log("this is the return from removing article")
      console.log(data)
    })
    .catch(err => console.log(err));

  }

  // this.history.pushState(null, 'login');


  render() {
    return (
      <Container fluid>

        <Jumbotron>
          <h1>My Saved Articles</h1>
          <Link to={"/"}>
            <strong>Back To Search</strong>
          </Link>

          <Link to={"/articles"}>
            <strong>Back To Article Results</strong>
          </Link>

        </Jumbotron>
        {this.state.savedArticles.length ? (

          <ul>
            {this.state.savedArticles.map(article => (
              <li key={article._id}>
                <button onClick={() => this.removeArticle(article._id)}>Remove</button>
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

export default Saved;
