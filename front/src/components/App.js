import React from "react";
import "../styles/App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const response = await axios.get("/api/board");
    const articles = response.data.articles;
    this.setState({ articles });
  }

  async delete(_id) {
    await axios.delete("/api/board", {
      data: {
        _id
      }
    });
    this.fetchData();
  }

  async update(_id) {
    await axios.put("/api/board", {
      _id,
      title: "updated_title",
      content: "updated_content"
    });
    this.fetchData();
  }

  articleList() {
    const { articles } = this.state;

    return articles.map((article, index) => {
      return (
        <div key={index}>
          <div>{article.title}</div>
          <div>{article.content}</div>
          <button onClick={() => this.delete(article._id)}>Delete</button>
          <button onClick={() => this.update(article._id)}>Update</button>
        </div>
      );
    });
  }

  render() {
    return <div className="App">{this.articleList()}</div>;
  }
}

export default App;
