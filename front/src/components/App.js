import React from "react";
import "../styles/App.css";
import axios from "axios";

class App extends React.Component {
  getData = async () => {
    await axios.post(`/api/board`, {
      title: "testTitle",
      content: "testContent"
    });
    await axios.get(`/api/board`, {});
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
