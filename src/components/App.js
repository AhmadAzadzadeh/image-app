import React, { Component } from "react";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

class App extends Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    let {
      data: { results }
    } = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* i want call onSearchSubmit, when user submit the form inside of SearchBar Component */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
