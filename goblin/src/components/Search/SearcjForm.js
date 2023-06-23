import React, { Component } from "react";
import "./SearcjForm.css";

export default class SearcjForm extends Component {
  state = {
    term: "",
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="type to search"
        className="form-control search-input my-filter-panel"
        value={this.state.term}
        onChange={this.onSearchChange}
      ></input>
    );
  }
}
