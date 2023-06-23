import React, { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusfilter extends Component {
  buttons = [
    { name: "all", label: "ALL" },
    { name: "active", label: "ACTIVE" },
    { name: "done", label: "DONE" },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          type="button"
          className={`btn ${clazz}`}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group item-status-filter">{buttons}</div>;
  }
}
