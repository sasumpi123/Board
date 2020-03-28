import React from "react";
import WriteArticle from './WriteArticle';
import Article from './Article';
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

  async create(article) {
    await axios.post('/api/board', {
      title: article.title,
      content: article.content
    });
    this.fetchData();
  }

  get articleList() {
    const { articles } = this.state;

    return articles.map((article, index) => {
      return (
        <Article
          key={index}
          title={article.title}
          content={article.content}
          _id={article._id}
          onDelete={this.delete.bind(this)}
        />
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div className="list">
          <WriteArticle
            createArticle={this.create.bind(this)}
          />
          {this.articleList}
        </div>
      </div>
    );
  }
}

export default App;
