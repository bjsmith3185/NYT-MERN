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
    note: "",
    addnote: "",
    buttonLabel: "Edit Note",
  };

  componentDidMount() {
    this.loadSavedArticles();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    var data = { note: this.state.note };

    API.updateSavedArticle(event, data)
      .then(res => {
        this.setState({ note: "" }) //  savedArticles: res.data, 
        this.loadSavedArticles();
      })
      .catch(err => console.log(err));
  };

  loadSavedArticles = () => {
    API.getSavedArticles()
      .then(res => {
        this.setState({ savedArticles: res.data })
      })
      .catch(err => console.log(err));
  };

  removeArticle = event => {

    API.removeArticle(event)
      .then(function (data) { })
      .catch(err => console.log(err));
  };

  seeNote = event => {
    console.log("this should be article_id")
    console.log(event)
    if(this.state.addnote === "") {
      this.setState({
        addnote: event
      })
    } else {
      this.setState({
        addnote: ""
      })
    }

    if(this.state.buttonLabel === "Edit Note") {
      this.setState({
        buttonLabel: "Close Note"
      })
    } else {
      this.setState({
        buttonLabel: "Edit Note"
      })
    }
    
  };


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
                <div> this is the id: {article._id}</div>
                <div>{article.headline}</div>
                <div>{article.snippet}</div>
                <a href={article.url}> Link </a>
                <div>{article.pub_date}</div>
                <div>{article.source}</div>
                <div>{article.note}</div>
                {/* <image src={article.image} /> */}

                <div>
                  <button onClick={() => this.seeNote(article._id)}>{this.state.buttonLabel}</button>
                </div>
              {this.state.addnote === article._id ? (
                <div> 
                <textarea
                  className="form-control"
                  rows="3"
                  value={this.state.note}
                  onChange={this.handleInputChange}
                  name="note"
                  placeholder="type note here"
                >
                </textarea>
                <button onClick={() => this.handleFormSubmit(article._id)}>Submit Note </button>
              </div>
              ) : (
                <div></div>
              )}

                

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
